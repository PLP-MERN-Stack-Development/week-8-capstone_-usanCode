
// client/src/components/ChatRoom.jsx
import { motion } from 'framer-motion';

function ChatRoom() {
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
            <li>👤 Usanase</li>
            <li>👤 Guest123</li>
          </ul>
        </div>

        {/* Messages */}
        <div className="md:col-span-2 bg-gray-50 p-4 rounded-xl shadow-sm">
          <h2 className="text-xl font-semibold mb-2">Chat Messages</h2>
          <div className="h-48 overflow-y-auto border rounded-lg p-2 bg-white text-sm">
            <p><strong>Usanase:</strong> Hello there! 👋</p>
            <p><strong>Guest123:</strong> Hey Usanase!</p>
          </div>
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
