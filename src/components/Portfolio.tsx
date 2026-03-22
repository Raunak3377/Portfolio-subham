import { motion } from 'motion/react';
import { useState } from 'react';
import { Play } from 'lucide-react';
import { VideoModal } from './VideoModal';

interface Project {
  id: string;
  title: string;
  category: string;
  videoUrl: string;
  description?: string;
}

const SAMPLE_PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Epic Action Reel',
    category: 'Social Media Ads',
    videoUrl: 'https://drive.google.com/file/d/1ekJekADEuSiEsB0aru64khRZOiqKS8QE/view?usp=drive_link',
  },
  {
    id: '2',
    title: 'Cinematic Journey',
    category: 'Cinematic Edits',
    videoUrl: 'https://drive.google.com/file/d/1JU6EYEYw7-GveMqOhG40z7_OZF4s_yJA/view?usp=drive_link',
  },
  {
    id: '3',
    title: 'Quick Cuts',
    category: 'Reels Editing',
    videoUrl: 'https://drive.google.com/file/d/1VG9_wLYJH2TrIoc39yTxsjY5dLVQTvVz/view?usp=drive_link',
  },
  {
    id: '4',
    title: 'YouTube Edit',
    category: 'YouTube Content',
    videoUrl: 'https://drive.google.com/file/d/1XrQhT6i6U6YEeIiIZZ1t143B-c6H1Xvz/view?usp=drive_link',
  },
  {
    id: '5',
    title: 'Brand Promo',
    category: 'Social Media Ads',
    videoUrl: 'https://drive.google.com/file/d/1sAOn1iGVSI6HOxqFmEN5aV6GaIgZ6ym8/view?usp=drive_link',
  }
];

const AnimatedTextBackground = ({ title, category }: { title: string; category: string }) => {
  const phrases = [title, category, 'Video', 'Edit', 'Create', 'Design'];

  return (
    <div className="absolute inset-0 bg-black flex items-center justify-center overflow-hidden">
      {/* Background animation */}
      <div className="absolute inset-0 opacity-10">
        <div className="grid grid-cols-5 gap-3 p-4 h-full">
          {Array.from({ length: 20 }).map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              animate={{ opacity: [0.05, 0.2, 0.05] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
              className="text-[10px] font-mono text-white/30"
            >
              {phrases[i % phrases.length]}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Title */}
      <div className="relative z-10 text-center">
        <h4 className="text-2xl font-bold">{title}</h4>
        <span className="text-xs text-white/50">{category}</span>
      </div>
    </div>
  );
};

export const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = ['All', 'Social Media Ads', 'Reels Editing', 'Cinematic Edits', 'YouTube Content'];

  const filteredProjects =
    activeCategory === 'All'
      ? SAMPLE_PROJECTS
      : SAMPLE_PROJECTS.filter((p) => p.category === activeCategory);

  return (
    <section id="portfolio" className="py-32 px-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
        <div>
          <span className="text-accent text-sm mb-4 block">Selected Works</span>
          <h2 className="text-5xl font-bold">PORTFOLIO</h2>
        </div>

        <div className="flex flex-wrap gap-4">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full border text-sm ${
                activeCategory === cat
                  ? 'bg-white text-black'
                  : 'border-white/20 text-white/60'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer"
            onClick={() => setSelectedProject(project)}
          >
            <AnimatedTextBackground title={project.title} category={project.category} />

            {/* Play Button (Always Visible, No Hover Overlay) */}
            <div className="absolute inset-0 flex items-center justify-center">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedProject(project);
                }}
                className="p-4 bg-white text-black rounded-full shadow-lg hover:scale-110 transition"
              >
                <Play size={24} fill="currentColor" />
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      <VideoModal
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
        videoUrl={selectedProject?.videoUrl || ''}
        title={selectedProject?.title || ''}
      />
    </section>
  );
};