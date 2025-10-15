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
      progress: "100%",
    },
    {
      title: "IoT Dashboard",
      description:
        "HTTP-based monitoring system for IoT devices with real-time data visualization and alerts.",
      tags: ["IoT", "Node.js", "MQTT", "PHP"],
      image: "/images/2.jpg",
      link: "https://github.com/HibbanRdn/IoT-MultiSensorDashboard.git",
      progress: "79%",
    },
    {
      title: "Junior High School LMS",
      description:
        "Learning Management System designed for junior high schools with course management and student tracking.",
      tags: ["LMS", "React", "MongoDB"],
      image: "/images/1.jpg",
      link: "https://vclassnepatro.site",
      progress: "100%",
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
    <section className="projects-section">
      <div className="max-w-6xl mx-auto relative z-10 text-center mb-16">
        <div className="header-line" />
        <h2 className="projects-title">Featured Projects</h2>
        <p className="projects-subtitle">
          A showcase of my work in AI, Machine Learning, IoT, and Web
          Development
        </p>
      </div>

      <div className="projects-carousel">
        {/* gradient fades di sisi */}
        <div className="side-fade left" aria-hidden />
        <div className="side-fade right" aria-hidden />

        <button className="carousel-btn left" onClick={prevSlide} aria-label="Previous">
          <ChevronLeft />
        </button>

        <motion.div
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          onDragEnd={handleDragEnd}
          className="carousel-track"
        >
          {projects.map((project, index) => {
            const offset = index - activeIndex;
            // agar z-index tetap bagus ketika looping
            const translateX = offset * 340;
            const scale = offset === 0 ? 1 : 0.85;
            const rotateY = offset === 0 ? 0 : offset > 0 ? -18 : 18;
            const opacity = offset === 0 ? 1 : 0.5;
            const zIndex = offset === 0 ? 10 : 5;

            return (
              <motion.div
                key={index}
                className="carousel-card"
                style={{
                  transform: `translateX(${translateX}px) scale(${scale}) rotateY(${rotateY}deg)`,
                  opacity,
                  zIndex,
                }}
              >
                <div className="card-image">
                  <ImageWithFallback src={project.image} alt={project.title} />
                </div>

                <div className="card-content">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>

                  <div className="card-footer">
                    <div className="tags">
                      {project.tags.map((tag) => (
                        <Badge key={tag} className="badge">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Open ${project.title}`}
                    >
                      <ExternalLink />
                    </a>
                  </div>

                  <div className="progress-bar" aria-hidden={false}>
                    <motion.div
                      className="progress-fill"
                      initial={{ width: 0 }}
                      animate={{
                        width: offset === 0 ? project.progress : "40%",
                      }}
                      transition={{ duration: 1 }}
                    />
                    <span className="progress-text">
                      {offset === 0 ? project.progress : ""}
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        <button className="carousel-btn right" onClick={nextSlide} aria-label="Next">
          <ChevronRight />
        </button>
      </div>

      <div className="carousel-indicators">
        {projects.map((_, index) => (
          <div
            key={index}
            className={`indicator ${index === activeIndex ? "active" : ""}`}
            onClick={() => setActiveIndex(index)}
            role="button"
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      <style>{`
        /* ---------- SECTION & HEADERS ---------- */
        .projects-section {
          padding: 80px 20px;
          background-color: #0A0E27;
          color: #f8fafc;
          display: flex;
          flex-direction: column;
          align-items: center;
          position: relative;
          overflow: hidden;
        }

        .projects-title {
          font-size: 2.25rem;
          font-weight: 300;
          background: linear-gradient(90deg,rgb(255, 255, 255),rgb(0, 238, 107));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          margin-bottom: 16px;
          position: relative;
        }

        .projects-subtitle {
          color: #94a3b8;
          max-width: 600px;
          margin: 0 auto;
        }

        /* ---------- CAROUSEL WRAPPER ---------- */
        .projects-carousel {
          position: relative;
          width: 100%;
          max-width: 1000px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        /* tombol navigasi */
        .carousel-btn {
          z-index: 40;
          border: none;
          background: rgba(56,189,248,0.08);
          border: 1px solid rgba(56,189,248,0.2);
          width: 20px;
          height: 30px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          backdrop-filter: blur(4px);
          transition: transform .18s ease, box-shadow .18s ease;
        }
        .carousel-btn:hover { transform: translateY(-3px); box-shadow: 0 6px 18px rgba(56,189,248,0.12); }
        .carousel-btn.left { margin-right: 12px; }
        .carousel-btn.right { margin-left: 12px; }

        /* ---------- TRACK & CARDS ---------- */
        .carousel-track {
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          cursor: grab;
          height: 480px;
          width: 100%;
          position: relative;
        }

        .carousel-card {
          position: absolute;
          width: 320px;
          background: rgba(17,25,40,0.5);
          border: 1px solid rgba(56,189,248,0.2);
          border-radius: 1.2rem;
          backdrop-filter: blur(8px);
          box-shadow: 0 6px 18px rgba(0,0,0,0.4);
          overflow: hidden;
          transition: all 0.5s ease;
        }

        .carousel-card:hover {
          transform: translateY(-5px);
          border-color: rgba(56,189,248,0.4);
          box-shadow:
            0 8px 15px rgba(56,189,248,0.15),
            0 12px 25px rgba(0,255,136,0.12);
          transition: all 0.4s ease;
        }

        .card-image {
          height: 192px;
          overflow: hidden;
        }

        .card-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s ease;
        }

        .card-image img:hover {
          transform: scale(1.1);
        }

        .card-content {
          padding: 24px;
        }

        .card-content h3 {
          font-family: 'Orbitron', sans-serif;
          font-size: 1.125rem;
          color: #f1f5f9;
          margin-bottom: 8px;
        }

        .card-content p {
          color: #94a3b8;
          font-size: 0.875rem;
          margin-bottom: 16px;
        }

        .card-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        /* ---------- TAGS (Badge) STYLE ---------- */
        .tags {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        /* jika Badge meneruskan className, akan terkena style ini */
        .badge {
          background: rgba(0, 230, 255, 0.06);
          border: 1px solid rgba(0, 230, 255, 0.28);
          color: #67e8f9;
          font-family: 'Orbitron', sans-serif;
          font-size: 0.78rem;
          border-radius: 9999px;
          padding: 6px 12px;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          transition: transform 0.18s ease, box-shadow 0.18s ease, background 0.18s ease;
          box-shadow: 0 0 6px rgba(56,189,248,0.06), inset 0 1px 0 rgba(255,255,255,0.02);
        }

        .badge:hover {
          background: rgba(0, 230, 255, 0.12);
          border-color: rgba(56,189,248,0.48);
          box-shadow: 0 6px 18px rgba(56,189,248,0.12);
          transform: translateY(-2px);
        }

        /* ---------- PROGRESS BAR ---------- */
        .progress-bar {
          margin-top: 18px;
          height: 6px;
          background: rgba(56,189,248,0.06);
          border-radius: 999px;
          overflow: hidden;
          position: relative;
        }

        .progress-fill {
          height: 100%;
          background: linear-gradient(90deg,#ffffff, #21FF9C);
          border-radius: 999px;
          box-shadow: 0 4px 14px rgba(33,255,156,0.06);
          transition: width 0.6s cubic-bezier(.2,.9,.2,1);
        }

        .progress-text {
          position: absolute;
          top: -22px;
          right: 0;
          font-size: 0.75rem;
          font-family: 'Orbitron', sans-serif;
          color: #00ffae;
          text-shadow: 0 0 8px rgba(0,255,128,0.45);
          transition: all 0.3s ease;
        }

        /* ---------- INDICATORS ---------- */
        .carousel-indicators {
          display: flex;
          gap: 8px;
          margin-top: 32px;
        }

        .indicator {
          width: 24px;
          height: 4px;
          border-radius: 2px;
          background: rgba(56,189,248,0.12);
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .indicator.active {
          background: linear-gradient(90deg,rgb(255, 255, 255),rgb(57, 242, 76));
          box-shadow: 0 0 10px rgba(56,189,248,0.8);
          transform: scale(1.08);
        }

        
      `}</style>
    </section>
  );
}
