export interface Project {
  id: string;
  title: string;
  description: string;
  githubUrl: string;
  technologies: string[];
}

export interface YearGroup {
  year: string;
  projects: Project[];
}

export interface TagSearchProps {
  tags: string[];
  selectedTag: string;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  onTagSelect: (tag: string) => void;
}

export interface BlogPost {
  title: string;
  excerpt: string;
  tag: string;
  slug: string; // Added for unique key if needed, though we might use frontmatter
}

export interface BlogFeedProps {
  posts: BlogPost[];
}

export interface BlogCardProps {
  title: string;
  excerpt: string;
  tag: string;
  delay: number;
}
