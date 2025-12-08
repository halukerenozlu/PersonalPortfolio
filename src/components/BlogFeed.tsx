import { useState, useMemo } from 'react';
import TagSearch from './TagSearch';
import BlogCard from './BlogCard';

export interface BlogPost {
  title: string;
  excerpt: string;
  tag: string;
  slug: string; // Added for unique key if needed, though we might use frontmatter
}

interface BlogFeedProps {
  posts: BlogPost[];
}

export default function BlogFeed({ posts }: BlogFeedProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTag, setSelectedTag] = useState("");

  const uniqueTags = useMemo(() => Array.from(new Set(posts.map(post => post.tag))), [posts]);

  const filteredPosts = useMemo(() => {
    return posts.filter(post => {
      const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesTag = selectedTag ? post.tag === selectedTag : true;
      return matchesSearch && matchesTag;
    });
  }, [posts, searchQuery, selectedTag]);

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
            key={post.slug} 
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
