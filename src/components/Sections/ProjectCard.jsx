import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const ProjectCard = ({ project, isDarkMode }) => {
  const cardVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      variants={cardVariants}
      className={`rounded-xl overflow-hidden h-full flex flex-col transition-all duration-300 hover:shadow-xl ${
        isDarkMode
          ? "bg-gray-900 border border-gray-800 hover:border-blue-500"
          : "bg-white border border-gray-200 hover:border-blue-500"
      }`}
    >
      <div className="relative overflow-hidden h-48 sm:h-40 bg-gray-200 dark:bg-gray-800 group">
        <motion.img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        />

        <div
          className={`absolute inset-0 flex items-center justify-center gap-4 opacity-0 transition-opacity duration-200 group-hover:opacity-100 ${
            isDarkMode ? "bg-black/70" : "bg-black/60"
          } backdrop-blur-sm`}
        >
          <a
            href={project.liveUrl || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center justify-center w-12 h-12 rounded-full text-white transition-colors ${
              project.liveUrl && project.liveUrl !== "#"
                ? "bg-blue-500 hover:bg-blue-600"
                : "bg-blue-500/60 cursor-not-allowed opacity-70"
            }`}
            title={project.liveUrl && project.liveUrl !== "#" ? "Live Demo" : "Live Demo unavailable"}
          >
            <ExternalLink size={20} />
          </a>
          <a
            href={project.githubUrl || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center justify-center w-12 h-12 rounded-full text-white transition-colors ${
              project.githubUrl && project.githubUrl !== "#"
                ? "bg-gray-700 hover:bg-gray-800"
                : "bg-gray-700/60 cursor-not-allowed opacity-70"
            }`}
            title={project.githubUrl && project.githubUrl !== "#" ? "GitHub Repository" : "GitHub unavailable"}
          >
            <Github size={20} />
          </a>
        </div>
      </div>

      <div className="flex-1 p-5 sm:p-4 flex flex-col">
        <div className="flex-1">
          <div className="flex items-center justify-between gap-2 mb-2">
            <h3
              className={`text-lg font-semibold line-clamp-1 ${
                isDarkMode ? "text-white" : "text-gray-900"
              }`}
            >
              {project.title}
            </h3>
            {project.featured && (
              <span className="px-2 py-1 bg-blue-500/20 text-blue-400 text-xs font-medium rounded">
                Featured
              </span>
            )}
          </div>

          <p
            className={`text-sm mb-4 line-clamp-2 ${
              isDarkMode ? "text-gray-400" : "text-gray-600"
            }`}
          >
            {project.description}
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag, idx) => (
            <span
              key={idx}
              className={`px-2 py-1 text-xs font-medium rounded-full ${
                isDarkMode
                  ? "bg-gray-800 text-gray-300"
                  : "bg-gray-100 text-gray-700"
              }`}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
