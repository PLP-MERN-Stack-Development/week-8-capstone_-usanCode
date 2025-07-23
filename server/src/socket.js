

// server/src/socket.js
let io;

function initSocket(server) {
  const { Server } = require('socket.io');
  
  io = new Server(server, {
    cors: {
      origin: process.env.CLIENT_URL || 'http://localhost:5173',
      methods: ['GET', 'POST']
    }
  });

  io.on('connection', (socket) => {
    console.log('🟢 A user connected:', socket.id);

    // Listen for chat messages
    socket.on('chat message', (msg) => {
      io.emit('chat message', msg); // broadcast message to all users
    });

    // Handle user disconnect
    socket.on('disconnect', () => {
      console.log('🔴 A user disconnected:', socket.id);
    });
  });
}

function getIO() {
  if (!io) {
    throw new Error('Socket.io not initialized');
  }
  return io;
}

module.exports = { initSocket, getIO };
