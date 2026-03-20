import { motion } from 'motion/react';
import { Play, ArrowRight } from 'lucide-react';
import { HeroScene } from './HeroScene';

export const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden px-6">
      <HeroScene />
      
      <div className="relative z-10 text-center max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono tracking-widest uppercase mb-6 text-accent">
            Professional Video Editor
          </span>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter leading-none mb-8">
            SHUBHAM <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue via-accent to-neon-purple">
              SONI
            </span>
          </h1>
          <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto mb-12 font-light leading-relaxed">
            "Crafting High-Impact Videos That Capture Attention and Drive Engagement"
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a
              href="https://drive.google.com/drive/folders/1WBeoc5vGC3gLBhCbVTJeQKRDnWLNKpHa?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative px-8 py-4 bg-white text-black font-semibold rounded-full overflow-hidden transition-all hover:pr-12 inline-block"
            >
              <span className="relative z-10 flex items-center gap-2">
                Watch Demo Reel <Play size={18} fill="currentColor" />
              </span>
              <div className="absolute inset-0 bg-accent translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </a>
            
            <a 
              href="https://wa.me/919060982460?text=Hi%20Shubham%2C%20I'm%20interested%20in%20your%20video%20editing%20services.%20Can%20we%20talk%3F"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 text-white/80 hover:text-white transition-colors"
            >
              Hire Me <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-white/40">Scroll to explore</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-accent to-transparent" />
      </motion.div>
    </section>
  );
};
