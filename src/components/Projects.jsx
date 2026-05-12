import { motion } from "framer-motion";
import { FiGithub, FiExternalLink, FiClock } from "react-icons/fi";

const projects = [
  {
    title: "Banking Transaction Tracker",
    description:
      "A Python CLI tool that records income and expenses, categorises transactions, and generates monthly reports.",
    image: "/assets/project1.png",
    tags: ["Python", "CLI", "Data"],
    github: "https://github.com/gifthlahla/banking-transaction-tracker",
    demo: null,
    status: "completed",
  },
  {
    title: "Smart Health App",
    description:
      "A Flutter mobile app that helps users track symptoms, medication reminders, and health tips.",
    image: "/assets/project2.png",
    tags: ["Flutter", "Dart", "UX"],
    github: "https://github.com/gifthlahla/smart-health-app",
    demo: null,
    status: "completed",
  },
  {
    title: "Zim Currency Converter",
    description:
      "A web app that converts between USD, ZWL, and ZAR using real-time exchange rates from an API.",
    image: "/assets/project3.png",
    tags: ["JavaScript", "API", "Web"],
    github: "https://github.com/gifthlahla/zim-currency-converter",
    demo: "https://gifthlahla.github.io/zim-currency-converter",
    status: "completed",
  },
  {
    title: "SADC Weather App",
    description:
      "A Flutter mobile app displaying current weather and forecasts for SADC capital cities.",
    image: "/assets/project4.png",
    tags: ["Flutter", "API", "WIP"],
    github: "https://github.com/gifthlahla/sadc-weather-flutter",
    demo: null,
    status: "in-progress",
  },
  {
    title: "Zwan Wallet App",
    description:
      "A mobile wallet app concept designed to handle peer-to-peer payments and balance tracking.",
    image: "/assets/project5.png",
    tags: ["Flutter", "Supabase", "Design"],
    github: "https://github.com/gifthlahla/zwan-wallet",
    demo: null,
    status: "in-progress",
  },
];

function Projects() {
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
        <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent inline-block">Projects</h2>
        <p className="mt-1 text-gray-500 dark:text-gray-400 text-base">
          A selection of my recent work and open-source contributions.
        </p>
      </div>

      {/* Project Grid - Tighter Gap */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.4 }}
            className="group flex flex-col bg-white/5 dark:bg-slate-900/40 backdrop-blur-md rounded-2xl overflow-hidden subtle-border hover:bg-white/10 dark:hover:bg-slate-900/60 transition-all border border-transparent hover:border-gray-200 dark:hover:border-slate-800 shadow-sm"
          >
            {/* Image Container - Slimmer height */}
            <div className="relative h-40 overflow-hidden bg-gray-100 dark:bg-slate-950">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute top-3 right-3">
                <span className={`px-2 py-0.5 rounded-md text-[9px] font-bold uppercase tracking-widest ${
                  project.status === "completed" 
                    ? "bg-emerald-500 text-white" 
                    : "bg-amber-500 text-white"
                }`}>
                  {project.status === "completed" ? "Done" : "Building"}
                </span>
              </div>
            </div>

            {/* Content Container - Tighter Padding */}
            <div className="p-5 flex flex-col flex-1">
              <div className="flex-1 space-y-2">
                <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 leading-tight">
                  {project.title}
                </h3>
                <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed line-clamp-3">
                  {project.description}
                </p>
                
                {/* Tech Tags - Slimmer */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag}
                      className="px-2 py-0.5 text-[9px] font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 rounded border border-blue-100 dark:border-blue-900/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Links - Tighter spacing */}
              <div className="flex items-center gap-5 pt-5">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-bold text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  <FiGithub />
                  <span>Code</span>
                </a>
                {project.demo ? (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-bold text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    <FiExternalLink />
                    <span>Live</span>
                  </a>
                ) : (
                  <div className="flex items-center gap-2 text-xs font-bold text-gray-400 dark:text-gray-600">
                    <FiClock />
                    <span>Upcoming</span>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

export default Projects;