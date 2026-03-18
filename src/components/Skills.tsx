import { motion } from 'motion/react';
import { Video, Layers, Palette, PenTool, Lightbulb, Monitor, Music, Clock, Book, Plane } from 'lucide-react';

const languageSkills = [
  { name: 'Hindi', level: 90 },
  { name: 'English', level: 85 },
  { name: 'Russian', level: 75 },
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
        {/* Language Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-accent font-mono text-sm tracking-widest uppercase mb-4 block">Proficiency</span>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-12">LANGUAGES</h2>
          
          <div className="space-y-8">
            {languageSkills.map((skill, index) => (
              <div key={skill.name}>
                <div className="flex justify-between mb-2 font-mono text-sm uppercase tracking-widest">
                  <span>{skill.name}</span>
                  <span>{skill.level}%</span>
                </div>
                <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    className="h-full bg-accent"
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-20">
            <span className="text-accent font-mono text-sm tracking-widest uppercase mb-4 block">Personal</span>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-12">INTERESTS</h2>
            <div className="flex gap-8">
              {interests.map((interest) => (
                <motion.div
                  key={interest.name}
                  whileHover={{ scale: 1.1, color: '#f97316' }}
                  className="flex flex-col items-center gap-4 group cursor-pointer"
                >
                  <div className="p-6 rounded-2xl glass group-hover:bg-accent/10 transition-colors">
                    <interest.icon size={32} />
                  </div>
                  <span className="font-mono text-xs uppercase tracking-widest text-white/40 group-hover:text-white transition-colors">
                    {interest.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Personal Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <span className="text-accent font-mono text-sm tracking-widest uppercase mb-4 block">Expertise</span>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-12">SKILLS</h2>
          
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4 gap-4">
            {personalSkills.map((skill) => (
              <motion.div
                key={skill.name}
                whileHover={{ y: -5, borderColor: 'rgba(249, 115, 22, 0.3)' }}
                className="p-6 rounded-2xl glass border border-white/5 flex flex-col items-center text-center gap-4 group transition-colors"
              >
                <div className="text-white/40 group-hover:text-accent transition-colors">
                  <skill.icon size={24} />
                </div>
                <span className="text-[10px] font-mono uppercase tracking-widest leading-tight">
                  {skill.name}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
