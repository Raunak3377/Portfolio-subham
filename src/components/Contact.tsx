import { motion } from 'motion/react';
import { Send, MessageCircle, Mail, Github, Instagram, Twitter } from 'lucide-react';

export const Contact = () => {
  return (
    <section id="contact" className="py-32 px-6 max-w-7xl mx-auto">
      <div className="glass rounded-[3rem] p-12 md:p-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/20 blur-[120px] -translate-y-1/2 translate-x-1/2" />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 relative z-10">
          <div>
            <span className="text-accent font-mono text-sm tracking-widest uppercase mb-4 block">Get In Touch</span>
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8">LET'S WORK <br />TOGETHER</h2>
            <p className="text-white/60 text-lg mb-12 max-w-md">
              Saguna More, Danapur, Patna – 801503
            </p>

            <div className="space-y-6">
              <a href="mailto:shubhammaner1235@gmail.com" className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-accent transition-colors">
                  <Mail size={20} />
                </div>
                <span className="text-lg font-medium">shubhammaner1235@gmail.com</span>
              </a>
              <a 
                href="https://wa.me/919060982460?text=Hi%20Shubham%2C%20I'm%20interested%20in%20your%20video%20editing%20services.%20Can%20we%20talk%3F" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-[#25D366] transition-colors">
                  <MessageCircle size={20} />
                </div>
                <span className="text-lg font-medium">+91 9060982460</span>
              </a>
            </div>

            <div className="mt-16 flex gap-6">
              {[Github, Instagram, Twitter].map((Icon, i) => (
                <a key={i} href="#" className="text-white/40 hover:text-white transition-colors">
                  <Icon size={24} />
                </a>
              ))}
            </div>
          </div>

          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-mono uppercase text-white/40 ml-2">Name</label>
                <input 
                  type="text" 
                  placeholder="John Doe"
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-accent transition-colors"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-mono uppercase text-white/40 ml-2">Email</label>
                <input 
                  type="email" 
                  placeholder="john@example.com"
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-accent transition-colors"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-mono uppercase text-white/40 ml-2">Message</label>
              <textarea 
                rows={5}
                placeholder="Tell me about your project..."
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-accent transition-colors resize-none"
              />
            </div>
            <button className="w-full py-5 bg-white text-black font-bold rounded-2xl hover:bg-accent hover:text-white transition-all flex items-center justify-center gap-2 group">
              Send Message <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
          </form>
        </div>
      </div>
      
      <footer className="mt-20 text-center text-white/20 text-xs font-mono uppercase tracking-[0.2em]">
        &copy; 2026 Shubham Soni • Professional Video Editor
      </footer>
    </section>
  );
};
