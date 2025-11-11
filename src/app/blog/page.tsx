"use client";

import { useState, useEffect, useMemo } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Image from "next/image";
import Link from "next/link";
import { FiClock, FiUser, FiChevronRight } from "react-icons/fi";

const rawPosts = [
  {
    id: 1,
    title: "How to Streamline Your Business Payroll in 2025",
    excerpt:
      "Discover the latest strategies and tools for automating payroll management and ensuring compliance across multiple regions.",
    author: "Sarah Johnson",
    date: "January 15, 2025",
    readTime: "5 min read",
    category: "Payroll",
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800&q=80",
    slug: "streamline-business-payroll-2025",
  },
  {
    id: 2,
    title: "Understanding Budget Management for Growing Businesses",
    excerpt:
      "Learn how effective budget planning can help your business scale while maintaining financial control and transparency.",
    author: "Michael Chen",
    date: "January 12, 2025",
    readTime: "7 min read",
    category: "Budget",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80",
    slug: "budget-management-growing-businesses",
  },
  {
    id: 3,
    title: "The Future of Cross-Border Payments in Africa",
    excerpt:
      "Exploring how technology is revolutionizing international transactions and what it means for African businesses.",
    author: "Amara Okonkwo",
    date: "January 10, 2025",
    readTime: "6 min read",
    category: "Finance",
    image:
      "https://images.unsplash.com/photo-1579621970795-87facc2f976d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=870",
    slug: "future-cross-border-payments-africa",
  },
  {
    id: 4,
    title: "5 Common Invoicing Mistakes and How to Avoid Them",
    excerpt:
      "Improve your cash flow by eliminating these frequent invoicing errors that cost businesses time and money.",
    author: "David Oladele",
    date: "January 8, 2025",
    readTime: "4 min read",
    category: "Invoicing",
    image:
      "https://images.unsplash.com/photo-1556155092-490a1ba16284?auto=format&fit=crop&w=800&q=80",
    slug: "common-invoicing-mistakes",
  },
  {
    id: 5,
    title: "Building a Remote Team: Financial Management Tips",
    excerpt:
      "Essential strategies for managing finances when your team is distributed across different countries and time zones.",
    author: "Grace Adeyemi",
    date: "January 5, 2025",
    readTime: "8 min read",
    category: "Team Management",
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
    slug: "remote-team-financial-management",
  },
  {
    id: 6,
    title: "Expense Tracking Best Practices for SMEs",
    excerpt:
      "A comprehensive guide to implementing effective expense tracking systems that save time and reduce errors.",
    author: "John Mensah",
    date: "January 3, 2025",
    readTime: "5 min read",
    category: "Expense",
    image:
      "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=800&q=80",
    slug: "expense-tracking-best-practices",
  },
];

const categories = [
  "All",
  "Payroll",
  "Budget",
  "Finance",
  "Invoicing",
  "Team Management",
  "Expense",
];

