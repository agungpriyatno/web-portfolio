"use client";

import { motion } from "framer-motion";
import { techStackData } from "@/constants/tech-stack";
import {
  fadeInDown,
  fadeIn,
  scaleIn,
  staggerContainer,
  defaultViewport,
} from "@/lib/animations";

export function TechStackSection() {
  return (
    <section id="tech-stack" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-12">
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground"
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            variants={fadeInDown}
          >
            Tech Stack
          </motion.h2>
          <motion.p
            className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            variants={fadeIn}
          >
            Teknologi dan tools yang saya gunakan untuk membangun aplikasi
            modern
          </motion.p>
        </div>

        {/* Tech Grid - Simple & Clean */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4"
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          variants={staggerContainer}
        >
          {techStackData.map((tech) => {
            const Icon = tech.icon;
            return (
              <motion.div
                key={tech.id}
                variants={scaleIn}
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="flex flex-col items-center justify-center p-4 rounded-lg bg-background border border-border hover:shadow-lg hover:border-primary/50 transition-all duration-300 cursor-pointer group">
                  <Icon className="w-10 h-10 sm:w-12 sm:h-12 text-foreground/80 group-hover:text-primary transition-colors mb-3" />
                  <p className="text-sm font-medium text-center text-foreground group-hover:text-primary transition-colors">
                    {tech.name}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
