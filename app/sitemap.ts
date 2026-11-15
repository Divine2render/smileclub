import type { MetadataRoute } from "next";
import { connection } from "next/server";
import { collection, getDocs, query, where } from "firebase/firestore";
import { app } from "@/lib/firebase-app";
import { siteUrl } from "@/lib/site-url";
import { getFirestore } from "firebase/firestore";

const db = getFirestore(app);

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  await connection();

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: siteUrl,
      changeFrequency: "weekly",
      priority: 1,
    },
  ];

  try {
    const publishedBlogs = await getDocs(
      query(collection(db, "blogs"), where("status", "==", "Published")),
    );

    const blogRoutes: MetadataRoute.Sitemap = publishedBlogs.docs.map((post) => {
      const data = post.data();
      const modifiedAt = data.updatedAt?.toDate?.() ?? data.createdAt?.toDate?.();

      return {
        url: `${siteUrl}/blog/${encodeURIComponent(data.slug || post.id)}`,
        ...(modifiedAt instanceof Date ? { lastModified: modifiedAt } : {}),
        changeFrequency: "monthly",
        priority: 0.7,
      };
    });

    return [...staticRoutes, ...blogRoutes];
  } catch {
    // Keep the homepage sitemap available when Firestore is temporarily unavailable.
    return staticRoutes;
  }
}