export default function BlogPage() {
  const [selectedCat, setSelectedCat] = useState("All");
  const [visibleIds, setVisibleIds] = useState<Set<string>>(new Set());

  // Filter posts
  const filteredPosts = useMemo(() => {
    if (selectedCat === "All") return rawPosts;
    return rawPosts.filter((p) => p.category === selectedCat);
  }, [selectedCat]);

  // Only show featured when "All" is selected
  const featured = selectedCat === "All" ? filteredPosts[0] : null;
  const displayPosts = selectedCat === "All" ? filteredPosts.slice(1) : filteredPosts;

  // Scroll animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = (entry.target as HTMLElement).dataset.id;
            if (id) setVisibleIds((s) => new Set(s).add(id));
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -80px 0px" }
    );

    document.querySelectorAll("[data-animate]").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [filteredPosts]);

  return (
    <>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            headline: "Finosell Insights & Resources",
            description: "Stay updated with financial management tips.",
            publisher: { "@type": "Organization", name: "Finosell" },
            blogPost: rawPosts.map((p) => ({
              "@type": "BlogPosting",
              headline: p.title,
              description: p.excerpt,
              author: { "@type": "Person", name: p.author },
              datePublished: p.date,
              image: p.image,
              url: `https://finosell.com/blog/${p.slug}`, 
            })),
          }),
        }}
      />

      <div className="bg-white font-sans text-gray-800 overflow-x-hidden">
        <Header />

        {/* HERO */}
        <section
          className="container mx-auto flex flex-col items-center text-center px-4 py-24 lg:py-32"
          data-animate
          data-id="hero"
        >
          <h1
            className={`text-4xl md:text-5xl lg:text-6xl font-bold text-[#273B4A] max-w-4xl leading-tight transition-all duration-1000 ${
              visibleIds.has("hero")
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-12"
            }`}
          >
            Insights &amp; Resources
          </h1>
          <p
            className={`mt-6 text-lg text-[#8C8C8C] max-w-2xl transition-all duration-1000 delay-200 ${
              visibleIds.has("hero")
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-12"
            }`}
          >
            Stay updated with the latest trends, tips, and best practices in
            financial management for growing businesses.
          </p>
        </section>

        {/* FEATURED ARTICLE (Only when "All" is selected) */}
        {featured && (
          <section
            className="bg-gradient-to-br from-[#273B4A] via-[#1e3240] to-[#273B4A] py-20 lg:py-28"
            data-animate
            data-id="featured"
          >
            <div className="container mx-auto px-4 lg:px-12">
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                    Featured Article
                  </h2>
                  <div className="w-20 h-1 bg-[#DAB22F] mx-auto" />
                </div>

                <Link href={`/blog/${featured.slug}`}>
                  <article className="bg-white/10 backdrop-blur-sm rounded-3xl overflow-hidden border border-white/20 shadow-2xl hover:bg-white/15 transition-all duration-300 cursor-pointer group">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                      <div className="relative h-64 lg:h-auto overflow-hidden">
                        <Image
                          src={featured.image}
                          alt={featured.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                          priority
                          unoptimized
                          placeholder="blur"
                          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8/5+pPwAEdQJ2fQGYmQAAAABJRU5ErkJggg=="
                        />
                      </div>

                      <div className="p-8 lg:p-12 flex flex-col justify-center">
                        <div className="flex items-center gap-3 mb-4">
                          <span className="px-3 py-1 bg-[#DAB22F] text-white text-xs font-semibold rounded-full">
                            {featured.category}
                          </span>
                          <span className="text-white/70 text-sm flex items-center gap-1">
                            <FiClock className="w-4 h-4" />
                            {featured.readTime}
                          </span>
                        </div>

                        <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4 group-hover:text-[#DAB22F] transition-colors">
                          {featured.title}
                        </h3>
                        <p className="text-white/80 text-base mb-6 leading-relaxed">
                          {featured.excerpt}
                        </p>

                        <div className="flex items-center gap-3 text-sm text-white/70">
                          <span className="flex items-center gap-1">
                            <FiUser className="w-4 h-4" />
                            {featured.author}
                          </span>
                          <span>•</span>
                          <span>{featured.date}</span>
                        </div>
                      </div>
                    </div>
                  </article>
                </Link>
              </div>
            </div>
          </section>
        )}

        {/* CATEGORY FILTER */}
        <section className="bg-gray-50 py-6 sticky top-0 z-20 shadow-sm">
          <div className="container mx-auto px-4 lg:px-12">
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCat(cat)}
                  className={`px-6 py-2 rounded-full border-2 font-medium text-sm transition-all duration-300 ${
                    selectedCat === cat
                      ? "border-[#DAB22F] bg-[#DAB22F] text-white"
                      : "border-gray-300 text-gray-700 hover:border-[#DAB22F] hover:bg-[#DAB22F] hover:text-white"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* ALL POSTS GRID (No featured removal when filtered) */}
        <section className="py-20 lg:py-28 bg-white">
          <div className="container mx-auto px-4 lg:px-12">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl lg:text-4xl font-bold text-[#273B4A] mb-12 text-center">
                {selectedCat === "All" ? "Latest Articles" : `${selectedCat} Articles`}
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {displayPosts.length === 0 ? (
                  <p className="col-span-full text-center text-gray-500 text-lg">
                    No articles found in this category.
                  </p>
                ) : (
                  displayPosts.map((post, idx) => (
                    <Link key={post.id} href={`/blog/${post.slug}`}>
                      <article
                        data-animate
                        data-id={`post-${idx}`}
                        className={`bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 group cursor-pointer border border-gray-100 ${
                          visibleIds.has(`post-${idx}`)
                            ? "opacity-100 translate-y-0"
                            : "opacity-0 translate-y-12"
                        }`}
                        style={{ transitionDelay: `${idx * 80}ms` }}
                      >
                        <div className="relative h-48 overflow-hidden">
                          <Image
                            src={post.image}
                            alt={post.title}
                            fill
                            className="object-cover group-hover:scale-110 transition-transform duration-300"
                            unoptimized
                            placeholder="blur"
                            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8/5+pPwAEdQJ2fQGYmQAAAABJRU5ErkJggg=="
                          />
                          <div className="absolute top-4 left-4">
                            <span className="px-3 py-1 bg-[#DAB22F] text-white text-xs font-semibold rounded-full">
                              {post.category}
                            </span>
                          </div>
                        </div>

                        <div className="p-6">
                          <div className="flex items-center gap-2 text-xs text-gray-500 mb-3">
                            <span>{post.date}</span>
                            <span>•</span>
                            <span className="flex items-center gap-1">
                              <FiClock className="w-3 h-3" />
                              {post.readTime}
                            </span>
                          </div>

                          <h3 className="text-xl font-bold text-[#273B4A] mb-3 group-hover:text-[#DAB22F] transition-colors line-clamp-2">
                            {post.title}
                          </h3>

                          <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                            {post.excerpt}
                          </p>

                          <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                            <span className="text-sm text-gray-700 font-medium flex items-center gap-1">
                              <FiUser className="w-4 h-4" />
                              {post.author}
                            </span>
                            <FiChevronRight className="w-5 h-5 text-[#DAB22F] group-hover:translate-x-1 transition-transform" />
                          </div>
                        </div>
                      </article>
                    </Link>
                  ))
                )}
              </div>

              <div className="text-center mt-12">
                <button className="px-8 py-3 bg-[#273B4A] text-white font-semibold rounded-lg hover:bg-[#1e3240] transition-colors duration-300">
                  Load More Articles
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* NEWSLETTER */}
        <section className="relative overflow-hidden bg-gradient-to-r from-[#FFFBF0] to-white py-20 lg:py-28">
          <div className="container mx-auto px-4 lg:px-12 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl lg:text-4xl font-bold text-[#273B4A] mb-6">
                Subscribe to Our Newsletter
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Get the latest insights, tips, and updates delivered directly to
                your inbox.
              </p>

              <form className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  required
                  className="flex-1 px-6 py-4 rounded-lg border-2 border-gray-300 focus:border-[#DAB22F] focus:outline-none text-gray-800"
                />
                <button
                  type="submit"
                  className="px-8 py-4 bg-[#DAB22F] hover:bg-[#c9a429] text-white font-semibold rounded-lg transition-colors duration-300 whitespace-nowrap"
                >
                  Subscribe Now
                </button>
              </form>

              <p className="text-sm text-gray-500 mt-4">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}