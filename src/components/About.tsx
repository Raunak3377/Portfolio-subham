import { motion } from 'motion/react';

export const About = () => {
  return (
    <section id="about" className="py-32 px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative aspect-square rounded-3xl overflow-hidden glass"
        >
          <img 
            src="src/photo/IMG_3759.JPG.jpeg" 
            alt="About Me"
            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-accent/20 mix-blend-overlay" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-accent font-mono text-sm tracking-widest uppercase mb-4 block">The Editor</span>
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8">CREATIVE <br />VISION</h2>
          
          <div className="space-y-6 text-lg text-white/60 font-light leading-relaxed">
            <p>
              Creative Video Editor with 3+ years of experience in Color Grading, Sound Editing, and Visual Effects.
            </p>
            <p>
              Proven ability to deliver professional-quality videos under tight deadlines and increase audience engagement through optimized editing.
            </p>
            <p>
              Focused on transforming raw footage into compelling visual stories that convert.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-8">
            <div>
              <h4 className="text-white font-bold mb-4 uppercase text-xs tracking-widest">Core Skills</h4>
              <ul className="text-sm text-white/40 space-y-2 font-mono">
                <li>Color Grading</li>
                <li>Sound Editing</li>
                <li>Visual Effects</li>
                <li>Storyboarding</li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4 uppercase text-xs tracking-widest">Proven Results</h4>
              <ul className="text-sm text-white/40 space-y-2 font-mono">
                <li>Professional Quality</li>
                <li>Tight Deadlines</li>
                <li>Increased Engagement</li>
                <li>Optimized Workflow</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
