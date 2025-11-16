"use client";

import { notFound, useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Github, Star, GitFork } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { projectsData } from "@/constants/projects";
import {
  fadeInDown,
  fadeIn,
  fadeInUp,
  fadeInLeft,
  scaleIn,
  staggerContainer,
  defaultViewport,
} from "@/lib/animations";

export default function ProjectDetailPage() {
  const params = useParams();
  const slug = params?.slug as string;
  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="container mx-auto max-w-4xl">
        {/* Back Button */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Button asChild variant="ghost">
            <Link href="/projects" className="flex items-center gap-2">
              <ArrowLeft className="w-4 h-4" />
              Kembali ke Proyek
            </Link>
          </Button>
        </motion.div>

        {/* Project Header */}
        <motion.div
          className="space-y-4 mb-8"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.div
            className="flex items-start justify-between gap-4"
            variants={fadeInDown}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground">
              {project.title}
            </h1>
            {project.status && (
              <Badge
                variant={
                  project.status === "completed"
                    ? "default"
                    : project.status === "in-progress"
                    ? "secondary"
                    : "outline"
                }
                className="capitalize shrink-0"
              >
                {project.status === "completed"
                  ? "Selesai"
                  : project.status === "in-progress"
                  ? "Berlangsung"
                  : "Arsip"}
              </Badge>
            )}
          </motion.div>

          {/* GitHub Stats */}
          {project.githubStats && (
            <motion.div
              className="flex items-center gap-4 text-sm text-muted-foreground"
              variants={fadeIn}
            >
              {project.githubStats.stars !== undefined && (
                <span className="flex items-center gap-1">
                  <Star className="w-4 h-4" />
                  {project.githubStats.stars} stars
                </span>
              )}
              {project.githubStats.forks !== undefined && (
                <span className="flex items-center gap-1">
                  <GitFork className="w-4 h-4" />
                  {project.githubStats.forks} forks
                </span>
              )}
            </motion.div>
          )}
        </motion.div>

        {/* Main Image */}
        <motion.div
          className="relative w-full h-64 sm:h-96 rounded-lg overflow-hidden mb-8 bg-muted"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {project.image && (
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
              priority
            />
          )}
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          className="flex flex-wrap gap-4 mb-8"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          {project.links.demo && (
            <motion.div variants={scaleIn}>
              <Button asChild size="lg">
                <Link
                  href={project.links.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Lihat Demo
                </Link>
              </Button>
            </motion.div>
          )}
          {project.links.github && (
            <motion.div variants={scaleIn}>
              <Button asChild size="lg" variant="outline">
                <Link
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="w-4 h-4 mr-2" />
                  Lihat Kode
                </Link>
              </Button>
            </motion.div>
          )}
          {project.links.website && (
            <motion.div variants={scaleIn}>
              <Button asChild size="lg" variant="outline">
                <Link
                  href={project.links.website}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Kunjungi Website
                </Link>
              </Button>
            </motion.div>
          )}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Separator className="my-8" />
        </motion.div>

        {/* Description */}
        <motion.div
          className="mb-8"
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          variants={fadeInUp}
        >
          <h2 className="text-2xl font-semibold text-foreground mb-4">
            Deskripsi
          </h2>
          <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
            {project.description}
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          variants={fadeIn}
        >
          <Separator className="my-8" />
        </motion.div>

        {/* Technologies */}
        <motion.div
          className="mb-8"
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          variants={staggerContainer}
        >
          <motion.h2
            className="text-2xl font-semibold text-foreground mb-4"
            variants={fadeInLeft}
          >
            Teknologi yang Digunakan
          </motion.h2>
          <motion.div className="flex flex-wrap gap-2" variants={fadeIn}>
            {project.technologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                whileHover={{ scale: 1.1 }}
              >
                <Badge variant="secondary" className="text-sm px-3 py-1">
                  {tech}
                </Badge>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          variants={fadeIn}
        >
          <Separator className="my-8" />
        </motion.div>

        {/* Screenshots */}
        {project.screenshots && project.screenshots.length > 0 && (
          <motion.div
            className="mb-8"
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            variants={staggerContainer}
          >
            <motion.h2
              className="text-2xl font-semibold text-foreground mb-4"
              variants={fadeInLeft}
            >
              Screenshot
            </motion.h2>
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
              variants={fadeIn}
            >
              {project.screenshots.map((screenshot, index) => (
                <motion.div
                  key={index}
                  className="relative w-full h-48 rounded-lg overflow-hidden bg-muted cursor-pointer group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <Image
                    src={screenshot}
                    alt={`${project.title} screenshot ${index + 1}`}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
