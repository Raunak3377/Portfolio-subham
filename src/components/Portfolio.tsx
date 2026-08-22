import { motion } from 'motion/react';
import { useState } from 'react';
import { ExternalLink, Play } from 'lucide-react';
import { VideoModal } from './VideoModal';

interface Project {
  id: string;
  title: string;
  category: string;
  videoUrl: string;
  image: string;
  description?: string;
}

const SAMPLE_PROJECTS: Project[] = [
  { id: '1', title: 'Epic Action Reel', category: 'Social Media Ads', videoUrl: 'https://drive.google.com/file/d/1ekJekADEuSiEsB0aru64khRZOiqKS8QE/view?usp=drive_link', image: '/356782075_3228027087490457_7985763114042100718_n.jpg' },
  { id: '2', title: 'Cinematic Journey', category: 'Cinematic Edits', videoUrl: 'https://drive.google.com/file/d/1JU6EYEYw7-GveMqOhG40z7_OZF4s_yJA/view?usp=drive_link', image: '/412689038_672229138131377_5864501099487066219_n.jpg' },
  { id: '3', title: 'Quick Cuts', category: 'Reels Editing', videoUrl: 'https://drive.google.com/file/d/1VG9_wLYJH2TrIoc39yTxsjY5dLVQTvVz/view?usp=drive_link', image: '/441819772_439700032082052_656436152564400092_n.jpg' },
  { id: '4', title: 'YouTube Edit', category: 'YouTube Content', videoUrl: 'https://drive.google.com/file/d/1XrQhT6i6U6YEeIiIZZ1t143B-c6H1Xvz/view?usp=drive_link', image: '/534777593_18131528935450444_6802202317043440863_n.jpg' },
  { id: '5', title: 'Engaging Reels', category: 'Social Media Reels', videoUrl: 'https://drive.google.com/file/d/1sAOn1iGVSI6HOxqFmEN5aV6GaIgZ6ym8/view?usp=drive_link', image: '/536533614_17863756659448696_596343483044701658_n.jpg' },
  { id: '6', title: 'Promo Reels', category: 'Reels Editing', videoUrl: 'https://drive.google.com/drive/folders/1hrLWP4yPxFnKRAg74FXPRD_OHF_P42WU?usp=drive_link', image: '/538707630_18107964259544542_5729342916690522184_n.jpg' },
  { id: '7', title: 'Tips Reels', category: 'Insta Reels', videoUrl: 'https://drive.google.com/drive/folders/1hrLWP4yPxFnKRAg74FXPRD_OHF_P42WU?usp=drive_link', image: '/652799791_18060205394402004_5523147764040525668_n.jpg' },
  { id: '8', title: 'YouTube Video', category: 'YouTube Content', videoUrl: 'https://drive.google.com/file/d/11xuselbuHTU7YkSOxIEPer8kSfYaMCNl/view?usp=sharing', image: '/2.png' },
  { id: '9', title: 'Informative Reels', category: 'Reels Editing', videoUrl: 'https://drive.google.com/file/d/1A3I35hyEz4bgy7revA3Mvc5QngMvxSjn/view?usp=sharing', image: '/ChatGPT%20Image%20Jul%2021%2C%202026%2C%2003_05_19%20PM.png' }
];

export const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const categories = ['All', 'Social Media Ads', 'Reels Editing', 'Cinematic Edits', 'YouTube Content'];
  const filteredProjects = activeCategory === 'All' ? SAMPLE_PROJECTS : SAMPLE_PROJECTS.filter(p => p.category === activeCategory);

  return (
    <section id="portfolio" className="py-20 md:py-32 px-4 sm:px-6 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 md:mb-20 gap-8">
        <div><span className="text-accent font-mono text-sm tracking-widest uppercase mb-4 block">Selected Works</span><h2 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tighter">PORTFOLIO</h2></div>
        <div className="flex flex-wrap gap-2 sm:gap-4">
          {categories.map(cat => <button key={cat} onClick={() => setActiveCategory(cat)} className={`px-4 sm:px-6 py-2 rounded-full border text-xs sm:text-sm transition-all ${activeCategory === cat ? 'bg-white text-black border-white' : 'border-white/10 hover:border-white/30 text-white/60'}`}>{cat}</button>)}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8">
        {filteredProjects.map((project, index) => (
          <motion.div layout key={project.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} transition={{ delay: Math.min(index * .06, .3) }} className="group relative aspect-[4/3] rounded-2xl overflow-hidden glass cursor-pointer border border-white/5 hover:border-accent/40 transition-all bg-neutral-900" onClick={() => setSelectedProject(project)}>
            <img src={project.image} alt={project.title} loading="lazy" decoding="async" className="absolute inset-0 w-full h-full object-cover block opacity-100" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/15 to-transparent" />
            <div className="absolute left-4 right-4 bottom-4 z-10">
              <h3 className="text-lg sm:text-xl font-bold text-white mb-1">{project.title}</h3>
              <p className="text-[11px] sm:text-xs text-white/70 uppercase tracking-wider">{project.category}</p>
            </div>
            <div className="absolute top-4 right-4 flex gap-2 z-20">
              <button aria-label={`Play ${project.title}`} onClick={(e) => { e.stopPropagation(); setSelectedProject(project); }} className="p-2.5 bg-white text-black rounded-full active:scale-95 transition-transform"><Play size={18} fill="currentColor" /></button>
              <a aria-label={`Open ${project.title}`} href={project.videoUrl} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} className="p-2.5 bg-black/45 backdrop-blur-md rounded-full active:scale-95 transition-transform"><ExternalLink size={18} /></a>
            </div>
          </motion.div>
        ))}
      </div>

      <VideoModal isOpen={!!selectedProject} onClose={() => setSelectedProject(null)} videoUrl={selectedProject?.videoUrl || ''} title={selectedProject?.title || ''} />
    </section>
  );
};
