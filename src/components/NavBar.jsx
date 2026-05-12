import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { FiSun, FiMoon } from "react-icons/fi";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
];

function NavBar({ darkMode, toggleDarkMode }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  // Change navBar style on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sections = ["hero", "about", "experience", "projects", "skills", "education", "contact"]
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-30% 0px -60% 0px", threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  const handleLinkClick = () => {
    setMobileOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/70 dark:bg-slate-950/70 backdrop-blur-xl border-b border-gray-200/50 dark:border-slate-800/50 shadow-sm"
          : "bg-transparent"
      }`}
    >
      {/* Animated thin gradient line at the bottom when scrolled */}
      {scrolled && (
        <motion.div 
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-30 origin-center"
        />
      )}

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo / Name */}
          <a
            href="#hero"
            className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
          >
            Gift Hlahla
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-2">
            {navLinks.map((link) => {
              const sectionName = link.href.replace("#", "");
              const isActive = activeSection === sectionName;
              
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className="relative px-4 py-2 text-[10px] font-bold uppercase tracking-widest transition-colors group"
                >
                  <span className={`relative z-10 transition-colors duration-300 ${
                    isActive 
                      ? "text-blue-600 dark:text-blue-400" 
                      : "text-gray-500 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-gray-100"
                  }`}>
                    {link.name}
                  </span>
                  
                  {/* Moving Active Background Pill */}
                  {isActive && (
                    <motion.div
                      layoutId="activePill"
                      className="absolute inset-0 bg-blue-500/5 dark:bg-blue-400/10 rounded-full border border-blue-200/20 dark:border-blue-400/10"
                      transition={{ type: "spring", bounce: 0.25, duration: 0.6 }}
                    />
                  )}
                </a>
              );
            })}

            {/* Vertical Separator */}
            <div className="w-px h-4 bg-gray-200 dark:bg-slate-800 mx-2" />

            {/* Dark/Light Toggle */}
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-xl text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all"
              aria-label="Toggle theme"
            >
              {darkMode ? <FiSun size={18} /> : <FiMoon size={18} />}
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-xl text-gray-500 dark:text-gray-400"
              aria-label="Toggle theme"
            >
              {darkMode ? <FiSun size={18} /> : <FiMoon size={18} />}
            </button>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 rounded-xl text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-slate-900"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <HiX size={20} /> : <HiMenuAlt3 size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white/90 dark:bg-slate-950/90 backdrop-blur-xl border-t border-gray-200 dark:border-slate-800 overflow-hidden"
          >
            <div className="px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={handleLinkClick}
                  className="block text-sm font-bold uppercase tracking-widest text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

export default NavBar;