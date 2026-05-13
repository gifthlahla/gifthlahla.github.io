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

        {/* Left Column: Photo with "Minimalist Spotlight" (No Tilt) */}
        <div
          id="about-photo-container"
          className="flex justify-center relative min-h-[450px]"
        >


          {/* The Photo (Static / No Tilt) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: -3 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: "spring" }}
            className="relative z-10 w-64 h-64 sm:w-[400px] sm:h-[400px] flex items-center justify-center"
          >
            <img
              src="/assets/hero-photo.png"
              alt="Gift Hlahla"
              className="w-full h-full object-contain drop-shadow-[0_15px_40px_rgba(37,99,235,0.15)] transition-transform duration-500 hover:scale-105"
            />
            {/* Soft floor reflection */}
            <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-64 h-6 bg-blue-500/5 blur-2xl rounded-full" />
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
              I’m Gift Hlahla, a Full-Stack Developer and CS student at NUST, Zimbabwe,
              with a strong focus on Java, C#, and Dart. I specialize in building
              high-performance applications, blending deep technical foundations
              with modern frameworks to deliver clean, user-centric experiences.
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
            Resume
          </motion.a>
        </div>

      </div>
    </motion.div>
  );
}

export default About;