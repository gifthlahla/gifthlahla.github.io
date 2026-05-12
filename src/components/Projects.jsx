import { motion } from "framer-motion";
import { FiGithub, FiExternalLink, FiClock } from "react-icons/fi";

const projects = [
  {
    title: "Banking Transaction Tracker",
    description:
      "A Python CLI tool that records income and expenses, categorises transactions, and generates monthly CSV/JSON reports.",
    image: "/assets/project1.png",
    tags: ["Python", "CLI", "CSV", "JSON"],
    github: "https://github.com/gifthlahla/banking-transaction-tracker",
    demo: null,
    status: "completed",
  },
  {
    title: "Smart Health App",
    description:
      "A Flutter mobile app that helps users track symptoms, set medication reminders, and view health tips — built with mock data (Supabase integration planned).",
    image: "/assets/project2.png",
    tags: ["Flutter", "Dart", "Mock API", "Supabase (planned)"],
    github: "https://github.com/gifthlahla/smart-health-app",
    demo: null,
    status: "completed",
  },
  {
    title: "Zim Currency Converter",
    description:
      "A web app that converts between USD, ZWL, and ZAR using real-time exchange rates fetched from an external API.",
    image: "/assets/project3.png",
    tags: ["HTML", "CSS", "JavaScript", "API"],
    github: "https://github.com/gifthlahla/zim-currency-converter",
    demo: "https://gifthlahla.github.io/zim-currency-converter",
    status: "completed",
  },
  {
    title: "SADC Weather App",
    description:
      "A Flutter mobile app displaying current weather and forecasts for SADC capital cities. Currently using mock data, with plans to integrate a live weather API.",
    image: "/assets/project4.png",
    tags: ["Flutter", "Dart", "Mock API", "Supabase (planned)"],
    github: "https://github.com/gifthlahla/sadc-weather-flutter",
    demo: null,
    status: "in-progress",
  },
  {
    title: "Zwan Wallet App",
    description:
      "A mobile wallet app concept built with Flutter, designed to handle peer-to-peer payments and balance tracking. Under active development.",
    image: "/assets/project5.png",
    tags: ["Flutter", "Dart", "Supabase (planned)"],
    github: "https://github.com/gifthlahla/zwan-wallet",
    demo: null,
    status: "in-progress",
  },
];

function Projects() {
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
        <h2 className="text-3xl sm:text-4xl font-bold">Projects</h2>
        <p className="mt-2 text-gray-500 dark:text-gray-400 max-w-xl mx-auto md:mx-0">
          Things I've built — some complete, some in the works.
        </p>
      </div>

      {/* Project Cards Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="bg-gray-50 dark:bg-gray-800/50 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow flex flex-col"
          >
            {/* Project Image */}
            <div className="relative h-44 overflow-hidden bg-gray-200 dark:bg-gray-700">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
              {/* Status Badge */}
              <span
                className={`absolute top-2 right-2 text-xs font-semibold px-2 py-1 rounded-full ${
                  project.status === "completed"
                    ? "bg-green-500/90 text-white"
                    : "bg-yellow-500/90 text-black"
                }`}
              >
                {project.status === "completed" ? "Completed" : "In Progress"}
              </span>
            </div>

            {/* Card Body */}
            <div className="p-5 flex flex-col flex-1 space-y-3">
              <h3 className="text-lg font-semibold">{project.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 flex-1">
                {project.description}
              </p>

              {/* Tech Tags */}
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2 py-0.5 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Action Links */}
              <div className="flex items-center justify-between pt-2">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  <FiGithub />
                  Code
                </a>

                {project.demo ? (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    <FiExternalLink />
                    Live Demo
                  </a>
                ) : (
                  <span className="inline-flex items-center gap-1.5 text-sm text-gray-400 dark:text-gray-500">
                    <FiClock />
                    Coming Soon
                  </span>
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