"use client";

import {
  Code2,
  Database,
  Wrench,
  Box,
  Palette,
  FileCode,
  GitBranch,
  Container,
} from "lucide-react";
import { motion } from "framer-motion";
import { techStackData } from "@/lib/data";
import { fadeInUp, defaultViewport } from "@/lib/animations";

const iconMap: Record<string, React.ElementType> = {
  react: Code2,
  next: FileCode,
  typescript: Code2,
  nodejs: Box,
  tailwind: Palette,
  database: Database,
  git: GitBranch,
  docker: Container,
};

export function TechStackSection() {
  // Duplicate the array for seamless infinite loop
  const duplicatedTechStack = [...techStackData, ...techStackData];

  return (
    <section
      id="tech-stack"
      className="py-8 px-4 sm:px-6 lg:px-8 bg-muted/30 overflow-hidden"
    >
      <div className="relative">
        <motion.div
          className="flex gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          variants={fadeInUp}
          animate={{
            x: [0, "-50%"],
          }}
          transition={{
            x: {
              duration: 35,
              ease: "linear",
              repeat: Infinity,
            },
            opacity: { duration: 0.6 },
            y: { duration: 0.6 },
          }}
        >
          {duplicatedTechStack.map((tech, index) => {
            const Icon = tech.icon || Wrench;
            return (
              <div
                key={`${tech.id}-${index}`}
                className="flex items-center gap-3 px-6 py-4 rounded-lg bg-background border border-border hover:shadow-md transition-all duration-300 hover:scale-105 whitespace-nowrap shrink-0"
              >
                <Icon className="w-8 h-8 text-foreground/80" />
                <p className="text-base font-medium">{tech.name}</p>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
