import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiMail, FiArrowUp } from "react-icons/fi";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <FiGithub />, href: "https://github.com/gifthlahla", label: "GitHub" },
    { icon: <FiLinkedin />, href: "https://www.linkedin.com/in/gift-hlahla-9437953b6/", label: "LinkedIn" },
    { icon: <FiMail />, href: "mailto:gifthlahla78@gmail.com", label: "Email" },
  ];

  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer className="relative mt-20 border-t border-gray-100/50 dark:border-slate-800/50 bg-gray-50/50 dark:bg-slate-950/40 backdrop-blur-xl pt-16 pb-12 overflow-hidden">
      {/* Premium Gradient Accent Line */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-blue-600/30 to-transparent" />
      
      {/* Background Decorative Blob - Very Subtle */}
      <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-blue-500/5 rounded-full blur-[100px]" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Column */}
          <div className="md:col-span-2 space-y-6">
            <a 
              href="#hero" 
              className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent inline-block"
            >
              Gift Hlahla
            </a>
            <p className="text-gray-500 dark:text-gray-400 max-w-xs text-sm leading-relaxed">
              Full-Stack Developer passionate about building clean, user-centric applications and learning in public at NUST.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2.5 rounded-xl bg-white dark:bg-slate-900 text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all subtle-border"
                  aria-label={social.label}
                >
                  <span className="text-lg">{social.icon}</span>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links Column */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-gray-900 dark:text-gray-100 mb-6">
              Navigation
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-sm text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact column / Call to action */}
          <div className="flex flex-col items-start md:items-end md:text-right">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-gray-900 dark:text-gray-100 mb-6">
              Connect
            </h4>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
              Building projects in Bulawayo.
            </p>
            <a 
              href="mailto:gifthlahla78@gmail.com"
              className="text-sm font-bold text-gray-900 dark:text-gray-100 hover:text-blue-600 transition-colors"
            >
              gifthlahla78@gmail.com
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-100 dark:border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-6">
          <p className="text-xs font-medium text-gray-400 dark:text-gray-500 uppercase tracking-wider">
            © {currentYear} Gift Hlahla
          </p>

          <div className="flex items-center gap-6">
            <p className="text-[10px] uppercase tracking-widest text-gray-400 dark:text-gray-600 font-bold">
              CS @ NUST, Zimbabwe
            </p>
            <motion.button
              onClick={scrollToTop}
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.9 }}
              className="p-3 rounded-full bg-gray-900 dark:bg-white text-white dark:text-gray-900 shadow-xl shadow-gray-900/10 dark:shadow-white/5 transition-all"
              aria-label="Scroll to top"
            >
              <FiArrowUp size={18} />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;