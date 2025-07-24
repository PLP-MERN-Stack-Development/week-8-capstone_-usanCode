

// client/src/components/Contact.jsx
import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <motion.div
      className="max-w-xl mx-auto mt-10"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-3xl font-bold mb-4 text-center text-blue-600">Contact Me</h2>
      <form className="space-y-4">
        <input type="text" placeholder="Your Name" className="w-full px-4 py-2 border rounded-lg" />
        <input type="email" placeholder="Your Email" className="w-full px-4 py-2 border rounded-lg" />
        <textarea placeholder="Your Message" rows="5" className="w-full px-4 py-2 border rounded-lg" />
        <button type="submit" className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-all">
          Send
        </button>
      </form>
    </motion.div>
  );
}
