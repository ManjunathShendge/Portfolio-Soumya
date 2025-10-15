import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import multilingualImg from "../assets/Images/Multilingual-translation.png";
import garbagecollection from "../assets/Images/Garbage-Classification-system.png";
import travelmanagement from "../assets/Images/Travel-management-app.png";
import vulnarability from "../assets/Images/Vulnerability-extraction-and-visualizationtool.png";
import securebooting from "../assets/Images/Secure-computer-booting.png";

const Projects = () => {
  const projects = [
    {
      title: "Multimodal Multilingual Translation System",

      description:
        "This research presents a multimodal multilingual translation system supporting over 200 languages with text, audio, and visual outputs. It integrates advanced AI models like NLLB-200, Whisper, Google TTS, and Stable Diffusion XL for real-time, optimized performance and accessibility.The system achieved high translation accuracy and user-friendly interaction, marking a significant step in AI-driven communication and human-computer interaction.",
      image: multilingualImg,
      tech: [
        "Natural Language Processing (NLP)",
        "Generative AI",
        "Software Development",
        "Computer Vision",
      ],
      github:
        "https://docs.google.com/document/d/1ezYkO2tcCpq0pj3hMai1zKku-me95obQ/edit?usp=sharing&ouid=115244006927528207392&rtpof=true&sd=true",
      live: "https://drive.google.com/file/d/1gXoQwmTUH5zt8rgctBBx_PkIVvLh-0G-/view?usp=sharing",
      featured: true,
    },
    {
      title: "Garbage ClassificationSystem ",
      description:
        "This project applies deep learning models such as EfficientNet-B0, ResNet-50, and ViT-B16 to automate garbage classification using the TrashNet dataset.It aims to enhance accuracy and scalability for integrating automated waste sorting into smart cities.By improving waste categorization, the project supports sustainable waste management and environmental conservation.",
      image: garbagecollection,
      tech: [
        "Deep Learning",
        "Computer Vision",
        "Scalable System Design",
        "Software Development",
      ],
      github:
        "https://drive.google.com/file/d/1qwp385yXr8OEC6-eomDq_S_xq5y4bSRS/view?usp=sharing",
      live: "https://drive.google.com/file/d/1qwp385yXr8OEC6-eomDq_S_xq5y4bSRS/view?usp=sharing",
      featured: true,
    },
    {
      title: "Vulnerability extraction and visualization tool",
      description:
        "The Vulnerability Monitoring Application automatically extracts and displays website security flaws using APIs like the MITRE CVE database.It provides an intuitive interface via Gradio, making vulnerability data accessible to both technical and non-technical users.The tool helps organizations and individuals monitor, assess, and address security issues efficiently, reducing the risk of breaches.",
      image: vulnarability,
      tech: ["Python", "Gradio", "MITRE CVE API", "Html, CSS and JavaScript"],
      github:
        "https://drive.google.com/file/d/1owntWWhovpdWbgTuMlWqkhjwzm85_U8D/view?usp=sharing",
      live: "https://drive.google.com/file/d/1owntWWhovpdWbgTuMlWqkhjwzm85_U8D/view?usp=sharing",
      featured: false,
    },
    {
      title: "Secure Boot Implementation",
      description:
        "This project implements Secure Boot on the NXP S32K3xx microcontroller, using AES/RSA/ECC cryptography to ensure only trusted firmware executes. It provides a hardware-assisted trusted computing base for secure automotive, industrial, and IoT systems.",
      image: securebooting,
      tech: ["C", "C++", "AUTOSAR CSM", "Micro Debugger"],
      github:
        "https://drive.google.com/file/d/1UKJqjwqwju2j6AVq3ACBWSoDY0tI39Dw/view?usp=sharing",
      live: "https://drive.google.com/file/d/1UKJqjwqwju2j6AVq3ACBWSoDY0tI39Dw/view?usp=sharing",
      featured: false,
    },
    {
      title: "Travel Management System",
      description:
        "The Travel Management System is a console-based platform to manage customer data, cab bookings, hotel reservations, and billing services.It simulates backend functionalities of a travel agency using Object-Oriented Programming principles like Encapsulation, Abstraction, Inheritance, and Polymorphism.The system ensures modularity, scalability, and maintainability for efficient travel management operations.",
      image: travelmanagement,
      tech: ["Java", "C++", "C#", "SQL"],
      github:
        "https://docs.google.com/presentation/d/1QoSYW6cF8rgj17ceIa0TRl34z8OUdEx7/edit?slide=id.p1#slide=id.p1",
      live: "https://docs.google.com/presentation/d/1QoSYW6cF8rgj17ceIa0TRl34z8OUdEx7/edit?slide=id.p1#slide=id.p1",
      featured: true,
    },
  ];

  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-20 bg-slate-800/30">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2
            id="featured-projects"
            className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Featured Projects
          </motion.h2>
          <motion.p
            className="text-gray-400 text-lg max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            A selection of my recent work, showcasing different technologies and
            approaches to solving complex problems.
          </motion.p>
        </motion.div>

        {/* Featured Projects */}
        <div className="space-y-20 mb-20">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              className={`flex flex-col lg:flex-row items-center gap-12 ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <motion.div
                className="lg:w-1/2"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className="relative group overflow-hidden rounded-2xl"
                  whileHover={{ y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.7 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <motion.div
                    className="absolute bottom-4 left-4 right-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileHover={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="flex gap-3">
                      <motion.a
                        href={project.github}
                        className="p-2 bg-white/10 backdrop-blur-sm rounded-lg text-white hover:bg-white/20 transition-colors duration-200"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Github size={20} />
                      </motion.a>
                      <motion.a
                        href={project.live}
                        className="p-2 bg-white/10 backdrop-blur-sm rounded-lg text-white hover:bg-white/20 transition-colors duration-200"
                        whileHover={{ scale: 1.1, rotate: -5 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <ExternalLink size={20} />
                      </motion.a>
                    </div>
                  </motion.div>
                </motion.div>
              </motion.div>

              <motion.div
                className="lg:w-1/2 space-y-6"
                initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <motion.h3
                  className="text-3xl font-bold text-white"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  {project.title}
                </motion.h3>
                <motion.p
                  className="text-gray-300 text-lg leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  {project.description}
                </motion.p>

                <motion.div
                  className="flex flex-wrap gap-2"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  viewport={{ once: true }}
                >
                  {project.tech.map((tech, techIndex) => (
                    <motion.span
                      key={tech}
                      className="px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full text-purple-300 border border-purple-500/30 text-sm"
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{
                        duration: 0.3,
                        delay: 0.7 + techIndex * 0.1,
                      }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.1, y: -2 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </motion.div>

                <motion.div
                  className="flex gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  viewport={{ once: true }}
                >
                  <motion.a
                    href={project.github}
                    className="flex items-center gap-2 px-6 py-3 bg-slate-700 hover:bg-slate-600 rounded-lg text-white transition-colors duration-200"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Github size={20} />
                    Code
                  </motion.a>
                  <motion.a
                    href={project.live}
                    className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 rounded-lg text-white transition-all duration-200 hover:scale-105"
                    whileHover={{
                      scale: 1.05,
                      y: -2,
                      boxShadow: "0 10px 30px rgba(168, 85, 247, 0.3)",
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ExternalLink size={20} />
                    Live Demo
                  </motion.a>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Other Projects Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h3
            className="text-3xl font-bold text-center mb-12 text-white"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Other Notable Projects
          </motion.h3>
          <div className="grid md:grid-cols-2 gap-8">
            {otherProjects.map((project, index) => (
              <motion.div
                key={project.title}
                className="bg-gradient-to-br from-slate-700/30 to-slate-800/30 backdrop-blur-sm rounded-2xl overflow-hidden border border-slate-600/30 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105 group"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -10 }}
              >
                <motion.div
                  className="relative overflow-hidden"
                  whileHover={{ scale: 1.02 }}
                >
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </motion.div>

                <motion.div
                  className="p-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <motion.h4
                    className="text-xl font-bold text-white mb-3"
                    whileHover={{ scale: 1.05 }}
                  >
                    {project.title}
                  </motion.h4>
                  <motion.p
                    className="text-gray-300 mb-4 text-sm leading-relaxed"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.7 + index * 0.2 }}
                    viewport={{ once: true }}
                  >
                    {project.description}
                  </motion.p>

                  <motion.div
                    className="flex flex-wrap gap-2 mb-4"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 + index * 0.2 }}
                    viewport={{ once: true }}
                  >
                    {project.tech.map((tech, techIndex) => (
                      <motion.span
                        key={tech}
                        className="px-2 py-1 bg-slate-600/40 text-gray-300 rounded text-xs"
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{
                          duration: 0.3,
                          delay: 0.9 + index * 0.2 + techIndex * 0.05,
                        }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.1 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </motion.div>

                  <motion.div
                    className="flex justify-between items-center"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1 + index * 0.2 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex gap-3">
                      <motion.a
                        href={project.github}
                        className="text-gray-400 hover:text-white transition-colors duration-200"
                        whileHover={{ scale: 1.2, rotate: 5 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Github size={18} />
                      </motion.a>
                      <motion.a
                        href={project.live}
                        className="text-gray-400 hover:text-white transition-colors duration-200"
                        whileHover={{ scale: 1.2, rotate: -5 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <ExternalLink size={18} />
                      </motion.a>
                    </div>
                    <motion.div
                      initial={{ opacity: 0, x: -10 }}
                      whileHover={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ArrowRight className="text-purple-400" size={18} />
                    </motion.div>
                  </motion.div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
