"use client";

import { motion } from "framer-motion";
import { TechStack } from "@/types";
import { SkillLevelIndicator } from "@/components/skill-level-indicator";
import { Calendar, FolderKanban } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface TechStackCardProps {
  tech: TechStack;
}

const levelColors = {
  expert: "border-green-500/50 bg-green-500/5 hover:bg-green-500/10",
  advanced: "border-blue-500/50 bg-blue-500/5 hover:bg-blue-500/10",
  intermediate: "border-yellow-500/50 bg-yellow-500/5 hover:bg-yellow-500/10",
};

export function TechStackCard({ tech }: TechStackCardProps) {
  const Icon = tech.icon;

  return (
    <TooltipProvider>
      <Tooltip delayDuration={200}>
        <TooltipTrigger asChild>
          <motion.div
            className={`relative p-6 rounded-xl border-2 transition-all duration-300 cursor-pointer group ${
              levelColors[tech.level]
            }`}
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.98 }}
          >
            {/* Icon */}
            <div className="flex items-center justify-center mb-4">
              <div className="p-4 rounded-full bg-background/50 group-hover:bg-background transition-colors">
                <Icon className="w-8 h-8 text-foreground" />
              </div>
            </div>

            {/* Name */}
            <h3 className="text-center font-semibold text-foreground mb-3">
              {tech.name}
            </h3>

            {/* Skill Level */}
            <div className="flex justify-center mb-3">
              <SkillLevelIndicator level={tech.level} showLabel={false} />
            </div>

            {/* Quick Stats */}
            <div className="flex items-center justify-center gap-4 text-xs text-muted-foreground">
              <div className="flex items-center gap-1">
                <Calendar className="w-3 h-3" />
                <span>{tech.yearsOfExperience}y</span>
              </div>
              <div className="flex items-center gap-1">
                <FolderKanban className="w-3 h-3" />
                <span>{tech.projectCount}</span>
              </div>
            </div>
          </motion.div>
        </TooltipTrigger>
        <TooltipContent side="top" className="max-w-xs p-4">
          <div className="space-y-2">
            <div className="flex items-center justify-between gap-4">
              <h4 className="font-semibold">{tech.name}</h4>
              <SkillLevelIndicator level={tech.level} showLabel={true} />
            </div>
            {tech.description && (
              <p className="text-sm text-muted-foreground">{tech.description}</p>
            )}
            <div className="flex gap-4 text-sm pt-2 border-t">
              <div>
                <span className="text-muted-foreground">Pengalaman:</span>
                <span className="ml-1 font-medium">
                  {tech.yearsOfExperience} tahun
                </span>
              </div>
              <div>
                <span className="text-muted-foreground">Proyek:</span>
                <span className="ml-1 font-medium">{tech.projectCount}</span>
              </div>
            </div>
          </div>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}

