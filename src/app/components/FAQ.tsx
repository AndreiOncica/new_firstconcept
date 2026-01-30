import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus, ArrowUpRight } from 'lucide-react';

const faqs = [
  {
    q: "Care este primul pas într-un proiect?",
    a: "Începem întotdeauna cu o discuție (discovery call) pentru a ne cunoaște și a înțelege stilul tău de viață. Ulterior, realizăm un releveu al spațiului și stabilim conceptul general."
  },
  {
    q: "Cât de implicat trebuie să fiu în proces?",
    a: "Tu ești decidentul final, dar First Concept preia toată greutatea: cercetare, selecție furnizori, detalii tehnice și coordonarea șantierului, pentru ca tu să te bucuri doar de rezultatul final."
  },
  {
    q: "Pot păstra piese de mobilier pe care le dețin deja?",
    a: "Desigur! Designul bun înseamnă adaptabilitate. Putem integra piesele tale dragi în noul concept, oferindu-le un context modern și coerent prin texturi și culori complementare."
  },
  {
    q: "Ce se întâmplă dacă bugetul meu este limitat?",
    a: "Vom stabili prioritățile împreună. Rolul meu este să optimizez costurile, alegând unde merită investit în materiale de lungă durată și unde putem găsi soluții creative și accesibile."
  },
  {
    q: "Oferiți și servicii de implementare (șantier)?",
    a: "Da, oferim management de proiect pentru a ne asigura că viziunea de pe hârtie devine realitate. Suntem puntea de legătură între tine și echipele de constructori."
  }
];

export const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="faq" className="py-32 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-24">
          {/* Header Area */}
          <div className="lg:w-1/3">
            <div className="sticky top-32">
              <span className="text-accent font-sans text-[10px] uppercase tracking-[0.4em] font-bold mb-4 block">Întrebări Frecvente</span>
              <h2 className="mb-8 leading-tight">Tot ce trebuie să știi <br /><span className="italic font-normal underline decoration-accent/20 underline-offset-8">înainte</span> de start.</h2>
              <p className="text-muted-foreground text-lg font-light leading-relaxed mb-12">
                Claritatea este esențială pentru o colaborare reușită. Iată răspunsurile la cele mai comune întrebări.
              </p>
              <a 
                href="#contact" 
                className="inline-flex items-center gap-4 font-sans text-[11px] uppercase tracking-widest font-bold text-primary hover:text-accent transition-colors group"
              >
                Nu ai găsit ce căutai? Contactează-ne
                <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>
            </div>
          </div>
          
          {/* FAQ List Area */}
          <div className="lg:w-2/3">
            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <motion.div 
                  key={i}
                  className={`border border-border rounded-[2.5rem] overflow-hidden transition-all duration-500 ${
                    activeIndex === i ? 'bg-[#F3EFE9] border-transparent shadow-sm' : 'hover:border-accent/40'
                  }`}
                >
                  <button 
                    onClick={() => setActiveIndex(activeIndex === i ? null : i)}
                    className="w-full px-10 py-10 flex justify-between items-center text-left"
                  >
                    <span className="font-serif text-2xl md:text-3xl pr-8">{faq.q}</span>
                    <div className={`shrink-0 w-12 h-12 rounded-full border border-black/5 flex items-center justify-center transition-all duration-500 ${
                      activeIndex === i ? 'bg-primary text-white rotate-90' : 'bg-white text-primary'
                    }`}>
                      {activeIndex === i ? <Minus size={20} /> : <Plus size={20} />}
                    </div>
                  </button>
                  
                  <AnimatePresence>
                    {activeIndex === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.5, ease: [0.04, 0.62, 0.23, 0.98] }}
                      >
                        <div className="px-10 pb-12 pt-4">
                          <div className="h-px w-16 bg-accent/30 mb-8" />
                          <p className="text-muted-foreground text-xl font-light leading-relaxed max-w-2xl">
                            {faq.a}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
