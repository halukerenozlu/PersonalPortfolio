import { useState, useMemo } from 'react';
import TagSearch from './TagSearch';
import BlogCard from './BlogCard';

// Mock Data
const BLOG_POSTS = [
  {
    id: 1,
    title: "The Future of AI Agents",
    excerpt: "Exploring how autonomous agents are reshaping software development. We look at the latest trends in LLMs and how they automate complex coding tasks efficiently.",
    tag: "AI"
  },
  {
    id: 2,
    title: "Mastering React Hooks",
    excerpt: "A deep dive into useEffect, useMemo, and useCallback. Learn how to optimize your React applications and avoid common performance pitfalls in modern web development.",
    tag: "React"
  },
  {
    id: 3,
    title: "Rust for Web Developers",
    excerpt: "Why Rust is becoming the go-to language for high-performance web tooling. Memory safety without garbage collection makes it ideal for system-level programming.",
    tag: "Rust"
  },
  {
    id: 4,
    title: "Responsive Design Patterns",
    excerpt: "Creating fluid layouts that work across all devices. Modern CSS features like Grid and Flexbox make build complex responsive interfaces easier than ever.",
    tag: "CSS"
  },
  {
    id: 5,
    title: "The Power of TypeScript",
    excerpt: "How static typing prevents bugs and improves developer experience. Type inference and generics allow for robust and scalable codebase maintenance.",
    tag: "TypeScript"
  },
  {
    id: 6,
    title: "Next.js 15 Features",
    excerpt: "What's new in the latest version of Next.js. Server Actions, Partial Prerendering, and enhanced image optimization techniques for better performance.",
    tag: "Next.js"
  },
  {
    id: 7,
    title: "Machine Learning Basics",
    excerpt: "Introduction to neural networks and supervised learning. Understanding the fundamentals of how machines learn from data to make predictions.",
    tag: "ML"
  },
  {
    id: 8,
    title: "Dockerizing Applications",
    excerpt: "Streamlining deployment with containerization. best practices for creating efficient Dockerfiles and managing multi-container applications with Docker Compose.",
    tag: "DevOps"
  }
];

export default function BlogFeed() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTag, setSelectedTag] = useState("");

  const uniqueTags = useMemo(() => Array.from(new Set(BLOG_POSTS.map(post => post.tag))), []);

  const filteredPosts = useMemo(() => {
    return BLOG_POSTS.filter(post => {
      const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesTag = selectedTag ? post.tag === selectedTag : true;
      return matchesSearch && matchesTag;
    });
  }, [searchQuery, selectedTag]);

  return (
    <section className="px-4 py-12 max-w-7xl mx-auto min-h-screen">
      <div className="text-center mb-16">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-zinc-900 dark:text-zinc-100">
          Latest Insights
        </h1>
        <p className="text-xl text-zinc-600 dark:text-zinc-400">
          Thoughts on technology, coding, and design.
        </p>
      </div>

      <TagSearch 
        tags={uniqueTags}
        selectedTag={selectedTag}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        onTagSelect={setSelectedTag}
      />

      <div className="columns-1 md:columns-2 lg:columns-3 gap-6">
        {filteredPosts.map((post, index) => (
          <div 
            key={post.id} 
            className={`break-inside-avoid mb-6 ${index % 2 === 0 ? 'mb-8' : 'mb-4'}`}
          >
            <BlogCard 
              title={post.title}
              excerpt={post.excerpt}
              tag={post.tag}
              delay={index * 100}
            />
          </div>
        ))}
      </div>

      {filteredPosts.length === 0 && (
        <div className="text-center py-20">
          <p className="text-xl text-zinc-500 dark:text-zinc-500">
            No articles found matching your criteria.
          </p>
        </div>
      )}
    </section>
  );
}
