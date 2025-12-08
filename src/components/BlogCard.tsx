interface BlogCardProps {
  title: string;
  excerpt: string;
  tag: string;
  delay: number;
}

export default function BlogCard({ title, excerpt, tag, delay }: BlogCardProps) {
  return (
    <article 
      className="bg-white/80 dark:bg-zinc-900/80 backdrop-blur-sm border-2 border-zinc-200 dark:border-zinc-800 rounded-3xl p-6 sm:p-8 hover:border-zinc-900 dark:hover:border-zinc-100 transition-all duration-300 hover:scale-105 hover:shadow-xl flex flex-col h-full"
      style={{
        animationDelay: `${delay}ms`,
        animationFillMode: 'both'
      }}
    >
      <span className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider uppercase rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 w-fit">
        #{tag}
      </span>
      
      <h2 className="text-xl sm:text-2xl font-bold mb-4 text-zinc-900 dark:text-zinc-100">
        {title}
      </h2>
      
      <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed flex-grow">
        {excerpt}
      </p>
    </article>
  );
}
