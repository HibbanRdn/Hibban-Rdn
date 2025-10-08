import { motion } from "motion/react";

export function Skills() {
  const technologies = [
    { name: "Python", logo: "/logos/python.svg" },
    { name: "C++", logo: "/logos/cpp.svg" },
    { name: "Java", logo: "/logos/java.svg" },
    { name: "JavaScript", logo: "/logos/javascript.svg" },
    { name: "HTML", logo: "/logos/html.svg" },
    { name: "CSS", logo: "/logos/css.svg" },
    { name: "React", logo: "/logos/react.svg" },
    { name: "Node.js", logo: "/logos/nodejs.svg" },
    { name: "Docker", logo: "/logos/docker.svg" },
    { name: "GitHub", logo: "/logos/github.svg" },
    { name: "MySQL", logo: "/logos/mysql.svg" },
    { name: "TensorFlow", logo: "/logos/tensorflow.svg" },
  ];

  // Duplicate array for seamless infinite scroll
  const duplicatedTechnologies = [...technologies, ...technologies, ...technologies];

  return (
    <section
      id="skills"
      className="py-20 px-4 bg-gradient-to-b from-[#0a0e27] to-[#0f1729] relative overflow-hidden"
    >
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(57,255,20,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="mb-4 bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent text-3xl font-bold">
            Skills & Technologies
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Technologies and tools I work with to bring ideas to life
          </p>
        </motion.div>

        {/* Infinite Carousel */}
        <div className="relative">
          {/* Fade overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#0f1729] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#0f1729] to-transparent z-10 pointer-events-none" />

          <div className="overflow-hidden py-8">
            <motion.div
              className="flex gap-8"
              animate={{
                x: [0, -100 * technologies.length],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 40,
                  ease: "linear",
                },
              }}
            >
              {duplicatedTechnologies.map((tech, index) => (
                <motion.div
                  key={`${tech.name}-${index}`}
                  className="flex-shrink-0 group"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  <div
                    className="relative w-32 h-32 md:w-40 md:h-40 bg-gradient-to-br from-[#0f1729] to-[#1a1f3a] border border-cyan-500/20 rounded-2xl flex flex-col items-center justify-center gap-3 transition-all duration-300 group-hover:border-green-400/50 overflow-hidden"
                    style={{
                      boxShadow: "0 0 20px rgba(0, 255, 255, 0.1)",
                    }}
                  >
                    {/* Logo & Name */}
                    <div className="relative z-10 flex flex-col items-center gap-3">
                      <img
                        src={tech.logo}
                        alt={tech.name}
                        className="w-12 h-12 md:w-16 md:h-16 object-contain"
                      />
                      <p className="text-cyan-300 text-center px-2">{tech.name}</p>
                    </div>

                    {/* Glow overlay on hover */}
                    <motion.div
                      className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                      style={{
                        boxShadow:
                          "0 0 30px rgba(0, 255, 255, 0.4), inset 0 0 30px rgba(0, 255, 255, 0.1)",
                      }}
                    />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <p className="text-gray-500 text-sm">
            Hover over any technology to see the interactive glow effect
          </p>
        </motion.div>
      </div>
    </section>
  );
}
