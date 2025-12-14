import { Search, ChevronDown } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import type { TagSearchProps } from '../types';


export default function TagSearch({ tags, selectedTag, searchQuery, onSearchChange, onTagSelect }: TagSearchProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="w-full max-w-2xl mx-auto mb-12 flex flex-col sm:flex-row gap-4">
      {/* Search Input */}
      <div className="relative flex-grow">
        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-zinc-400 w-5 h-5" />
        <input
          type="text"
          placeholder="Search articles..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          className="w-full pl-12 pr-4 py-3 rounded-2xl bg-white dark:bg-zinc-900 border-2 border-zinc-200 dark:border-zinc-800 focus:border-zinc-900 dark:focus:border-zinc-100 outline-none text-zinc-900 dark:text-zinc-100 placeholder-zinc-400 transition-colors"
        />
      </div>

      {/* Tag Dropdown */}
      <div className="relative min-w-[200px]" ref={dropdownRef}>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full px-6 py-3 rounded-2xl bg-white dark:bg-zinc-900 border-2 border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-zinc-100 flex items-center justify-between hover:border-zinc-400 dark:hover:border-zinc-600 transition-colors"
        >
          <span className="capitalize">{selectedTag || "All Tags"}</span>
          <ChevronDown className={`w-5 h-5 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
        </button>

        {isOpen && (
          <div className="absolute top-full mt-2 w-full bg-white dark:bg-zinc-900 border-2 border-zinc-200 dark:border-zinc-800 rounded-xl shadow-xl overflow-hidden z-20 animate-in fade-in zoom-in-95 duration-200">
            <button
              onClick={() => {
                onTagSelect("");
                setIsOpen(false);
              }}
              className={`w-full text-left px-6 py-3 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors ${selectedTag === "" ? "bg-zinc-50 dark:bg-zinc-800 font-medium" : ""}`}
            >
              All Tags
            </button>
            {tags.map((tag) => (
              <button
                key={tag}
                onClick={() => {
                  onTagSelect(tag);
                  setIsOpen(false);
                }}
                className={`w-full text-left px-6 py-3 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors capitalize ${selectedTag === tag ? "bg-zinc-50 dark:bg-zinc-800 font-medium" : ""}`}
              >
                {tag}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
