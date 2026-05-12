import { motion } from "framer-motion";
import { FiDownload } from "react-icons/fi";

const stats = [
  { number: "5+", label: "Projects Built" },
  { number: "2", label: "Years Coding" },
  { number: "3", label: "Tech Stacks" },
];

function About() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className="space-y-8"
    >
      {/* Section Heading */}
      <div className="text-center md:text-left">
        <h2 className="text-3xl sm:text-4xl font-bold">About Me</h2>
        <p className="mt-2 text-gray-500 dark:text-gray-400 max-w-xl mx-auto md:mx-0">
          A little about who I am and what drives me.
        </p>
      </div>

      {/* Two column layout */}
      <div className="grid md:grid-cols-2 gap-10 items-center">
        
        {/* Left: Text bio */}
        <div className="space-y-4 text-gray-600 dark:text-gray-300">
          <p>
            I'm Gift Hlahla, a passionate full‑stack developer studying at NUST, Zimbabwe.
            I love crafting clean, user‑friendly applications that solve real‑world problems — 
            from mobile apps to web dashboards.
          </p>
          <p>
            My toolkit includes Flutter, React, Python, and Tailwind CSS. I'm currently 
            exploring backend services with Supabase and building projects that sharpen 
            both my design and coding skills.
          </p>
          <p>
            When I'm not coding, I'm tutoring fellow students or diving into tech communities 
            to stay ahead of the curve.
          </p>

          {/* CV button (secondary) */}
          <motion.a
            href="/assets/cv-gift-hlahla.pdf"
            download
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 mt-4 px-5 py-2.5 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 font-medium rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
          >
            <FiDownload />
            Download CV
          </motion.a>
        </div>

        {/* Right: Key numbers */}
        <div className="grid grid-cols-3 gap-4 text-center">
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="p-4 bg-gray-50 dark:bg-gray-800 rounded-xl shadow-sm"
            >
              <span className="block text-3xl font-extrabold text-blue-600 dark:text-blue-400">
                {stat.number}
              </span>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default About;