import { motion } from "motion/react";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Briefcase, Calendar } from "lucide-react";

export function Experiences() {
  const experiences = [
    {
      title: "AI Research Assistant",
      company: "Universitas Lampung",
      period: "2024 - Present",
      description: "Conducting research on machine learning models and neural networks for predictive analytics. Contributing to academic publications and assisting in AI-related projects.",
      technologies: ["Python", "TensorFlow", "PyTorch", "Scikit-learn"],
      type: "Research",
    },
    {
      title: "IoT Developer Intern",
      company: "Tech Innovation Lab",
      period: "2023 - 2024",
      description: "Developed HTTP-based IoT monitoring systems and embedded solutions for healthcare applications. Worked on the GlucoSense project for blood sugar monitoring.",
      technologies: ["Arduino", "ESP32", "MQTT", "Node.js"],
      type: "Internship",
    },
    {
      title: "Web Development Freelancer",
      company: "Self-Employed",
      period: "2023 - Present",
      description: "Building custom web applications and learning management systems for educational institutions. Focus on creating responsive and user-friendly interfaces.",
      technologies: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
      type: "Freelance",
    },
  ];

  return (
    <section id="experiences" className="py-20 px-4 bg-background relative">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(0,255,255,0.05),transparent_50%)]" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Experiences
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My professional journey and key milestones in technology and innovation
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-primary via-accent to-primary opacity-20" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline dot */}
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-br from-primary to-accent shadow-lg shadow-primary/50" />

                {/* Card */}
                <motion.div
                  whileHover={{ scale: 1.02, y: -5 }}
                  className={`w-full md:w-5/12 ${
                    index % 2 === 0 ? "md:pr-12" : "md:pl-12"
                  }`}
                >
                  <Card className="p-6 bg-card/50 backdrop-blur-sm border border-primary/20 hover:border-primary/50 transition-all duration-300 shadow-lg hover:shadow-primary/20 hover:shadow-xl">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg">
                          <Briefcase className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="text-foreground">{exp.title}</h3>
                          <p className="text-muted-foreground">{exp.company}</p>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 mb-4 text-muted-foreground">
                      <Calendar className="h-4 w-4 text-primary" />
                      <span>{exp.period}</span>
                    </div>

                    <p className="text-foreground/80 mb-4">{exp.description}</p>

                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="bg-primary/10 text-primary border border-primary/30 hover:bg-primary/20 transition-colors"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    <Badge
                      className="mt-4 bg-gradient-to-r from-accent/20 to-primary/20 text-accent border border-accent/30"
                    >
                      {exp.type}
                    </Badge>
                  </Card>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
