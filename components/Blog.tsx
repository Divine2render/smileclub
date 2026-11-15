"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { collection, getDocs, query, where, type Timestamp } from "firebase/firestore";
import { db } from "@/lib/firebase";

type PublishedBlog = {
  id: string;
  slug?: string;
  title?: string;
  excerpt?: string;
  coverImage?: string;
  createdAt?: Timestamp;
};

export default function Blog() {
  const [posts, setPosts] = useState<PublishedBlog[]>([]);
  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState(false);

  useEffect(() => {
    async function loadPosts() {
      try {
        const result = await getDocs(
          query(collection(db, "blogs"), where("status", "==", "Published")),
        );
        const published = result.docs.map((post) => ({
          id: post.id,
          ...post.data(),
        })) as PublishedBlog[];
        published.sort(
          (a, b) =>
            (b.createdAt?.toMillis() ?? 0) - (a.createdAt?.toMillis() ?? 0),
        );
        setPosts(published);
      } catch {
        setLoadError(true);
      } finally {
        setLoading(false);
      }
    }
    void loadPosts();
  }, []);

  return (
    <section aria-labelledby="blog-title" className="band" id="blog">
      <div className="wrap">
        <h2 className="big" id="blog-title">
          Patient guides
        </h2>

        {posts.length > 0 && (
          <div className="blog-posts" aria-label="Latest articles">
            {posts.map((post) => (
              <article className="card" key={post.id}>
                {post.coverImage && (
                  <img
                    src={post.coverImage}
                    alt=""
                    loading="lazy"
                    style={{ width: "100%", maxHeight: 260, objectFit: "cover" }}
                  />
                )}
                <div className="blog-copy">
                  <p className="blog-label">From the Smile Club</p>
                  <h3>{post.title || "Untitled article"}</h3>
                  <p>{post.excerpt || "Read the latest from our team."}</p>
                  <Link className="more" href={`/blog/${encodeURIComponent(post.slug || post.id)}`}>
                    Read article
                  </Link>
                </div>
              </article>
            ))}
          </div>
        )}
        {loading && <p className="blog-status">Loading latest articles…</p>}
        {!loading && posts.length === 0 && !loadError && (
          <p className="blog-status">New articles from our team will appear here.</p>
        )}
        {loadError && (
          <p className="blog-status">Articles are temporarily unavailable. Please try again later.</p>
        )}

        <div className="blog-posts blog-guides">
          <article className="card" id="planning-your-first-visit">
            <div className="blog-copy">
              <p className="blog-label">Practice guide</p>
              <h3>Planning your first visit</h3>
              <p>
                Visiting The Smile Club for the first time? Here&rsquo;s where
                to find us and how to reach the team before you come in.
              </p>
              <details>
                <summary>Read the guide</summary>
                <p>
                  Find us at 11210 Steeplecrest Dr, Ste 130, Houston, TX 77065.
                  Use the directions link in the Visit section to plan your
                  journey.
                </p>
                <p>
                  If you have questions about scheduling or insurance, call the
                  office before your visit. The team can help you work out what
                  to bring.
                </p>
                <a className="more" href="#visit">
                  View hours and directions
                </a>
              </details>
            </div>
          </article>

          <article className="card" id="insurance-and-membership">
            <div className="blog-copy">
              <p className="blog-label">Insurance &amp; payment</p>
              <h3>Paying for your dental care</h3>
              <p>
                Whether you have dental insurance or not, there are ways to make
                your care affordable.
              </p>
              <details>
                <summary>Read the guide</summary>
                <p>
                  We work with most major dental insurance plans, including
                  Delta Dental, Aetna, Cigna, MetLife, Guardian and Humana.
                  Network participation can change, so check your coverage with
                  your insurance company before treatment.
                </p>
                <p>
                  If you don&rsquo;t have insurance, ask about the Smile Club
                  Membership, our in-house plan for routine care. For larger
                  treatment, CareCredit and Sunbit let you spread the cost into
                  monthly payments.
                </p>
                <a className="more" href="tel:+18329414010">
                  Call (832) 941-4010
                </a>
              </details>
            </div>
          </article>

          <article className="card" id="invisalign-or-braces">
            <div className="blog-copy">
              <p className="blog-label">Orthodontics</p>
              <h3>Invisalign or braces?</h3>
              <p>
                Both straighten teeth. The right choice depends on your teeth,
                your routine and your goals.
              </p>
              <details>
                <summary>Read the guide</summary>
                <p>
                  Invisalign uses a series of clear, removable aligners that you
                  wear most of the day and switch every few weeks. You take them
                  out to eat and to brush your teeth.
                </p>
                <p>
                  Traditional braces are fixed to the teeth and adjusted at
                  regular visits. They work well for a wide range of cases,
                  including more complex ones.
                </p>
                <p>
                  At a consultation, our orthodontist will look at your teeth
                  and talk you through which options suit you.
                </p>
                <a className="more" href="#visit">
                  Book a consultation
                </a>
              </details>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
