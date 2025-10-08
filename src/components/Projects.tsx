import { motion } from "motion/react";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { ExternalLink } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Projects() {
  const projects = [
    {
      title: "Machine Learning Models",
      description: "Advanced ML models for predictive analytics and pattern recognition using TensorFlow and scikit-learn.",
      tags: ["Python", "TensorFlow", "scikit-learn"],
      image: "https://images.unsplash.com/photo-1717501219263-9aa2d6a768d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWNoaW5lJTIwbGVhcm5pbmclMjBuZXVyYWwlMjBuZXR3b3JrfGVufDF8fHx8MTc1OTgyMjc3NHww&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      title: "Data Mining Analysis",
      description: "Comprehensive data mining project analyzing large datasets to extract valuable insights and trends.",
      tags: ["Python", "Pandas", "Data Analysis"],
      image: "https://images.unsplash.com/photo-1740908900846-4bbd4f22c975?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwbWluaW5nJTIwYW5hbHlzaXN8ZW58MXx8fHwxNzU5OTEzNDYxfDA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      title: "Neural Networks Experiments",
      description: "Deep learning experiments with various neural network architectures for image and text processing.",
      tags: ["Deep Learning", "PyTorch", "CNN"],
      image: "https://images.unsplash.com/photo-1719550371336-7bb64b5cacfa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZXVyYWwlMjBuZXR3b3JrJTIwYnJhaW58ZW58MXx8fHwxNzU5ODQ1NjExfDA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      title: "GlucoSense",
      description: "Embedded system project for real-time blood sugar monitoring using sensors and microcontrollers.",
      tags: ["Arduino", "IoT", "Healthcare"],
      image: "/images/3.jpg",
    },
    {
      title: "IoT Dashboard",
      description: "HTTP-based monitoring system for IoT devices with real-time data visualization and alerts.",
      tags: ["IoT", "Node.js", "MQTT"],
      image: "/images/2.jpg",
    },
    {
      title: "Junior High School LMS",
      description: "Learning Management System designed for junior high schools with course management and student tracking.",
      tags: ["React", "Node.js", "MongoDB"],
      image: "/images/1.jpg",
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-background relative">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_30%,rgba(57,255,20,0.05),transparent_50%)]" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A showcase of my work in AI, Machine Learning, IoT, and Web Development
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group"
            >
              <Card className="overflow-hidden h-full bg-card/50 backdrop-blur-sm border border-primary/20 hover:border-primary/50 transition-all duration-300 shadow-lg hover:shadow-primary/20 hover:shadow-xl">
                <div className="relative overflow-hidden aspect-video">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                    <div className="flex items-center gap-2 text-primary">
                      <ExternalLink className="h-5 w-5" />
                      <span>View Details</span>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="mb-2 text-foreground group-hover:text-primary transition-colors">{project.title}</h3>
                  <p className="text-muted-foreground mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="bg-primary/10 text-primary border border-primary/30">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
