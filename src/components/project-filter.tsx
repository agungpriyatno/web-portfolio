"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Search, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

interface ProjectFilterProps {
  technologies: string[];
  activeTechs: string[];
  searchQuery: string;
  onTechToggle: (tech: string) => void;
  onSearchChange: (query: string) => void;
  onClearFilters: () => void;
}

export function ProjectFilter({
  technologies,
  activeTechs,
  searchQuery,
  onTechToggle,
  onSearchChange,
  onClearFilters,
}: ProjectFilterProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const displayedTechs = isExpanded ? technologies : technologies.slice(0, 8);
  const hasActiveFilters = activeTechs.length > 0 || searchQuery.length > 0;

  return (
    <motion.div
      className="mb-12 space-y-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Search Bar */}
      <div className="relative max-w-md mx-auto">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
        <Input
          type="text"
          placeholder="Cari proyek..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          className="pl-10 pr-10"
        />
        {searchQuery && (
          <button
            onClick={() => onSearchChange("")}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        )}
      </div>

      {/* Technology Filters */}
      <div>
        <div className="flex flex-wrap justify-center gap-2 mb-4">
          {displayedTechs.map((tech) => {
            const isActive = activeTechs.includes(tech);
            return (
              <Badge
                key={tech}
                variant={isActive ? "default" : "outline"}
                className="cursor-pointer transition-all duration-300 hover:scale-105"
                onClick={() => onTechToggle(tech)}
              >
                {tech}
              </Badge>
            );
          })}
        </div>

        {/* Show More/Less Button */}
        {technologies.length > 8 && (
          <div className="text-center">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsExpanded(!isExpanded)}
            >
              {isExpanded
                ? "Tampilkan Lebih Sedikit"
                : `+${technologies.length - 8} Lainnya`}
            </Button>
          </div>
        )}
      </div>

      {/* Clear Filters Button */}
      {hasActiveFilters && (
        <div className="text-center">
          <Button
            variant="outline"
            size="sm"
            onClick={onClearFilters}
            className="gap-2"
          >
            <X className="w-4 h-4" />
            Hapus Semua Filter
          </Button>
        </div>
      )}
    </motion.div>
  );
}

