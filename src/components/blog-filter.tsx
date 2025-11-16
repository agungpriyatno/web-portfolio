"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

interface BlogFilterProps {
  categories: string[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

export function BlogFilter({
  categories,
  activeCategory,
  onCategoryChange,
}: BlogFilterProps) {
  return (
    <motion.div
      className="flex flex-wrap justify-center gap-3 mb-12"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {categories.map((category) => (
        <Button
          key={category}
          variant={activeCategory === category ? "default" : "outline"}
          onClick={() => onCategoryChange(category)}
          className="transition-all duration-300"
        >
          {category}
        </Button>
      ))}
    </motion.div>
  );
}

