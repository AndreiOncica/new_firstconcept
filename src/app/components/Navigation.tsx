import { useState, useEffect } from "react";
import { Menu, X, Home } from "lucide-react";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = ["about", "gallery", "pricing", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { name: "Despre", id: "about" },
    { name: "Galerie", id: "gallery" },
    { name: "Prețuri", id: "pricing" },
    { name: "Contact", id: "contact" }
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-white shadow-lg py-3" 
          : "bg-white/10 backdrop-blur-sm py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className={`flex items-center gap-2 text-xl transition-all duration-300 group ${
              isScrolled ? "text-gray-800" : "text-white"
            }`}
          >
            <div className={`p-2 rounded-lg transition-all duration-300 ${
              isScrolled ? "bg-[#7a9b76]/10" : "bg-white/10"
            }`}>
              <Home className={`w-5 h-5 ${isScrolled ? "text-[#7a9b76]" : "text-white"}`} />
            </div>
            <span className="font-serif font-semibold">Design Interior</span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`px-5 py-2 rounded-lg transition-all duration-300 ${
                  activeSection === item.id
                    ? isScrolled
                      ? "bg-[#7a9b76] text-white"
                      : "bg-white text-[#7a9b76]"
                    : isScrolled
                      ? "text-gray-700 hover:bg-[#7a9b76]/10 hover:text-[#7a9b76]"
                      : "text-white hover:bg-white/10"
                }`}
              >
                {item.name}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden p-2 rounded-lg ${
              isScrolled 
                ? "text-[#7a9b76] bg-[#7a9b76]/10" 
                : "text-white bg-white/10"
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 bg-white rounded-lg shadow-xl p-4 space-y-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`block w-full text-left py-3 px-4 rounded-lg transition-all ${
                  activeSection === item.id
                    ? "bg-[#7a9b76] text-white"
                    : "text-gray-700 hover:bg-[#7a9b76]/10 hover:text-[#7a9b76]"
                }`}
              >
                {item.name}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
