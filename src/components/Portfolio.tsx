import { motion } from 'motion/react';
import { useState, useEffect } from 'react';
import { ExternalLink, Play } from 'lucide-react';
import { collection, onSnapshot, query, orderBy } from 'firebase/firestore';
import { db } from '../firebase';
import { VideoModal } from './VideoModal';

interface Project {
  id: string;
  title: string;
  category: string;
  videoUrl: string;
  description?: string;
}

const AnimatedTextBackground = ({ title, category }: { title: string; category: string }) => {
  return (
    <div className="absolute inset-0 bg-black flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="grid grid-cols-4 gap-4 p-4 h-full">
          {Array.from({ length: 12 }).map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ 
                opacity: [0.1, 0.3, 0.1],
                scale: [1, 1.2, 1],
                rotate: [0, 5, -5, 0]
              }}
              transition={{ 
                duration: 4 + Math.random() * 4,
                repeat: Infinity,
                delay: Math.random() * 5
              }}
              className="text-[8px] font-mono text-white/40 break-all select-none"
            >
              {title} {category} {title}
            </motion.div>
          ))}
        </div>
      </div>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="relative z-10 text-center px-6"
      >
        <motion.h4 
          className="text-3xl md:text-4xl font-black tracking-tighter uppercase leading-none mb-2"
          animate={{ 
            textShadow: [
              "0 0 0px rgba(255,255,255,0)",
              "0 0 20px rgba(255,255,255,0.3)",
              "0 0 0px rgba(255,255,255,0)"
            ]
          }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          {title}
        </motion.h4>
        <span className="text-[10px] font-mono text-accent uppercase tracking-[0.3em]">
          {category}
        </span>
      </motion.div>

      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-accent/10 to-transparent opacity-50" />
    </div>
  );
};

export const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    const q = query(collection(db, 'projects'), orderBy('createdAt', 'desc'));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const projectsData = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as Project[];
      setProjects(projectsData);
      setLoading(false);
    }, (error) => {
      console.error("Firestore Error: ", error);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const categories = ['All', 'Social Media Ads', 'Reels Editing', 'Cinematic Edits', 'YouTube Content'];

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  if (loading) {
    return (
      <section id="portfolio" className="py-32 px-6 max-w-7xl mx-auto text-center">
        <div className="animate-pulse text-white/40 font-mono">Loading Projects...</div>
      </section>
    );
  }

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

      {projects.length === 0 ? (
        <div className="text-center py-20 glass rounded-3xl">
          <p className="text-white/40 font-mono">No projects found. Use the Admin panel to add your first video.</p>
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
