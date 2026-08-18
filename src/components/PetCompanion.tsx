import { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';

export const PetCompanion = () => {
  const x = useMotionValue(-120);
  const y = useMotionValue(-120);
  const sx = useSpring(x, { stiffness: 85, damping: 18, mass: 0.7 });
  const sy = useSpring(y, { stiffness: 85, damping: 18, mass: 0.7 });
  const [visible, setVisible] = useState(false);
  const [bounce, setBounce] = useState(false);
  const timer = useRef<number | undefined>(undefined);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      x.set(e.clientX + 22);
      y.set(e.clientY + 22);
      setVisible(true);
    };

    window.addEventListener('mousemove', move, { passive: true });
    return () => window.removeEventListener('mousemove', move);
  }, [x, y]);

  const play = () => {
    setBounce(true);
    window.clearTimeout(timer.current);
    timer.current = window.setTimeout(() => setBounce(false), 500);
  };

  return (
    <motion.div
      className="pet-companion"
      style={{ x: sx, y: sy }}
      animate={{ opacity: visible ? 1 : 0, scale: visible ? 1 : 0.5 }}
      transition={{ duration: 0.25 }}
      onClick={play}
      aria-hidden="true"
    >
      <motion.span
        className="pet-animal"
        animate={bounce ? { y: [-2, -13, 0], rotate: [0, -8, 8, 0] } : { y: [0, -2, 0] }}
        transition={bounce ? { duration: 0.5 } : { duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
      >
        🐈‍⬛
      </motion.span>
      <span className="pet-shadow" />
    </motion.div>
  );
};
