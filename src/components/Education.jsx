import { motion } from "framer-motion";
import { FiBookOpen } from "react-icons/fi";

const education = [
  {
    institution: "National University of Science and Technology (NUST)",
    degree: "BSc in Computer Science",
    duration: "2024 — Present",
    description:
      "Currently pursuing my degree with a focus on software engineering, algorithms, and modern web/mobile development.",
  },
  {
    institution: "Chibuwe High School",
    degree: "Advanced Level Certificate",
    duration: "2022 — 2023",
    description:
      "Completed A‑Level studies with strong results in Mathematics, Physics, and Computer Science.",
  },
];

function Education() {
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
        <h2 className="text-3xl sm:text-4xl font-bold">Education</h2>
        <p className="mt-2 text-gray-500 dark:text-gray-400 max-w-xl mx-auto md:mx-0">
          My academic background.
        </p>
      </div>

      {/* Education List */}
      <div className="space-y-6">
        {education.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.15, duration: 0.5 }}
            className="flex gap-5"
          >
            {/* Icon */}
            <div className="hidden sm:flex items-start justify-center mt-1 w-10 h-10 rounded-lg bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 flex-shrink-0">
              <FiBookOpen className="mt-2.5" />
            </div>

            {/* Content */}
            <div className="space-y-1">
              <h3 className="text-lg font-semibold">{item.institution}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {item.degree} · {item.duration}
              </p>
              <p className="text-gray-600 dark:text-gray-300 max-w-lg">
                {item.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

export default Education;