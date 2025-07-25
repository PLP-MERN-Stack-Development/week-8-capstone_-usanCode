

const express = require("express");
const http = require("http");
const socketio = require("socket.io");
const dotenv = require("dotenv");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const connectDB = require("./src/config/db");
const { notFound, errorHandler } = require("./src/middleware/errorMiddleware");
const userRoutes = require("./src/routes/userRoutes");
const postRoutes = require("./src/routes/postRoutes");
const initSocket = require("./src/socket/index.js");
const contactRoutes = require('./src/routes/contactRoutes');
const session = require('express-session');
const passport = require('passport');
require('./src/config/passport.js'); // <-- load strategy
const authRoutes = require('./src/routes/auth.js');

// Load env variables
dotenv.config();

// Connect to MongoDB
connectDB();

// Init Express app
const app = express();
const server = http.createServer(app);
const io = socketio(server, {
  cors: {
    origin: "*", // In production, set this to your frontend domain
    methods: ["GET", "POST"]
  }
});

// Middleware
app.use(cors());
app.use(express.json());
app.use(helmet());
app.use(morgan("dev"));
app.use(session({
  secret: 'secretkey',
  resave: false,
  saveUninitialized: true
}));

app.use(passport.initialize());
app.use(passport.session());


// Routes
app.use("/api/users", userRoutes);
app.use("/api/posts", postRoutes);
app.use('/api/contact', contactRoutes);
app.use('/auth', authRoutes);

app.get("/", (req, res) => {
  res.send("Welcome to the API. Available endpoints: /api/users, /api/posts");
});


// Error handlers
app.use(notFound);
app.use(errorHandler);

app.get("/test-db", (req, res) => {
  const mongoose = require("mongoose");
  res.send(mongoose.connection.readyState === 1
    ? "✅ MongoDB is connected!"
    : "❌ MongoDB is not connected.");
});


// ⬇️ Add your Socket.io logic here:
io.on('connection', (socket) => {
  console.log('A user connected');

  socket.username = `User-${socket.id.slice(0, 4)}`;
  updateOnlineUsers();

  socket.on('chatMessage', (msg) => {
    io.emit('chatMessage', msg);
  });

  socket.on('disconnect', () => {
    console.log('A user disconnected');
    updateOnlineUsers();
  });

  function updateOnlineUsers() {
    const users = [];
    for (let [id, s] of io.of('/').sockets) {
      users.push(s.username || `User-${id.slice(0, 4)}`);
    }
    io.emit('onlineUsers', users);
  }
});

// Start server
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
