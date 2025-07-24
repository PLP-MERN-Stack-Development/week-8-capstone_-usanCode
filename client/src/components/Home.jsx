/*
// client/src/components/Home.jsx
import { motion } from "framer-motion";

export default function Home() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gray-100 p-8">
      <motion.div
        className="text-center"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl font-bold text-blue-600 mb-4">Welcome to My Portfolio</h2>
        <p className="text-lg text-gray-700">I'm Usanase Makala, a MERN stack developer passionate about tech & innovation.</p>
      </motion.div>
    </section>
  );
}

*/


import { motion } from 'framer-motion';

const Home = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-center mt-10 space-y-6"
    >
      <h2 className="text-4xl font-bold text-blue-800">Welcome to My Portfolio</h2>
      <p className="text-xl max-w-2xl mx-auto">
        I'm <span className="font-semibold">Usanase Makala</span>, a MERN stack developer passionate about tech & innovation.
      </p>
      <button className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
        Contact Me
      </button>
    </motion.section>
  );
};

export default Home;
