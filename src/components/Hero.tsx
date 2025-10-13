import { motion } from "motion/react";
import { Button } from "./ui/button";
import { ArrowRight, Download } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Hero() {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-background px-4 py-20 relative overflow-hidden">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
      
      <div className="max-w-5xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, type: "spring" }}
          className="mb-8"
        >
          {/* Profile Photo with Glowing Effect */}
          <div className="relative inline-block">
            <motion.div
              animate={{
                boxShadow: [
                  "0 0 20px rgba(0, 255, 255, 0.3), 0 0 40px rgba(57, 255, 20, 0.2)",
                  "0 0 40px rgba(0, 255, 255, 0.5), 0 0 80px rgba(57, 255, 20, 0.3)",
                  "0 0 20px rgba(0, 255, 255, 0.3), 0 0 40px rgba(57, 255, 20, 0.2)",
                ],
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-primary/50 relative bg-gradient-to-br from-primary/20 to-accent/20 backdrop-blur-sm"
              style={{
                boxShadow: "0 0 20px rgba(0, 255, 255, 0.3), 0 0 40px rgba(57, 255, 20, 0.2), inset 0 0 20px rgba(0, 255, 255, 0.1)",
              }}
            >
              <ImageWithFallback
                src="/images/hibban.jpg"
                alt="M. Hibban Ramadhan"
                className="w-full h-full object-cover"
              />
              {/* Neumorphism overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-primary/10" />
            </motion.div>
            
            {/* Rotating ring effect */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 w-40 h-40 md:w-48 md:h-48 rounded-full border-2 border-transparent border-t-primary border-r-accent"
              style={{ filter: "blur(1px)" }}
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mb-4"
          >
            <span className="inline-block px-4 py-2 bg-gradient-to-r from-primary/20 to-accent/20 text-primary border border-primary/30 rounded-full mb-4 backdrop-blur-sm">
              M. Hibban Ramadhan
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-4 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]"
          >
            Informatics Engineering
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mb-8 text-muted-foreground max-w-2xl mx-auto"
          >
            5th Semester CS Student @ Universitas Lampung | AI Enthusiast | Building the Future with Machine Learning & IoT
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex gap-4 justify-center flex-wrap"
          >
            <Button
              onClick={scrollToContact}
              size="lg"
              className="bg-gradient-to-r from-primary to-accent hover:from-primary/80 hover:to-accent/80 text-background shadow-lg shadow-primary/30 hover:shadow-primary/50 transition-all duration-300"
            >
              Get In Touch <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
              variant="outline"
              size="lg"
              className="border-primary/50 text-primary hover:bg-primary/10 hover:border-primary transition-all duration-300"
            >
              View Projects
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="mt-16 flex justify-center gap-6 flex-wrap"
        >
          {[
            { name: "AI", glow: "primary" },
            { name: "Machine Learning", glow: "accent" },
            { name: "IoT", glow: "primary" },
            { name: "Data Mining", glow: "accent" },
          ].map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.9 + index * 0.1 }}
              whileHover={{ 
                scale: 1.05, 
                y: -3,
                boxShadow: tech.glow === "primary" 
                  ? "0 0 25px rgba(0, 255, 255, 0.4)" 
                  : "0 0 25px rgba(57, 255, 20, 0.4)",
              }}
              className={`px-4 py-2 bg-card/50 backdrop-blur-sm rounded-lg border ${
                tech.glow === "primary" ? "border-primary/30" : "border-accent/30"
              } hover:border-${tech.glow} transition-all duration-300 cursor-default`}
              style={{
                boxShadow: tech.glow === "primary" 
                  ? "0 0 10px rgba(0, 255, 255, 0.1)" 
                  : "0 0 10px rgba(57, 255, 20, 0.1)",
              }}
            >
              <span className="text-foreground/90">{tech.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
