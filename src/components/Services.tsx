import { motion } from 'motion/react';
import { Video, Palette, Layers, Smartphone, Zap, Music } from 'lucide-react';

const services = [
  {
    icon: <Video className="text-neon-blue" />,
    title: "Video Editing",
    description: "High-end narrative and commercial cutting with a focus on rhythm and flow."
  },
  {
    icon: <Palette className="text-accent" />,
    title: "Color Grading",
    description: "Professional color correction and creative look development for cinematic impact."
  },
  {
    icon: <Layers className="text-neon-purple" />,
    title: "Motion Graphics",
    description: "Dynamic 2D/3D elements that bring your visual storytelling to the next level."
  },
  {
    icon: <Smartphone className="text-neon-blue" />,
    title: "Reels Editing",
    description: "Viral-ready short-form content optimized for engagement and retention."
  },
  {
    icon: <Zap className="text-accent" />,
    title: "3D Transitions",
    description: "Seamless, mind-bending transitions that keep your audience hooked."
  },
  {
    icon: <Music className="text-neon-purple" />,
    title: "Sound Design",
    description: "Immersive audio landscapes and precise foley to complement your visuals."
  }
];

export const Services = () => {
  return (
    <section id="services" className="py-32 bg-white/[0.02]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <span className="text-accent font-mono text-sm tracking-widest uppercase mb-4 block">What I Do</span>
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter">SERVICES</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="p-10 rounded-3xl glass group transition-all"
            >
              <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-white/50 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
