import { motion } from 'motion/react';
import { useState } from 'react';
import { ExternalLink, Play } from 'lucide-react';
import { VideoModal } from './VideoModal';

interface Project {
  id: string;
  title: string;
  category: string;
  videoUrl: string;
  description?: string;
}

// Sample projects - Replace videoUrl with your actual Google Drive video links
// Format for Google Drive videos: https://drive.google.com/file/d/{FILE_ID}/view
// Example: https://drive.google.com/file/d/1abc123def456/view
// The component will automatically convert it to embed format
const SAMPLE_PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Epic Action Reel',
    category: 'Social Media Ads',
    videoUrl: 'https://drive.google.com/file/d/1ekJekADEuSiEsB0aru64khRZOiqKS8QE/view?usp=drive_link',
    description: 'High-energy action-packed social media advertisement'
  },
  {
    id: '2',
    title: 'Cinematic Journey',
    category: 'Cinematic Edits',
    videoUrl: 'https://drive.google.com/file/d/1JU6EYEYw7-GveMqOhG40z7_OZF4s_yJA/view?usp=drive_link',
    description: 'Breathtaking cinematic storytelling'
  },
  {
    id: '3',
    title: 'Quick Cuts',
    category: 'Reels Editing',
    videoUrl: 'https://drive.google.com/file/d/1VG9_wLYJH2TrIoc39yTxsjY5dLVQTvVz/view?usp=drive_link',
    description: 'Fast-paced reel for social platforms'
  },
  {
    id: '4',
    title: 'YouTube Edit',
    category: 'YouTube Content',
    videoUrl: 'https://drive.google.com/file/d/1XrQhT6i6U6YEeIiIZZ1t143B-c6H1Xvz/view?usp=drive_link',
    description: 'Engaging YouTube vlog edit with dynamic cuts and effects'
  },
  {
    id: '5',
    title: 'Brand Promo',
    category: 'Social Media Ads',
    videoUrl: 'https://drive.google.com/file/d/1sAOn1iGVSI6HOxqFmEN5aV6GaIgZ6ym8/view?usp=drive_link',
    description: 'Sleek promotional video for brand awareness'
  }
];

const AnimatedTextBackground = ({ title, category }: { title: string; category: string }) => {
  // Generate random unique text phrases
  const phrases = [title, category, 'Video', 'Edit', 'Create', 'Design', 'Craft', 'Cinema'];
  
  return (
    <div className="absolute inset-0 bg-black flex items-center justify-center overflow-hidden">
      {/* Animated text background */}
      <div className="absolute inset-0 opacity-15">
        <div className="grid grid-cols-5 gap-3 p-4 h-full">
          {Array.from({ length: 20 }).map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: -50 }}
              animate={{ 
                opacity: [0.05, 0.2, 0.05],
                y: [0, 30, 0],
              }}
              transition={{ 
                duration: 5 + Math.random() * 3,
                repeat: Infinity,
                delay: Math.random() * 3,
                ease: "easeInOut"
              }}
              className="text-[10px] font-mono text-white/40 break-words select-none whitespace-nowrap"
            >
              {phrases[i % phrases.length]}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Dark overlay pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/40" />
      
      {/* Center content with glow effect */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        className="relative z-10 text-center px-6"
      >
        <motion.h4 
          className="text-3xl md:text-4xl font-black tracking-tighter uppercase leading-none mb-3"
          animate={{ 
            textShadow: [
              "0 0 10px rgba(100,200,255,0)",
              "0 0 30px rgba(100,200,255,0.4)",
              "0 0 10px rgba(100,200,255,0)"
            ]
          }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          {title}
        </motion.h4>
        <motion.span 
          className="text-[11px] font-mono text-accent uppercase tracking-[0.3em] inline-block"
          animate={{
            opacity: [0.6, 1, 0.6]
          }}
          transition={{ duration: 2.5, repeat: Infinity }}
        >
          {category}
        </motion.span>
      </motion.div>

      {/* Bottom gradient glow */}
      <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-accent/15 via-accent/5 to-transparent opacity-60" />
    </div>
  );
};

export const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = ['All', 'Social Media Ads', 'Reels Editing', 'Cinematic Edits', 'YouTube Content'];

  const filteredProjects = activeCategory === 'All' 
    ? SAMPLE_PROJECTS
    : SAMPLE_PROJECTS.filter(p => p.category === activeCategory);

  return (
    <section id="portfolio" className="py-32 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
        <div>
          <span className="text-accent font-mono text-sm tracking-widest uppercase mb-4 block">Selected Works</span>
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter">PORTFOLIO</h2>
        </div>
        
        <div className="flex flex-wrap gap-4">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-full border text-sm transition-all ${
                activeCategory === cat 
                  ? 'bg-white text-black border-white' 
                  : 'border-white/10 hover:border-white/30 text-white/60'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {filteredProjects.length === 0 ? (
        <div className="text-center py-20 glass rounded-3xl">
          <p className="text-white/40 font-mono">No projects found. Check back soon!</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              layout
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative aspect-[4/3] rounded-2xl overflow-hidden glass cursor-pointer border border-white/5 hover:border-accent/30 transition-colors"
              onClick={() => setSelectedProject(project)}
            >
              <AnimatedTextBackground title={project.title} category={project.category} />
              
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8 backdrop-blur-[2px]">
                <span className="text-accent text-xs font-mono mb-2">{project.category}</span>
                <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                {project.description && <p className="text-sm text-white/60 mb-6 line-clamp-2">{project.description}</p>}
                <div className="flex gap-4">
                  <button 
                    onClick={(e) => { e.stopPropagation(); setSelectedProject(project); }}
                    className="p-3 bg-white text-black rounded-full hover:bg-accent hover:text-white transition-colors"
                  >
                    <Play size={20} fill="currentColor" />
                  </button>
                  <a 
                    href={project.videoUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="p-3 bg-white/10 backdrop-blur-md rounded-full hover:bg-white/20 transition-colors"
                  >
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      )}

      <VideoModal
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
        videoUrl={selectedProject?.videoUrl || ''}
        title={selectedProject?.title || ''}
      />
    </section>
  );
};
