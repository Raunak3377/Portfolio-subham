import { motion } from 'motion/react';

const clientLogos = [
  { name: 'Client 1', src: '/2.png' },
  { name: 'Client 2', src: '/356782075_3228027087490457_7985763114042100718_n.jpg' },
  { name: 'Client 3', src: '/412689038_672229138131377_5864501099487066219_n.jpg' },
  { name: 'Client 4', src: '/441819772_439700032082052_656436152564400092_n.jpg' },
  { name: 'Client 5', src: '/534777593_18131528935450444_6802202317043440863_n.jpg' },
  { name: 'Client 6', src: '/536533614_17863756659448696_596343483044701658_n.jpg' },
  { name: 'Client 7', src: '/538707630_18107964259544542_5729342916690522184_n.jpg' },
  { name: 'Client 8', src: '/652799791_18060205394402004_5523147764040525668_n.jpg' },
  { name: 'Client 9', src: '/Artboard 1 copy.png' },
  { name: 'Client 10', src: '/ChatGPT Image Jul 21, 2026, 03_05_19 PM.png' },
  { name: 'Client 11', src: '/ChatGPT Image Jun 10, 2026, 12_06_09 AM (1).png' },
  { name: 'Client 12', src: '/ChatGPT Image May 31, 2026, 11_02_54 PM.png' },
  { name: 'Client 13', src: '/Naturals.png' },
  { name: 'Client 14', src: '/png sweatbox logo.png' },
  { name: 'Client 15', src: '/White_Logo_no_BG.png' },
  { name: 'Client 16', src: '/White_Logo_no_bg (2).png' },
];

export function Clients() {
  const logos = [...clientLogos, ...clientLogos];

  return (
    <section className="relative overflow-hidden border-y border-white/10 py-14">
      <div className="mx-auto mb-8 max-w-7xl px-6">
        <p className="font-mono text-xs uppercase tracking-[0.35em] text-purple-400">
          Clients I&apos;ve Worked With
        </p>
        <h2 className="mt-3 font-display text-3xl font-semibold text-white md:text-4xl">
          Trusted by creators &amp; brands.
        </h2>
      </div>

      <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
        <motion.div
          className="flex w-max items-center gap-10 pr-10 md:gap-16 md:pr-16"
          animate={{ x: ['-50%', '0%'] }}
          transition={{ duration: 32, repeat: Infinity, ease: 'linear' }}
        >
          {logos.map((logo, index) => (
            <div
              key={`${logo.name}-${index}`}
              className="flex h-24 w-44 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.035] px-6 backdrop-blur-sm transition-transform duration-300 hover:scale-105"
            >
              <img
                src={logo.src}
                alt={logo.name}
                className="max-h-16 w-full object-contain opacity-85 transition-opacity duration-300 hover:opacity-100"
                loading="lazy"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
