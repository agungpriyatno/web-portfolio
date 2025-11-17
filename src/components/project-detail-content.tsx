"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { PROJECTS } from "@/constants/projects";
import { fadeInDown, scaleIn, staggerContainer } from "@/lib/animations";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  ExternalLink,
  GitFork,
  Github,
  Star,
  X,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

interface ProjectDetailContentProps {
  slug: string;
}

export function ProjectDetailContent({ slug }: ProjectDetailContentProps) {
  const project = PROJECTS.find((p) => p.slug === slug);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

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
            <Link href="/#projects" className="flex items-center gap-2">
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
              className="object-contain"
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
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <h2 className="text-2xl font-semibold text-foreground mb-4">
            Deskripsi
          </h2>
          <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
            {project.description}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Separator className="my-8" />
        </motion.div>

        {/* Technologies */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          <h2 className="text-2xl font-semibold text-foreground mb-4">
            Teknologi yang Digunakan
          </h2>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.8 + index * 0.05 }}
                whileHover={{ scale: 1.1 }}
              >
                <Badge variant="secondary" className="text-sm px-3 py-1">
                  {tech}
                </Badge>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.5, delay: 0.9 }}
        >
          <Separator className="my-8" />
        </motion.div>

        {/* Screenshots */}
        {project.screenshots && project.screenshots.length > 0 && (
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.0 }}
          >
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              Screenshot
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {project.screenshots.map((screenshot, index) => (
                <motion.div
                  key={index}
                  className="relative w-full h-48 rounded-lg overflow-hidden bg-muted cursor-pointer group"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 1.1 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  onClick={() => setSelectedImage(screenshot)}
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
            </div>
          </motion.div>
        )}
      </div>

      {/* Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            {/* Close Button */}
            <motion.button
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              onClick={() => setSelectedImage(null)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <X className="w-6 h-6" />
            </motion.button>

            {/* Image Container */}
            <motion.div
              className="relative w-full max-w-6xl max-h-[90vh] aspect-video"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selectedImage}
                alt="Screenshot preview"
                fill
                className="object-contain"
                quality={100}
              />
            </motion.div>

            {/* Click anywhere instruction */}
            <motion.p
              className="absolute bottom-8 text-white/70 text-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ delay: 0.2 }}
            >
              Klik di mana saja untuk menutup
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
