import { Github, Linkedin, Instagram, Mail } from "lucide-react";
import { motion } from "motion/react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Achievements", href: "#achievements" },
    { name: "Certificates", href: "#certificates" },
    { name: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    { icon: Github, href: "https://github.com/HibbanRdn", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com/in/HibbanRdn", label: "LinkedIn" },
    { icon: Instagram, href: "https://instagram.com/hibban.rdn_", label: "Instagram" },
    { icon: Mail, href: "mailto:hibbanrdn@gmail.com", label: "Email" },
  ];

  return (
    <footer className="relative bg-gradient-to-t from-[#0f1729] to-[#0a0e27] py-12 px-4 overflow-hidden">
      {/* Animated Background Grid like Hero */}
      <div className="absolute inset-0
        bg-[linear-gradient(rgba(0,255,255,0.03)_1px,transparent_1px),
            linear-gradient(90deg,rgba(0,255,255,0.03)_1px,transparent_1px)]
        bg-[size:50px_50px]
        opacity-30
      " />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="mb-4 bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent">
              M. Hibban Ramadhan
            </h3>
            <p className="text-gray-400">
              Computer Science Student specializing in Artificial Intelligence,
              passionate about creating innovative solutions.
            </p>
          </div>

          <div>
            <h4 className="mb-4 text-cyan-300">Quick Links</h4>
            <nav className="space-y-2">
              {quickLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  className="block text-gray-400 hover:text-cyan-300 transition-colors"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  {link.name}
                </motion.a>
              ))}
            </nav>
          </div>

          <div>
            <h4 className="mb-4 text-cyan-300">Connect</h4>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-gradient-to-br from-cyan-500/10 to-green-500/10 border border-cyan-500/20 rounded-lg hover:border-cyan-400/50 transition-all"
                  aria-label={social.label}
                  whileHover={{ 
                    scale: 1.1, 
                    boxShadow: "0 0 20px rgba(0, 255, 255, 0.4)",
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon className="h-5 w-5 text-cyan-300" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-8 text-center text-gray-400">
          <p>© {currentYear} M. Hibban Ramadhan. All rights reserved.</p>
          <p className="mt-2 text-gray-500">Built with React & Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
}
