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

const SAMPLE_PROJECTS: Project[] = [
  { id: '1', title: 'Epic Action Reel', category: 'Social Media Ads', videoUrl: 'https://drive.google.com/file/d/1ekJekADEuSiEsB0aru64khRZOiqKS8QE/view?usp=drive_link', description: 'High-energy action-packed social media advertisement' },
  { id: '2', title: 'Cinematic Journey', category: 'Cinematic Edits', videoUrl: 'https://drive.google.com/file/d/1JU6EYEYw7-GveMqOhG40z7_OZF4s_yJA/view?usp=drive_link', description: 'Breathtaking cinematic storytelling' },
  { id: '3', title: 'Quick Cuts', category: 'Reels Editing', videoUrl: 'https://drive.google.com/file/d/1VG9_wLYJH2TrIoc39yTxsjY5dLVQTvVz/view?usp=drive_link', description: 'Fast-paced reel for social platforms' },
  { id: '4', title: 'YouTube Edit', category: 'YouTube Content', videoUrl: 'https://drive.google.com/file/d/1XrQhT6i6U6YEeIiIZZ1t143B-c6H1Xvz/view?usp=drive_link', description: 'Engaging YouTube vlog edit with dynamic cuts and effects' },
  { id: '5', title: 'Engaging Reels', category: 'Social Media Reels', videoUrl: 'https://drive.google.com/file/d/1sAOn1iGVSI6HOxqFmEN5aV6GaIgZ6ym8/view?usp=drive_link', description: 'Sleek promotional video for brand awareness' },
  { id: '6', title: 'Promo Reels', category: 'Reels Editing', videoUrl: 'https://drive.google.com/drive/folders/1hrLWP4yPxFnKRAg74FXPRD_OHF_P42WU?usp=drive_link', description: 'Vibrant promotional reel' },
  { id: '7', title: 'Tips Reels', category: 'Insta Reels', videoUrl: 'https://drive.google.com/drive/folders/1hrLWP4yPxFnKRAg74FXPRD_OHF_P42WU?usp=drive_link', description: 'Short-form tips content' },
  { id: '8', title: 'YouTube Video', category: 'YouTube Content', videoUrl: 'https://drive.google.com/file/d/11xuselbuHTU7YkSOxIEPer8kSfYaMCNl/view?usp=sharing', description: 'Engaging YouTube video edit' },
  { id: '9', title: 'Informative Reels', category: 'Reels Editing', videoUrl: 'https://drive.google.com/file/d/1A3I35hyEz4bgy7revA3Mvc5QngMvxSjn/view?usp=sharing', description: 'Informative short-form storytelling' }
];

const THEMES = [
  'from-red-500/30 via-orange-500/10 to-black',
  'from-violet-500/30 via-blue-500/10 to-black',
  'from-cyan-400/25 via-purple-500/10 to-black',
  'from-red-500/25 via-black to-red-900/10',
  'from-fuchsia-500/25 via-purple-500/10 to-black',
  'from-purple-500/30 via-pink-500/10 to-black',
  'from-blue-500/25 via-cyan-500/10 to-black',
  'from-red-500/20 via-orange-500/10 to-black',
  'from-indigo-500/30 via-violet-500/10 to-black'
];

