

/*
// client/src/components/About.jsx
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="min-h-screen bg-white p-8 flex items-center">
      <motion.div
        className="max-w-3xl mx-auto"
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-bold text-gray-800 mb-4">About Me</h2>
        <p className="text-gray-700 leading-relaxed">
          I'm a full-stack web developer experienced in building responsive MERN applications.
          I love solving problems, learning new tools, and collaborating with others to build impactful projects.
        </p>
      </motion.div>
    </section>
  );
}
*/


import { motion } from 'framer-motion';

const About = () => {
  return (
    <motion.section
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="max-w-3xl mx-auto mt-10 p-6 bg-white rounded-xl shadow-md"
    >
      <h2 className="text-3xl font-semibold text-blue-700 mb-4">About Me</h2>
      <p className="text-lg text-gray-700 leading-relaxed">
        I'm a full-stack web developer experienced in building responsive MERN applications. I love solving problems,
        learning new tools, and collaborating with others to build impactful projects.
      </p>
    </motion.section>
  );
};

export default About;
