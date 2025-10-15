import { motion } from "motion/react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Mail, Linkedin, Github, Youtube } from "lucide-react";

export function Contact() {
  const contactLinks = [
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "Connect on LinkedIn",
    href: "https://linkedin.com/in/HibbanRdn",
    color: "from-blue-700 to-blue-500", // LinkedIn blue gradient
  },
  {
    icon: Github,
    label: "GitHub",
    value: "View my repositories",
    href: "https://github.com/HibbanRdn",
    color: "from-gray-700 to-gray-500", // GitHub medium gray gradient
  },
  {
    icon: Youtube,
    label: "YouTube",
    value: "Watch my tutorials and projects",
    href: "https://www.youtube.com/@Hibban_Rdn",
    color: "from-red-500 to-red-600", // YouTube red gradient
  },
];

  return (
    <section id="contact" className="py-20 px-4 bg-background relative">
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 relative"
        >
          {/* Decorative line behind header */}
          
          <h2 className="mb-4 relative bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent text-3xl md:text-4xl font-bold">
            Get In Touch
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
        </motion.div>

        {/* Contact Links */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {contactLinks.map((contact, index) => (
            <motion.div
              key={contact.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <a href={contact.href} target="_blank" rel="noopener noreferrer">
                <Card className="p-6 h-full bg-card/50 backdrop-blur-sm border border-primary/20 hover:border-primary/50 transition-all duration-300 shadow-lg hover:shadow-primary/20 hover:shadow-xl cursor-pointer group">
                  <motion.div
                    whileHover={{ scale: 1.15, y: -3 }}
                    transition={{ duration: 0.3 }}
                    className={`inline-flex p-3 bg-gradient-to-br ${contact.color} rounded-lg mb-4 shadow-lg`}
                    style={{ boxShadow: "0 0 15px rgba(0, 255, 255, 0.25)" }}
                  >
                    <contact.icon className="h-6 w-6 text-white" />
                  </motion.div>
                  <h4 className="mb-2 text-foreground group-hover:text-primary transition-colors">{contact.label}</h4>
                  <p className="text-muted-foreground">{contact.value}</p>
                </Card>
              </a>
            </motion.div>
          ))}
        </div>

        {/* Let's Work Together Card */}
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6, delay: 0.5 }}
  className="mt-12 text-center"
>
  <motion.div
    whileHover={{ y: -5, scale: 1.05 }}
    transition={{ duration: 0.3 }}
  >
    <Card className="p-8 max-w-2xl mx-auto bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20 
                     backdrop-blur-sm hover:border-primary/50 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer">
      <h3 className="mb-4 text-foreground">Let's Work Together</h3>
      <p className="text-muted-foreground mb-6">
        Whether you have a project in mind or just want to chat about technology and innovation,
        feel free to reach out through any of the channels above.
      </p>
      <Button
        onClick={() => window.location.href = "mailto:hibbanrdn@gmail.com"}
        size="lg"
        className="bg-gradient-to-r from-primary to-accent hover:from-primary/80 hover:to-accent/80 text-background 
                   shadow-md hover:shadow-lg transition-all duration-300"
      >
        <Mail className="mr-2 h-5 w-5" />
        Send an Email
      </Button>
    </Card>
  </motion.div>
</motion.div>
      </div>
    </section>
  );
}
