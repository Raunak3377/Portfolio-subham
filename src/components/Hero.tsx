import { motion } from 'motion/react';
import { Play, ArrowRight } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden px-6">
      <div className="absolute inset-0 z-0 bg-[#050505]" />

      {/* Original photo — softly blended into the page so no rectangular edge/line appears */}
      <motion.div
        className="absolute right-[-6%] bottom-[-3%] z-[1] h-[94vh] w-[62vw] max-w-[820px]"
        initial={{ opacity: 0, x: 80, scale: 0.98 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ duration: 1.1, ease: 'easeOut' }}
      >
        <div className="absolute inset-0 rounded-full bg-accent/20 blur-[110px] scale-75 translate-x-2" />
        <img
          src="/about.jpeg"
          alt="Shubham Soni"
          className="relative h-full w-full object-contain object-bottom drop-shadow-[0_0_55px_rgba(139,92,246,0.25)]"
          style={{
            maskImage: 'radial-gradient(ellipse 72% 78% at 58% 48%, black 0%, black 52%, rgba(0,0,0,.75) 66%, transparent 84%)',
            WebkitMaskImage: 'radial-gradient(ellipse 72% 78% at 58% 48%, black 0%, black 52%, rgba(0,0,0,.75) 66%, transparent 84%)'
          }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_58%_48%,transparent_35%,rgba(5,5,5,.35)_68%,#050505_90%)] pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_58%_42%,rgba(139,92,246,0.20),transparent_34%)] pointer-events-none" />
      </motion.div>

      <div className="pointer-events-none absolute inset-0 z-[2] overflow-hidden">
        <motion.div className="absolute -left-32 top-1/4 h-80 w-80 rounded-full bg-accent/20 blur-[110px]" animate={{ x: [0, 100, 0], y: [0, -60, 0], scale: [1, 1.2, 1] }} transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }} />
        <motion.div className="absolute -right-32 bottom-1/4 h-96 w-96 rounded-full bg-neon-purple/20 blur-[120px]" animate={{ x: [0, -120, 0], y: [0, 50, 0], scale: [1, 1.15, 1] }} transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }} />

        {/* Moving elements behind SHUBHAM SONI */}
        <motion.div
          className="absolute left-[17%] top-[31%] h-44 w-44 rounded-full border border-accent/20 shadow-[0_0_45px_rgba(139,92,246,.12)]"
          animate={{ rotate: 360, scale: [1, 1.08, 1], x: [0, 18, 0], y: [0, -12, 0] }}
          transition={{ rotate: { duration: 18, repeat: Infinity, ease: 'linear' }, scale: { duration: 5, repeat: Infinity, ease: 'easeInOut' }, x: { duration: 7, repeat: Infinity, ease: 'easeInOut' }, y: { duration: 6, repeat: Infinity, ease: 'easeInOut' } }}
        />
        <motion.div
          className="absolute left-[28%] top-[47%] h-20 w-20 rounded-full border border-neon-blue/25"
          animate={{ y: [0, -28, 0], x: [0, 20, 0], opacity: [0.25, 0.7, 0.25], rotate: [0, 90, 180] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute left-[9%] top-[58%] h-3 w-3 rounded-full bg-neon-blue shadow-[0_0_22px_rgba(0,242,255,.9)]"
          animate={{ x: [0, 85, 0], y: [0, -55, 0], scale: [1, 1.5, 1], opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute left-[39%] top-[25%] h-2 w-2 rounded-full bg-accent shadow-[0_0_18px_rgba(139,92,246,.9)]"
          animate={{ x: [0, -55, 15, 0], y: [0, 35, 70, 0], opacity: [0.2, 1, 0.4, 0.2] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />

        <div className="absolute inset-0 opacity-[0.08] bg-[linear-gradient(rgba(255,255,255,0.25)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.25)_1px,transparent_1px)] bg-[size:70px_70px] [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_75%)]" />
      </div>

      <div className="relative z-10 w-full max-w-7xl text-center md:text-left md:pr-[38vw]">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, ease: 'easeOut' }}>
          <motion.span initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.15, duration: 0.6 }} className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono tracking-widest uppercase mb-6 text-accent backdrop-blur-md">
            Professional Video Editor
          </motion.span>
          <motion.h1 initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25, duration: 0.9, ease: 'easeOut' }} className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-none mb-8">
            SHUBHAM <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue via-accent to-neon-purple bg-[length:200%_auto] animate-[gradient_6s_ease_infinite]">SONI</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.45, duration: 0.8 }} className="text-lg md:text-xl text-white/60 max-w-xl mb-10 font-light leading-relaxed mx-auto md:mx-0">
            "Crafting High-Impact Videos That Capture Attention and Drive Engagement"
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6, duration: 0.8 }} className="flex flex-col sm:flex-row items-center md:items-start justify-center md:justify-start gap-6">
            <a href="https://drive.google.com/drive/folders/1WBeoc5vGC3gLBhCbVTJeQKRDnWLNKpHa?usp=drive_link" target="_blank" rel="noopener noreferrer" className="group relative px-8 py-4 bg-white text-black font-semibold rounded-full overflow-hidden transition-all hover:pr-12 hover:shadow-[0_0_35px_rgba(139,92,246,0.35)] inline-block">
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
