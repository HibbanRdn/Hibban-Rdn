import { motion } from "motion/react";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Trophy, Star, Award, Target } from "lucide-react";

export function Achievements() {
const achievements = [
  {
    icon: Trophy,
    title: "Cisco CCNA Cyber Ops Certified",
    description:
      "Successfully obtained professional certification in cybersecurity operations and network security from Cisco Networking Academy.",
    category: "Certification",
    year: "2024",
    color: "from-yellow-500 to-orange-500",
  },
  {
    icon: Award,
    title: "Oracle Database Certified",
    description:
      "Earned Oracle Database 12c: SQL Fundamentals certification, demonstrating expertise in database management.",
    category: "Certification",
    year: "2023",
    color: "from-red-500 to-pink-500",
  },
  {
    icon: Trophy,
    title: "Smart Wearable IoT Project",
    description:
      "Developed GlucoSense, an IoT-based wearable system for blood sugar monitoring and early diabetes detection.",
    category: "Project",
    year: "2024",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: Star,
    title: "Community Service at Junior High School",
    description:
      "Contributed to school community service by teaching and sharing knowledge at my former junior high school.",
    category: "Community",
    year: "2024",
    color: "from-blue-500 to-indigo-500",
  },
  {
    icon: Target,
    title: "Math Olympiad Mentor",
    description:
      "Guided and mentored high school students in preparing for mathematics olympiad competitions.",
    category: "Mentorship",
    year: "2023–2024",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Award,
    title: "AI Research Contributor",
    description:
      "Active contributor to AI research group at Universitas Lampung, focusing on neural networks and machine learning experiments.",
    category: "Research",
    year: "2024",
    color: "from-cyan-500 to-blue-500",
  },
];

  return (
    <section id="achievements" className="py-20 px-4 bg-background relative">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,255,0.03),transparent_50%)]" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Achievements
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Milestones and accomplishments throughout my academic and professional journey
          </p>
        </motion.div>

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

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { label: "Certifications", value: "2+", icon: Award },
            { label: "Projects Completed", value: "6+", icon: Trophy },
            { label: "Technologies", value: "15+", icon: Star },
            { label: "Current Semester", value: "5th", icon: Target },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <Card className="p-6 text-center bg-card/30 backdrop-blur-sm border border-primary/20 hover:border-accent/50 transition-all duration-300">
                <stat.icon className="h-8 w-8 text-primary mx-auto mb-3" />
                <div className="mb-2 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <p className="text-muted-foreground">{stat.label}</p>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
