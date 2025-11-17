"use client";

import { TECH_STACKS } from "@/constants/tech-stack";
import {
  defaultViewport,
  fadeIn,
  fadeInDown,
  scaleIn,
  staggerContainer,
} from "@/lib/animations";
import { motion } from "framer-motion";
import Image from "next/image";
import { useMemo } from "react";

export function TechStackSection() {
  const techStacks = useMemo(() => {
    return TECH_STACKS;
  }, []);

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
          {techStacks.map((tech) => {
            return (
              <motion.div
                key={tech.id}
                variants={scaleIn}
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="flex flex-col items-center justify-center p-4 rounded-lg bg-background border border-border hover:shadow-lg hover:border-primary/50 transition-all duration-300 cursor-pointer group">
                  <div className="relative w-10 h-10 sm:w-12 sm:h-12 mb-3 group-hover:scale-110 transition-transform">
                    <Image
                      src={tech.icon as string}
                      alt={tech.name}
                      fill
                      className="object-contain grayscale group-hover:grayscale-0"
                      unoptimized
                    />
                  </div>
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
