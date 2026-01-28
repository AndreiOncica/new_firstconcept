import * as React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { X } from "lucide-react";

export function PrivacyPolicyDialog({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (v: boolean) => void;
}) {
  const updatedAt = "2026-01-01"; // schimbă data când finalizezi

  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/40 z-[300]" />
        <Dialog.Content className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-[301] w-[92vw] max-w-3xl max-h-[85vh] overflow-hidden rounded-[2rem] bg-white border border-black/5 shadow-[0_20px_50px_rgba(0,0,0,0.18)]">
          <div className="flex items-start justify-between gap-6 p-8 md:p-10 border-b border-border">
            <div>
              <Dialog.Title className="font-serif text-2xl md:text-3xl">
                Politica de Confidențialitate
              </Dialog.Title>
              <Dialog.Description className="text-muted-foreground text-sm font-light mt-2">
                Ultima actualizare: {updatedAt}
              </Dialog.Description>
            </div>

            <Dialog.Close asChild>
              <button
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"
                aria-label="Închide"
              >
                <X size={16} />
              </button>
            </Dialog.Close>
          </div>

          <div className="p-8 md:p-10 overflow-y-auto max-h-[calc(85vh-110px)] text-sm leading-relaxed text-foreground">
            <PolicyContent />
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

function PolicyContent() {
  return (
    <div className="space-y-8">
      <section className="space-y-3">
        <h3 className="font-sans text-[11px] uppercase tracking-[0.25em] text-accent font-bold">
          1. Cine suntem
        </h3>
        <p className="text-muted-foreground font-light">
          First Concept Studio („noi”) prelucrează datele tale cu caracter personal atunci când ne
          contactezi prin formularul de pe site. În această politică explicăm ce date colectăm, de ce,
          cât timp le păstrăm și ce drepturi ai.
        </p>
        <p className="text-muted-foreground font-light">
          Operator de date: <strong>First Concept Studio</strong><br />
          Email contact: <strong>contact@firstconcept.ro</strong>
        </p>
      </section>

      <section className="space-y-3">
        <h3 className="font-sans text-[11px] uppercase tracking-[0.25em] text-accent font-bold">
          2. Ce date colectăm
        </h3>
        <ul className="list-disc pl-5 space-y-2 text-muted-foreground font-light">
          <li><strong>Nume</strong> (ex: „Nume Complet”)</li>
          <li><strong>Email</strong></li>
          <li><strong>Telefon</strong> (dacă există în formular)</li>
          <li><strong>Conținutul mesajului</strong> și orice alte informații pe care alegi să ni le oferi</li>
          <li><strong>Date tehnice minime</strong> (ex: adresă IP) — doar pentru securitate/anti-spam</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h3 className="font-sans text-[11px] uppercase tracking-[0.25em] text-accent font-bold">
          3. Scopuri și temei legal
        </h3>
        <div className="space-y-2 text-muted-foreground font-light">
          <p>
            Prelucrăm datele tale pentru:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Răspuns la solicitarea ta</strong> și comunicare privind proiectul.</li>
            <li><strong>Pregătirea unei oferte</strong> (dacă ne ceri acest lucru).</li>
            <li><strong>Securitate</strong> și prevenirea abuzului (spam).</li>
          </ul>

          <p className="mt-3">
            Temei legal (GDPR):
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <strong>Art. 6(1)(b)</strong> — demersuri la cererea persoanei înainte de încheierea unui contract
              (când ne soliciți o ofertă/serviciu).
            </li>
            <li>
              <strong>Art. 6(1)(f)</strong> — interes legitim (securitate, prevenirea spam-ului, gestionarea solicitărilor).
            </li>
          </ul>
        </div>
      </section>

      <section className="space-y-3">
        <h3 className="font-sans text-[11px] uppercase tracking-[0.25em] text-accent font-bold">
          4. Cât timp păstrăm datele
        </h3>
        <p className="text-muted-foreground font-light">
          Păstrăm mesajele și datele de contact atât cât este necesar pentru a răspunde solicitării și
          pentru a gestiona eventuale discuții despre proiect. De regulă, până la <strong>12 luni</strong>,
          cu excepția situațiilor în care legea impune altfel sau când este necesar pentru apărarea drepturilor noastre.
        </p>
      </section>

      <section className="space-y-3">
        <h3 className="font-sans text-[11px] uppercase tracking-[0.25em] text-accent font-bold">
          5. Cui divulgăm datele
        </h3>
        <p className="text-muted-foreground font-light">
          Nu vindem datele tale. Putem folosi furnizori tehnici (ex: hosting, email) care acționează ca
          persoane împuternicite și care au obligații de confidențialitate. Datele sunt accesate doar în măsura necesară funcționării.
        </p>
      </section>

      <section className="space-y-3">
        <h3 className="font-sans text-[11px] uppercase tracking-[0.25em] text-accent font-bold">
          6. Drepturile tale
        </h3>
        <ul className="list-disc pl-5 space-y-2 text-muted-foreground font-light">
          <li>Dreptul de acces</li>
          <li>Dreptul la rectificare</li>
          <li>Dreptul la ștergere („dreptul de a fi uitat”)</li>
          <li>Dreptul la restricționare</li>
          <li>Dreptul la portabilitate (unde e aplicabil)</li>
          <li>Dreptul de opoziție</li>
          <li>Dreptul de a depune plângere la ANSPDCP</li>
        </ul>
        <p className="text-muted-foreground font-light">
          Pentru exercitarea drepturilor: <strong>contact@firstconcept.ro</strong>
        </p>
      </section>

      <section className="space-y-3">
        <h3 className="font-sans text-[11px] uppercase tracking-[0.25em] text-accent font-bold">
          7. Cookie-uri
        </h3>
        <p className="text-muted-foreground font-light">
          Site-ul este de prezentare și nu folosește cookie-uri de marketing sau tracking. Dacă în viitor
          vom folosi servicii de analiză (analytics) sau alte instrumente care setează cookie-uri neesențiale,
          vom solicita consimțământul tău în prealabil.
        </p>
      </section>
    </div>
  );
}