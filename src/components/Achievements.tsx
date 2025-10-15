import { motion } from "motion/react";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Trophy, Award, Code2Icon, StarHalfIcon, StarIcon } from "lucide-react";

export function Achievements() {
  const achievements = [
    {
      icon: Code2Icon,
      title: "Open Source Contributor",
      description:
        "Contributed to multiple GitHub projects, including bug fixes, feature improvements, and documentation for IoT and embedded systems repositories.",
      category: "Contribution",
      year: "2024",
      color: "from-purple-500 to-pink-400",
    },
    {
      icon: Trophy,
      title: "Silver Medal - Mathematics Olympiad",
      description:
        "Achieved silver medal in a university-level mathematics olympiad, showcasing strong analytical and problem-solving skills.",
      category: "Award",
      year: "2023",
      color: "from-yellow-500 to-orange-400",
    },
    {
      icon: StarIcon,
      title: "IoT Mini Project Showcase",
      description:
        "Presented mini-projects on ESP32-based IoT solutions in university exhibitions, demonstrating practical skills in hardware-software integration.",
      category: "Project",
      year: "2023",
      color: "from-red-500 to-pink-400",
    },
  ];

  return (
    <section id="achievements" className="py-20 px-4 bg-background relative">
      {/* Background decoration */}

      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 relative"
        >
          {/* Optional decorative line behind header */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-1/2 h-[2px] bg-gradient-to-r from-primary/30 via-accent/30 to-primary/30 blur-sm opacity-60" />

          <h2 className="mb-4 relative bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent text-3xl md:text-4xl font-bold">
            Achievements
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Milestones and accomplishments throughout my academic and professional journey
          </p>
        </motion.div>

        {/* Achievements grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
            >
              <Card className="p-6 h-full bg-card/50 backdrop-blur-sm border border-primary/20 hover:border-primary/50 transition-all duration-300 shadow-lg hover:shadow-primary/20 hover:shadow-xl group">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                  className={`inline-flex p-4 bg-gradient-to-br ${achievement.color} rounded-xl mb-4 shadow-lg`}
                  style={{
                    boxShadow: "0 0 20px rgba(0, 255, 255, 0.3)",
                  }}
                >
                  <achievement.icon className="h-6 w-6 text-white" />
                </motion.div>

                <div className="flex items-center justify-between mb-3">
                  <Badge
                    variant="secondary"
                    className="bg-primary/10 text-primary border border-primary/30"
                  >
                    {achievement.category}
                  </Badge>
                  <span className="text-muted-foreground">{achievement.year}</span>
                </div>

                <h3 className="text-foreground mb-3 group-hover:text-primary transition-colors">
                  {achievement.title}
                </h3>
                <p className="text-foreground/70">
                  {achievement.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
