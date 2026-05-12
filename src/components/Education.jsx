import { motion } from "framer-motion";
import { FiBookOpen, FiAward } from "react-icons/fi";

const education = [
  {
    institution: "National University of Science and Technology (NUST)",
    degree: "BSc in Computer Science",
    duration: "2024 — Present",
    description:
      "Focusing on software engineering, algorithms, and modern development.",
    icon: <FiAward />,
    color: "from-blue-600/10 to-blue-400/10",
  },
  {
    institution: "Chibuwe High School",
    degree: "Advanced Level Certificate",
    duration: "2022 — 2023",
    description:
      "Completed studies with a focus on Mathematics, Physics, and Computer Science.",
    icon: <FiBookOpen />,
    color: "from-purple-600/10 to-purple-400/10",
  },
];

function Education() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto space-y-8"
    >
      {/* Section Heading */}
      <div className="text-center md:text-left">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent inline-block">
          Education
        </h2>
        <p className="mt-1 text-gray-500 dark:text-gray-400 text-base">
          Academic milestones and qualifications.
        </p>
      </div>

      {/* Education List / Timeline */}
      <div className="relative space-y-6">
        {/* Timeline connector (vertical line) */}
        <div className="absolute left-5 top-8 bottom-8 w-px bg-gray-200 dark:bg-slate-800 hidden sm:block" />

        {education.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.4 }}
            className="group relative flex gap-6 sm:gap-8 items-start"
          >
            {/* Icon Block - Smaller */}
            <div className="relative z-10 hidden sm:block">
              <div className={`flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br ${item.color} text-blue-600 dark:text-blue-400 text-xl backdrop-blur-md subtle-border transition-transform`}>
                {item.icon}
              </div>
            </div>

            {/* Content Card - Slimmer */}
            <div className="flex-1 p-5 rounded-2xl bg-white/5 dark:bg-slate-900/40 backdrop-blur-md subtle-border group-hover:bg-white/10 dark:group-hover:bg-slate-900/60 transition-all shadow-sm">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                <div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100">
                    {item.degree}
                  </h3>
                  <p className="text-sm font-semibold text-blue-600 dark:text-blue-400">
                    {item.institution}
                  </p>
                </div>
                <span className="inline-block px-3 py-1 rounded-lg bg-gray-100 dark:bg-slate-800 text-[10px] font-bold text-gray-500 dark:text-gray-400 subtle-border tracking-wider self-start sm:self-center uppercase">
                  {item.duration}
                </span>
              </div>
              
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
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