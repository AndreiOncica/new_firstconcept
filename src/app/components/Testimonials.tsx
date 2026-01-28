import React from 'react';
import { motion } from 'motion/react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    text: "Anca a reușit să transforme un apartament banal de bloc într-un sanctuar al relaxării. Atenția la detalii este pur și simplu incredibilă.",
    name: "Elena Popescu"
  },
  {
    text: "Prima colaborare care a mers exact conform planului. Nu doar design-ul a fost superb, dar și coordonarea a fost impecabilă.",
    name: "Mihai Ionescu"
  },
  {
    text: "A înțeles exact stilul nostru, chiar dacă noi nu știam să îl explicăm. Recomand cu toată încrederea echipa First Concept.",
    name: "Sorina & Alex"
  }
];

export const Testimonials = () => {
  return (
    <section className="py-32 bg-background border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center mb-20">
          <Quote size={40} className="text-accent/20 mb-6" />
          <h2 className="text-center font-serif italic">Gânduri de la clienții noștri.</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-16">
          {testimonials.map((t, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="text-center"
            >
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed italic">
                "{t.text}"
              </p>
              <h4 className="font-heading uppercase tracking-widest text-xs text-primary">{t.name}</h4>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
