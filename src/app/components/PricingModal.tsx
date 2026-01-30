import { X } from "lucide-react";

interface PricingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function PricingModal({ isOpen, onClose }: PricingModalProps) {
  if (!isOpen) return null;

  const servicesData = [
    {
      category: "SERVICII",
      items: [
        { name: "ÎNCĂPERE" },
        { name: "GARSONIERĂ / STUDIO" },
        { name: "APARTAMENT 2 CAMERE" },
        { name: "APARTAMENT 3 CAMERE" },
        { name: "APARTAMENT 4 CAMERE" },
        { name: "CASĂ PARTER" },
        { name: "CASĂ PARTER + ETAJ" },
        { name: "CASĂ PARTER + ETAJ + MANSARDĂ" },
        { name: "FAȚADĂ CASĂ" },
        { name: "RANDĂRI" },
        { name: "PLANURI TEHNICE P.T.H. (RELEVEU, SANITARE, PRIZE, ELECTRICE)" },
        { name: "AMENAJARE CURTE" },
        { name: "PLANURI TEHNICE AMENAJARE CURTE (PLANTARE, ILUMINAT, CONSTRUCȚII)" },
        { name: "DEPLASARE LA LOCAȚIE (în afara BUCUREȘTI-ILFOV)" },
      ]
    }
  ];

  const inclusions = [
    "O VIZITĂ LA LOCAȚIE",
    "PROIECT AMENAJARE 3D",
    "2 MODIFICĂRI",
    "PREDARE: deviz achiziții, prezentare generală explicativă, prezentare tip filmuleț, fișe tehnice mobilier comandă, imagini generale, imagini pentru mobilă la comandă și configurații IKEA (unde este nevoie) + alte configurații de mobilier."
  ];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-lg max-w-5xl w-full max-h-[90vh] overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-[#7a9b76] text-white p-6 flex items-center justify-between sticky top-0">
          <div>
            <h2 className="text-3xl font-serif mb-1">Listă Servicii</h2>
            <p className="text-white/90">Design Interior • Structură & Livrabile</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-white/20 rounded-lg transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="overflow-y-auto max-h-[calc(90vh-140px)] p-6">
          {servicesData.map((category, idx) => (
            <div key={idx} className="mb-8">
              <div className="bg-[#f5f4f1] p-6 rounded-lg">
                <table className="w-full">
                  <thead>
                    <tr className="border-b-2 border-[#7a9b76]">
                      <th className="text-left py-3 text-lg font-semibold text-[#2d2d2d]">
                        Serviciu
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {category.items.map((item, itemIdx) => (
                      <tr
                        key={itemIdx}
                        className="border-b border-gray-200 last:border-0 hover:bg-white/50 transition-colors"
                      >
                        <td className="py-4 pr-4 text-gray-700">{item.name}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}

          {/* Inclusions */}
          <div className="bg-[#7a9b76] text-white p-6 rounded-lg mt-6">
            <h3 className="text-xl font-semibold mb-4">
              PACHETELE PENTRU APARTAMENTE ȘI CASE POT INCLUDE:
            </h3>
            <ul className="space-y-3">
              {inclusions.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Note */}
          <div className="mt-6 p-4 bg-amber-50 border border-amber-200 rounded-lg">
            <p className="text-sm text-amber-900 italic">
              <strong>*Notă:</strong> Ofertele sunt personalizate în funcție de suprafață, complexitate și livrabilele dorite.
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="border-t p-6 bg-[#fafaf8] sticky bottom-0 flex justify-end gap-3">
          <button
            onClick={onClose}
            className="px-6 py-3 border-2 border-[#7a9b76] text-[#7a9b76] rounded-lg hover:bg-[#7a9b76] hover:text-white transition-colors"
          >
            Închide
          </button>
          <button
            onClick={() => {
              onClose();
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="px-6 py-3 bg-[#7a9b76] text-white rounded-lg hover:bg-[#588157] transition-colors"
          >
            Programează o discuție
          </button>
        </div>
      </div>
    </div>
  );
}