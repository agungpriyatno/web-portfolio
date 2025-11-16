"use client";

import { Briefcase, MapPin, Calendar } from "lucide-react";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { workExperienceData } from "@/constants/work-experience";
import {
  fadeInDown,
  fadeIn,
  fadeInLeft,
  scaleIn,
  staggerContainer,
  defaultViewport,
} from "@/lib/animations";

function formatDate(dateString: string | null) {
  if (!dateString) return "Sekarang";
  const date = new Date(dateString);
  return date.toLocaleDateString("id-ID", { year: "numeric", month: "short" });
}

export function ProfessionalJourneySection() {
  return (
    <section id="journey" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center space-y-4 mb-12">
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground"
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            variants={fadeInDown}
          >
            Perjalanan Profesional
          </motion.h2>
          <motion.p
            className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            variants={fadeIn}
          >
            Pengalaman kerja dan perkembangan karir saya
          </motion.p>
        </div>

        <div className="relative md:pl-32">
          {/* Timeline vertical line - centered on dot */}
          <div className="absolute top-[36px] bottom-0 w-[4px] bg-border left-[96px] hidden md:block rounded-full" />

          {/* Timeline items */}
          <motion.div
            className="space-y-8"
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            variants={staggerContainer}
          >
            {workExperienceData.map((experience, index) => (
              <motion.div
                key={experience.id}
                className="relative flex gap-4 md:gap-8 items-start"
                variants={fadeInLeft}
              >
                {/* Date label and timeline dot */}
                <div className="absolute -left-[120px] items-center gap-3 md:gap-4 pt-6 hidden md:flex">
                  {/* Date label - on the left */}
                  <div className="text-xs md:text-sm font-medium text-muted-foreground text-right">
                    <div className="whitespace-nowrap">
                      {formatDate(experience.startDate)}
                    </div>
                    <div className="whitespace-nowrap">
                      {formatDate(experience.endDate)}
                    </div>
                  </div>

                  {/* Dot */}
                  <motion.div
                    className="w-4 h-4 md:w-6 md:h-6 rounded-full bg-primary border-4 border-background shadow-lg z-10 shrink-0"
                    variants={scaleIn}
                  />
                </div>

                {/* Card content */}
                <div className="grow pb-2">
                  <Card className="hover:shadow-md transition-shadow duration-300">
                    <CardHeader>
                      <div className="flex items-start justify-between gap-4">
                        <div className="grow">
                          <CardTitle className="text-xl sm:text-2xl flex items-center gap-2">
                            <Briefcase className="w-5 h-5" />
                            {experience.role}
                          </CardTitle>
                          <CardDescription className="text-base sm:text-lg mt-1">
                            {experience.company}
                          </CardDescription>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mt-2">
                        {experience.location && (
                          <div className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            <span>{experience.location}</span>
                          </div>
                        )}
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">
                        {experience.description}
                      </p>
                      {experience.technologies &&
                        experience.technologies.length > 0 && (
                          <div className="flex flex-wrap gap-2">
                            {experience.technologies.map((tech, index) => (
                              <Badge key={index} variant="secondary">
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        )}
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
