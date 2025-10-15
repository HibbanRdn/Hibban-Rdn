import { motion } from "motion/react";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Award, CheckCircle2 } from "lucide-react";

export function Certificates() {
  const certificates = [
    {
      title: "Cisco Certified Network Associate Cyber Ops (CCNA)",
      issuer: "Cisco Networking Academy",
      description: "Comprehensive certification covering cybersecurity operations, network security, and threat detection.",
      date: "2024",
      skills: ["Network Security", "Threat Detection", "Security Operations"],
    },
    {
      title: "Oracle Database 12c: SQL Fundamentals",
      issuer: "Oracle Academy",
      description: "Professional certification in SQL database management and query optimization.",
      date: "2023",
      skills: ["SQL", "Database Management", "Query Optimization"],
    },
  ];

  return (
    <section id="certificates" className="py-20 px-4 bg-background relative">
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 relative"
        >
          {/* Decorative line */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-1/2 h-[2px] bg-gradient-to-r from-primary/30 via-accent/30 to-primary/30 blur-sm opacity-60" />

          <h2 className="mb-4 relative bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent text-3xl md:text-4xl font-bold">
            Certificates & Licenses
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Professional certifications validating my technical expertise
          </p>
        </motion.div>

        {/* Certificates Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -8 }}
            >
              <Card className="p-6 h-full bg-card/50 backdrop-blur-sm border border-primary/20 hover:border-primary/50 transition-all duration-300 shadow-lg hover:shadow-primary/20 hover:shadow-xl relative overflow-hidden group">
                <div className="flex items-start gap-4 mb-4">
                  <motion.div 
                    className={`p-3 rounded-lg ${
                      cert.issuer.includes("Cisco")
                        ? "bg-gradient-to-br from-blue-400 to-cyan-300"
                        : cert.issuer.includes("Oracle")
                        ? "bg-gradient-to-br from-orange-300 to-yellow-200"
                        : "bg-gradient-to-br from-green-400 to-lime-300"
                    }`}
                    whileHover={{ scale: 1.1, y: -3 }}
                    transition={{ duration: 0.3 }}
                    style={{
                      boxShadow: cert.issuer.includes("Cisco")
                        ? "0 0 15px rgba(56, 189, 248, 0.3)" 
                        : cert.issuer.includes("Oracle")
                        ? "0 0 15px rgba(251, 191, 36, 0.3)"
                        : "0 0 15px rgba(132, 204, 22, 0.3)"
                    }}
                  >
                    <Award className="h-6 w-6 text-white" />
                  </motion.div>
                  <div className="flex-1">
                    <h3 className="mb-2 text-foreground">{cert.title}</h3>
                    <div className="flex items-center gap-2 text-muted-foreground mb-2">
                      <CheckCircle2 className="h-4 w-4 text-accent" />
                      <span>{cert.issuer}</span>
                    </div>
                    <Badge 
                      variant="secondary" 
                      className="mb-4 bg-primary/10 text-primary border border-primary/30"
                    >
                      {cert.date}
                    </Badge>
                  </div>
                </div>
                <p className="text-muted-foreground mb-4">{cert.description}</p>
                <div className="flex flex-wrap gap-2">
                  {cert.skills.map((skill) => (
                    <Badge 
                      key={skill} 
                      variant="outline" 
                      className="border-primary/30 text-primary hover:bg-primary/10 transition-colors"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
