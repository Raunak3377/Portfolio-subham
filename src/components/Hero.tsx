import { motion } from 'motion/react';
import { Play, ArrowRight } from 'lucide-react';
import { HeroScene } from './HeroScene';

export const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden px-6">
      <HeroScene />

      <div className="pointer-events-none absolute inset-0 z-[1] overflow-hidden">
        <motion.div className="absolute -left-32 top-1/4 h-80 w-80 rounded-full bg-accent/20 blur-[110px]" animate={{ x: [0, 100, 0], y: [0, -60, 0], scale: [1, 1.2, 1] }} transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }} />
        <motion.div className="absolute -right-32 bottom-1/4 h-96 w-96 rounded-full bg-neon-purple/20 blur-[120px]" animate={{ x: [0, -120, 0], y: [0, 50, 0], scale: [1, 1.15, 1] }} transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }} />
        <div className="absolute inset-0 opacity-[0.08] bg-[linear-gradient(rgba(255,255,255,0.25)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.25)_1px,transparent_1px)] bg-[size:70px_70px] [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_75%)]" />
      </div>
      
      <div className="relative z-10 text-center max-w-5xl">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, ease: 'easeOut' }}>
          <motion.span initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.15, duration: 0.6 }} className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono tracking-widest uppercase mb-6 text-accent backdrop-blur-md">
            Professional Video Editor
          </motion.span>
          <motion.h1 initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25, duration: 0.9, ease: 'easeOut' }} className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter leading-none mb-8">
            SHUBHAM <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue via-accent to-neon-purple bg-[length:200%_auto] animate-[gradient_6s_ease_infinite]">SONI</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.45, duration: 0.8 }} className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto mb-12 font-light leading-relaxed">
            "Crafting High-Impact Videos That Capture Attention and Drive Engagement"
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6, duration: 0.8 }} className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a href="https://drive.google.com/drive/folders/1WBeoc5vGC3gLBhCbVTJeQKRDnWLNKpHa?usp=drive_link" target="_blank" rel="noopener noreferrer" className="group relative px-8 py-4 bg-white text-black font-semibold rounded-full overflow-hidden transition-all hover:pr-12 hover:shadow-[0_0_35px_rgba(249,115,22,0.25)] inline-block">
              <span className="relative z-10 flex items-center gap-2">Watch Demo Reel <Play size={18} fill="currentColor" /></span>
              <div className="absolute inset-0 bg-accent translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </a>
            <a href="https://wa.me/919060982460?text=Hi%20Shubham%2C%20I'm%20interested%20in%20your%20video%20editing%20services.%20Can%20we%20talk%3F" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-2 text-white/80 hover:text-white transition-colors">
              Hire Me <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </motion.div>
      </div>

      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.4, duration: 1 }} className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10">
        <span className="text-[10px] uppercase tracking-[0.3em] text-white/40">Scroll to explore</span>
        <motion.div animate={{ scaleY: [1, 0.5, 1], opacity: [0.5, 1, 0.5] }} transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }} className="w-[1px] h-12 bg-gradient-to-b from-accent to-transparent origin-top" />
      </motion.div>
    </section>
  );
};
