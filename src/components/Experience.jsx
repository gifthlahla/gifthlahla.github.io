import { motion } from "framer-motion";
import { FiBriefcase, FiUsers } from "react-icons/fi";

const experiences = [
  {
    role: "Power Plant Operator (Intern)",
    company: "Green Fuel",
    location: "Chisumbanje, Zimbabwe",
    duration: "Mar 2024 - May 2024",
    description:
      "Monitoring and controlling operations within a large-scale bio-ethanol facility. Gained deep exposure to industrial energy production workflows.",
    icon: <FiBriefcase />,
    tags: ["Operations", "Energy"],
    color: "from-blue-600/10 to-blue-400/10",
  },
  {
    role: "Peer Tutor",
    company: "NUST (Self-initiated)",
    location: "Bulawayo, Zimbabwe",
    duration: "2023 — Present",
    description:
      "Mentoring students in Python and Java. Providing guidance for web development projects and academic assignments.",
    icon: <FiUsers />,
    tags: ["Mentorship", "Python"],
    color: "from-purple-600/10 to-purple-400/10",
  },
];

function Experience() {
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
          Experience
        </h2>
        <p className="mt-1 text-gray-500 dark:text-gray-400 text-base">
          Professional background and contributions.
        </p>
      </div>

      {/* Timeline Wrapper */}
      <div className="relative space-y-6">
        {/* Vertical Timeline Line */}
        <div className="absolute left-5 top-8 bottom-8 w-px bg-gray-200 dark:bg-slate-800 hidden sm:block" />

        {experiences.map((exp, index) => (
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
              <div className={`flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br ${exp.color} text-blue-600 dark:text-blue-400 text-xl backdrop-blur-md subtle-border group-hover:scale-105 transition-transform`}>
                {exp.icon}
              </div>
            </div>

            {/* Content Card - Slimmer */}
            <div className="flex-1 p-5 rounded-2xl bg-white/5 dark:bg-slate-900/40 backdrop-blur-md subtle-border group-hover:bg-white/10 dark:group-hover:bg-slate-900/60 transition-all shadow-sm">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                <div className="space-y-0.5">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100">
                    {exp.role}
                  </h3>
                  <div className="flex items-center gap-2 text-sm">
                    <span className="font-semibold text-blue-600 dark:text-blue-400">{exp.company}</span>
                    <span className="text-gray-400">·</span>
                    <span className="text-gray-500 dark:text-gray-400">{exp.location}</span>
                  </div>
                </div>
                <span className="inline-block px-3 py-1 rounded-lg bg-gray-100 dark:bg-slate-800 text-[10px] font-bold text-gray-500 dark:text-gray-400 subtle-border tracking-wider self-start sm:self-center uppercase">
                  {exp.duration}
                </span>
              </div>

              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                {exp.description}
              </p>

              {/* Tags - Smaller */}
              <div className="flex flex-wrap gap-2">
                {exp.tags.map((tag) => (
                  <span 
                    key={tag}
                    className="px-2 py-0.5 text-[9px] font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 rounded border border-blue-100 dark:border-blue-900/30"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

export default Experience;