import { MessageSquare, Pencil, Image, CheckCircle } from "lucide-react";

export function Process() {
  const steps = [
    {
      icon: MessageSquare,
      title: "Consultare & Vizită",
      description: "Discutăm despre viziunea ta, măsurăm spațiul și înțelegem nevoile tale specifice."
    },
    {
      icon: Pencil,
      title: "Concept & Propunere",
      description: "Creez conceptul de design, paletă de culori și prezint mai multe variante de amenajare."
    },
    {
      icon: Image,
      title: "Vizualizare 3D",
      description: "Dezvolt randări 3D fotorealiste și planuri tehnice detaliate pentru întreg proiectul."
    },
    {
      icon: CheckCircle,
      title: "Implementare & Finalizare",
      description: "Te ghidez în procurarea materialelor și supervizez execuția până la finalizarea completă."
    }
  ];

  return (
    <section className="py-20 px-4 bg-[#f5f4f1]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4 text-gray-800 font-serif">Procesul de Lucru</h2>
          <div className="w-20 h-1 bg-[#7a9b76] mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Patru pași simpli pentru transformarea spațiului tău
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative">
                <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 h-full">
                  <div className="absolute -top-6 left-8 w-12 h-12 bg-[#7a9b76] text-white rounded-full flex items-center justify-center text-xl font-semibold">
                    {index + 1}
                  </div>
                  <div className="mt-6">
                    <Icon className="w-12 h-12 text-[#7a9b76] mb-4" />
                    <h3 className="text-xl mb-3 text-gray-800 font-semibold">{step.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{step.description}</p>
                  </div>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-[#7a9b76]/30"></div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
