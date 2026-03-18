/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { CustomCursor } from './components/CustomCursor';
import { SmoothScroll } from './components/SmoothScroll';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Portfolio } from './components/Portfolio';
import { Services } from './components/Services';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Skills } from './components/Skills';
import { Contact } from './components/Contact';
import { Admin } from './components/Admin';
import { ErrorBoundary } from './components/ErrorBoundary';
import { useState } from 'react';

export default function App() {
  const [isAdmin, setIsAdmin] = useState(false);

  return (
    <SmoothScroll>
      <CustomCursor />
      <Navbar onToggleAdmin={() => setIsAdmin(!isAdmin)} isAdmin={isAdmin} />
      <main>
        {isAdmin ? (
          <ErrorBoundary>
            <Admin />
          </ErrorBoundary>
        ) : (
          <>
            <Hero />
            <Portfolio />
            <About />
            <Experience />
            <Skills />
            <Contact />
          </>
        )}
      </main>
    </SmoothScroll>
  );
}
