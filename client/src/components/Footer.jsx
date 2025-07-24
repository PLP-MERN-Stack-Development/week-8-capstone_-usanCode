

// client/src/components/Footer.jsx
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
      className="bg-blue-600 text-white text-center py-4"
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <p>© {new Date().getFullYear()} Usanase Makala. All rights reserved.</p>
    </motion.footer>
  );
}

