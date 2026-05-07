import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";

import { useTheme } from "../../context/ThemeContext";
import { SKILLS_CATEGORY, STATS, TECH_STACK } from "../../utils/data";
import { containerVariants, itemVariants } from "../../utils/helper";

const SkillsSection = () => {
  const { isDarkMode } = useTheme();
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  const skillBarVariants = {
    hidden: { width: 0, opacity: 0 },
    visible: (level) => ({
      width: `${level}%`,
      opacity: 1,
      transition: { duration: 1.2, ease: "easeOut", delay: 0.3 },
    }),
  };

  const sectionTitleVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const categoryVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section
      ref={sectionRef}
      id="skills"
      className={`py-24 transition-all duration-500 ${
        isDarkMode ? "bg-gray-900" : "bg-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.div
            variants={sectionTitleVariants}
            className={`text-sm uppercase tracking-widest ${
              isDarkMode ? "text-gray-500" : "text-gray-600"
            } mb-4`}
          >
            My Expertise
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-light mb-6 leading-tight"
          >
            <span className={isDarkMode ? "text-white" : "text-gray-900"}>
              Technical
            </span>
            <br />
            <span className="text-blue-500 font-medium">Skills & Tools</span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className={`text-lg ${
              isDarkMode ? "text-gray-400" : "text-gray-600"
            } max-w-2xl mx-auto font-light leading-relaxed`}
          >
            Proficient in a diverse range of technologies, with deep expertise
            in full-stack development, cloud infrastructure, and modern web
            frameworks.
          </motion.p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-20"
        >
          {STATS.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`text-center p-6 rounded-2xl ${
                isDarkMode ? "bg-gray-800" : "bg-gray-50"
              }`}
            >
              <motion.div
                className="text-3xl md:text-4xl font-light text-blue-500 mb-2"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
              >
                {stat.number}
              </motion.div>
              <div
                className={`text-sm md:text-base ${
                  isDarkMode ? "text-gray-400" : "text-gray-600"
                }`}
              >
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Skills Categories */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-20"
        >
          {SKILLS_CATEGORY.map((category, categoryIndex) => {
            const IconComponent = category.icon;
            return (
              <motion.div
                key={categoryIndex}
                variants={categoryVariants}
                className={`p-8 rounded-2xl border transition-all duration-300 hover:shadow-lg ${
                  isDarkMode
                    ? "bg-gray-800 border-gray-700 hover:border-blue-500"
                    : "bg-gray-50 border-gray-200 hover:border-blue-500"
                }`}
              >
                {/* Icon */}
                <motion.div
                  initial={{ rotate: -20, opacity: 0 }}
                  whileInView={{ rotate: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="mb-4"
                >
                  <IconComponent
                    size={32}
                    className="text-blue-500"
                    strokeWidth={1.5}
                  />
                </motion.div>

                {/* Title */}
                <h3 className={`text-xl font-medium mb-2 ${
                  isDarkMode ? "text-white" : "text-gray-900"
                }`}>
                  {category.title}
                </h3>

                {/* Description */}
                <p
                  className={`text-sm mb-6 ${
                    isDarkMode ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  {category.description}
                </p>

                {/* Skills */}
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.6,
                        ease: "easeOut",
                        delay: skillIndex * 0.1,
                      }}
                    >
                      {/* Skill Name and Level */}
                      <div className="flex justify-between items-center mb-2">
                        <span
                          className={`text-sm font-medium ${
                            isDarkMode ? "text-gray-300" : "text-gray-700"
                          }`}
                        >
                          {skill.name}
                        </span>
                        <span
                          className={`text-xs ${
                            isDarkMode ? "text-gray-500" : "text-gray-500"
                          }`}
                        >
                          {skill.level}%
                        </span>
                      </div>

                      {/* Skill Bar Background */}
                      <div
                        className={`h-2 rounded-full overflow-hidden ${
                          isDarkMode ? "bg-gray-700" : "bg-gray-200"
                        }`}
                      >
                        {/* Animated Skill Bar */}
                        <motion.div
                          custom={skill.level}
                          initial="hidden"
                          whileInView="visible"
                          viewport={{ once: true }}
                          variants={skillBarVariants}
                          className={`h-full rounded-full ${skill.color}`}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Tech Stack Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.div
            variants={sectionTitleVariants}
            className="text-center mb-12"
          >
            <h3
              className={`text-3xl font-light mb-2 ${
                isDarkMode ? "text-white" : "text-gray-900"
              }`}
            >
              <span>Technology</span>
              <span className="text-blue-500 font-medium ml-2">Stack</span>
            </h3>
            <p
              className={`text-base ${
                isDarkMode ? "text-gray-400" : "text-gray-600"
              }`}
            >
              Tools and technologies I work with daily
            </p>
          </motion.div>

          {/* Tech Stack Badges */}
          <motion.div
            variants={containerVariants}
            className="flex flex-wrap gap-4 justify-center"
          >
            {TECH_STACK.map((tech, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -2 }}
                className={`px-6 py-3 rounded-full border transition-all duration-300 ${
                  isDarkMode
                    ? "bg-gray-800 border-gray-700 text-gray-300 hover:border-blue-500 hover:text-white"
                    : "bg-gray-50 border-gray-200 text-gray-700 hover:border-blue-500 hover:text-gray-900"
                }`}
              >
                <span className="text-sm font-medium">{tech}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
