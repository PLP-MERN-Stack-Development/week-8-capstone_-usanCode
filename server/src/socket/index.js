

// server/src/socket/index.js

const initSocket = (io) => {
  io.on("connection", (socket) => {
    console.log(`✅ New client connected: ${socket.id}`);

    // Welcome the new user
    socket.emit("message", {
      user: "admin",
      text: "Welcome to the chat app!",
    });

    // Broadcast to other users
    socket.broadcast.emit("message", {
      user: "admin",
      text: "A new user has joined the chat.",
    });

    // Listen for incoming messages
    socket.on("sendMessage", (message, callback) => {
      io.emit("message", { user: message.user, text: message.text });
      callback?.(); // Acknowledge
    });

    // Handle disconnect
    socket.on("disconnect", () => {
      console.log(`❌ User disconnected: ${socket.id}`);
      io.emit("message", {
        user: "admin",
        text: "A user has left the chat.",
      });
    });
  });
};

module.exports = initSocket;