const AnimatedTextBackground = ({ title, category, index }: { title: string; category: string; index: number }) => {
  const phrases = [title, category, 'VIDEO', 'EDIT', 'CREATE', 'CINEMA'];
  const theme = THEMES[index % THEMES.length];

  return (
    <div className="absolute inset-0 bg-black flex items-center justify-center overflow-hidden">
      <div className={`absolute inset-0 bg-gradient-to-br ${theme}`} />
      <div className="absolute -top-20 -right-20 w-56 h-56 rounded-full bg-accent/15 blur-3xl" />
      <div className="absolute -bottom-24 -left-16 w-64 h-64 rounded-full bg-purple-600/15 blur-3xl" />
      <div className="absolute inset-0 opacity-20">
        <div className="grid grid-cols-4 gap-4 p-5 h-full rotate-[-8deg] scale-110">
          {Array.from({ length: 16 }).map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: [0.04, 0.18, 0.04], y: [0, 20, 0] }}
              transition={{ duration: 5 + (i % 4), repeat: Infinity, delay: i * 0.12, ease: 'easeInOut' }}
              className="text-[9px] font-mono text-white/50 uppercase whitespace-nowrap"
            >{phrases[i % phrases.length]}</motion.div>
          ))}
        </div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/25 to-black/75" />
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_50%_40%,transparent_0%,rgba(0,0,0,.7)_75%)]" />
      <motion.div initial={{ opacity: 0, scale: .96 }} whileInView={{ opacity: 1, scale: 1 }} className="relative z-10 text-center px-6">
        <motion.h4
          className="text-3xl md:text-4xl font-black tracking-tighter uppercase leading-none mb-3 drop-shadow-[0_0_18px_rgba(139,92,246,.35)]"
          animate={{ textShadow: ['0 0 0 rgba(139,92,246,0)', '0 0 24px rgba(139,92,246,.45)', '0 0 0 rgba(139,92,246,0)'] }}
          transition={{ duration: 3, repeat: Infinity }}
        >{title}</motion.h4>
        <motion.span className="text-[11px] font-mono text-accent uppercase tracking-[0.3em] inline-block" animate={{ opacity: [.55, 1, .55] }} transition={{ duration: 2.5, repeat: Infinity }}>{category}</motion.span>
      </motion.div>
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-accent/15 via-accent/5 to-transparent" />
    </div>
  );
};

export const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const categories = ['All', 'Social Media Ads', 'Reels Editing', 'Cinematic Edits', 'YouTube Content'];
  const filteredProjects = activeCategory === 'All' ? SAMPLE_PROJECTS : SAMPLE_PROJECTS.filter(p => p.category === activeCategory);

  return (
    <section id="portfolio" className="py-32 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
        <div><span className="text-accent font-mono text-sm tracking-widest uppercase mb-4 block">Selected Works</span><h2 className="text-5xl md:text-7xl font-bold tracking-tighter">PORTFOLIO</h2></div>
        <div className="flex flex-wrap gap-4">
          {categories.map(cat => <button key={cat} onClick={() => setActiveCategory(cat)} className={`px-6 py-2 rounded-full border text-sm transition-all ${activeCategory === cat ? 'bg-white text-black border-white' : 'border-white/10 hover:border-white/30 text-white/60'}`}>{cat}</button>)}
        </div>
      </div>

      {filteredProjects.length === 0 ? <div className="text-center py-20 glass rounded-3xl"><p className="text-white/40 font-mono">No projects found. Check back soon!</p></div> : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div layout key={project.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * .1 }} className="group relative aspect-[4/3] rounded-2xl overflow-hidden glass cursor-pointer border border-white/5 hover:border-accent/40 transition-all shadow-[0_0_0_rgba(139,92,246,0)] hover:shadow-[0_0_35px_rgba(139,92,246,.12)]" onClick={() => setSelectedProject(project)}>
              <AnimatedTextBackground title={project.title} category={project.category} index={index} />
              <div className="absolute bottom-6 left-6 flex gap-4 z-10">
                <button onClick={(e) => { e.stopPropagation(); setSelectedProject(project); }} className="p-3 bg-white text-black rounded-full hover:bg-accent hover:text-white transition-colors"><Play size={20} fill="currentColor" /></button>
                <a href={project.videoUrl} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} className="p-3 bg-white/10 backdrop-blur-md rounded-full hover:bg-white/20 transition-colors"><ExternalLink size={20} /></a>
              </div>
            </motion.div>
          ))}
        </div>
      )}

      <VideoModal isOpen={!!selectedProject} onClose={() => setSelectedProject(null)} videoUrl={selectedProject?.videoUrl || ''} title={selectedProject?.title || ''} />
    </section>
  );
};
