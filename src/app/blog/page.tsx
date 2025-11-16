"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { Calendar, Clock, Eye, Star, ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BlogFilter } from "@/components/blog-filter";
import { blogPostsData } from "@/constants/blog";
import {
  fadeInDown,
  fadeIn,
  flipIn,
  staggerContainer,
  defaultViewport,
} from "@/lib/animations";

function formatDate(dateString: string) {
  const date = new Date(dateString);
  return date.toLocaleDateString("id-ID", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function formatViewCount(count: number): string {
  if (count >= 1000) {
    return `${(count / 1000).toFixed(1)}k`;
  }
  return count.toString();
}

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("Semua");

  // Get unique categories
  const categories = useMemo(() => {
    const cats = Array.from(
      new Set(blogPostsData.map((post) => post.category))
    );
    return ["Semua", ...cats];
  }, []);

  // Filter posts by category (no limit on this page)
  const filteredPosts = useMemo(() => {
    if (activeCategory === "Semua") {
      return blogPostsData;
    }
    return blogPostsData.filter((post) => post.category === activeCategory);
  }, [activeCategory]);

  // Get featured posts
  const featuredPosts = useMemo(
    () => filteredPosts.filter((post) => post.featured),
    [filteredPosts]
  );

  // Get regular posts
  const regularPosts = useMemo(
    () => filteredPosts.filter((post) => !post.featured),
    [filteredPosts]
  );

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
              <Link href="/#blog" className="flex items-center gap-2">
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
              Blog & Artikel
            </motion.h1>
            <motion.p
              className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto"
              initial="hidden"
              whileInView="visible"
              viewport={defaultViewport}
              variants={fadeIn}
            >
              Koleksi lengkap pemikiran, tutorial, dan wawasan tentang
              pengembangan web
            </motion.p>
          </div>

          {/* Category Filter */}
          <BlogFilter
            categories={categories}
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
          />

          {/* Featured Posts */}
          {featuredPosts.length > 0 && (
            <div className="mb-16">
              <motion.h3
                className="text-2xl font-semibold text-foreground mb-6 flex items-center gap-2"
                initial="hidden"
                whileInView="visible"
                viewport={defaultViewport}
                variants={fadeInDown}
              >
                <Star className="w-6 h-6 text-primary fill-current" />
                Artikel Unggulan
              </motion.h3>
              <motion.div
                key={`featured-${activeCategory}`}
                className="grid grid-cols-1 lg:grid-cols-2 gap-6"
                initial="hidden"
                whileInView="visible"
                viewport={defaultViewport}
                variants={staggerContainer}
              >
                {featuredPosts.map((post) => (
                  <motion.div
                    key={`${post.id}-${activeCategory}`}
                    variants={flipIn}
                  >
                    <Link href={`/blog/${post.slug}`} className="block group">
                      <Card className="h-full hover:shadow-xl transition-all duration-300 group-hover:scale-[1.02] border-2 border-primary/20 bg-linear-to-br from-primary/5 to-primary/10">
                        <CardHeader>
                          <div className="flex items-start justify-between gap-4 mb-2">
                            <Badge className="bg-primary text-primary-foreground">
                              {post.category}
                            </Badge>
                            {post.viewCount && (
                              <span className="flex items-center gap-1 text-sm text-muted-foreground">
                                <Eye className="w-4 h-4" />
                                {formatViewCount(post.viewCount)}
                              </span>
                            )}
                          </div>
                          <CardTitle className="text-2xl group-hover:text-primary transition-colors">
                            {post.title}
                          </CardTitle>
                          <CardDescription className="flex flex-wrap gap-3 text-sm mt-2">
                            <span className="flex items-center gap-1">
                              <Calendar className="w-4 h-4" />
                              {formatDate(post.date)}
                            </span>
                            {post.readTime && (
                              <span className="flex items-center gap-1">
                                <Clock className="w-4 h-4" />
                                {post.readTime}
                              </span>
                            )}
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <p className="text-muted-foreground mb-4">
                            {post.excerpt}
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {post.tags.map((tag, index) => (
                              <Badge key={index} variant="outline">
                                {tag}
                              </Badge>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          )}

          {/* Regular Posts */}
          {regularPosts.length > 0 && (
            <div>
              {featuredPosts.length > 0 && (
                <motion.h3
                  className="text-2xl font-semibold text-foreground mb-6"
                  initial="hidden"
                  whileInView="visible"
                  viewport={defaultViewport}
                  variants={fadeInDown}
                >
                  Artikel Lainnya
                </motion.h3>
              )}
              <motion.div
                key={`regular-${activeCategory}`}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                initial="hidden"
                whileInView="visible"
                viewport={defaultViewport}
                variants={staggerContainer}
              >
                {regularPosts.map((post) => (
                  <motion.div
                    key={`${post.id}-${activeCategory}`}
                    variants={flipIn}
                  >
                    <Link href={`/blog/${post.slug}`} className="block group">
                      <Card className="h-full hover:shadow-lg transition-all duration-300 group-hover:scale-[1.02]">
                        <CardHeader>
                          <div className="flex items-start justify-between gap-4 mb-2">
                            <Badge variant="secondary">{post.category}</Badge>
                            {post.viewCount && (
                              <span className="flex items-center gap-1 text-sm text-muted-foreground">
                                <Eye className="w-4 h-4" />
                                {formatViewCount(post.viewCount)}
                              </span>
                            )}
                          </div>
                          <CardTitle className="text-xl group-hover:text-primary transition-colors">
                            {post.title}
                          </CardTitle>
                          <CardDescription className="flex flex-wrap gap-3 text-sm mt-2">
                            <span className="flex items-center gap-1">
                              <Calendar className="w-4 h-4" />
                              {formatDate(post.date)}
                            </span>
                            {post.readTime && (
                              <span className="flex items-center gap-1">
                                <Clock className="w-4 h-4" />
                                {post.readTime}
                              </span>
                            )}
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <p className="text-muted-foreground mb-4">
                            {post.excerpt}
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {post.tags.map((tag, index) => (
                              <Badge key={index} variant="outline">
                                {tag}
                              </Badge>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          )}

          {/* No posts message */}
          {filteredPosts.length === 0 && (
            <motion.div
              className="text-center py-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <p className="text-muted-foreground">
                Tidak ada artikel dalam kategori ini.
              </p>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
}
