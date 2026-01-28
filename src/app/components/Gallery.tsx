import React, { useState, useCallback, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';
import { X, ChevronLeft, ChevronRight, Maximize2, ArrowRight } from 'lucide-react';

const projects = [
  { 
    id: 1, 
    img: "https://images.unsplash.com/photo-1758983304673-5a2d091e43e2", 
    title: "Minimal Loft", 
    category: "Rezidențial", 
    description: "O abordare minimalistă asupra unui spațiu industrial din inima orașului, punând accent pe beton aparent și lumină naturală.",
    gallery: [
      "https://images.unsplash.com/photo-1758983304673-5a2d091e43e2",
      "https://images.unsplash.com/photo-1594488651083-291142f35fe1",
      "https://images.unsplash.com/photo-1615529182904-14819c35db37"
    ]
  },
  { 
    id: 2, 
    img: "https://images.unsplash.com/photo-1618321331798-6c89635802ad", 
    title: "Azure Kitchen", 
    category: "Bucătărie", 
    description: "Linii curate și nuanțe marine pentru o bucătărie modernă, unde funcționalitatea întâlnește estetica premium.",
    gallery: [
      "https://images.unsplash.com/photo-1618321331798-6c89635802ad",
      "https://images.unsplash.com/photo-1556911223-e250e24ec766",
      "https://images.unsplash.com/photo-1556912173-3bb406ef7e77"
    ]
  },
  { 
    id: 3, 
    img: "https://images.unsplash.com/photo-1718220268527-4477fd170775", 
    title: "Creative Hub", 
    category: "Office", 
    description: "Spațiu de lucru ergonomic gândit pentru a stimula creativitatea și colaborarea în cadrul unei echipe tinere.",
    gallery: [
      "https://images.unsplash.com/photo-1718220268527-4477fd170775",
      "https://images.unsplash.com/photo-1497366216548-37526070297c",
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2"
    ]
  },
  { 
    id: 4, 
    img: "https://images.unsplash.com/photo-1668089677938-b52086753f77", 
    title: "Velvet Suite", 
    category: "Dormitor", 
    description: "Rafinament tactil și cromatic pentru un somn odihnitor. Utilizarea texturilor bogate creează o atmosferă intimă.",
    gallery: [
      "https://images.unsplash.com/photo-1668089677938-b52086753f77",
      "https://images.unsplash.com/photo-1540518614846-7eded433c457",
      "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af"
    ]
  },
];

export const Gallery = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeImage, setActiveImage] = useState(0);

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: 'start', skipSnaps: false },
    [Autoplay({ delay: 4000, stopOnInteraction: true })]
  );

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  const openProject = (project) => {
    setSelectedProject(project);
    setActiveImage(0);
    // Disable scroll on body when modal is open
    document.body.style.overflow = 'hidden';
  };

  const closeProject = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <section id="gallery" className="py-32 bg-white overflow-hidden">
      <div className="container mx-auto px-6 mb-20">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-12">
          <div className="max-w-2xl">
            <span className="text-accent font-sans text-[10px] uppercase tracking-[0.4em] font-bold mb-4 block">Portofoliu</span>
            <h2 className="mb-6">O selecție de spații <span className="italic font-normal">semnătură</span>.</h2>
            <p className="text-muted-foreground text-lg font-light leading-relaxed">
              Fiecare proiect este o explorare a echilibrului între textură, lumină și volum. 
              Am lucrat cu peste 30 de clienți pentru a crea experiențe unice.
            </p>
          </div>
          <div className="flex gap-4">
            <button 
              onClick={scrollPrev}
              className="p-5 border border-border rounded-full hover:bg-primary hover:text-white transition-all duration-300 group"
            >
              <ChevronLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
            </button>
            <button 
              onClick={scrollNext}
              className="p-5 border border-border rounded-full hover:bg-primary hover:text-white transition-all duration-300 group"
            >
              <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>

      {/* Embla Carousel Viewport */}
      <div className="embla overflow-hidden px-6" ref={emblaRef}>
        <div className="embla__container flex gap-8">
          {projects.map((project) => (
            <div key={project.id} className="embla__slide flex-[0_0_85%] md:flex-[0_0_33.33%] lg:flex-[0_0_25%] min-w-0">
              <motion.div 
                whileHover={{ y: -10 }}
                className="relative group cursor-pointer"
                onClick={() => openProject(project)}
              >
                <div className="aspect-[3/4] overflow-hidden rounded-[3rem] bg-muted relative shadow-lg">
                  <ImageWithFallback 
                    src={project.img} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors duration-500" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-primary shadow-xl">
                      <Maximize2 size={24} />
                    </div>
                  </div>
                </div>
                <div className="mt-8 space-y-2">
                  <p className="font-sans text-[10px] uppercase tracking-[0.2em] text-accent font-semibold">{project.category}</p>
                  <h3 className="text-2xl font-serif">{project.title}</h3>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox / Project Details Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-white flex flex-col md:flex-row h-screen"
          >
            {/* Close Button Mobile */}
            <button 
              onClick={closeProject}
              className="absolute top-6 right-6 p-4 bg-white/80 backdrop-blur-md border border-border rounded-full hover:bg-muted transition-colors z-20 md:hidden"
            >
              <X size={20} />
            </button>

            {/* Left Side: Images Gallery */}
            <div className="w-full md:w-2/3 h-[50vh] md:h-full relative bg-[#F3EFE9]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeImage}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.6 }}
                  className="w-full h-full"
                >
                  <ImageWithFallback 
                    src={selectedProject.gallery[activeImage]} 
                    alt={selectedProject.title} 
                    className="w-full h-full object-cover" 
                  />
                </motion.div>
              </AnimatePresence>
              
              {/* Gallery Thumbnails Overlay */}
              <div className="absolute bottom-8 left-8 right-8 flex gap-4 overflow-x-auto pb-4 no-scrollbar">
                {selectedProject.gallery.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImage(idx)}
                    className={`shrink-0 w-24 h-24 rounded-2xl overflow-hidden border-2 transition-all duration-300 ${
                      activeImage === idx ? 'border-accent scale-110 shadow-xl' : 'border-transparent opacity-60 hover:opacity-100'
                    }`}
                  >
                    <ImageWithFallback src={img} alt="Thumbnail" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>

            {/* Right Side: Details Panel */}
            <div className="w-full md:w-1/3 h-[50vh] md:h-full p-10 md:p-20 overflow-y-auto bg-white flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start mb-16">
                  <span className="font-sans text-[11px] uppercase tracking-[0.4em] text-accent font-bold">Concept Detaliat</span>
                  <button 
                    onClick={closeProject}
                    className="p-3 hover:bg-muted rounded-full transition-colors hidden md:block"
                  >
                    <X size={24} />
                  </button>
                </div>

                <h2 className="text-4xl md:text-5xl mb-8 leading-tight">{selectedProject.title}</h2>
                <p className="text-xl text-muted-foreground font-light leading-relaxed mb-12">
                  {selectedProject.description}
                </p>

                <div className="space-y-8 py-8 border-y border-border">
                  <div className="flex justify-between items-center">
                    <p className="font-sans text-[9px] uppercase tracking-[0.2em] text-muted-foreground">Locație</p>
                    <p className="font-medium">București, RO</p>
                  </div>
                  <div className="flex justify-between items-center">
                    <p className="font-sans text-[9px] uppercase tracking-[0.2em] text-muted-foreground">Stil</p>
                    <p className="font-medium">Contemporary Minimalist</p>
                  </div>
                  <div className="flex justify-between items-center">
                    <p className="font-sans text-[9px] uppercase tracking-[0.2em] text-muted-foreground">Colaborare</p>
                    <p className="font-medium">Design & Management</p>
                  </div>
                </div>
              </div>

              <div className="pt-12">
                <button className="w-full py-6 bg-primary text-white font-sans uppercase tracking-[0.2em] text-[11px] font-bold rounded-full hover:bg-accent transition-all flex items-center justify-center gap-4 group">
                  Vreau un proiect similar
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
