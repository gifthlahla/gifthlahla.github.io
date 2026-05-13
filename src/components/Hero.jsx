import { motion } from "framer-motion";
import { FiDownload, FiArrowRight } from "react-icons/fi";

function Hero() {
  return (
    <div id="hero" className="relative flex flex-col items-center justify-center py-10 overflow-hidden">
      
      <div className="relative z-10 flex flex-col-reverse md:flex-row items-center gap-10 md:gap-16 max-w-5xl px-4 sm:px-6 lg:px-8">
        
        {/* Left: Name, Tagline, Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex-1 text-center md:text-left space-y-6"
        >
          <div className="space-y-2">
            {/* Simple Greeting */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.4 }}
              className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400"
            >
              Gift Hlahla
            </motion.p>

            {/* Title / Profession */}
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.4 }}
              className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight text-gray-900 dark:text-white leading-[1.1]"
            >
              Full-Stack <br className="hidden lg:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Developer.</span>
            </motion.h1>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.4 }}
              className="text-gray-500 dark:text-gray-400 max-w-lg text-lg leading-relaxed mx-auto md:mx-0 pt-2"
            >
              Crafting scalable mobile and web applications with a focus on performance, design, and user experience. Currently learning in public @ NUST.
            </motion.p>
          </div>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 pt-4 justify-center md:justify-start"
          >
            <motion.a
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              href="#projects"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-bold rounded-xl transition-all shadow-xl shadow-gray-900/10 dark:shadow-white/5"
            >
              View Projects
              <FiArrowRight className="text-lg" />
            </motion.a>
            <motion.a
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              href="/assets/cv-gift-hlahla.pdf"
              download
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 border border-gray-200 dark:border-slate-800 bg-white/5 dark:bg-slate-900/50 backdrop-blur-md text-gray-700 dark:text-gray-200 font-bold rounded-xl hover:bg-gray-50 dark:hover:bg-slate-900 transition-all"
            >
              Resume
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Right: Photo Container - REVERTED to Flashy Aura version */}
        <div className="relative flex-shrink-0 flex items-center justify-center">
          
          {/* Background Aura */}
          <div className="absolute inset-0 z-0 flex items-center justify-center">
             <motion.div 
                animate={{ scale: [1, 1.4, 1], opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 6, repeat: Infinity }}
                className="w-80 h-80 bg-blue-500/25 rounded-full blur-[70px]"
             />
          </div>

          {/* Image with floating bits */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="relative z-10 w-64 h-64 sm:w-80 sm:h-80 flex items-center justify-center"
          >
            <img
              src="/assets/profile-photo.png"
              alt="Gift Hlahla"
              className="w-full h-full object-contain"
            />

            {/* Floating Code Bits */}
            {[...Array(4)].map((_, i) => (
              <motion.div
                key={i}
                animate={{ 
                  y: [0, -25, 0],
                  opacity: [0.4, 0.9, 0.4]
                }}
                transition={{ duration: 3 + i, repeat: Infinity, delay: i * 0.5 }}
                className="absolute hidden sm:block pointer-events-none text-[11px] font-mono font-bold text-blue-500/70 bg-blue-500/5 px-2 py-1 rounded-md border border-blue-500/10 backdrop-blur-sm"
                style={{ 
                  top: i < 2 ? "10%" : "75%",
                  left: i % 2 === 0 ? "-5%" : "80%"
                }}
              >
                {i === 0 ? "<div />" : i === 1 ? "main()" : i === 2 ? "git push" : "isDev=true"}
              </motion.div>
            ))}
          </motion.div>

          {/* Glass floating badge */}
          <motion.div
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="absolute bottom-4 right-4 sm:bottom-0 sm:right-0 px-4 py-2 rounded-2xl bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border border-gray-200/50 dark:border-slate-800/50 shadow-xl flex items-center gap-2 z-20"
          >
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-[10px] font-bold uppercase tracking-widest text-gray-700 dark:text-gray-300">Open to Work</span>
          </motion.div>
        </div>
      </div>

      {/* Subtle Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:block"
      >
        <div className="w-px h-12 bg-gradient-to-b from-blue-600 to-transparent opacity-40" />
      </motion.div>
    </div>
  );
}

export default Hero;