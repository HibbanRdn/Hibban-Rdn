import { motion } from "motion/react";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { MapPin, Calendar, Award } from "lucide-react";

export function Education() {
  const education = [
    {
      logo: "/logos/unila.png",
      logoSize: "h-16 w-16",
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
      logo: "/logos/smansa.png",
      logoSize: "h-16 w-16",
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
    <section
      id="education"
      className="py-20 px-4 bg-background relative overflow-hidden"
    >
      {/* Header */}
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 relative"
        >
          <h2 className="mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent font-semibold text-3xl md:text-4xl">
            Education
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My academic journey and educational background
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical timeline line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-primary via-accent to-primary opacity-20" />

          <div className="space-y-12">
            {education.map((edu, index) => (
              <motion.div
                key={edu.degree + edu.institution}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline dot */}
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-br from-primary to-accent shadow-lg shadow-primary/50" />

                {/* Card */}
                <motion.div
                  whileHover={{ scale: 1.02, y: -3 }}
                  className={`w-full md:w-5/12 ${
                    index % 2 === 0 ? "md:pr-12" : "md:pl-12"
                  }`}
                >
                  <Card className="p-6 bg-card/50 backdrop-blur-sm border border-primary/20 hover:border-primary/50 transition-all duration-300 shadow-lg hover:shadow-primary/20 hover:shadow-xl rounded-2xl">
                    {/* Header */}
                    <div className="flex items-start gap-4 mb-4">
                      <motion.div
                        whileHover={{
                          scale: 1.08,
                          y: -2,
                          boxShadow: "0 0 20px rgba(0, 255, 255, 0.4)",
                        }}
                        transition={{ duration: 0.3 }}
                        className="p-2 bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg"
                      >
                        <img
                          src={edu.logo}
                          alt={edu.institution + " logo"}
                          className={`${edu.logoSize} object-contain rounded-lg select-none`}
                        />
                      </motion.div>
                      <div className="flex-1">
                        <h3 className="text-foreground mb-1 font-semibold">
                          {edu.degree}
                        </h3>
                        <p className="text-primary mb-1">{edu.institution}</p>
                        <div className="flex flex-wrap gap-4 text-muted-foreground text-sm">
                          <div className="flex items-center gap-1">
                            <MapPin className="h-4 w-4 text-accent" />
                            <span>{edu.location}</span>
                          </div>
                          <div className="flex items-center gap-1">
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
                    <div className="mb-4 p-3 bg-gradient-to-r from-primary/5 to-accent/5 rounded-lg border border-primary/20">
                      <div className="flex items-center gap-2 mb-1">
                        <Award className="h-5 w-5 text-primary" />
                        <h4 className="text-foreground font-medium">Specialization</h4>
                      </div>
                      <p className="text-foreground/90">{edu.focus}</p>
                    </div>

                    {/* Achievements */}
                    <div className="mb-4">
                      <h4 className="text-foreground mb-2 font-medium">Key Achievements</h4>
                      <ul className="space-y-1">
                        {edu.achievements.map((ach, idx) => (
                          <motion.li
                            key={idx}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: 0.2 + idx * 0.1 }}
                            className="flex items-start gap-2 text-foreground/80"
                          >
                            <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-primary to-accent mt-2" />
                            <span>{ach}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>

                    {/* Relevant Courses */}
                    <div>
                      <h4 className="text-foreground mb-2 font-medium">Relevant Courses</h4>
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
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
