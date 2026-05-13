import { useRef } from "react";
import { motion } from "framer-motion";
import { useTheme } from "../../context/ThemeContext";
import { JOURNEY_STEPS, PASSIONS } from "../../utils/data";
import { containerVariants, itemVariants } from "../../utils/helper";

const AboutSection = () => {
  const { isDarkMode } = useTheme();
  const sectionRef = useRef(null);

  return (
    <section
      ref={sectionRef}
      id="about"
      className={`py-24 transition-all duration-500 ${
        isDarkMode ? "bg-gray-950" : "bg-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.div
            variants={itemVariants}
            className={`text-sm uppercase tracking-widest ${
              isDarkMode ? "text-gray-500" : "text-gray-600"
            } mb-4`}
          >
            Who I Am
          </motion.div>
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-light mb-6 leading-tight"
          >
            <span className={isDarkMode ? "text-white" : "text-gray-900"}>
              About Me
            </span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className={`text-lg ${
              isDarkMode ? "text-gray-400" : "text-gray-600"
            } max-w-2xl mx-auto font-light leading-relaxed`}
          >
            I build thoughtful web experiences with strong backend foundations.
            My mission is to turn ideas into polished products that solve real
            problems and delight users.
          </motion.p>
        </motion.div>

        <div className="grid gap-10 lg:grid-cols-2">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="space-y-8"
          >
            <motion.div
              variants={itemVariants}
              className={`rounded-3xl p-8 border shadow-sm ${
                isDarkMode
                  ? "bg-gray-900 border-gray-800"
                  : "bg-gray-50 border-gray-200"
              }`}
            >
              <div className="mb-4">
                <p
                  className={`text-sm uppercase tracking-widest font-medium ${isDarkMode ? "text-blue-400" : "text-blue-500"}`}
                >
                  Mission
                </p>
                <h3
                  className={`text-2xl font-semibold mt-3 ${isDarkMode ? "text-white" : "text-gray-900"}`}
                >
                  Building useful products with clarity and care.
                </h3>
              </div>
              <p
                className={`text-base leading-relaxed ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}
              >
                I focus on creating scalable, user-centric applications powered
                by clean architecture, strong APIs, and polished interfaces.
                Whether it’s web apps, dashboards, or automation tools, I love
                turning complex requirements into simple, reliable solutions.
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className={`rounded-3xl p-8 border shadow-sm ${
                isDarkMode
                  ? "bg-gray-900 border-gray-800"
                  : "bg-gray-50 border-gray-200"
              }`}
            >
              <div className="mb-6">
                <p
                  className={`text-sm uppercase tracking-widest font-medium ${isDarkMode ? "text-blue-400" : "text-blue-500"}`}
                >
                  What I Love Building
                </p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {PASSIONS.map((passion, index) => {
                  const Icon = passion.icon;
                  return (
                    <div
                      key={index}
                      className={`rounded-3xl p-6 border ${
                        isDarkMode
                          ? "bg-gray-950 border-gray-800"
                          : "bg-white border-gray-200"
                      }`}
                    >
                      <div className="flex items-center justify-center w-12 h-12 rounded-2xl mb-4 bg-blue-500 text-white">
                        <Icon size={20} />
                      </div>
                      <h4
                        className={`text-lg font-semibold mb-2 ${isDarkMode ? "text-white" : "text-gray-900"}`}
                      >
                        {passion.title}
                      </h4>
                      <p
                        className={`text-sm leading-relaxed ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}
                      >
                        {passion.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="space-y-6"
          >
            <motion.div
              variants={itemVariants}
              className={`rounded-3xl p-8 border shadow-sm ${
                isDarkMode
                  ? "bg-gray-900 border-gray-800"
                  : "bg-gray-50 border-gray-200"
              }`}
            >
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <p
                    className={`text-sm uppercase tracking-widest font-medium ${isDarkMode ? "text-blue-400" : "text-blue-500"}`}
                  >
                    Timeline
                  </p>
                </div>
              </div>
              <div className="space-y-5">
                {JOURNEY_STEPS.map((step, index) => {
                  const Icon = step.icon;
                  return (
                    <div key={index} className="flex gap-4">
                      <div
                        className={`min-w-[50px] h-12 rounded-2xl flex items-center justify-center ${step.color}`}
                      >
                        <Icon size={18} className="text-white" />
                      </div>
                      <div className="flex-1 border-b pb-4 border-dashed last:border-b-0 last:pb-0 border-gray-700/30">
                        <p className="text-sm uppercase tracking-[0.2em] text-blue-400 mb-2">
                          {step.year}
                        </p>
                        <h4
                          className={`text-lg font-semibold ${isDarkMode ? "text-white" : "text-gray-900"}`}
                        >
                          {step.title}
                        </h4>
                        <p
                          className={`text-sm leading-relaxed ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}
                        >
                          {step.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
