import React from 'react';

export const Logo = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`flex flex-col group cursor-pointer ${className}`}>
      <div className="flex items-center leading-none">
        <span className="font-serif text-xl tracking-tight font-semibold text-primary uppercase">First</span>
        <span className="font-serif text-xl italic font-light text-accent">Concept</span>
      </div>
      <span className="font-sans text-[7px] uppercase tracking-[0.4em] text-muted-foreground mt-1.5 opacity-60">
        Interior Design Studio
      </span>
      <div className="h-[1px] w-0 bg-accent mt-1 transition-all duration-500 group-hover:w-full" />
    </div>
  );
};
