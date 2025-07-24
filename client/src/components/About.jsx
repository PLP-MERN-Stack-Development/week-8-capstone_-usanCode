

// client/src/components/About.jsx
import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.div
      className="max-w-3xl mx-auto mt-16 p-4"
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-3xl font-bold text-blue-600 mb-4">About Me</h2>
      <p className="text-gray-700 text-lg">
        I'm a full-stack MERN developer with a strong focus on building real-world projects.
        I enjoy blending clean code with beautiful design.
      </p>
    </motion.div>
  );
}
