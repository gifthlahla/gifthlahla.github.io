import { motion } from "framer-motion";
import { FiMail, FiPhone, FiGithub, FiLinkedin, FiSend } from "react-icons/fi";

function Contact() {
  // Replace these with your actual details
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
      value: "https://www.linkedin.com/in/gift-hlahla-9437953b6",
      link: "https://www.linkedin.com/in/gift-hlahla-9437953b6/",
      icon: <FiLinkedin />,
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className="space-y-10"
    >
      {/* Section Heading */}
      <div className="text-center md:text-left">
        <h2 className="text-3xl sm:text-4xl font-bold">Contact</h2>
        <p className="mt-2 text-gray-500 dark:text-gray-400 max-w-xl mx-auto md:mx-0">
          Get in touch, I'd love to hear from you.
        </p>
      </div>

      <div className="grid md:grid-cols-5 gap-10">
        {/* Left: Contact Info */}
        <div className="md:col-span-2 space-y-6">
          {contactInfo.map((item, index) => (
            <motion.a
              key={index}
              href={item.link}
              target={item.link.startsWith("http") ? "_blank" : "_self"}
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              className="flex items-center gap-4 p-4 rounded-lg bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            >
              <span className="text-blue-600 dark:text-blue-400 text-xl">
                {item.icon}
              </span>
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {item.label}
                </p>
                <p className="font-medium text-gray-800 dark:text-gray-200">
                  {item.value}
                </p>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Right: Simple Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="md:col-span-3 bg-gray-50 dark:bg-gray-800 p-6 rounded-xl"
        >
          <form
            action="https://formspree.io/f/mbdwdorb"
            method="POST"
            className="space-y-5"
          >
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
              >
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                required
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                required
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                rows="4"
                required
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none resize-none"
              ></textarea>
            </div>
            <button
              type="submit"
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
            >
              <FiSend />
              Send Message
            </button>
          </form>
          <p className="text-xs text-gray-400 dark:text-gray-500 mt-4">
            Or email directly:{" "}
            <a
              href="mailto:gifthlahla78@gmail.com"
              className="text-blue-600 dark:text-blue-400 underline"
            >
              gifthlahla78@gmail.com
            </a>
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default Contact;