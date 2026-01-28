import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Cookie } from 'lucide-react';

export const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      const timer = setTimeout(() => setIsVisible(true), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookie-consent', 'true');
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-8 left-8 right-8 md:left-auto md:right-12 md:max-w-md z-[200]"
        >
          <div className="bg-white p-8 rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.15)] border border-black/5">
            <div className="flex items-start gap-6">
              <div className="w-12 h-12 bg-accent/10 rounded-2xl flex items-center justify-center shrink-0 text-accent">
                <Cookie size={24} />
              </div>
              <div className="space-y-4">
                <h4 className="font-serif text-xl">Politica de Cookies</h4>
                <p className="text-muted-foreground text-sm font-light leading-relaxed">
                  Folosim cookie-uri pentru a-ți oferi cea mai bună experiență pe site-ul First Concept. 
                  Navigând în continuare, ești de acord cu utilizarea acestora.
                </p>
                <div className="flex gap-4 pt-2">
                  <button
                    onClick={acceptCookies}
                    className="flex-1 py-4 bg-primary text-white font-sans text-[10px] uppercase tracking-widest font-bold rounded-full hover:bg-accent transition-all"
                  >
                    Accept
                  </button>
                  <button
                    onClick={() => setIsVisible(false)}
                    className="px-6 py-4 border border-border text-primary font-sans text-[10px] uppercase tracking-widest font-bold rounded-full hover:bg-muted transition-all"
                  >
                    Detalii
                  </button>
                </div>
              </div>
              <button 
                onClick={() => setIsVisible(false)}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <X size={18} />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
