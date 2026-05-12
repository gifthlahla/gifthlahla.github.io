import { motion } from "framer-motion";
import { FiDownload, FiArrowRight } from "react-icons/fi";

function Hero() {
  return (
    <div className="min-h-screen flex items-center justify-center pt-20 pb-16">
      <div className="flex flex-col-reverse md:flex-row items-center gap-10 md:gap-16">
        
        {/* Left: Name, Tagline, Buttons */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex-1 text-center md:text-left space-y-6"
        >
          {/* Small greeting */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="text-sm font-medium tracking-widest uppercase text-blue-600 dark:text-blue-400"
          >
            Hello, I'm
          </motion.p>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold"
          >
            Gift Hlahla
          </motion.h1>

          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 font-medium"
          >
            Full-Stack Developer
          </motion.h2>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            className="text-gray-500 dark:text-gray-400 max-w-md text-base sm:text-lg leading-relaxed"
          >
            Building beautiful, functional apps and learning in public @ NUST.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 pt-4 justify-center md:justify-start"
          >
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
            >
              View Projects
              <FiArrowRight />
            </a>
            <a
              href="/assets/cv-gift-hlahla.pdf"
              download
              className="inline-flex items-center gap-2 px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200 font-medium rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              <FiDownload />
              Download CV
            </a>
          </motion.div>
        </motion.div>

        {/* Right: Photo */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex-shrink-0"
        >
          <div className="w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-blue-500/20 shadow-2xl shadow-blue-500/10">
            <img
              src="/assets/profile-photo.png"
              alt="Gift Hlahla"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Hero;