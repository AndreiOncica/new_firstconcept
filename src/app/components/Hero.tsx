import React from 'react';
import { motion } from 'motion/react';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-40 pb-20 overflow-hidden bg-[#FCFAF7]">
      <div className="container mx-auto px-6 grid lg:grid-cols-12 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="lg:col-span-6 xl:col-span-5"
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="h-px w-12 bg-accent" />
            <span className="font-sans text-[10px] uppercase tracking-[0.4em] text-accent font-semibold">
              Estetică atemporală
            </span>
          </div>
          <h1 className="mb-8 leading-[1.1] font-serif">
            Echilibrul perfect <br />
            între <span className="italic font-normal">viziune</span> și <br />
            confort modern.
          </h1>
          <p className="text-lg text-muted-foreground max-w-md mb-12 leading-relaxed font-sans font-light">
            First Concept transformă spațiile rezidențiale în refugii de liniște, 
            punând accent pe texturi naturale și lumină arhitecturală.
          </p>
          <div className="flex flex-wrap gap-8 items-center">
            <a 
              href="#gallery" 
              className="px-10 py-4 bg-primary text-primary-foreground font-sans uppercase tracking-[0.2em] text-[11px] font-semibold hover:bg-accent transition-all duration-500 rounded-full"
            >
              Portofoliu
            </a>
            <a 
              href="#about" 
              className="font-sans uppercase tracking-[0.2em] text-[11px] font-semibold hover:text-accent transition-colors flex items-center gap-3 group"
            >
              Povestea Noastră
              <span className="w-8 h-px bg-primary group-hover:bg-accent group-hover:w-12 transition-all duration-300" />
            </a>
          </div>
        </motion.div>
        
        <div className="lg:col-span-6 lg:col-start-7 xl:col-span-7 relative">
          <motion.div 
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="relative aspect-[4/5] md:aspect-[3/2] lg:aspect-square overflow-hidden rounded-[2rem] shadow-2xl"
          >
            <ImageWithFallback 
              src="https://images.unsplash.com/photo-1700713041101-0b2a46417c15" 
              alt="Interior Concept" 
              className="w-full h-full object-cover"
            />
            {/* Soft overlay for texture */}
            <div className="absolute inset-0 bg-accent/5 mix-blend-multiply" />
          </motion.div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/4 h-full bg-secondary/20 -z-0 blur-3xl opacity-50" />
    </section>
  );
};
