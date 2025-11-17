import { ProjectDetailContent } from "@/components/project-detail-content";

interface ProjectDetailPageProps {
  params: Promise<{ slug: string }>;
}

export default async function ProjectDetailPage({
  params,
}: ProjectDetailPageProps) {
  const { slug } = await params;
  return <ProjectDetailContent slug={slug} />;
}
