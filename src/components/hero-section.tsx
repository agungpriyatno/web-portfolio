"use client";

import Link from "next/link";
import { Suspense } from "react";
import { Download } from "lucide-react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Computer3D } from "@/components/computer-3d";
import { FloatingTechIcons } from "@/components/floating-tech-icons";
import { ScrollIndicator } from "@/components/scroll-indicator";
import { heroData } from "@/constants/hero";

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16 overflow-hidden"
    >
      {/* Gradient Glow Orbs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-green-500/30 dark:bg-green-600/20 rounded-full blur-[100px] animate-pulse-slow" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-teal-500/30 dark:bg-teal-600/20 rounded-full blur-[100px] animate-pulse-slow" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-emerald-500/20 dark:bg-emerald-600/10 rounded-full blur-[80px]" />

      {/* Floating Tech Icons */}
      <FloatingTechIcons />

      {/* 3D Computer Model - Absolute positioned on right side */}
      <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-[50vw] h-[800px] pointer-events-none z-0">
        <Suspense fallback={null}>
          <Computer3D />
        </Suspense>
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="lg:max-w-2xl">
          {/* Text Content */}
          <div className="space-y-8 text-center lg:text-left">
            {/* Name & Role */}
            <div className="space-y-4">
              {/* Name with Typewriter */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground min-h-[1.2em]">
                <TypeAnimation
                  sequence={[heroData.name]}
                  wrapper="span"
                  speed={50}
                  cursor={false}
                />
              </h1>

              {/* Role with Rotating Typewriter */}
              <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium text-muted-foreground min-h-[1.2em]">
                <TypeAnimation
                  sequence={[
                    "Fullstack Developer",
                    2000,
                    "Frontend Developer",
                    2000,
                    "Backend Developer",
                    2000,
                  ]}
                  wrapper="span"
                  speed={50}
                  deletionSpeed={50}
                  repeat={Infinity}
                />
              </div>

              {/* Description/Tagline */}
              <motion.p
                className="text-base sm:text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0 pt-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5, duration: 0.8 }}
              >
                Menciptakan pengalaman web yang indah dan fungsional dengan
                teknologi modern. Passion dalam membangun solusi yang scalable
                dan user-friendly.
              </motion.p>
            </div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2, duration: 0.8 }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto"
              >
                <Button
                  size="lg"
                  className="w-full"
                  onClick={() => {
                    const element = document.querySelector(
                      heroData.ctaButtons.primary.href
                    );
                    if (element) {
                      element.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                >
                  {heroData.ctaButtons.primary.label}
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto"
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full"
                  onClick={() => {
                    const element = document.querySelector(
                      heroData.ctaButtons.secondary.href
                    );
                    if (element) {
                      element.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                >
                  {heroData.ctaButtons.secondary.label}
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto"
              >
                <Button
                  asChild
                  size="lg"
                  variant="secondary"
                  className="w-full"
                >
                  <Link
                    href="/documents/agung-priyatno-cv.pdf"
                    download="Agung-Priyatno-CV.pdf"
                    className="flex items-center gap-2"
                  >
                    <Download className="w-4 h-4" />
                    Unduh CV
                  </Link>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <ScrollIndicator />
    </section>
  );
}
