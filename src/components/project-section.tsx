"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { ExternalLink, Github, Star, GitFork } from "lucide-react";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ProjectFilter } from "@/components/project-filter";
import { PROJECTS } from "@/constants/projects";
import {
  fadeInDown,
  fadeIn,
  scaleIn,
  staggerContainer,
  defaultViewport,
} from "@/lib/animations";

export function ProjectSection() {
  const [activeTechs, setActiveTechs] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState("");

  // Get all unique technologies
  const allTechnologies = useMemo(() => {
    const techs = new Set<string>();
    PROJECTS.forEach((project) => {
      project.technologies.forEach((tech) => techs.add(tech));
    });
    return Array.from(techs).sort();
  }, []);

  // Filter projects
  const filteredProjects = useMemo(() => {
    return PROJECTS.filter((project) => {
      // Filter by search query
      const matchesSearch =
        searchQuery === "" ||
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase());

      // Filter by technologies
      const matchesTech =
        activeTechs.length === 0 ||
        activeTechs.some((tech) => project.technologies.includes(tech));

      return matchesSearch && matchesTech;
    });
  }, [searchQuery, activeTechs]);

  // Limit to 6 projects for display on homepage
  const displayedProjects = useMemo(() => {
    return filteredProjects.slice(0, 6);
  }, [filteredProjects]);

  const handleTechToggle = (tech: string) => {
    setActiveTechs((prev) =>
      prev.includes(tech) ? prev.filter((t) => t !== tech) : [...prev, tech]
    );
  };

  const handleClearFilters = () => {
    setActiveTechs([]);
    setSearchQuery("");
  };

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
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
            Proyek
          </motion.h2>
          <motion.p
            className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            variants={fadeIn}
          >
            Pilihan pekerjaan terbaru dan proyek pribadi saya
          </motion.p>
        </div>

        {/* Filters */}
        <ProjectFilter
          technologies={allTechnologies}
          activeTechs={activeTechs}
          searchQuery={searchQuery}
          onTechToggle={handleTechToggle}
          onSearchChange={setSearchQuery}
          onClearFilters={handleClearFilters}
        />

        {/* Projects Grid */}
        {displayedProjects.length > 0 ? (
          <motion.div
            key={`${searchQuery}-${activeTechs.join("-")}`}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            variants={staggerContainer}
          >
            {displayedProjects.map((project) => (
              <motion.div
                key={`${project.slug}-${searchQuery}`}
                variants={scaleIn}
              >
                <Link
                  href={`/projects/${project.slug}`}
                  className="block h-full"
                >
                  <Card className="flex flex-col h-full overflow-hidden hover:shadow-xl transition-all duration-300 group cursor-pointer">
                    {/* Project Image */}
                    <div className="relative h-48 w-full bg-muted overflow-hidden">
                      {project.image && (
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                      )}
                      {/* Status Badge */}
                      {project.status && (
                        <div className="absolute top-3 right-3">
                          <Badge
                            variant={
                              project.status === "completed"
                                ? "default"
                                : project.status === "in-progress"
                                ? "secondary"
                                : "outline"
                            }
                            className="capitalize"
                          >
                            {project.status === "completed"
                              ? "Selesai"
                              : project.status === "in-progress"
                              ? "Berlangsung"
                              : "Arsip"}
                          </Badge>
                        </div>
                      )}
                    </div>

                    <CardHeader>
                      <CardTitle className="text-xl group-hover:text-primary transition-colors">
                        {project.title}
                      </CardTitle>
                      <CardDescription className="line-clamp-2">
                        {project.description}
                      </CardDescription>
                    </CardHeader>

                    <CardContent className="grow">
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.slice(0, 4).map((tech, index) => (
                          <Badge key={index} variant="secondary">
                            {tech}
                          </Badge>
                        ))}
                        {project.technologies.length > 4 && (
                          <Badge variant="outline">
                            +{project.technologies.length - 4}
                          </Badge>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <motion.div
            className="text-center py-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <p className="text-muted-foreground">
              Tidak ada proyek yang cocok dengan filter Anda.
            </p>
          </motion.div>
        )}

        {/* More Projects Button */}
        <motion.div
          className="flex justify-center mt-12"
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          variants={fadeIn}
        >
          <Button asChild size="lg" variant="outline">
            <Link href="/projects">Lihat Semua Proyek</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
