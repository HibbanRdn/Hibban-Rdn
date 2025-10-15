'use client';

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

  // Gandakan untuk animasi seamless looping
  const duplicatedTechnologies = [...technologies, ...technologies];

  return (
    <section
  id="skills"
  className="pt-24 pb-40 px-4 bg-[#0a0e27] relative overflow-hidden"
>
  <style>{`
    /* === Core animation === */
    @keyframes infinite-scroll {
      0% {
        transform: translateX(0);
      }
      100% {
        transform: translateX(-50%);
      }
    }

    .skills-track {
      display: flex;
      gap: 2rem;
      align-items: center;
      width: max-content;
      animation: infinite-scroll 25s linear infinite;
      will-change: transform;
    }

    .skills-item {
      flex-shrink: 0;
    }

    .skills-card {
      width: 8rem;
      height: 8rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      background: transparent; /* Tidak ada blur atau box */
      border-radius: 1rem;
      transition: transform 0.3s ease;
    }

    .skills-card:hover {
      transform: scale(1.05);
    }

    @media (min-width: 768px) {
      .skills-card {
        width: 10rem;
        height: 10rem;
      }
    }
  `}</style>

  <div className="max-w-7xl mx-auto relative z-10">
    {/* Header */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-center mb-16 z-10"
    >
      <h2 className="mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent text-3xl md:text-4xl font-bold">
        Skills & Technologies
      </h2>
      <p className="text-muted-foreground max-w-2xl mx-auto">
        Technologies and tools I work with to bring ideas to life
      </p>
    </motion.div>

    {/* Carousel */}
    <div className="relative">
      {/* Fade gradient di sisi kiri-kanan */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#0a0e27] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#0a0e27] to-transparent z-10 pointer-events-none" />

      <div className="overflow-hidden py-8">
        <div className="skills-track">
          {duplicatedTechnologies.map((tech, index) => (
            <div key={`${tech.name}-${index}`} className="skills-item">
              <div className="skills-card">
                <img
                  src={tech.logo}
                  alt={tech.name}
                  className="w-12 h-12 md:w-16 md:h-16 object-contain mb-3"
                />
                <p className="text-cyan-300 text-center">{tech.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
</section>
  );
}
