"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  where,
  type Timestamp,
} from "firebase/firestore";
import { db } from "@/lib/firebase";

type BlogPost = {
  title?: string;
  excerpt?: string;
  content?: string;
  coverImage?: string;
  status?: string;
  createdAt?: Timestamp;
};

const allowedTags = new Set([
  "P",
  "H2",
  "H3",
  "H4",
  "STRONG",
  "B",
  "EM",
  "I",
  "U",
  "UL",
  "OL",
  "LI",
  "BR",
  "BLOCKQUOTE",
  "A",
]);
const blockedTags = new Set([
  "SCRIPT",
  "STYLE",
  "IFRAME",
  "OBJECT",
  "SVG",
  "MATH",
]);

function sanitizeArticle(html: string): string {
  const parsed = new DOMParser().parseFromString(html, "text/html");
  function copyNode(node: Node): Node | null {
    if (node.nodeType === Node.TEXT_NODE)
      return document.createTextNode(node.textContent || "");
    if (!(node instanceof HTMLElement)) return null;
    if (blockedTags.has(node.tagName)) return null;
    const children = Array.from(node.childNodes)
      .map(copyNode)
      .filter((child): child is Node => child !== null);
    if (!allowedTags.has(node.tagName)) {
      const fragment = document.createDocumentFragment();
      children.forEach((child) => fragment.appendChild(child));
      return fragment;
    }
    const safe = document.createElement(node.tagName.toLowerCase());
    children.forEach((child) => safe.appendChild(child));
    if (node.tagName === "A") {
      const href = node.getAttribute("href") || "";
      if (/^(https?:|mailto:|tel:)/i.test(href)) {
        safe.setAttribute("href", href);
        safe.setAttribute("rel", "noopener noreferrer");
      }
    }
    return safe;
  }
  const output = document.createElement("div");
  Array.from(parsed.body.childNodes)
    .map(copyNode)
    .forEach((node) => {
      if (node) output.appendChild(node);
    });
  return output.innerHTML;
}

export default function BlogArticle({ slug }: { slug: string }) {
  const [post, setPost] = useState<BlogPost | null>(null);
  const [safeContent, setSafeContent] = useState("");
  const [loading, setLoading] = useState(true);
  const [unavailable, setUnavailable] = useState(false);

  useEffect(() => {
    async function loadPost() {
      try {
        const matches = await getDocs(
          query(collection(db, "blogs"), where("slug", "==", slug)),
        );
        const matchingPost = matches.docs.find(
          (item) => item.data().status === "Published",
        );
        // Older posts may not have a slug field; their Firestore ID remains a fallback URL.
        const legacyPost = matchingPost
          ? null
          : await getDoc(doc(db, "blogs", slug));
        const result = matchingPost ?? legacyPost;
        if (!result?.exists() || result.data().status !== "Published") {
          setUnavailable(true);
          return;
        }
        const data = result.data() as BlogPost;
        setPost(data);
        setSafeContent(sanitizeArticle(data.content || ""));
      } catch {
        setUnavailable(true);
      } finally {
        setLoading(false);
      }
    }
    void loadPost();
  }, [slug]);

  return (
    <main className="min-h-screen bg-[#f7f8f4] px-5 py-8 text-[#263423] sm:px-8">
      <div className="mx-auto max-w-4xl">
        <header className="mb-12 flex items-center justify-between border-b border-[#e4e8df] pb-5">
          <Link href="/#top" className="text-lg font-bold">
            The Smile Club
          </Link>
          <Link
            href="/#blog"
            className="text-sm font-semibold text-[#596451] hover:text-[#e17c10]"
          >
            ← All patient guides
          </Link>
        </header>
        {loading ? (
          <p className="py-20 text-center text-[#687363]">Loading article…</p>
        ) : unavailable || !post ? (
          <section className="rounded-2xl border border-[#e5e9e1] bg-white px-6 py-16 text-center">
            <h1 className="text-3xl font-semibold">Article unavailable</h1>
            <p className="mt-3 text-[#687363]">
              This article may have been removed or is not published.
            </p>
            <Link
              href="/#blog"
              className="mt-6 inline-flex rounded-full bg-[#f28a1a] px-5 py-3 text-sm font-semibold"
            >
              Back to patient guides
            </Link>
          </section>
        ) : (
          <article className="overflow-hidden rounded-3xl border border-[#e5e9e1] bg-white shadow-sm">
            {post.coverImage && (
              <img
                src={post.coverImage}
                alt=""
                className="max-h-[440px] w-full object-cover"
              />
            )}
            <div className="px-6 py-9 sm:px-12 sm:py-12">
              <p className="text-sm font-bold uppercase tracking-[.16em] text-[#e17c10]">
                Patient guide
              </p>
              <h1 className="mt-3 text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
                {post.title || "Patient guide"}
              </h1>
              {post.createdAt?.toDate && (
                <p className="mt-4 text-sm text-[#879080]">
                  {post.createdAt.toDate().toLocaleDateString()}
                </p>
              )}
              {post.excerpt && (
                <p className="mt-7 border-l-2 border-[#f28a1a] pl-5 text-lg leading-8 text-[#596451]">
                  {post.excerpt}
                </p>
              )}
              <div
                className="article-content mt-8"
                dangerouslySetInnerHTML={{ __html: safeContent }}
              />
              <Link
                href="/#blog"
                className="mt-10 inline-flex rounded-full bg-[#f2f5ed] px-5 py-3 text-sm font-semibold hover:bg-[#e7ecdf]"
              >
                ← More patient guides
              </Link>
            </div>
          </article>
        )}
        <footer className="py-8 text-center text-sm text-[#879080]">
          The Smile Club Dentistry &amp; Orthodontics
        </footer>
      </div>
      <style jsx>{`
        .article-content {
          color: #485342;
          font-size: 1.05rem;
          line-height: 1.9;
          overflow-wrap: anywhere;
        }
        .article-content :global(p) {
          margin: 0 0 1.15rem;
        }
        .article-content :global(h2),
        .article-content :global(h3),
        .article-content :global(h4) {
          color: #263423;
          font-weight: 700;
          line-height: 1.3;
          margin: 2rem 0 0.75rem;
        }
        .article-content :global(h2) {
          font-size: 1.65rem;
        }
        .article-content :global(h3) {
          font-size: 1.35rem;
        }
        .article-content :global(ul),
        .article-content :global(ol) {
          margin: 1rem 0 1.25rem;
          padding-left: 1.5rem;
        }
        .article-content :global(ul) {
          list-style: disc;
        }
        .article-content :global(ol) {
          list-style: decimal;
        }
        .article-content :global(blockquote) {
          border-left: 3px solid #f28a1a;
          margin: 1.5rem 0;
          padding-left: 1rem;
          color: #596451;
        }
        .article-content :global(a) {
          color: #b85d00;
          text-decoration: underline;
        }
      `}</style>
    </main>
  );
}
