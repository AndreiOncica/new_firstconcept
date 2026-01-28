import React from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, Instagram, Facebook, Send, MapPin } from 'lucide-react';
import { toast } from 'sonner';

export const Contact = () => {
  const [fullName, setFullName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [projectSubject, setProjectSubject] = React.useState('Design Rezidențial');
  const [vision, setVision] = React.useState('');
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;

    setIsSubmitting(true);

    try {
      const res = await fetch('/api/contact.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        // important dacă vei pune cookie/csrf mai târziu:
        // credentials: 'include',
        body: JSON.stringify({
          fullName,
          email,
          projectSubject,
          vision,
          website: '' // honeypot
        }),
      });

      const data = await res.json().catch(() => null);

      if (!res.ok || !data?.ok) {
        const msg =
          data?.error ||
          `Eroare la trimitere (status ${res.status}). Te rog încearcă din nou.`;
        throw new Error(msg);
      }

      toast.success('Mesajul a fost trimis! Anca te va contacta în curând.');

      // reset
      setFullName('');
      setEmail('');
      setProjectSubject('Design Rezidențial');
      setVision('');
    } catch (err: any) {
      toast.error(err?.message || 'Nu am putut trimite mesajul. Încearcă din nou.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-32 bg-[#FCFAF7]">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-16 items-start">
            {/* Info Side */}
            <div className="lg:col-span-5 space-y-16">
              <div>
                <motion.span
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  className="text-accent font-sans text-[10px] uppercase tracking-[0.4em] font-bold mb-6 block"
                >
                  Contact
                </motion.span>
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="text-5xl md:text-6xl mb-8 leading-[1.1]"
                >
                  Să dăm viață <br />
                  <span className="italic font-normal">viziunii tale.</span>
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-muted-foreground text-lg font-light leading-relaxed max-w-md"
                >
                  Fiecare proiect începe cu o poveste. Abia aștept să o aflu pe a ta și să construim împreună spațiul la care visezi.
                </motion.p>
              </div>

              <div className="space-y-10">
                {[
                  { icon: Mail, label: "Email", value: "hello@firstconcept.ro", href: "mailto:hello@firstconcept.ro" },
                  { icon: Phone, label: "Telefon", value: "+40 722 000 000", href: "tel:+40722000000" },
                  { icon: MapPin, label: "Locație", value: "București, România", href: "#" }
                ].map((item, index) => (
                  <motion.a
                    key={index}
                    href={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="flex items-center gap-8 group"
                  >
                    <div className="w-14 h-14 rounded-2xl bg-white border border-border flex items-center justify-center shrink-0 group-hover:border-accent group-hover:bg-accent/5 transition-all duration-500">
                      <item.icon size={20} className="text-accent transition-transform duration-500 group-hover:scale-110" />
                    </div>
                    <div>
                      <p className="font-sans text-[9px] uppercase tracking-widest text-muted-foreground mb-1.5">{item.label}</p>
                      <p className="font-serif text-xl group-hover:text-accent transition-colors">{item.value}</p>
                    </div>
                  </motion.a>
                ))}
              </div>

              <div className="flex gap-4 pt-4">
                {[Instagram, Facebook].map((Icon, i) => (
                  <motion.a
                    key={i}
                    href="#"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.6 + i * 0.1 }}
                    className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:border-accent hover:text-accent transition-all duration-300"
                  >
                    <Icon size={18} />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Form Side */}
            <div className="lg:col-span-7">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="bg-white p-10 md:p-16 rounded-[3rem] shadow-sm border border-black/5 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-bl-[5rem] -mr-8 -mt-8" />

                <form onSubmit={handleSubmit} className="relative z-10 space-y-12">
                  <div className="grid md:grid-cols-2 gap-x-12 gap-y-12">
                    <div className="space-y-4">
                      <label className="font-sans text-[10px] uppercase tracking-[0.2em] text-accent font-bold">Nume Complet</label>
                      <input
                        type="text"
                        required
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="Anca Popescu"
                        className="w-full bg-transparent border-b border-border py-4 focus:border-accent outline-none transition-all font-serif text-xl placeholder:text-muted-foreground/20 hover:border-muted-foreground/30"
                      />
                    </div>

                    <div className="space-y-4">
                      <label className="font-sans text-[10px] uppercase tracking-[0.2em] text-accent font-bold">Email</label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="anca@exemplu.ro"
                        className="w-full bg-transparent border-b border-border py-4 focus:border-accent outline-none transition-all font-serif text-xl placeholder:text-muted-foreground/20 hover:border-muted-foreground/30"
                      />
                    </div>
                  </div>

                  <div className="space-y-4">
                    <label className="font-sans text-[10px] uppercase tracking-[0.2em] text-accent font-bold">Subiect Proiect</label>
                    <div className="relative">
                      <select
                        value={projectSubject}
                        onChange={(e) => setProjectSubject(e.target.value)}
                        className="w-full bg-transparent border-b border-border py-4 focus:border-accent outline-none transition-all font-serif text-xl appearance-none cursor-pointer hover:border-muted-foreground/30"
                      >
                        <option>Design Rezidențial</option>
                        <option>Spațiu Comercial</option>
                        <option>Consultanță</option>
                        <option>Altceva</option>
                      </select>
                      <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none">
                        <div className="w-2 h-2 border-r border-b border-accent rotate-45" />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <label className="font-sans text-[10px] uppercase tracking-[0.2em] text-accent font-bold">Viziunea Ta</label>
                    <textarea
                      rows={4}
                      required
                      value={vision}
                      onChange={(e) => setVision(e.target.value)}
                      placeholder="Povestește-mi puțin despre spațiul tău..."
                      className="w-full bg-transparent border-b border-border py-4 focus:border-accent outline-none transition-all resize-none font-serif text-xl placeholder:text-muted-foreground/20 hover:border-muted-foreground/30"
                    />
                  </div>

                  {/* Honeypot (hidden) */}
                  <input
                    type="text"
                    tabIndex={-1}
                    autoComplete="off"
                    value=""
                    onChange={() => {}}
                    className="hidden"
                    aria-hidden="true"
                    name="website"
                  />

                  <div className="pt-6">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="group relative inline-flex items-center justify-center gap-6 py-6 px-14 bg-primary text-primary-foreground font-sans uppercase tracking-[0.3em] text-[11px] font-bold hover:bg-accent transition-all duration-500 rounded-full overflow-hidden shadow-lg shadow-primary/10 hover:shadow-accent/20 disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      <span className="relative z-10">{isSubmitting ? 'Se trimite...' : 'Trimite Mesajul'}</span>
                      <div className="relative z-10 w-8 h-px bg-primary-foreground/30 group-hover:w-10 transition-all duration-500" />
                      <Send size={14} className="relative z-10 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </button>
                  </div>
                </form>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};