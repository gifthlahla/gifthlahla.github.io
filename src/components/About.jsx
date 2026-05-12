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
      className="max-w-5xl mx-auto"
    >
      <div className="grid md:grid-cols-2 gap-12 items-center">
        
        {/* Left Column: Hero Illustration / Image */}
        <div className="flex justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: "spring" }}
            className="relative group"
          >
            {/* Background decorative elements */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-blue-500/20 to-purple-500/20 rounded-[2rem] blur-2xl group-hover:blur-3xl transition-all opacity-70" />
            
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-[2.5rem] overflow-hidden subtle-border bg-white dark:bg-slate-950 p-2 shadow-2xl">
              <img
                src="/assets/profile-photo.png"
                alt="Gift Hlahla"
                className="w-full h-full object-cover rounded-[2rem]"
              />
            </div>
            
            {/* Floating badge */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-4 -right-4 bg-white dark:bg-slate-800 p-3 rounded-2xl shadow-xl subtle-border flex items-center gap-2"
            >
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-xs font-bold text-gray-700 dark:text-gray-200">Available for Work</span>
            </motion.div>
          </motion.div>
        </div>

        {/* Right Column: Content */}
        <div className="space-y-8">
          {/* Header */}
          <div className="space-y-2">
            <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent inline-block">
              About Me
            </h2>
            <p className="text-gray-500 dark:text-gray-400 text-lg">
              Full-Stack Developer & Tech Enthusiast
            </p>
          </div>

          {/* Bio Text */}
          <div className="space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed text-base sm:text-lg text-left">
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
          </div>

          <div className="grid grid-cols-3 gap-4">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                className="p-4 bg-gray-50 dark:bg-slate-900/50 rounded-2xl subtle-border text-center"
              >
                <span className="block text-2xl font-bold text-blue-600 dark:text-blue-400">
                  {stat.number}
                </span>
                <span className="text-[10px] uppercase tracking-wider font-bold text-gray-400">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </div>

          {/* CV Button */}
          <motion.a
            href="/assets/cv-gift-hlahla.pdf"
            download
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-3 px-6 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-bold rounded-xl hover:shadow-lg transition-all subtle-border"
          >
            <FiDownload className="text-lg" />
            Download CV
          </motion.a>
        </div>

      </div>
    </motion.div>
  );
}

export default About;