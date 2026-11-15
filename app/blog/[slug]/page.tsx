import BlogArticle from "@/components/BlogArticle";

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return <BlogArticle slug={slug} />;
}
