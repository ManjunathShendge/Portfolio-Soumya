import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const skills = [
    { name: 'C Programming', level: 95 },
    { name: 'OOPS(C++)', level: 90 },
    { name: 'Java', level: 85 },
    { name: 'Python', level: 85 },
    { name: 'Matlab, Simulink', level: 82 },
    { name: 'HTML, CSS, JS', level: 90 },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="skills" className="py-20 bg-gradient-to-br from-slate-900 to-slate-800">
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
            Skills & Technologies
          </motion.h2>
          <motion.p 
            className="text-gray-400 text-lg max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            A comprehensive toolkit of modern technologies and frameworks I use to build exceptional digital experiences.
          </motion.p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {skills.map(({ name, level }, index) => (
              <motion.div
                key={name}
                className="group"
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex justify-between items-center mb-3">
                  <span className="text-white font-semibold text-lg">{name}</span>
                  <span className="text-purple-400 font-bold">{level}%</span>
                </div>
                <div className="w-full bg-slate-700 rounded-full h-3 overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full transition-all duration-1000 ease-out"
                    initial={{ width: '0%' }}
                    whileInView={{ width: `${level}%` }}
                    transition={{ duration: 1.5, delay: index * 0.1 + 0.5, ease: "easeOut" }}
                    viewport={{ once: true }}
                    style={{ boxShadow: '0 0 20px rgba(168, 85, 247, 0.4)' }}
                  />
                </div>
                <motion.div 
                  className="mt-2 h-1 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Technology Categories */}
        <motion.div 
          className="mt-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          {/* <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Frontend',
                techs: ['React', 'Vue.js', 'TypeScript', 'Tailwind CSS', 'Next.js', 'Vite']
              },
              {
                title: 'Backend',
                techs: ['Node.js', 'Python', 'Express.js', 'Django', 'FastAPI', 'PostgreSQL']
              },
              {
                title: 'DevOps & Tools',
                techs: ['Docker', 'AWS', 'Git', 'CI/CD', 'Kubernetes', 'Monitoring']
              }
            ].map(({ title, techs }, index) => (
              <motion.div
                key={title}
                className="bg-gradient-to-br from-slate-700/30 to-slate-800/30 backdrop-blur-sm rounded-2xl p-6 border border-slate-600/30 hover:border-purple-500/50 transition-all duration-300 group"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -10 }}
              >
                <motion.h3 
                  className="text-2xl font-bold text-white mb-4 group-hover:text-purple-300 transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                >
                  {title}
                </motion.h3>
                <div className="flex flex-wrap gap-2">
                  {techs.map((tech, techIndex) => (
                    <motion.span
                      key={tech}
                      className="px-3 py-1 bg-slate-600/40 text-gray-300 rounded-lg text-sm hover:bg-purple-500/20 hover:text-purple-300 transition-all duration-200 cursor-default"
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: 1 + index * 0.2 + techIndex * 0.05 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.1, y: -2 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div> */}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;