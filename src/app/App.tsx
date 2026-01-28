import React from 'react';
import { Navbar } from '@/app/components/Navbar';
import { Hero } from '@/app/components/Hero';
import { Gallery } from '@/app/components/Gallery';
import { About } from '@/app/components/About';
import { Pricing } from '@/app/components/Pricing';
import { FAQ } from '@/app/components/FAQ';
import { Contact } from '@/app/components/Contact';
import { Footer } from '@/app/components/Footer';
import { Toaster } from 'sonner';

function App() {
  return (
    <div className="relative min-h-screen bg-[#FCFAF7] selection:bg-accent/20 selection:text-accent">
      <Toaster position="top-center" expand={true} richColors />
      <Navbar />
      <main>
        <Hero />
        <Gallery />
        <About />
        <Pricing />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
