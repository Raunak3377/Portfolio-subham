import { useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';

export const LiquidInteraction = () => {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(-200);
  const y = useMotionValue(-200);
  const sx = useSpring(x, { stiffness: 120, damping: 20, mass: 0.35 });
  const sy = useSpring(y, { stiffness: 120, damping: 20, mass: 0.35 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      const ripple = document.createElement('span');
      ripple.className = 'liquid-ripple';
      ripple.style.left = `${e.clientX}px`;
      ripple.style.top = `${e.clientY}px`;
      ref.current?.appendChild(ripple);
      window.setTimeout(() => ripple.remove(), 900);
    };

    let last = 0;
    const throttled = (e: MouseEvent) => {
      const now = performance.now();
      if (now - last > 90) {
        last = now;
        move(e);
      } else {
        x.set(e.clientX);
        y.set(e.clientY);
      }
    };

    window.addEventListener('mousemove', throttled, { passive: true });
    return () => window.removeEventListener('mousemove', throttled);
  }, [x, y]);

  return (
    <div ref={ref} className="liquid-interaction" aria-hidden="true">
      <motion.div className="liquid-orb" style={{ x: sx, y: sy }} />
      <div className="liquid-wave liquid-wave-one" />
      <div className="liquid-wave liquid-wave-two" />
    </div>
  );
};
