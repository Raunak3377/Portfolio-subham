import { useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';

export const LiquidInteraction = () => {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(-200);
  const y = useMotionValue(-200);
  const sx = useSpring(x, { stiffness: 120, damping: 20, mass: 0.35 });
  const sy = useSpring(y, { stiffness: 120, damping: 20, mass: 0.35 });
  const lastScroll = useRef(0);
  const scrollTimer = useRef<number | undefined>(undefined);

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

    const scroll = () => {
      const amount = Math.min(80, Math.abs(window.scrollY - lastScroll.current) * 0.9);
      ref.current?.style.setProperty('--scroll-wave', `${amount}px`);
      window.clearTimeout(scrollTimer.current);
      scrollTimer.current = window.setTimeout(() => {
        ref.current?.style.setProperty('--scroll-wave', '0px');
      }, 180);
      lastScroll.current = window.scrollY;
    };

    lastScroll.current = window.scrollY;
    window.addEventListener('mousemove', throttled, { passive: true });
    window.addEventListener('scroll', scroll, { passive: true });
    return () => {
      window.removeEventListener('mousemove', throttled);
      window.removeEventListener('scroll', scroll);
      window.clearTimeout(scrollTimer.current);
    };
  }, [x, y]);

  return (
    <div ref={ref} className="liquid-interaction" aria-hidden="true">
      <motion.div className="liquid-orb" style={{ x: sx, y: sy }} />
      <div className="liquid-wave liquid-wave-one" />
      <div className="liquid-wave liquid-wave-two" />
    </div>
  );
};
