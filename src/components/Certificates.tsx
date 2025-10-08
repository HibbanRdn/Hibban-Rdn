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
    <section id="certificates" className="py-20 px-4 bg-gradient-to-b from-[#0f1729] to-[#0a0e27] relative">
      {/* Animated grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(57,255,20,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="mb-4 bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent">
            Certificates & Licenses
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Professional certifications validating my technical expertise
          </p>
        </motion.div>

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
              <Card 
                className="p-6 h-full transition-all duration-300 border border-cyan-500/20 hover:border-green-400/50 bg-gradient-to-br from-[#0f1729] to-[#1a1f3a] relative overflow-hidden group shadow-lg hover:shadow-xl hover:shadow-cyan-500/20"
                style={{
                  boxShadow: "0 0 20px rgba(0, 255, 255, 0.1)",
                }}
              >
                {/* Glow effect on hover */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-green-500/0 group-hover:from-cyan-500/10 group-hover:to-green-500/10 transition-all duration-300"
                  whileHover={{
                    boxShadow: "inset 0 0 40px rgba(0, 255, 255, 0.2)",
                  }}
                />
                
                <div className="relative z-10">
                  <div className="flex items-start gap-4 mb-4">
                    <motion.div 
                      className="p-3 bg-gradient-to-br from-cyan-400 to-green-400 rounded-lg"
                      whileHover={{ scale: 1.1, y: -3 }}
                      transition={{ duration: 0.3 }}
                      style={{
                        boxShadow: "0 0 20px rgba(0, 255, 255, 0.4)",
                      }}
                    >
                      <Award className="h-6 w-6 text-[#0a0e27]" />
                    </motion.div>
                    <div className="flex-1">
                      <h3 className="mb-2 text-cyan-300">{cert.title}</h3>
                      <div className="flex items-center gap-2 text-gray-400 mb-2">
                        <CheckCircle2 className="h-4 w-4 text-green-400" />
                        <span>{cert.issuer}</span>
                      </div>
                      <Badge 
                        variant="secondary" 
                        className="mb-4 bg-cyan-500/10 text-cyan-300 border border-cyan-500/30"
                      >
                        {cert.date}
                      </Badge>
                    </div>
                  </div>
                  <p className="text-gray-400 mb-4">
                    {cert.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map((skill) => (
                      <Badge 
                        key={skill} 
                        variant="outline" 
                        className="border-green-400/30 text-green-300 hover:bg-green-400/10 transition-colors"
                      >
                        {skill}
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
