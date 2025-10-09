import { motion } from "framer-motion";
import { Bot, BrainCircuit, Cpu } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Bot,
      title: "Artificial Intelligence",
      description:
        "Developing intelligent systems that can think, learn, and make decisions autonomously.",
    },
    {
      icon: BrainCircuit,
      title: "Machine Learning",
      description:
        "Designing and training models to analyze data, detect patterns, and make accurate predictions.",
    },
    {
      icon: Cpu,
      title: "AI Optimization",
      description:
        "Improving algorithm efficiency, inference speed, and overall model performance for real-world impact.",
    },
  ];

  return (
    <section id="about" className="py-20 bg-slate-800/50">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            About Me
          </motion.h2>
          <motion.p
            className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            I'm an AI/ML developer passionate about creating intelligent systems
            that learn, adapt, and solve real-world challenges through clean
            design and code.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {highlights.map(({ icon: Icon, title, description }, index) => (
            <motion.div
              key={title}
              className="bg-gradient-to-br from-slate-700/50 to-slate-800/50 p-8 rounded-2xl border border-slate-600/30 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105 group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -10 }}
            >
              <motion.div
                className="bg-gradient-to-r from-purple-500 to-pink-500 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:shadow-lg group-hover:shadow-purple-500/25 transition-all duration-300"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <Icon className="text-white" size={28} />
              </motion.div>
              <h3 className="text-2xl font-bold text-white mb-4">{title}</h3>
              <p className="text-gray-300 leading-relaxed">{description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="bg-gradient-to-r from-slate-700/30 to-slate-800/30 backdrop-blur-sm rounded-2xl p-8 max-w-4xl mx-auto border border-slate-600/30"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <motion.p
              className="text-gray-300 text-lg leading-relaxed mb-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
            >
              When I'm not coding, you'll find me exploring new technologies,
              contributing to open-source projects, or sharing knowledge with
              the developer community. I believe in continuous learning and
              staying ahead of the curve in this ever-evolving field.
            </motion.p>
            <motion.div
              className="flex flex-wrap justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              viewport={{ once: true }}
            >
              {[
                "C",
                "C#",
                "Java",
                "Python",
                "Neural Learning",
                "Networking",
                "Machine Learning",
              ].map((tech, index) => (
                <motion.span
                  key={tech}
                  className="px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full text-white border border-purple-500/30 hover:border-purple-400/60 transition-colors duration-200"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 1.2 + index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.1, y: -2 }}
                >
                  {tech}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
