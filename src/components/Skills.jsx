import { motion } from "framer-motion";
import { FiMonitor, FiLayout, FiDatabase, FiTool, FiCodepen } from "react-icons/fi";
import { FaJava } from "react-icons/fa";
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
  SiDotnet,
  SiMysql,
} from "react-icons/si";

const skillCategories = [
  {
    title: "Development",
    icon: <FiLayout />,
    skills: [
      { name: "Flutter", icon: <SiFlutter /> },
      { name: "React", icon: <SiReact /> },
      { name: "Java", icon: <FaJava /> },
      { name: "C#", icon: <SiDotnet /> },
      { name: "OOP", icon: <FiCodepen /> },
      { name: "Dart", icon: <SiDart /> },
    ],
  },
  {
    title: "Backend & Data",
    icon: <FiDatabase />,
    skills: [
      { name: "Python", icon: <SiPython /> },
      { name: "SQL", icon: <SiMysql /> },
      { name: "Supabase", icon: <SiSupabase /> },
      { name: "Firebase", icon: <SiFirebase /> },
    ],
  },
  {
    title: "Web & Tools",
    icon: <FiTool />,
    skills: [
      { name: "JavaScript", icon: <SiJavascript /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss /> },
      { name: "Git & GitHub", icon: <SiGithub /> },
      { name: "Vite", icon: <SiVite /> },
    ],
  },
];

const certifications = [
  { title: "Microsoft Foundational C#", issuer: "freeCodeCamp", date: "2026" },
  { title: "Network Basics", issuer: "Cisco Academy", date: "2026" },
  { title: "Introduction to Cybersecurity", issuer: "Cisco Academy", date: "2026" },
  { title: "Building with Claude API", issuer: "Anthropic", date: "2026" },
  { title: "Model Context Protocol", issuer: "Anthropic", date: "2026" },
];

function Skills() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
      className="space-y-8"
    >
      {/* Section Heading */}
      <div className="text-center md:text-left">
        <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent inline-block">Skills & Certs</h2>
        <p className="mt-2 text-gray-500 dark:text-gray-400 text-lg">
          My technical toolkit and professional certifications.
        </p>
      </div>

      {/* Skill Categories */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {skillCategories.map((category, catIndex) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: catIndex * 0.15, duration: 0.5 }}
            className="p-8 rounded-[2rem] bg-white/5 dark:bg-slate-900/40 backdrop-blur-md subtle-border flex flex-col space-y-6"
          >
            <div className="flex items-center gap-4 border-b border-gray-100 dark:border-slate-800 pb-4">
              <span className="text-xl text-blue-600 dark:text-blue-400">
                {category.icon}
              </span>
              <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100">
                {category.title}
              </h3>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {category.skills.map((skill, skillIndex) => (
                <div 
                  key={skill.name}
                  className="group flex flex-col items-center justify-center p-4 rounded-2xl bg-gray-50 dark:bg-slate-900/60 hover:bg-white dark:hover:bg-slate-800 transition-all subtle-border"
                >
                  <span className="text-2xl text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors mb-2">
                    {skill.icon}
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-gray-500 group-hover:text-gray-900 dark:group-hover:text-gray-200 text-center">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Certifications - Refined List */}
      <div className="space-y-8 pt-8">
        <h3 className="text-2xl font-bold flex items-center gap-3">
          <span className="w-8 h-px bg-blue-600/30" />
          Certifications
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              className="p-5 bg-white/5 dark:bg-slate-950/40 backdrop-blur-md rounded-2xl subtle-border flex flex-col justify-between group hover:bg-white/10 transition-all border-l-4 border-l-blue-600/20 hover:border-l-blue-600"
            >
              <h4 className="font-bold text-gray-800 dark:text-gray-200 group-hover:text-blue-600 transition-colors">
                {cert.title}
              </h4>
              <div className="flex items-center justify-between mt-3">
                <span className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-tighter">
                  {cert.issuer}
                </span>
                <span className="text-[10px] font-bold text-gray-400">
                  {cert.date}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default Skills;