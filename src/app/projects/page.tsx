"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { ExternalLink, Github, Star, GitFork, ArrowLeft } from "lucide-react";
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
import { projectsData } from "@/constants/projects";
import {
  fadeInDown,
  fadeIn,
  scaleIn,
  staggerContainer,
  defaultViewport,
} from "@/lib/animations";

export default function ProjectsPage() {
  const [activeTechs, setActiveTechs] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState("");

  // Get all unique technologies
  const allTechnologies = useMemo(() => {
    const techs = new Set<string>();
    projectsData.forEach((project) => {
      project.technologies.forEach((tech) => techs.add(tech));
    });
    return Array.from(techs).sort();
  }, []);

  // Filter projects (no limit on this page)
  const filteredProjects = useMemo(() => {
    return projectsData.filter((project) => {
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
    <div className="min-h-screen">
      {/* Header */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="container mx-auto max-w-7xl">
          {/* Back Button */}
          <motion.div
            className="mb-8"
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            variants={fadeIn}
          >
            <Button asChild variant="ghost">
              <Link href="/#projects" className="flex items-center gap-2">
                <ArrowLeft className="w-4 h-4" />
                Kembali ke Beranda
              </Link>
            </Button>
          </motion.div>

          {/* Page Header */}
          <div className="text-center space-y-4 mb-12">
            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground"
              initial="hidden"
              whileInView="visible"
              viewport={defaultViewport}
              variants={fadeInDown}
            >
              Semua Proyek
            </motion.h1>
            <motion.p
              className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto"
              initial="hidden"
              whileInView="visible"
              viewport={defaultViewport}
              variants={fadeIn}
            >
              Koleksi lengkap pekerjaan dan proyek pribadi saya
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
          {filteredProjects.length > 0 ? (
            <motion.div
              key={`${searchQuery}-${activeTechs.join("-")}`}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              initial="hidden"
              whileInView="visible"
              viewport={defaultViewport}
              variants={staggerContainer}
            >
              {filteredProjects.map((project) => (
                <motion.div
                  key={`${project.slug}-${searchQuery}`}
                  variants={scaleIn}
                >
                  <Link href={`/projects/${project.slug}`} className="block h-full">
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

                    {/* Card Content */}
                    <CardHeader>
                      <CardTitle className="text-xl group-hover:text-primary transition-colors">
                        {project.title}
                      </CardTitle>
                      <CardDescription className="line-clamp-2">
                        {project.description}
                      </CardDescription>
                    </CardHeader>

                    <CardContent className="grow">
                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.slice(0, 4).map((tech, index) => (
                          <Badge key={index} variant="secondary">
                            {tech}
                          </Badge>
                        ))}
                        {project.technologies.length > 4 && (
                          <Badge variant="outline">
                            +{project.technologies.length - 4} lagi
                          </Badge>
                        )}
                      </div>

                      {/* GitHub Stats */}
                      {project.githubStats && (
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          {project.githubStats.stars !== undefined && (
                            <span className="flex items-center gap-1">
                              <Star className="w-4 h-4" />
                              {project.githubStats.stars}
                            </span>
                          )}
                          {project.githubStats.forks !== undefined && (
                            <span className="flex items-center gap-1">
                              <GitFork className="w-4 h-4" />
                              {project.githubStats.forks}
                            </span>
                          )}
                        </div>
                      )}
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
        </div>
      </section>
    </div>
  );
}

