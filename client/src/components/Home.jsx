

// client/src/components/Home.jsx
import { motion } from "framer-motion";

export default function Home() {
  return (
    <motion.div
      className="text-center mt-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h2 className="text-4xl font-bold text-blue-500 mb-4">Welcome to My Portfolio</h2>
      <p className="text-lg text-gray-600 max-w-2xl mx-auto">
        I'm Usanase Makala — passionate about building beautiful apps and helping people through technology.
      </p>
    </motion.div>
  );
}
