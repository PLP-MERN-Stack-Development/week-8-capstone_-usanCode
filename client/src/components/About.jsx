




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

<p className="text-lg md:text-xl text-gray-700 leading-relaxed">
  I'm Usanase Makala, an apprentice developer walking a new path in life — guided by resilience, honesty, and a deep desire to learn. While I’m still early in my coding journey, I’ve already come a long way from where I started.
</p>

<p className="mt-4 text-lg md:text-xl text-gray-700 leading-relaxed">
  I may not have years of experience yet, but I’m building real skills day by day — and I’m open to learning from anyone kind enough to teach or collaborate with me.
</p>

      <p className="mt-4 text-lg md:text-xl text-gray-700 leading-relaxed">
  In the near future, I’ll add more details here — including the projects I build, the tools I master, and the mentors who help me grow.
</p>
    </motion.section>
  );
};

export default About;
