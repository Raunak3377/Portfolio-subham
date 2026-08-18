import { motion } from "motion/react";

const clients = [
  { name: "Client 1", logo: "/2.png" },
  {
    name: "Client 2",
    logo: "/356782075_3228027087490457_7985763114042100718_n.jpg",
  },
  {
    name: "Client 3",
    logo: "/412689038_672229138131377_5864501099487066219_n.jpg",
  },
  {
    name: "Client 4",
    logo: "/441819772_439700032082052_656436152564400092_n.jpg",
  },
  {
    name: "Client 5",
    logo: "/534777593_18131528935450444_6802202317043440863_n.jpg",
  },
  {
    name: "Client 6",
    logo: "/536533614_17863756659448696_596343483044701658_n.jpg",
  },
  {
    name: "Client 7",
    logo: "/538707630_18107964259544542_5729342916690522184_n.jpg",
  },
  {
    name: "Client 8",
    logo: "/652799791_18060205394402004_5523147764040525668_n.jpg",
  },
  {
    name: "Client 9",
    logo: "/Artboard 1 copy.png",
  },
  {
    name: "Client 10",
    logo: "/ChatGPT Image Jul 21, 2026, 03_05_19 PM.png",
  },
  {
    name: "Client 11",
    logo: "/ChatGPT Image Jun 10, 2026, 12_06_09 AM (1).png",
  },
  {
    name: "Client 12",
    logo: "/ChatGPT Image May 31, 2026, 11_02_54 PM.png",
  },
  {
    name: "Client 13",
    logo: "/Naturals.png",
  },
  {
    name: "Client 14",
    logo: "/White_Logo_no_BG.png",
  },
  {
    name: "Client 15",
    logo: "/White_Logo_no_bg (2).png",
  },
  {
    name: "Client 16",
    logo: "/png sweatbox logo.png",
  },
];

export function Clients() {
  const logos = [...clients, ...clients];

  return (
    <section className="relative overflow-hidden border-y border-white/5 py-20">
      <div className="mx-auto mb-10 max-w-7xl px-6">
        <p className="font-mono text-xs uppercase tracking-[0.35em] text-purple-400">
          Clients I’ve Worked With
        </p>

        <h2 className="mt-3 font-display text-3xl font-semibold text-white md:text-4xl">
          Trusted by creators & brands.
        </h2>
      </div>

      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-[#050505] to-transparent" />

        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-[#050505] to-transparent" />

        <motion.div
          className="flex w-max items-center gap-16 px-8"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            x: {
              duration: 28,
              repeat: Infinity,
              ease: "linear",
            },
          }}
        >
          {logos.map((client, index) => (
            <div
              key={`${client.name}-${index}`}
              className="group flex h-24 w-44 shrink-0 items-center justify-center"
            >
              <img
                src={client.logo}
                alt={client.name}
                className="max-h-16 max-w-[150px] object-contain opacity-55 grayscale transition-all duration-500 group-hover:scale-110 group-hover:opacity-100 group-hover:grayscale-0"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
