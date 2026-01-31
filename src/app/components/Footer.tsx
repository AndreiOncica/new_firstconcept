import React from "react";
import { Logo } from "@/app/components/Logo";
import { Instagram, Facebook, Linkedin, ArrowUp } from "lucide-react";
import { PrivacyPolicyDialog } from '@/app/components/PrivacyPolicyDialog';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const [privacyOpen, setPrivacyOpen] = React.useState(false);

  return (
    <footer className="bg-white pt-24 pb-12 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12 mb-20">
          <Logo className="scale-110" />

          <div className="flex gap-10">
            <a
              href="#"
              className="text-muted-foreground hover:text-accent transition-colors"
            >
              <Instagram size={20} />
            </a>
            <a
              href="#"
              className="text-muted-foreground hover:text-accent transition-colors"
            >
              <Facebook size={20} />
            </a>
            <a
              href="#"
              className="text-muted-foreground hover:text-accent transition-colors"
            >
              <Linkedin size={20} />
            </a>
          </div>

          <button
            onClick={scrollToTop}
            className="group flex items-center gap-3 font-sans text-[10px] uppercase tracking-widest font-bold text-muted-foreground hover:text-primary transition-colors"
          >
            Înapoi sus
            <div className="w-10 h-10 rounded-full border border-border flex items-center justify-center group-hover:border-primary transition-colors">
              <ArrowUp size={14} />
            </div>
          </button>
        </div>

        <div className="pt-12 border-t border-border flex flex-col lg:flex-row justify-between items-center gap-8 text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-medium">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <p>© {currentYear} First Concept. All rights reserved.</p>
            <div className="flex gap-6">
              <button
                type="button"
                onClick={() => setPrivacyOpen(true)}
                className="hover:text-primary transition-colors border-l border-border pl-6"
              >
                Politica de Confidențialitate
              </button>
            </div>
          </div>

          {/* ANPC Logos/Buttons */}
          <div className="flex items-center gap-4">
            <a
              href="https://anpc.ro/ce-este-sal/"
              target="_blank"
              rel="noopener noreferrer"
              className="opacity-40 hover:opacity-100 transition-opacity"
            >
              <img
                src="../../../public/SAL-logo.png"
                alt="ANPC SAL"
                className="h-8"
              />
            </a>
            <a
              href="https://ec.europa.eu/consumers/odr/main/index.cfm?event=main.home2.show&lng=RO"
              target="_blank"
              rel="noopener noreferrer"
              className="opacity-40 hover:opacity-100 transition-opacity"
            >
              <img
                src="../../../public/SOL-logo.png"
                alt="ANPC SOL"
                className="h-8 "
              />
            </a>
          </div>
        </div>
      </div>
      <PrivacyPolicyDialog open={privacyOpen} onOpenChange={setPrivacyOpen} />
    </footer>
  );
};
