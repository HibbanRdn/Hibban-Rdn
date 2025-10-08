import { motion } from "motion/react";
import { Card } from "./ui/card";
import { GraduationCap, Brain, Sparkles } from "lucide-react";

export function About() {
  const features = [
    {
      icon: GraduationCap,
      title: "Education",
      description: "Computer Science, Universitas Lampung, Semester 5",
    },
    {
      icon: Brain,
      title: "Specialization",
      description: "Artificial Intelligence & Machine Learning",
    },
    {
      icon: Sparkles,
      title: "Passion",
      description: "Technology & Innovation",
    },
  ];

  return (
    <section id="about" className="py-20 px-4 bg-card/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(0,255,255,0.05),transparent_50%)]" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I'm a passionate Computer Science student at Universitas Lampung, currently in my 5th semester,
            with a strong focus on Artificial Intelligence. I'm driven by a desire to leverage technology
            and innovation to solve real-world problems and create meaningful impact.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
            >
              <Card className="p-6 h-full bg-card/50 backdrop-blur-sm border border-primary/20 hover:border-primary/50 transition-all duration-300 shadow-lg hover:shadow-primary/20 hover:shadow-xl">
                <motion.div
                  whileHover={{ scale: 1.1, y: -3 }}
                  transition={{ duration: 0.3 }}
                  className="mb-4 inline-flex p-3 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg"
                  style={{
                    boxShadow: "0 0 15px rgba(0, 255, 255, 0.2)",
                  }}
                >
                  <feature.icon className="h-6 w-6 text-primary" />
                </motion.div>
                <h3 className="mb-2 text-foreground">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
