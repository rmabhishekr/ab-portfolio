import { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { useTheme } from "../../context/ThemeContext";
import { CONTACT_INFO, SOCIAL_LINKS } from "../../utils/data";
import { EMAILJS_CONFIG } from "../../config/emailjs";
import { containerVariants, itemVariants } from "../../utils/helper";

const ContactSection = () => {
  const { isDarkMode } = useTheme();
  const sectionRef = useRef(null);
  const formRef = useRef(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.sendForm(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        formRef.current,
        EMAILJS_CONFIG.PUBLIC_KEY,
      );

      setIsSubmitted(true);
      formRef.current.reset();
      setTimeout(() => setIsSubmitted(false), 3000);
    } catch (error) {
      console.error("Email send failed:", error);
      // You could add error state here if needed
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      ref={sectionRef}
      id="contact"
      className={`py-24 transition-all duration-500 ${
        isDarkMode ? "bg-gray-950" : "bg-gray-50"
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
            Get in Touch
          </motion.div>
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-light mb-6 leading-tight"
          >
            <span className={isDarkMode ? "text-white" : "text-gray-900"}>
              Contact
            </span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className={`text-lg ${
              isDarkMode ? "text-gray-400" : "text-gray-600"
            } max-w-2xl mx-auto font-light leading-relaxed`}
          >
            Have a project idea, question, or want to collaborate? Send a
            message or reach out via social media.
          </motion.p>
        </motion.div>

        <div className="grid gap-10 xl:grid-cols-[1.1fr_0.9fr]">
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
                  : "bg-white border-gray-200"
              }`}
            >
              <h3
                className={`text-2xl font-semibold mb-4 ${isDarkMode ? "text-white" : "text-gray-900"}`}
              >
                Contact Info
              </h3>
              <p
                className={`text-base leading-relaxed mb-8 ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}
              >
                Fast replies, flexible communication, and a practical approach
                to every project.
              </p>
              <div className="space-y-4">
                {CONTACT_INFO.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <div
                      key={index}
                      className={`flex gap-4 items-start rounded-3xl p-4 border ${
                        isDarkMode
                          ? "bg-gray-950 border-gray-800"
                          : "bg-gray-50 border-gray-200"
                      }`}
                    >
                      <div className="w-12 h-12 rounded-2xl flex items-center justify-center bg-blue-500 text-white">
                        <Icon size={18} />
                      </div>
                      <div>
                        <p
                          className={`text-sm uppercase tracking-widest font-medium mb-1 ${isDarkMode ? "text-blue-400" : "text-blue-500"}`}
                        >
                          {info.label}
                        </p>
                        <p
                          className={`text-base ${isDarkMode ? "text-gray-200" : "text-gray-700"}`}
                        >
                          {info.value}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className={`rounded-3xl p-8 border shadow-sm ${
                isDarkMode
                  ? "bg-gray-900 border-gray-800"
                  : "bg-white border-gray-200"
              }`}
            >
              <h3
                className={`text-2xl font-semibold mb-6 ${isDarkMode ? "text-white" : "text-gray-900"}`}
              >
                Social Links
              </h3>
              <div className="flex flex-wrap gap-4">
                {SOCIAL_LINKS.map((social, index) => {
                  const Icon = social.icon;
                  const href = social.url.includes("@")
                    ? `mailto:${social.url}`
                    : social.url;
                  return (
                    <a
                      key={index}
                      href={href}
                      target="_blank"
                      rel="noreferrer"
                      className={`flex items-center gap-3 px-5 py-3 rounded-2xl transition-all duration-300 border ${
                        isDarkMode
                          ? "border-gray-800 bg-gray-950 text-gray-300 hover:bg-gray-900"
                          : "border-gray-200 bg-white text-gray-700 hover:bg-gray-100"
                      }`}
                    >
                      <Icon size={18} />
                      <span>{social.name}</span>
                    </a>
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
          >
            <motion.form
              ref={formRef}
              onSubmit={handleSubmit}
              variants={itemVariants}
              className={`rounded-3xl p-8 border shadow-sm space-y-6 ${
                isDarkMode
                  ? "bg-gray-900 border-gray-800"
                  : "bg-white border-gray-200"
              }`}
            >
              <h3
                className={`text-2xl font-semibold ${isDarkMode ? "text-white" : "text-gray-900"}`}
              >
                Send a Message
              </h3>
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="space-y-2 text-sm">
                  <span
                    className={isDarkMode ? "text-gray-300" : "text-gray-700"}
                  >
                    Name
                  </span>
                  <input
                    type="text"
                    name="user_name"
                    placeholder="Your name"
                    required
                    className={`w-full rounded-2xl border px-4 py-3 outline-none transition-all duration-200 ${
                      isDarkMode
                        ? "bg-gray-950 border-gray-800 text-white focus:border-blue-500"
                        : "bg-gray-50 border-gray-200 text-gray-900 focus:border-blue-500"
                    }`}
                  />
                </label>
                <label className="space-y-2 text-sm">
                  <span
                    className={isDarkMode ? "text-gray-300" : "text-gray-700"}
                  >
                    Email
                  </span>
                  <input
                    type="email"
                    name="user_email"
                    placeholder="you@example.com"
                    required
                    className={`w-full rounded-2xl border px-4 py-3 outline-none transition-all duration-200 ${
                      isDarkMode
                        ? "bg-gray-950 border-gray-800 text-white focus:border-blue-500"
                        : "bg-gray-50 border-gray-200 text-gray-900 focus:border-blue-500"
                    }`}
                  />
                </label>
              </div>
              <label className="space-y-2 text-sm block">
                <span
                  className={isDarkMode ? "text-gray-300" : "text-gray-700"}
                >
                  Message
                </span>
                <textarea
                  rows="5"
                  name="message"
                  placeholder="Tell me about your project or question"
                  required
                  className={`w-full rounded-3xl border px-4 py-3 outline-none transition-all duration-200 resize-none ${
                    isDarkMode
                      ? "bg-gray-950 border-gray-800 text-white focus:border-blue-500"
                      : "bg-gray-50 border-gray-200 text-gray-900 focus:border-blue-500"
                  }`}
                />
              </label>
              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex items-center justify-center rounded-full bg-blue-500 px-8 py-3 text-sm font-medium text-white transition-all duration-300 hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </motion.form>
          </motion.div>
        </div>
      </div>
      {isSubmitted && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          className="fixed bottom-8 left-1/2 z-50 w-[calc(100%-2rem)] max-w-sm -translate-x-1/2 rounded-3xl border border-blue-300 bg-blue-500/95 px-6 py-4 text-center text-sm font-medium text-white shadow-2xl shadow-blue-500/20 sm:w-auto"
        >
          Message sent successfully!
        </motion.div>
      )}
    </section>
  );
};

export default ContactSection;
