

// client/src/components/ChatRoom.jsx
import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import socket from '../socket';

function ChatRoom() {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [onlineUsers, setOnlineUsers] = useState([]);
  const messageEndRef = useRef(null);

  // Scroll to bottom when new messages arrive
  const scrollToBottom = () => {
    messageEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  // Socket.io listeners
  useEffect(() => {
    socket.on('chatMessage', (data) => {
      setMessages((prev) => [...prev, data]);
    });

    socket.on('onlineUsers', (users) => {
      setOnlineUsers(users);
    });

    return () => {
      socket.off('chatMessage');
      socket.off('onlineUsers');
    };
  }, []);

  // Scroll when messages change
  useEffect(scrollToBottom, [messages]);

  // Handle sending message
  const handleSendMessage = (e) => {
    e.preventDefault();
    if (message.trim() === '') return;

    const newMessage = {
      user: 'Usanase', // Later replace this with real user info
      text: message,
    };

    socket.emit('chatMessage', newMessage);
    setMessage('');
  };

  return (
    <motion.div
      className="max-w-4xl mx-auto p-6 bg-white rounded-2xl shadow-lg"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">
        Welcome to the ChatRoom 💬
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Online Users */}
        <div className="bg-blue-50 p-4 rounded-xl shadow-sm">
          <h2 className="text-xl font-semibold mb-2">Online Users</h2>
          <ul className="text-sm text-gray-700 space-y-1">
            {onlineUsers.map((user, idx) => (
              <li key={idx}>👤 {user}</li>
            ))}
          </ul>
        </div>

        {/* Messages */}
        <div className="md:col-span-2 bg-gray-50 p-4 rounded-xl shadow-sm flex flex-col">
          <h2 className="text-xl font-semibold mb-2">Chat Messages</h2>
          <div className="flex-1 h-48 overflow-y-auto border rounded-lg p-2 bg-white text-sm mb-4">
            {messages.map((msg, idx) => (
              <p key={idx}>
                <strong>{msg.user}:</strong> {msg.text}
              </p>
            ))}
            <div ref={messageEndRef}></div>
          </div>

          <form onSubmit={handleSendMessage} className="flex gap-2">
            <input
              type="text"
              placeholder="Type your message..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="flex-1 border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg shadow text-sm"
            >
              Send
            </button>
          </form>
        </div>
      </div>

      {/* Login Buttons */}
      <div className="mt-8 text-center">
        <h3 className="text-lg font-semibold mb-4">Join the chat using:</h3>
        <div className="flex flex-wrap justify-center gap-4">
          <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg shadow">Google</button>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg shadow">Facebook</button>
          <button className="bg-black hover:bg-gray-900 text-white px-4 py-2 rounded-lg shadow">GitHub</button>
          <button className="bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded-lg shadow">Instagram</button>
        </div>
      </div>
    </motion.div>
  );
}

export default ChatRoom;
