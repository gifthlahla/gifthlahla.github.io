import { motion } from "framer-motion";
import { FiMonitor } from "react-icons/fi";
import {
  SiFlutter,
  SiReact,
  SiTailwindcss,
  SiVite,
  SiPython,
  SiSupabase,
  SiFirebase,
  SiDart,
  SiJavascript,
  SiHtml5,
  SiGithub,
} from "react-icons/si";

const skills = [
  { name: "Flutter", icon: <SiFlutter /> },
  { name: "React", icon: <SiReact /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss /> },
  { name: "Vite", icon: <SiVite /> },
  { name: "Python", icon: <SiPython /> },
  { name: "Supabase", icon: <SiSupabase /> },
  { name: "Firebase", icon: <SiFirebase /> },
  { name: "Dart", icon: <SiDart /> },
  { name: "JavaScript", icon: <SiJavascript /> },
  { name: "HTML5", icon: <SiHtml5 /> },
  { name: "CSS3", icon: <FiMonitor /> },
  { name: "Git & GitHub", icon: <SiGithub /> },
];

const certifications = [
  {
    title: "Microsoft Foundtional C#",
    issuer: "freeCodeCamp",
    date: "2026",
  },
  {
    title: "Network Basics",
    issuer: "Cisco Academy",
    date: "2026",
  },
  {
    title: "Introduction to Cybersecurity",
    issuer: "Cisco Academy",
    date: "2026",
  },
  {
    title: "Building with the Claude API",
    issuer: "Anthropic",
    date: "2026",
  },
  {
    title: "Introduction to Model Context Protocol",
    issuer: "Anthropic",
    date: "2026",
  }
  // Add more certs as you earn them
];

function Skills() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className="space-y-12"
    >
      {/* Section Heading */}
      <div className="text-center md:text-left">
        <h2 className="text-3xl sm:text-4xl font-bold">Skills & Certifications</h2>
        <p className="mt-2 text-gray-500 dark:text-gray-400 max-w-xl mx-auto md:mx-0">
          Technologies I work with and courses I've completed.
        </p>
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05, duration: 0.3 }}
            className="flex flex-col items-center gap-2 p-4 bg-gray-50 dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-shadow"
          >
            <span className="text-2xl text-blue-600 dark:text-blue-400">
              {skill.icon}
            </span>
            <span className="text-xs font-medium text-gray-700 dark:text-gray-300 text-center">
              {skill.name}
            </span>
          </motion.div>
        ))}
      </div>

      {/* Certifications */}
      {certifications.length > 0 && (
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold">Certifications</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg border-l-4 border-blue-600"
              >
                <h4 className="font-medium text-gray-800 dark:text-gray-100">
                  {cert.title}
                </h4>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {cert.issuer} · {cert.date}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      )}
    </motion.div>
  );
}

export default Skills;