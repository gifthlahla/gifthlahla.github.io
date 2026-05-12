import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMail, FiPhone, FiGithub, FiLinkedin, FiSend, FiCheckCircle, FiAlertCircle } from "react-icons/fi";

function Contact() {
  const [formStatus, setFormStatus] = useState(null);
  const [formMessage, setFormMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const contactInfo = [
    {
      label: "Email",
      value: "gifthlahla78@gmail.com",
      link: "mailto:gifthlahla78@gmail.com",
      icon: <FiMail />,
    },
    {
      label: "Phone",
      value: "+263 77 487 8731",
      link: "tel:+263774878731",
      icon: <FiPhone />,
    },
    {
      label: "GitHub",
      value: "github.com/gifthlahla",
      link: "https://github.com/gifthlahla",
      icon: <FiGithub />,
    },
    {
      label: "LinkedIn",
      value: "Gift Hlahla",
      link: "https://www.linkedin.com/in/gift-hlahla-9437953b6/",
      icon: <FiLinkedin />,
    },
  ];

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    const form = event.target;
    const data = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: "POST",
        body: data,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setFormStatus("success");
        setFormMessage("Thanks! Your message has been sent.");
        form.reset();
      } else {
        const result = await response.json();
        setFormStatus("error");
        setFormMessage(result.error || "Oops! Something went wrong.");
      }
    } catch (error) {
      setFormStatus("error");
      setFormMessage("Network error. Please try again.");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setFormStatus(null), 5000);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
      className="max-w-5xl mx-auto"
    >
      {/* Section Heading */}
      <div className="text-center md:text-left mb-8">
        <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent inline-block">
          Contact
        </h2>
        <p className="mt-2 text-gray-500 dark:text-gray-400 text-lg">
          Get in touch to discuss your next project.
        </p>
      </div>

      <div className="grid md:grid-cols-5 gap-12">
        {/* Left: Contact Info */}
        <div className="md:col-span-2 space-y-4">
          {contactInfo.map((item, index) => (
            <motion.a
              key={index}
              href={item.link}
              target={item.link.startsWith("http") ? "_blank" : "_self"}
              rel="noopener noreferrer"
              className="flex items-center gap-5 p-5 rounded-2xl bg-white/5 dark:bg-slate-900/40 subtle-border backdrop-blur-md hover:bg-white/10 dark:hover:bg-slate-900 transition-all border border-transparent hover:border-gray-200 dark:hover:border-slate-800"
            >
              <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-gray-50 dark:bg-slate-900 text-blue-600 dark:text-blue-400 text-xl subtle-border">
                {item.icon}
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-widest font-bold text-gray-400 dark:text-gray-500">
                  {item.label}
                </p>
                <p className="font-semibold text-gray-800 dark:text-gray-200">
                  {item.value}
                </p>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Right: Refined Contact Form */}
        <div className="md:col-span-3">
          <div className="bg-white/5 dark:bg-slate-950/40 backdrop-blur-xl subtle-border p-8 rounded-[2.5rem]">
            <form
              action="https://formspree.io/f/mbdwdorb"
              method="POST"
              onSubmit={handleSubmit}
              className="space-y-5"
            >
              <div className="grid sm:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 ml-1">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    required
                    className="w-full px-5 py-3 rounded-xl border border-gray-200 dark:border-slate-800 bg-white dark:bg-slate-950 text-gray-800 dark:text-gray-200 focus:border-blue-500 outline-none transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 ml-1">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    className="w-full px-5 py-3 rounded-xl border border-gray-200 dark:border-slate-800 bg-white dark:bg-slate-950 text-gray-800 dark:text-gray-200 focus:border-blue-500 outline-none transition-all"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 ml-1">
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows="4"
                  required
                  className="w-full px-5 py-3 rounded-xl border border-gray-200 dark:border-slate-800 bg-white dark:bg-slate-950 text-gray-800 dark:text-gray-200 focus:border-blue-500 outline-none transition-all resize-none"
                ></textarea>
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-10 py-3.5 bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-bold rounded-xl transition-all disabled:opacity-70"
              >
                {isSubmitting ? (
                  <div className="w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin" />
                ) : (
                  <>
                    <FiSend />
                    <span>Send Message</span>
                  </>
                )}
              </motion.button>

              <AnimatePresence>
                {formStatus && (
                  <motion.div
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className={`flex items-center gap-3 p-4 rounded-xl subtle-border ${
                      formStatus === "success" 
                        ? "bg-emerald-500/5 text-emerald-600 border-emerald-500/10" 
                        : "bg-rose-500/5 text-rose-600 border-rose-500/10"
                    }`}
                  >
                    {formStatus === "success" ? <FiCheckCircle /> : <FiAlertCircle />}
                    <p className="text-sm font-medium">{formMessage}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Contact;