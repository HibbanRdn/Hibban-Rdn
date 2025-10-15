import { useState } from "react";
import { motion, PanInfo } from "motion/react";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Projects() {
  const projects = [
    {
      title: "GlucoSense",
      description:
        "Embedded system project for real-time blood sugar monitoring using sensors and microcontrollers.",
      tags: ["Arduino", "Embedded", "Health"],
      image: "/images/3.jpg",
      link: "https://github.com/HibbanRdn/Project-GlucoSense.git",
    },
    {
      title: "IoT Dashboard",
      description:
        "HTTP-based monitoring system for IoT devices with real-time data visualization and alerts.",
      tags: ["IoT", "Node.js", "MQTT", "PHP"],
      image: "/images/2.jpg",
      link: "https://github.com/HibbanRdn/IoT-MultiSensorDashboard.git",
    },
    {
      title: "Junior High School LMS",
      description:
        "Learning Management System designed for junior high schools with course management and student tracking.",
      tags: ["LMS", "React", "MongoDB"],
      image: "/images/1.jpg",
      link: "https://vclassnepatro.site",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const prevSlide = () =>
    setActiveIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  const nextSlide = () =>
    setActiveIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));

  const handleDragEnd = (_: any, info: PanInfo) => {
    if (info.offset.x < -100) nextSlide();
    if (info.offset.x > 100) prevSlide();
  };

  return (
    <section
      id="projects"
      className="relative flex flex-col items-center justify-center py-20 px-4 overflow-hidden bg-background text-white"
    >
      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16 z-10"
      >
        <h2 className="mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent text-3xl md:text-4xl font-bold">
          Featured Projects
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          A showcase of my work in AI, Machine Learning, IoT, and Web
          Development
        </p>
      </motion.div>

      {/* CAROUSEL */}
      <div className="relative w-full max-w-6xl z-10 flex items-center justify-center">
        {/* LEFT BUTTON */}
        <button
          onClick={prevSlide}
          className="absolute left-0 md:-left-16 top-1/2 -translate-y-1/2 z-20
          bg-primary/10 rounded-full w-10 h-10 md:w-12 md:h-12 flex items-center justify-center
          backdrop-blur-md transition-all duration-300 hover:scale-110 hover:shadow-[0_0_25px_rgba(0,255,200,0.4)]"
        >
          <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-primary relative z-10" />
        </button>

        {/* PROJECT CARDS */}
        <motion.div
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          onDragEnd={handleDragEnd}
          className="relative flex items-center justify-center w-full max-w-5xl 
          h-[460px] md:h-[480px] cursor-grab active:cursor-grabbing overflow-hidden"
        >
          {projects.map((project, index) => {
            const offset = index - activeIndex;
            const total = projects.length;
            let translateX = (offset * 340) % (total * 340);
            let scale = offset === 0 ? 1 : 0.85;
            let rotateY = offset === 0 ? 0 : offset > 0 ? -18 : 18;
            let opacity = offset === 0 ? 1 : 0.5;
            let zIndex = offset === 0 ? 10 : 5;

            return (
              <motion.div
                key={index}
                className="absolute transition-all duration-700 ease-in-out"
                style={{
                  transform: `translateX(${translateX}px) scale(${scale}) rotateY(${rotateY}deg)`,
                  opacity,
                  zIndex,
                  width: "320px",
                  background:
                    "linear-gradient(135deg, rgba(30,41,59,0.85), rgba(15,23,42,0.9))",
                  borderRadius: "1.2rem",
                  boxShadow:
                    offset === 0
                      ? "0 25px 50px rgba(0,0,0,0.6), 0 0 40px rgba(0,255,200,0.4)"
                      : "0 15px 25px rgba(0,0,0,0.3)",
                }}
              >
                {/* IMAGE */}
                <div className="relative h-44 md:h-48 overflow-hidden rounded-t-2xl border-b border-primary/20">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover rounded-t-2xl transition-transform duration-700 hover:scale-110"
                  />
                </div>

                {/* CONTENT */}
                <div className="p-6 text-left">
                  <h3 className="font-orbitron text-lg mb-2 text-foreground">
                    {project.title}
                  </h3>

                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* TAGS + ICON */}
                  <div className="flex items-center justify-between">
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <Badge
                          key={tag}
                          className="bg-primary/10 border border-primary/30 text-primary text-xs"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    {/* ICON (kanan bawah section tag) */}
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Open ${project.title} details`}
                      className="p-2 transition-all duration-300 hover:scale-110"
                    >
                      <ExternalLink className="w-4 h-5 text-accent hover:text-[#ADFF2F] transition-colors" />
                    </a>
                  </div>

                  {/* PROGRESS BAR */}
                  <div className="mt-6 h-1 bg-primary/20 rounded overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-primary to-accent"
                      initial={{ width: 0 }}
                      animate={{ width: offset === 0 ? "80%" : "40%" }}
                      transition={{ duration: 1 }}
                    />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* RIGHT BUTTON */}
        <button
          onClick={nextSlide}
          className="absolute right-0 md:-right-16 top-1/2 -translate-y-1/2 z-20
          bg-primary/10 rounded-full w-10 h-10 md:w-12 md:h-12 flex items-center justify-center
          backdrop-blur-md transition-all duration-300 hover:scale-110 hover:shadow-[0_0_25px_rgba(0,255,200,0.4)]"
        >
          <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-primary relative z-10" />
        </button>
      </div>

      {/* INDICATORS */}
      <div className="flex justify-center gap-2 mt-12 md:mt-16 z-10">
        {projects.map((_, index) => (
          <div
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`w-6 h-1 rounded cursor-pointer transition-all ${
              index === activeIndex
                ? "bg-gradient-to-r from-primary to-accent shadow-[0_0_10px_rgba(0,255,200,0.7)]"
                : "bg-primary/20"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
