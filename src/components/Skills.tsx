import { motion } from 'motion/react';
import { Video, Layers, Palette, PenTool, Lightbulb, Monitor, Music, Clock, Book, Plane } from 'lucide-react';

const languageSkills = [
  { name: 'Hindi', level: 90 },
  { name: 'English', level: 85 },
];

const personalSkills = [
  { name: 'Video Editing', icon: Video },
  { name: 'Motion Graphics', icon: Layers },
  { name: 'Color Grading', icon: Palette },
  { name: 'Storyboarding', icon: PenTool },
  { name: 'Problem Solving', icon: Lightbulb },
  { name: 'Adobe Creative Suite', icon: Monitor },
  { name: 'Sound Design', icon: Music },
  { name: 'Time Management', icon: Clock },
];

const interests = [
  { name: 'Blogging', icon: Book },
  { name: 'Traveling', icon: Plane },
];

export const Skills = () => {
  return (
    <section id="skills" className="py-32 px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
        <motion.div initial={{ opacity: 0, y: 35 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.7 }}>
          <span className="text-accent font-mono text-sm tracking-widest uppercase mb-4 block">Proficiency</span>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-12">LANGUAGES</h2>
          <div className="space-y-8">
            {languageSkills.map((skill, index) => (
              <motion.div key={skill.name} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.12 }}>
                <div className="flex justify-between mb-2 font-mono text-sm uppercase tracking-widest"><span>{skill.name}</span><span>{skill.level}%</span></div>
                <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                  <motion.div initial={{ width: 0 }} whileInView={{ width: `${skill.level}%` }} viewport={{ once: true }} transition={{ duration: 1.2, delay: index * 0.15 }} className="h-full bg-accent shadow-[0_0_14px_rgba(249,115,22,0.5)]" />
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-20">
            <span className="text-accent font-mono text-sm tracking-widest uppercase mb-4 block">Personal</span>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-12">INTERESTS</h2>
            <div className="flex gap-8">
              {interests.map((interest, index) => (
                <motion.div key={interest.name} initial={{ opacity: 0, scale: 0.85 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: index * 0.12 }} whileHover={{ scale: 1.08, y: -6 }} className="flex flex-col items-center gap-4 group cursor-pointer">
                  <div className="p-6 rounded-2xl glass group-hover:bg-accent/10 transition-colors"><interest.icon size={32} /></div>
                  <span className="font-mono text-xs uppercase tracking-widest text-white/40 group-hover:text-white transition-colors">{interest.name}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 35 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ delay: 0.15, duration: 0.7 }}>
          <span className="text-accent font-mono text-sm tracking-widest uppercase mb-4 block">Expertise</span>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-12">SKILLS</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4 gap-4">
            {personalSkills.map((skill, index) => (
              <motion.div key={skill.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.06 }} whileHover={{ y: -7, scale: 1.02, borderColor: 'rgba(249, 115, 22, 0.35)' }} className="p-6 rounded-2xl glass border border-white/5 flex flex-col items-center text-center gap-4 group transition-colors">
                <motion.div whileHover={{ rotate: 8, scale: 1.15 }} className="text-white/40 group-hover:text-accent transition-colors"><skill.icon size={24} /></motion.div>
                <span className="text-[10px] font-mono uppercase tracking-widest leading-tight">{skill.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
