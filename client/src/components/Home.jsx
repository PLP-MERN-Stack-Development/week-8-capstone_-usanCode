

// src/components/Home.jsx
import React from 'react';
import { motion } from 'framer-motion';
import cartoonImage from '../assets/cartoon-portrait.png'; 

const Home = () => {
  return (
    <section className="min-h-screen bg-gradient-to-b from-white to-gray-100 flex items-center justify-center px-6 py-12">
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Text content with animation */}
        <motion.div
          initial={{ x: -80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-blue-800 leading-tight">
            Hello, I'm Usanase Makala. <br />
            <span className="text-indigo-600 underline decoration-wavy underline-offset-4">
              Welcome to my journey.
            </span>{' '}
           
          </h1>


          <div className="mt-6 space-y-6">
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              My name is Usanase Makala, and I am an apprentice developer 
              rebuilding my life—and my future—one line of code at a time.
            </p>

            <p className="text-lg md:text-xl text-gray-600 leading-relaxed"> 
              I’m 49 years old and came to software development not through school or industry, 
              but through perseverance, personal hardship, and the decision to start over.
            </p>

            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              I don’t have experience in tech, but I do have courage, self-awareness, and an honest story. 
              I am not trying to impress you—I’m trying to be real with you.
            </p>

            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">            
              If you're a potential employer, mentor, or teammate, 
              I invite you to see not only where I am now—but where I’m going.
            </p>
          </div>
        </motion.div>

        {/* Image with animation */}
        <motion.div
          initial={{ x: 80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.2 }}
        >
          <img
            src={cartoonImage}
            alt="Cartoon of Usanase"
            className="w-full h-auto rounded-2xl shadow-lg"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Home;
