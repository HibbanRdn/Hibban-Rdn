import { motion } from "motion/react";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { GraduationCap, MapPin, Calendar, Award } from "lucide-react";

export function Education() {
  const education = [
    {
      degree: "Bachelor of Computer Science",
      institution: "Universitas Lampung",
      location: "Lampung, Indonesia",
      period: "2023 - Present",
      currentSemester: "5th Semester",
      focus: "Artificial Intelligence & Machine Learning",
      achievements: [
        "Active Member of AI Research Group at Universitas Lampung",
        "Mentored high school students for Mathematics Olympiad preparation",
        "Community service and teaching contribution at former junior high school",
      ],
      courses: [
        "Machine Learning",
        "Data Mining",
        "Neural Networks",
        "Database Systems",
        "Web Development",
        "IoT & Embedded Systems",
      ],
    },
    {
      degree: "Senior High School (SMA)",
      institution: "SMA Negeri 1 Metro",
      location: "Metro, Indonesia",
      period: "2020 - 2023",
      currentSemester: "Graduated",
      focus: "Science Major (Mathematics & Natural Sciences)",
      achievements: [
        "Silver Medal in City-level Mathematics Olympiad (Kota Metro)",
        "Active member and participant in Mathematics Olympiad training",
        "Active member of IPCA (Ikatan Pelajar Cinta Alam) extracurricular organization",
      ],
      courses: [
        "Advanced Mathematics",
        "Physics",
        "Chemistry",
        "Biology",
        "Computer Science (Basic Programming)",
      ],
    },
  ];

  return (
    <section id="education" className="py-20 px-4 bg-card/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(57,255,20,0.05),transparent_50%)]" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Education
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My academic journey and educational background
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {education.map((edu, index) => (
            <motion.div
              key={edu.degree + edu.institution}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="mb-10"
            >
              <Card className="p-8 bg-card/50 backdrop-blur-sm border border-primary/20 hover:border-primary/50 transition-all duration-300 shadow-lg hover:shadow-primary/20 hover:shadow-xl">
                {/* Header */}
                <div className="flex items-start gap-4 mb-6">
                  <motion.div
                    whileHover={{ scale: 1.1, y: -3 }}
                    transition={{ duration: 0.3 }}
                    className="p-4 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl"
                    style={{
                      boxShadow: "0 0 20px rgba(0, 255, 255, 0.2)",
                    }}
                  >
                    <GraduationCap className="h-8 w-8 text-primary" />
                  </motion.div>
                  <div className="flex-1">
                    <h3 className="text-foreground mb-2">{edu.degree}</h3>
                    <p className="text-primary mb-2">{edu.institution}</p>
                    <div className="flex flex-wrap gap-4 text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-accent" />
                        <span>{edu.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-accent" />
                        <span>{edu.period}</span>
                      </div>
                    </div>
                  </div>
                  <Badge className="bg-gradient-to-r from-primary to-accent text-background">
                    {edu.currentSemester}
                  </Badge>
                </div>

                {/* Focus Area */}
                <div className="mb-6 p-4 bg-gradient-to-r from-primary/5 to-accent/5 rounded-lg border border-primary/20">
                  <div className="flex items-center gap-2 mb-2">
                    <Award className="h-5 w-5 text-primary" />
                    <h4 className="text-foreground">Specialization</h4>
                  </div>
                  <p className="text-foreground/90">{edu.focus}</p>
                </div>

                {/* Achievements */}
                <div className="mb-6">
                  <h4 className="text-foreground mb-3">Key Achievements</h4>
                  <ul className="space-y-2">
                    {edu.achievements.map((achievement, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.3 + idx * 0.1 }}
                        className="flex items-start gap-3 text-foreground/80"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-primary to-accent mt-2" />
                        <span>{achievement}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Relevant Courses */}
                <div>
                  <h4 className="text-foreground mb-3">Relevant Courses</h4>
                  <div className="flex flex-wrap gap-2">
                    {edu.courses.map((course) => (
                      <Badge
                        key={course}
                        variant="secondary"
                        className="bg-primary/10 text-primary border border-primary/30 hover:bg-primary/20 transition-colors"
                      >
                        {course}
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
