import { motion } from 'motion/react';
import { Menu, X, Settings, Layout } from 'lucide-react';
import { useState, useEffect } from 'react';

interface NavbarProps {
  onToggleAdmin: () => void;
  isAdmin: boolean;
}

export const Navbar = ({ onToggleAdmin, isAdmin }: NavbarProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'py-4' : 'py-8'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <motion.a 
          href="#" 
          onClick={(e) => { e.preventDefault(); if(isAdmin) onToggleAdmin(); }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-2xl font-display font-bold tracking-tighter"
        >
          SS<span className="text-accent">.</span>
        </motion.a>

        <div className="hidden md:flex items-center gap-10">
          {!isAdmin && [
            { name: 'Portfolio', href: '#portfolio' },
            { name: 'About', href: '#about' },
            { name: 'Experience', href: '#experience' },
            { name: 'Skills', href: '#skills' },
            { name: 'Contact', href: '#contact' },
          ].map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-sm font-mono uppercase tracking-widest text-white/60 hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}
          
          <button 
            onClick={onToggleAdmin}
            className="flex items-center gap-2 text-sm font-mono uppercase tracking-widest text-white/40 hover:text-white transition-colors"
          >
            {isAdmin ? <><Layout size={16} /> View Site</> : <><Settings size={16} /> Admin</>}
          </button>

          <a 
            href="https://wa.me/919060982460?text=Hi%20Shubham%2C%20I'm%20interested%20in%20your%20video%20editing%20services.%20Can%20we%20talk%3F"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 rounded-full bg-white text-black text-sm font-bold hover:bg-accent hover:text-white transition-all"
          >
            Let's Talk
          </a>
        </div>

        <button 
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={isMenuOpen ? { x: 0 } : { x: '100%' }}
        className="fixed inset-0 bg-black z-40 flex flex-col items-center justify-center gap-8 md:hidden"
      >
        {[
          { name: 'Portfolio', href: '#portfolio' },
          { name: 'About', href: '#about' },
          { name: 'Experience', href: '#experience' },
          { name: 'Skills', href: '#skills' },
          { name: 'Contact', href: '#contact' },
        ].map((link) => (
          <a 
            key={link.name} 
            href={link.href}
            onClick={() => setIsMenuOpen(false)}
            className="text-4xl font-display font-bold"
          >
            {link.name}
          </a>
        ))}
        <button 
          onClick={() => { onToggleAdmin(); setIsMenuOpen(false); }}
          className="text-2xl font-display font-bold text-accent"
        >
          {isAdmin ? 'View Site' : 'Admin Dashboard'}
        </button>
      </motion.div>
    </nav>
  );
};
