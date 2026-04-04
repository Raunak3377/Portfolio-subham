import { motion } from 'motion/react';
import { Briefcase, GraduationCap, Calendar } from 'lucide-react';

const workExperience = [
  {
    company: 'Mideaseed (Digital Marketing Agency)',
    role: 'Video Editor',
    duration: '3+ Years',
    responsibilities: [
      'Edited videos using Adobe Premiere Pro, After Effects, Motion Graphics tools',
      'Collaborated with marketing teams to enhance video performance',
      'Improved audience engagement through optimized edits',
      'Managed editing workflows efficiently',
    ],
  },
];

const timeline = [
  {
    company: 'MAAC (Media, Animation, Computer Editing)',
    role: 'Professional Training',
    duration: 'Completed',
    work: [
      'Video Editing & Post-Production',
      'Cinematic Content Creation',
      'Motion Graphics & Visual Effects',
    ],
    icon: GraduationCap,
  },
  {
    company: 'Arena Animation',
    role: 'Professional Training',
    duration: 'Completed',
    work: [
      'Creative Media Production',
      'Advanced Video Editing Techniques',
      'Animation & Digital Storytelling',
    ],
    icon: GraduationCap,
  },
  {
    company: 'College Education',
    role: 'Bachelor\'s Degree',
    duration: 'Completed',
    work: [
      'Higher Education Completed',
      'Specialized in Media & Creative Studies',
    ],
    icon: GraduationCap,
  },
  {
    company: 'Senior Secondary Education (12th)',
    role: 'High School',
    duration: 'Completed',
    work: [
      'Secondary Education Completed',
    ],
    icon: GraduationCap,
  },
  {
    company: 'Secondary Education (10th)',
    role: 'High School',
    duration: 'Completed',
    work: [
      'Foundation Education Completed',
    ],
    icon: GraduationCap,
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="py-32 px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
        {/* Main Work Experience */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-accent font-mono text-sm tracking-widest uppercase mb-4 block">Career Path</span>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-12">WORK HISTORY</h2>
          
          <div className="space-y-12">
            {workExperience.map((exp) => (
              <div key={exp.company} className="glass p-10 rounded-3xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-8 text-white/5 group-hover:text-accent/10 transition-colors">
                  <Briefcase size={80} />
                </div>
                
                <div className="relative z-10">
                  <span className="inline-block px-3 py-1 rounded-full bg-accent/10 text-accent text-[10px] font-mono uppercase tracking-widest mb-4">
                    {exp.duration}
                  </span>
                  <h3 className="text-2xl font-bold mb-2">{exp.role}</h3>
                  <h4 className="text-white/60 font-mono text-sm mb-8">{exp.company}</h4>
                  
                  <ul className="space-y-4 text-white/40 text-sm font-light">
                    {exp.responsibilities.map((resp, i) => (
                      <li key={i} className="flex gap-3">
                        <span className="text-accent mt-1.5">•</span>
                        {resp}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <span className="text-accent font-mono text-sm tracking-widest uppercase mb-4 block">History</span>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-12">Education</h2>
          
          <div className="space-y-8 relative before:absolute before:left-[19px] before:top-4 before:bottom-4 before:w-[1px] before:bg-white/10">
            {timeline.map((item, index) => (
              <motion.div
                key={item.company}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative pl-16 group"
              >
                <div className="absolute left-0 top-0 w-10 h-10 rounded-full glass flex items-center justify-center z-10 group-hover:bg-accent group-hover:text-black transition-all">
                  <item.icon size={18} />
                </div>
                
                <div className="glass p-8 rounded-2xl group-hover:border-accent/30 transition-colors">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                    <h3 className="text-xl font-bold">{item.role}</h3>
                    <span className="text-[10px] font-mono text-white/40 flex items-center gap-2">
                      <Calendar size={12} /> {item.duration}
                    </span>
                  </div>
                  <h4 className="text-accent font-mono text-xs uppercase tracking-widest mb-6">{item.company}</h4>
                  
                  <ul className="space-y-2 text-white/40 text-sm font-light">
                    {item.work.map((w, i) => (
                      <li key={i} className="flex gap-2">
                        <span className="text-white/20">-</span>
                        {w}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
