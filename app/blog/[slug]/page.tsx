import { Suspense } from "react";
import BlogArticle from "@/components/BlogArticle";

async function BlogPostContent({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return <BlogArticle slug={slug} />;
}

export default function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  return (
    <Suspense
      fallback={
        <main className="min-h-screen bg-[#f7f8f4] px-5 py-20 text-center text-[#687363]">
          Loading article…
        </main>
      }
    >
      <BlogPostContent params={params} />
    </Suspense>
  );
}
