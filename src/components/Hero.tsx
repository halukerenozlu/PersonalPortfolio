import { Linkedin, Github } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

export default function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8 text-center animate-in fade-in zoom-in duration-500">
      <div className="absolute top-4 right-4">
        <ThemeToggle />
      </div>
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-4 bg-clip-text text-transparent bg-gradient-to-r from-zinc-900 to-zinc-500 dark:from-zinc-100 dark:to-zinc-400">
        Haluk Eren Özlü
      </h1>
      
      <p className="text-xl sm:text-2xl font-medium text-zinc-600 dark:text-zinc-300 mb-8">
        Full Stack Developer | AI Engineer | Python Developer
      </p>

      <div className="max-w-2xl mx-auto space-y-8">
        <p className="text-lg sm:text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed font-light">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>

        <div className="flex items-center justify-center gap-6 pb-6">
          <a
            href="/blog"
            className="px-8 py-3 rounded-2xl bg-zinc-900 dark:bg-zinc-100 text-zinc-100 dark:text-zinc-900 font-semibold text-lg hover:scale-110 transition-transform duration-300 shadow-lg hover:shadow-xl"
          >
            Blog
          </a>
          <a
            href="/projects"
            className="px-8 py-3 rounded-2xl bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 border border-zinc-200 dark:border-zinc-700 font-semibold text-lg hover:scale-110 transition-transform duration-300 shadow-lg hover:shadow-xl"
          >
            Projects
          </a>
        </div>

        <div className="flex items-center justify-center gap-6 pt-4 w-full max-w-xs mx-auto">
          <a href="#" className="p-3 rounded-full bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 hover:scale-110 transition-all duration-300 group">
            <Linkedin className="w-6 h-6 text-zinc-700 dark:text-zinc-300 group-hover:text-[#0077b5]" />
          </a>
          <a href="#" className="p-3 rounded-full bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 hover:scale-110 transition-all duration-300 group">
            <Github className="w-6 h-6 text-zinc-700 dark:text-zinc-300 group-hover:text-black dark:group-hover:text-white" />
          </a>
          <a href="#" className="p-3 rounded-full bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 hover:scale-110 transition-all duration-300 group">
            <svg viewBox="0 0 24 24" aria-hidden="true" className="w-6 h-6 text-zinc-700 dark:text-zinc-300 group-hover:text-black dark:group-hover:text-white fill-current">
              <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
            </svg>
          </a>
        </div>
      </div>
    </section>  );
}
