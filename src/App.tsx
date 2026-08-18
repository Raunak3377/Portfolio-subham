/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { CustomCursor } from './components/CustomCursor';
import { SmoothScroll } from './components/SmoothScroll';
import { LiquidInteraction } from './components/LiquidInteraction';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Clients } from './components/Clients';
import { Portfolio } from './components/Portfolio';
import { Services } from './components/Services';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Skills } from './components/Skills';
import { Contact } from './components/Contact';

export default function App() {
  return (
    <SmoothScroll>
      <LiquidInteraction />
      <CustomCursor />
      <Navbar />

      <main>
        <Hero />
        <Clients />
        <Portfolio />
        <Services />
        <About />
        <Experience />
        <Skills />
        <Contact />
      </main>
    </SmoothScroll>
  );
}
