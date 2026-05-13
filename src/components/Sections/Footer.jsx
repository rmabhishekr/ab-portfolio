import { motion } from "framer-motion";
import { useTheme } from "../../context/ThemeContext";

const Footer = () => {
  const { isDarkMode } = useTheme();
  const currentYear = new Date().getFullYear();

  const techStack = [
    "React",
    "Vite",
    "Tailwind CSS",
    "Framer Motion",
    "EmailJS",
  ];

  return (
    <footer
      className={`transition-all duration-500 ${
        isDarkMode ? "bg-gray-950" : "bg-white"
      } border-t ${isDarkMode ? "border-gray-800" : "border-gray-200"}`}
    >
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="space-y-8">
          {/* Main Footer Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="grid gap-8 md:grid-cols-2"
          >
            {/* Signature */}
            <div className="space-y-3">
              <h3
                className={`text-lg font-semibold ${
                  isDarkMode ? "text-white" : "text-gray-900"
                }`}
              >
                Abhishek Rai
              </h3>
              <p
                className={`text-sm leading-relaxed ${
                  isDarkMode ? "text-gray-400" : "text-gray-600"
                }`}
              >
                Full-Stack Developer crafting digital experiences with clean
                code and thoughtful design. Based in Bangalore, India.
              </p>
            </div>

            {/* Tech Credits */}
            <div className="space-y-3">
              <h4
                className={`text-sm font-semibold uppercase tracking-widest ${
                  isDarkMode ? "text-blue-400" : "text-blue-500"
                }`}
              >
                Built With
              </h4>
              <div className="flex flex-wrap gap-2">
                {techStack.map((tech, index) => (
                  <span
                    key={index}
                    className={`px-3 py-1 text-xs font-medium rounded-full ${
                      isDarkMode
                        ? "bg-gray-900 text-gray-300 border border-gray-800"
                        : "bg-gray-100 text-gray-700 border border-gray-200"
                    }`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Divider */}
          <div
            className={`h-px ${isDarkMode ? "bg-gray-800" : "bg-gray-200"}`}
          />

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm"
          >
            <p className={isDarkMode ? "text-gray-500" : "text-gray-600"}>
              © {currentYear} Abhishek Rai. All rights reserved.
            </p>
            <p className={isDarkMode ? "text-gray-500" : "text-gray-600"}>
              Designed & Developed with <span className="text-red-500">♥</span>{" "}
              using React
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
