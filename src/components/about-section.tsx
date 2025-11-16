import Image from "next/image";
import { TrendingUp, Users, Briefcase, Code } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { aboutData } from "@/lib/data";

const statIcons = {
  0: TrendingUp,
  1: Briefcase,
  2: Users,
  3: Code,
};

export function AboutSection() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Column - Avatar & Skills */}
          <div className="space-y-8">
            {/* Avatar */}
            <div className="flex justify-center lg:justify-start">
              <div className="relative">
                {/* Gradient Ring */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/30 via-primary/20 to-transparent blur-2xl" />

                {/* Avatar Container */}
                <div className="relative w-64  h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden border-4 border-border shadow-2xl">
                  <Image
                    src={aboutData.avatar}
                    alt={aboutData.name}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </div>

            {/* Skills */}
            <div className="hidden lg:block">
              <h3 className="text-xl font-semibold text-foreground mb-4 text-center lg:text-left">
                Keahlian & Expertise
              </h3>
              <div className="flex flex-wrap gap-2">
                {aboutData.skills.map((skill) => (
                  <Badge
                    key={skill}
                    variant="secondary"
                    className="px-4 py-2 text-sm font-medium"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Bio & Statistics */}
          <div className="space-y-8">
            {/* Title & Bio */}
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 text-center lg:text-left">
                Tentang Saya
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed text-center lg:text-left">
                {aboutData.bio}
              </p>
            </div>

            {/* Statistics */}
            <div className="grid grid-cols-2 gap-4">
              {aboutData.stats.map((stat, index) => {
                const Icon = statIcons[index as keyof typeof statIcons] || Code;
                return (
                  <div
                    key={stat.label}
                    className="flex items-start gap-3 p-4 rounded-lg bg-muted/50 border border-border"
                  >
                    <div className="p-2 rounded-lg bg-primary/10 text-primary">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-2xl sm:text-3xl font-bold text-foreground">
                        {stat.value}
                      </p>
                      <p className="text-xs sm:text-sm text-muted-foreground">
                        {stat.label}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
