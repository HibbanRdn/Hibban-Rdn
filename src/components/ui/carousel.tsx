"use client";

import * as React from "react";
import { motion } from "motion/react";
import { cn } from "./utils";

type InfiniteCarouselProps = {
  items: {
    name: string;
    logo: string;
  }[];
  duration?: number; // durasi animasi
  className?: string;
};

export function InfiniteCarousel({
  items,
  duration = 40,
  className,
}: InfiniteCarouselProps) {
  // Gandakan array agar looping mulus
  const duplicatedItems = [...items, ...items, ...items];

  return (
    <div className={cn("relative overflow-hidden w-full", className)}>
      {/* fade kiri */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#0f1729] to-transparent z-10 pointer-events-none" />
      {/* fade kanan */}
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#0f1729] to-transparent z-10 pointer-events-none" />

      <motion.div
        className="flex gap-8 py-8"
        animate={{
          x: [0, -100 * items.length],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration,
            ease: "linear",
          },
        }}
      >
        {duplicatedItems.map((tech, index) => (
          <motion.div
            key={`${tech.name}-${index}`}
            className="flex-shrink-0 group"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            <div
              className="relative w-32 h-32 md:w-40 md:h-40 bg-gradient-to-br from-[#0f1729] to-[#1a1f3a] border border-cyan-500/20 rounded-2xl flex flex-col items-center justify-center gap-3 transition-all duration-300 group-hover:border-green-400/50 overflow-hidden"
              style={{
                boxShadow: "0 0 20px rgba(0, 255, 255, 0.1)",
              }}
            >
              {/* Logo & Nama */}
              <div className="relative z-10 flex flex-col items-center gap-3">
                <img
                  src={tech.logo}
                  alt={tech.name}
                  className="w-12 h-12 md:w-16 md:h-16 object-contain"
                />
                <p className="text-cyan-300 text-center px-2">{tech.name}</p>
              </div>

              {/* Glow overlay hover */}
              <motion.div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{
                  boxShadow:
                    "0 0 30px rgba(0, 255, 255, 0.4), inset 0 0 30px rgba(0, 255, 255, 0.1)",
                }}
              />
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
