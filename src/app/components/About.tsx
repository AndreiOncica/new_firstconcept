import React from 'react';
import { motion } from 'motion/react';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';

export const About = () => {
  return (
    <section id="about" className="py-32 bg-[#FCFAF7] overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <div className="relative order-2 lg:order-1">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2 }}
              className="relative z-10 aspect-[4/5] overflow-hidden rounded-[3rem] shadow-2xl"
            >
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1594744803329-e58b31de8bf5" 
                alt="Anca - Founder First Concept" 
                className="w-full h-full object-cover"
              />
            </motion.div>
            {/* Background elements */}
            <div className="absolute -top-12 -right-12 w-1/2 h-1/2 bg-accent/10 rounded-full blur-3xl -z-0" />
            <div className="absolute -bottom-10 -left-10 w-32 h-32 border border-accent/20 rounded-full -z-0" />
          </div>

          <div className="space-y-12 order-1 lg:order-2">
            <div>
              <span className="text-accent font-sans text-[10px] uppercase tracking-[0.4em] font-bold mb-4 block">Designerul tău</span>
              <h2 className="mb-8">Viziunea din spatele <span className="italic font-normal underline decoration-accent/30 underline-offset-8">fiecărui</span> spațiu.</h2>
              <p className="text-xl text-muted-foreground leading-relaxed font-light">
                Cred că designul interior nu este doar despre estetică, ci despre modul în care un spațiu te face să te simți în fiecare zi.
              </p>
            </div>
            
            <div className="space-y-6">
              <p className="text-muted-foreground leading-relaxed">
                Cu o experiență de peste 5 ani și 30 de proiecte finalizate cu succes, am învățat că un design reușit nu este cel care urmează orbește tendințele, ci cel care reflectă personalitatea celor care îl locuiesc.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Fiecare proiect "First Concept" este o colaborare strânsă, unde ideile tale prind contur tehnic și estetic, transformând o simplă locuință în "acasă".
              </p>
            </div>

            <div className="grid grid-cols-2 gap-12 pt-8">
              <div className="space-y-1">
                <p className="font-serif text-4xl text-primary">05</p>
                <p className="font-sans text-[9px] uppercase tracking-[0.2em] text-accent font-bold">Ani de Expertiză</p>
              </div>
              <div className="space-y-1">
                <p className="font-serif text-4xl text-primary">30+</p>
                <p className="font-sans text-[9px] uppercase tracking-[0.2em] text-accent font-bold">Viziuni Realizate</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
