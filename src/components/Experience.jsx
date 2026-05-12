import { motion } from "framer-motion";
import { FiBriefcase, FiBookOpen } from "react-icons/fi";

const experiences = [
  {
    role: "IT Intern",
    company: "Green Fuel",
    duration: "2024 — Present",
    description:
      "Assisting in maintaining internal systems, troubleshooting hardware/software issues, and supporting digital transformation initiatives.",
    icon: <FiBriefcase />,
  },
  {
    role: "Peer Tutor",
    company: "NUST (Self‑initiated)",
    duration: "2023 — Present",
    description:
      "Tutoring fellow students in programming fundamentals (Python, Java) and web development, helping them complete assignments and personal projects.",
    icon: <FiBookOpen />,
  },
];

function Experience() {
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
        <h2 className="text-3xl sm:text-4xl font-bold">Experience</h2>
        <p className="mt-2 text-gray-500 dark:text-gray-400 max-w-xl mx-auto md:mx-0">
          Where I've worked and what I do.
        </p>
      </div>

      {/* Timeline */}
      <div className="relative pl-8 md:pl-12 space-y-12">
        {/* Vertical line */}
        <div className="hidden md:block absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 to-transparent" />

        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.15, duration: 0.5 }}
            className="relative"
          >
            {/* Timeline dot */}
            <div className="absolute -left-8 md:-left-12 top-1 w-6 h-6 rounded-full bg-blue-600 border-4 border-white dark:border-gray-950 shadow" />

            <div className="flex gap-4 items-start">
              {/* Icon */}
              <div className="hidden sm:flex items-center justify-center w-10 h-10 rounded-lg bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 flex-shrink-0">
                {exp.icon}
              </div>

              {/* Content */}
              <div>
                <h3 className="text-lg font-semibold">{exp.role}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {exp.company} · {exp.duration}
                </p>
                <p className="mt-2 text-gray-600 dark:text-gray-300 max-w-xl">
                  {exp.description}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

export default Experience;