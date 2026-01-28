import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { Logo } from '@/app/components/Logo';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Proiecte', href: '#gallery' },
    { name: 'Despre', href: '#about' },
    { name: 'Servicii', href: '#pricing' },
    { name: 'Întrebări', href: '#faq' },
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ease-in-out px-6 pt-6`}
    >
      <motion.div 
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className={`container mx-auto max-w-7xl transition-all duration-500 rounded-full px-5 md:px-8 py-2 md:py-4 flex justify-between items-center ${
          scrolled 
            ? 'bg-white/80 backdrop-blur-xl shadow-[0_12px_40px_rgba(0,0,0,0.08)] border border-white/20' 
            : 'bg-transparent'
        }`}
      >
        <motion.a variants={itemVariants} href="#" className="hover:opacity-80 transition-opacity scale-90 md:scale-100 origin-left">
          <Logo />
        </motion.a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <motion.a
              key={link.name}
              href={link.href}
              variants={itemVariants}
              className="relative font-sans text-[11px] uppercase tracking-[0.2em] font-medium hover:text-accent transition-colors group py-1"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-px bg-accent transition-all duration-300 group-hover:w-full" />
            </motion.a>
          ))}
          <motion.a
            variants={itemVariants}
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-primary text-primary-foreground text-[10px] uppercase tracking-[0.2em] font-bold hover:bg-accent transition-all duration-300 rounded-full shadow-lg hover:shadow-accent/20"
          >
            Hai să discutăm
          </motion.a>
        </div>

        {/* Mobile Toggle */}
        <motion.button 
          variants={itemVariants}
          className="md:hidden p-2 text-primary hover:text-accent transition-colors" 
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </motion.button>
      </motion.div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="absolute top-28 left-6 right-6 bg-white/95 backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] rounded-[2.5rem] p-12 md:hidden flex flex-col gap-8 border border-black/5"
          >
            {navLinks.map((link, idx) => (
              <motion.a
                key={link.name}
                href={link.href}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="font-serif text-3xl hover:text-accent transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </motion.a>
            ))}
            <motion.a
              href="#contact"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="w-full py-5 bg-primary text-primary-foreground text-center font-sans text-xs uppercase tracking-widest font-bold rounded-full shadow-xl"
              onClick={() => setIsOpen(false)}
            >
              Contactează-mă
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
