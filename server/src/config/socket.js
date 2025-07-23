
let onlineUsers = new Map();

const socketHandler = (io) => {
  io.on('connection', (socket) => {
    console.log(`⚡ New socket connected: ${socket.id}`);

    socket.on('add-user', (userId) => {
      onlineUsers.set(userId, socket.id);
    });

    socket.on('send-msg', (data) => {
      const sendToSocket = onlineUsers.get(data.to);
      if (sendToSocket) {
        io.to(sendToSocket).emit('msg-receive', data.message);
      }
    });

    socket.on('disconnect', () => {
      console.log(`🔌 Socket disconnected: ${socket.id}`);
      [...onlineUsers.entries()].forEach(([key, val]) => {
        if (val === socket.id) {
          onlineUsers.delete(key);
        }
      });
    });
  });
};

module.exports = socketHandler;
