import { useRef } from 'react';
import { motion, useScroll } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import { 
  SiNextdotjs, 
  SiNodedotjs, 
  SiPostgresql, 
  SiReact, 
  SiPython, 
  SiTypescript, 
  SiRust, 
  SiDocker,
  SiDjango,
  SiD3Dotjs,
  SiMqtt 
} from 'react-icons/si';
import type { Project, YearGroup } from '../types';


const timelineData: YearGroup[] = [
  {
    year: '2025',
    projects: [
      {
        id: 'p1',
        title: 'AI Portfolio Assistant',
        description: 'An intelligent portfolio builder that uses generative AI to create personalized content.',
        githubUrl: '#',
        technologies: ['React', 'Python', 'AI'],
      },
      {
        id: 'p2',
        title: 'Neural Network Visualizer',
        description: 'Interactive web-based tool for visualizing neural network architectures and data flow.',
        githubUrl: '#',
        technologies: ['TypeScript', 'D3.js', 'PyTorch'],
      }
    ]
  },
  {
    year: '2024',
    projects: [
      {
        id: 'p3',
        title: 'E-commerce Platform',
        description: 'Full-stack e-commerce solution with real-time inventory management and secure payments.',
        githubUrl: '#',
        technologies: ['Next.js', 'Node.js', 'PostgreSQL'],
      },
      {
        id: 'p4',
        title: 'Smart Home Hub',
        description: 'IoT integration hub connecting various smart home devices into a single interface.',
        githubUrl: '#',
        technologies: ['Rust', 'React Native', 'MQTT'],
      }
    ]
  },
  {
    year: '2023',
    projects: [
      {
        id: 'p5',
        title: 'Data Analysis Pipeline',
        description: 'Automated pipeline for processing and analyzing large datasets with generating reports.',
        githubUrl: '#',
        technologies: ['Python', 'Pandas', 'Docker'],
      }
    ]
  }
];

const TechIcon = ({ name }: { name: string }) => {
  switch (name) {
    case 'React':
    case 'React Native':
      return <SiReact className="w-5 h-5" />;
    case 'Next.js':
      return <SiNextdotjs className="w-5 h-5" />;
    case 'Python':
      return <SiPython className="w-5 h-5" />;
    case 'Django':
      return <SiDjango className="w-5 h-5" />;
    case 'Node.js':
      return <SiNodedotjs className="w-5 h-5" />;
    case 'Rust':
      return <SiRust className="w-5 h-5" />;
    case 'PostgreSQL':
      return <SiPostgresql className="w-5 h-5" />;
    case 'Docker':
      return <SiDocker className="w-5 h-5" />;
    case 'TypeScript':
      return <SiTypescript className="w-5 h-5" />;
    case 'D3.js':
      return <SiD3Dotjs className="w-5 h-5" />;
    case 'MQTT':
        return <SiMqtt className="w-5 h-5" />;
    default:
      return null;
  }
};

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="relative mb-12 ml-4 sm:ml-12"
    >
      {/* Timeline Dot */}
      <div className="absolute -left-[2.75rem] sm:-left-[3.75rem] top-6 w-5 h-5 rounded-full bg-zinc-900 dark:bg-zinc-100 border-4 border-white dark:border-zinc-950 z-10" />

      {/* Card Content */}
      <div className="group relative bg-white dark:bg-zinc-900 border-4 border-zinc-200 dark:border-zinc-800 rounded-3xl p-6 sm:p-8 hover:border-zinc-900 dark:hover:border-zinc-100 transition-all duration-300 hover:scale-105 hover:shadow-xl">
        <div className="flex flex-col sm:flex-row gap-4 justify-between items-start mb-4">
          <h3 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
            {project.title}
          </h3>
          <div className="flex gap-2">
             <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors"
              aria-label="View Source"
            >
              <Github className="w-5 h-5" />
            </a>
          </div>
        </div>
        
        <p className="text-zinc-600 dark:text-zinc-400 text-lg mb-6 leading-relaxed line-clamp-2 group-hover:line-clamp-none transition-all duration-300">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-3 justify-center">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 font-medium text-sm"
            >
              <TechIcon name={tech} />
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default function ProjectTimeline() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  return (
    <div ref={containerRef} className="max-w-4xl mx-auto px-4 py-20">
      <h1 className="text-4xl sm:text-5xl font-bold text-center mb-16 text-zinc-900 dark:text-zinc-100">
        Project Timeline
      </h1>

      <div className="relative border-l-4 border-zinc-200 dark:border-zinc-800 ml-4 sm:ml-8">
        {timelineData.map((group) => (
          <div key={group.year} className="mb-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center mb-8 -ml-[2.1rem] sm:-ml-[2.6rem]"
            >
              <div className="flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-white dark:bg-black border-4 border-black dark:border-white text-black dark:text-white font-bold text-xl sm:text-2xl shadow-lg z-10 transition-colors duration-300">
                {group.year}
              </div>
            </motion.div>
            
            <div className="space-y-8">
              {group.projects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
