"use client";

import Link from "next/link";
import { Download } from "lucide-react";
import { TypeAnimation } from "react-type-animation";
import { Button } from "@/components/ui/button";
import { heroData } from "@/lib/data";

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

      <div className="container mx-auto max-w-5xl text-center relative z-10">
        <div className="space-y-8">
          {/* Name & Role */}
          <div className="space-y-4">
            {/* Name with Typewriter */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-foreground min-h-[1.2em]">
              <TypeAnimation
                sequence={[heroData.name]}
                wrapper="span"
                speed={50}
                cursor={false}
              />
            </h1>

            {/* Role with Rotating Typewriter */}
            <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium text-muted-foreground min-h-[1.2em]">
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
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
            <Button
              size="lg"
              className="w-full sm:w-auto"
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
            <Button
              size="lg"
              variant="outline"
              className="w-full sm:w-auto"
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
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="w-full sm:w-auto"
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
          </div>
        </div>
      </div>
    </section>
  );
}
