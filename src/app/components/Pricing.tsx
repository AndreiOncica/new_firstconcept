import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Check, ArrowRight, Plus, HelpCircle, Briefcase, FileText, Layout } from 'lucide-react';

const detailedServices = [
  {
    category: "Servicii de Bază",
    items: [
      { name: "Design Interior - O Cameră", price: "700 €", detail: "Ideal pentru living sau dormitor. Include concept, plan mobilare și moodboard." },
      { name: "Apartament Complet (2-3 Camere)", price: "1800 €", detail: "Proiect unitar pentru întregul spațiu. Include randări 3D și planuri tehnice." },
      { name: "Casă / Vilă Completă", price: "2600 €", detail: "Design premium pentru spații mari. Include tur virtual 360° și management materiale." },
    ]
  },
  {
    category: "Servicii Adiționale",
    items: [
      { name: "Consultanță 1-on-1 (60 min)", price: "100 €", detail: "Discuție detaliată despre soluții rapide, culori sau piese de mobilier." },
      { name: "Management de Proiect (Șantier)", price: "150 € / vizită", detail: "Supravegherea implementării designului și coordonarea echipelor." },
      { name: "Shopping Assistant", price: "250 € / zi", detail: "Însoțire în magazine pentru alegerea finisajelor și mobilierului." },
      { name: "Proiect Tehnic Fațadă", price: "400 €", detail: "Design exterior și selecție de materiale pentru fațada casei." },
    ]
  }
];

export const Pricing = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <section id="pricing" className="py-32 bg-[#F3EFE9]">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto mb-20 text-center">
          <span className="text-accent font-sans text-[10px] uppercase tracking-[0.4em] font-bold mb-4 block">Tarife & Colaborare</span>
          <h2 className="mb-6 leading-tight">Transparență în <span className="italic font-normal">investiție</span>.</h2>
          <p className="text-muted-foreground text-lg font-light leading-relaxed max-w-2xl mx-auto">
            Designul de interior este o investiție în calitatea vieții tale. Iată cum structurăm costurile pentru proiectele First Concept.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {/* Featured Service Cards */}
          <div className="md:col-span-2 grid md:grid-cols-2 gap-8">
            <motion.div 
              whileHover={{ y: -10 }}
              className="bg-white p-12 rounded-[3rem] shadow-sm border border-black/5 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 bg-accent/10 rounded-2xl flex items-center justify-center text-accent mb-8">
                  <Layout size={24} />
                </div>
                <h4 className="text-2xl font-serif mb-4">Design Rezidențial</h4>
                <p className="text-muted-foreground text-sm leading-relaxed mb-8">Proiecte complete pentru apartamente și case, de la concept la planuri tehnice detaliate.</p>
              </div>
              <div className="pt-8 border-t border-border flex items-center justify-between">
                <p className="font-sans text-[10px] uppercase tracking-widest font-bold opacity-60">Punct de pornire</p>
                <p className="font-serif text-2xl text-accent">700 €</p>
              </div>
            </motion.div>

            <motion.div 
              whileHover={{ y: -10 }}
              className="bg-white p-12 rounded-[3rem] shadow-sm border border-black/5 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 bg-accent/10 rounded-2xl flex items-center justify-center text-accent mb-8">
                  <Briefcase size={24} />
                </div>
                <h4 className="text-2xl font-serif mb-4">Servicii On-Site</h4>
                <p className="text-muted-foreground text-sm leading-relaxed mb-8">Management de șantier și asistență la cumpărături pentru a garanta execuția impecabilă.</p>
              </div>
              <div className="pt-8 border-t border-border flex items-center justify-between">
                <p className="font-sans text-[10px] uppercase tracking-widest font-bold opacity-60">Punct de pornire</p>
                <p className="font-serif text-2xl text-accent">150 €</p>
              </div>
            </motion.div>
          </div>

          {/* CTA Card */}
          <div className="bg-primary text-primary-foreground p-12 rounded-[3rem] shadow-xl flex flex-col justify-center items-center text-center">
            <h4 className="text-2xl font-serif mb-6 leading-tight">Cauți o ofertă personalizată?</h4>
            <p className="text-white/70 text-sm mb-12 font-light leading-relaxed">Fiecare spațiu are nevoi diferite. Vezi lista completă de servicii pentru o imagine de ansamblu.</p>
            <button 
              onClick={openModal}
              className="px-10 py-5 bg-accent text-white font-sans uppercase tracking-[0.2em] text-[10px] font-bold rounded-full hover:bg-white hover:text-primary transition-all duration-300"
            >
              Vezi Lista Detaliată
            </button>
          </div>
        </div>
      </div>

      {/* Structured Modal for Services */}
      <AnimatePresence>
        {isModalOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeModal}
              className="fixed inset-0 bg-primary/40 backdrop-blur-md z-[110]"
            />
            <motion.div 
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 bottom-0 w-full max-w-2xl bg-white z-[120] shadow-2xl overflow-y-auto"
            >
              <div className="p-10 md:p-16">
                <div className="flex justify-between items-center mb-16">
                  <LogoMinimal />
                  <button 
                    onClick={closeModal}
                    className="p-4 hover:bg-muted rounded-full transition-colors"
                  >
                    <X size={24} />
                  </button>
                </div>

                <div className="mb-20">
                  <span className="text-accent font-sans text-[10px] uppercase tracking-[0.4em] font-bold mb-4 block">Listă Servicii</span>
                  <h2 className="text-5xl mb-6">Investiția în <br /><span className="italic font-normal">Viziune</span>.</h2>
                  <p className="text-muted-foreground font-light text-lg">
                    Iată cotațiile standard pentru serviciile noastre. Pentru un deviz exact, te invităm la o primă discuție gratuită.
                  </p>
                </div>

                <div className="space-y-24">
                  {detailedServices.map((cat, i) => (
                    <div key={i} className="space-y-10">
                      <h4 className="font-serif text-2xl border-b border-border pb-6 flex items-center justify-between italic">
                        {cat.category}
                        <ArrowRight size={18} className="text-accent" />
                      </h4>
                      <div className="space-y-12">
                        {cat.items.map((item, j) => (
                          <div key={j} className="group">
                            <div className="flex justify-between items-end mb-4">
                              <h5 className="font-serif text-xl group-hover:text-accent transition-colors">{item.name}</h5>
                              <p className="font-serif text-xl text-accent">{item.price}</p>
                            </div>
                            <p className="text-muted-foreground text-sm font-light leading-relaxed max-w-md">
                              {item.detail}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-24 pt-12 border-t border-border">
                  <div className="bg-[#F3EFE9] p-10 rounded-[2.5rem]">
                    <h5 className="font-serif text-xl mb-4 italic">Notă importantă</h5>
                    <p className="text-muted-foreground text-sm font-light leading-relaxed">
                      Toate prețurile sunt estimative și pot varia în funcție de complexitatea tehnică a spațiului și de nivelul de detaliere al randărilor solicitate. Prima sesiune de consultanță (discovery call) de 15 minute este întotdeauna gratuită.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
};

const LogoMinimal = () => (
  <div className="flex flex-col leading-none">
    <span className="font-serif text-xl tracking-tight font-semibold">First<span className="italic font-normal text-accent">Concept</span></span>
    <span className="font-sans text-[7px] uppercase tracking-[0.4em] text-muted-foreground mt-1">Pricing Guide</span>
  </div>
);
