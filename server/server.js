

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

// Routes
app.use("/api/users", userRoutes);
app.use("/api/posts", postRoutes);

// Error handlers
app.use(notFound);
app.use(errorHandler);

// Socket.io setup
initSocket(io);

// Start server
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
