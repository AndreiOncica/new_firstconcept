import { useState, useCallback, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "motion/react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import {
  X,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  ArrowRight,
} from "lucide-react";

type Project = {
  id: number;
  img: string;
  title: string;
  category: "Rezidențial" | "Comercial" | string;
  location?: string;
  collaboration?: string;
  description: string;
  gallery: string[];
};

type ApiResponse = {
  projects: Project[];
};

export const Gallery = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeImage, setActiveImage] = useState(0);

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start", skipSnaps: false },
    [Autoplay({ delay: 4000, stopOnInteraction: true })],
  );

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  // Fetch projects
  useEffect(() => {
    let mounted = true;

    (async () => {
      try {
        setLoading(true);
        setError(null);

        // IMPORTANT:
        // - local dev: set VITE_API_BASE or use full URL to your server
        // Example: const API = import.meta.env.VITE_API_BASE ?? "";
        const API = import.meta.env.VITE_API_BASE ?? "";

        const res = await fetch(
          "https://www.firstconcept.ro/api/projects.php",
          { cache: "no-store" },
        );
        if (!res.ok)
          throw new Error(`Failed to fetch projects (HTTP ${res.status})`);

        const data: ApiResponse = await res.json();
        const list = Array.isArray(data?.projects) ? data.projects : [];

        if (!mounted) return;
        setProjects(list);
      } catch (e: any) {
        if (!mounted) return;
        setProjects([]);
        setError(e?.message || "Could not load projects.");
      } finally {
        if (!mounted) return;
        setLoading(false);
      }
    })();

    return () => {
      mounted = false;
    };
  }, []);

  // Re-init Embla when projects load
  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.reInit();
  }, [emblaApi, projects.length]);

  // Modal keyboard controls
  useEffect(() => {
    if (!selectedProject) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeProject();
        return;
      }

      if (e.key === "ArrowLeft") {
        setActiveImage((prev) => Math.max(prev - 1, 0));
        return;
      }

      if (e.key === "ArrowRight") {
        setActiveImage((prev) =>
          Math.min(prev + 1, (selectedProject.gallery?.length || 1) - 1),
        );
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedProject]);

  const openProject = (project: Project) => {
    setSelectedProject(project);
    setActiveImage(0);
    document.body.style.overflow = "hidden";
  };

  const closeProject = () => {
    setSelectedProject(null);
    document.body.style.overflow = "auto";
  };

  const modalGallery = useMemo(
    () => selectedProject?.gallery ?? [],
    [selectedProject],
  );

  return (
    <section id="gallery" className="py-32 bg-white overflow-hidden">
      <div className="container mx-auto px-6 mb-20">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-12">
          <div className="max-w-2xl">
            <span className="text-accent font-sans text-[10px] uppercase tracking-[0.4em] font-bold mb-4 block">
              Portofoliu
            </span>
            <h2 className="mb-6">
              O selecție de spații cu{" "}
              <span className="italic font-normal">semnătură </span>distinctă.
            </h2>
            <p className="text-muted-foreground text-lg font-light leading-relaxed">
              Fiecare proiect explorează echilibrul dintre textură, lumină și
              volum, cu accent pe crearea unor experiențe autentice și
              memorabile.
            </p>
          </div>

          <div className="flex gap-4">
            <button
              onClick={scrollPrev}
              className="p-5 border border-border rounded-full hover:bg-primary hover:text-white transition-all duration-300 group"
              aria-label="Previous projects"
            >
              <ChevronLeft
                size={20}
                className="group-hover:-translate-x-1 transition-transform"
              />
            </button>
            <button
              onClick={scrollNext}
              className="p-5 border border-border rounded-full hover:bg-primary hover:text-white transition-all duration-300 group"
              aria-label="Next projects"
            >
              <ChevronRight
                size={20}
                className="group-hover:translate-x-1 transition-transform"
              />
            </button>
          </div>
        </div>
      </div>

      {/* Embla Carousel */}
      <div className="embla overflow-hidden px-6 py-6" ref={emblaRef}>
        <div className="embla__container flex gap-8">
          {loading && (
            <>
              {[0, 1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="embla__slide flex-[0_0_85%] md:flex-[0_0_33.33%] lg:flex-[0_0_25%] min-w-0"
                >
                  <div className="animate-pulse">
                    <div className="aspect-[3/4] rounded-[3rem] bg-muted shadow-lg" />
                    <div className="mt-8 space-y-3">
                      <div className="h-3 w-24 bg-muted rounded" />
                      <div className="h-6 w-40 bg-muted rounded" />
                      <div className="h-4 w-56 bg-muted rounded" />
                    </div>
                  </div>
                </div>
              ))}
            </>
          )}

          {!loading && error && (
            <div className="px-6 text-muted-foreground">
              Nu am putut încărca proiectele. ({error})
            </div>
          )}

          {!loading && !error && projects.length === 0 && (
            <div className="px-6 text-muted-foreground">
              Momentan nu există proiecte disponibile.
            </div>
          )}

          {!loading &&
            !error &&
            projects.map((project) => (
              <div
                key={project.id}
                className="embla__slide flex-[0_0_85%] md:flex-[0_0_33.33%] lg:flex-[0_0_25%] min-w-0"
              >
                <motion.div
                  whileHover={{ y: -10 }}
                  className="relative group cursor-pointer"
                  onClick={() => openProject(project)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ")
                      openProject(project);
                  }}
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
                    <p className="font-sans text-[10px] uppercase tracking-[0.2em] text-accent font-semibold">
                      {project.category}
                    </p>
                    <h3 className="text-2xl font-serif">{project.title}</h3>

                    {project.description && (
                      <p className="text-muted-foreground text-sm font-light leading-relaxed line-clamp-2 max-w-md">
                        {project.description}
                      </p>
                    )}
                  </div>
                </motion.div>
              </div>
            ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-white flex flex-col xl:flex-row h-screen"
          >
            {/* Close (mobile) */}
            <button
              onClick={closeProject}
              className="absolute top-6 right-6 p-4 bg-white/80 backdrop-blur-md border border-border rounded-full hover:bg-muted transition-colors z-20 xl:hidden"
              aria-label="Close"
            >
              <X size={20} />
            </button>

            {/* Left: images */}
            <div className="w-full xl:w-2/3 h-[50vh] xl:h-full relative bg-[#F3EFE9]">
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
                    src={modalGallery[activeImage]}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </AnimatePresence>

              {/* Thumbnails */}
              <div className="absolute bottom-4 xl:bottom-8 left-4 xl:left-8 right-4 xl:right-8">
                <div className="flex gap-4 overflow-x-auto overflow-y-visible pt-4 pb-8 no-scrollbar">
                  {modalGallery.map((img, idx) => (
                    <button
                      key={img + idx}
                      onClick={() => setActiveImage(idx)}
                      className={`shrink-0 w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden border-2 transition-all duration-300 ${
                        activeImage === idx
                          ? "border-accent scale-110 shadow-xl"
                          : "border-transparent opacity-60 hover:opacity-100"
                      }`}
                      aria-label={`Open image ${idx + 1}`}
                    >
                      <ImageWithFallback
                        src={img}
                        alt={`${selectedProject.title} thumbnail ${idx + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: details */}
            <div className="w-full xl:w-1/3 h-[50vh] xl:h-full p-8 sm:p-10 xl:p-20 overflow-y-auto bg-white flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start mb-10 xl:mb-16">
                  <span className="font-sans text-[11px] uppercase tracking-[0.4em] text-accent font-bold">
                    Concept Detaliat
                  </span>
                  <button
                    onClick={closeProject}
                    className="p-3 hover:bg-muted rounded-full transition-colors hidden xl:block"
                    aria-label="Close"
                  >
                    <X size={24} />
                  </button>
                </div>

                <h2 className="text-3xl sm:text-4xl xl:text-5xl mb-6 xl:mb-8 leading-tight">
                  {selectedProject.title}
                </h2>

                <p className="text-lg sm:text-xl text-muted-foreground font-light leading-relaxed mb-8 xl:mb-12">
                  {selectedProject.description}
                </p>

                <div className="space-y-6 xl:space-y-8 py-6 xl:py-8 border-y border-border">
                  <div className="flex justify-between items-center gap-6">
                    <p className="font-sans text-[9px] uppercase tracking-[0.2em] text-muted-foreground">
                      Tip proiect
                    </p>
                    <p className="font-medium text-right">
                      {selectedProject.category}
                    </p>
                  </div>

                  {selectedProject.location && (
                    <div className="flex justify-between items-center gap-6">
                      <p className="font-sans text-[9px] uppercase tracking-[0.2em] text-muted-foreground">
                        Locație
                      </p>
                      <p className="font-medium text-right">
                        {selectedProject.location}
                      </p>
                    </div>
                  )}

                  {selectedProject.collaboration && (
                    <div className="flex justify-between items-center gap-6">
                      <p className="font-sans text-[9px] uppercase tracking-[0.2em] text-muted-foreground">
                        Colaborare
                      </p>
                      <p className="font-medium text-right">
                        {selectedProject.collaboration}
                      </p>
                    </div>
                  )}
                </div>
              </div>

              <div className="pt-10 xl:pt-12">
                <button
                  className="w-full py-6 bg-primary text-white font-sans uppercase tracking-[0.2em] text-[11px] font-bold rounded-full hover:bg-accent transition-all flex items-center justify-center gap-4 group"
                  onClick={() => {
                    try {
                      localStorage.setItem(
                        "fc_contact_message_prefill",
                        `Vreau un proiect similar cu ${selectedProject.title}`,
                      );

                      // notify Contact (same tab) to apply the prefill
                      window.dispatchEvent(new Event("fc_contact_prefill"));
                    } catch {
                      // ignore storage errors
                    }
                    closeProject();
                    document
                      .getElementById("contact")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  Vreau un proiect similar
                  <ArrowRight
                    size={16}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
