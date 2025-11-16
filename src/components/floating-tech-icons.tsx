"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Database,
  Box,
  Palette,
  FileCode,
  GitBranch,
  Container,
  Wrench,
} from "lucide-react";

const techIcons = [
  { Icon: Code2, position: { top: "10%", left: "5%" }, delay: 0 },
  { Icon: FileCode, position: { top: "20%", right: "8%" }, delay: 0.2 },
  { Icon: Database, position: { top: "60%", left: "8%" }, delay: 0.4 },
  { Icon: Box, position: { bottom: "15%", right: "10%" }, delay: 0.6 },
  { Icon: Palette, position: { top: "45%", left: "3%" }, delay: 0.8 },
  { Icon: GitBranch, position: { top: "75%", right: "5%" }, delay: 1 },
  { Icon: Container, position: { top: "35%", right: "12%" }, delay: 1.2 },
  { Icon: Wrench, position: { bottom: "25%", left: "10%" }, delay: 1.4 },
];

export function FloatingTechIcons() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none hidden lg:block">
      {techIcons.map(({ Icon, position, delay }, index) => (
        <motion.div
          key={index}
          className="absolute"
          style={position}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0.3, 0.6, 0.3],
            scale: [1, 1.2, 1],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 4,
            delay,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        >
          <div className="p-3 rounded-lg bg-primary/10 backdrop-blur-sm border border-primary/20">
            <Icon className="w-6 h-6 text-primary" />
          </div>
        </motion.div>
      ))}
    </div>
  );
}
