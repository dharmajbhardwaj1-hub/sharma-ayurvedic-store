import { Leaf, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Treatments", href: "#treatments" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#booking" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className="sticky top-0 z-50 transition-all duration-300"
      style={{
        backgroundColor: scrolled
          ? "rgba(249,247,242,0.92)"
          : "rgba(249,247,242,0.75)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        borderBottom: "1px solid rgba(216,201,168,0.5)",
        boxShadow: scrolled ? "0 4px 20px rgba(45,90,39,0.12)" : "none",
      }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        <button
          type="button"
          className="flex items-center gap-2 group bg-transparent border-0 cursor-pointer p-0"
          aria-label="Sharma Ayurvedic Store – go to top"
          data-ocid="header.link"
          onClick={() => handleNavClick("#home")}
        >
          <div
            className="w-9 h-9 rounded-full flex items-center justify-center"
            style={{ backgroundColor: "#2d5a27" }}
          >
            <Leaf
              className="w-5 h-5"
              style={{ color: "#d4af37" }}
              aria-hidden="true"
            />
          </div>
          <div className="leading-tight text-left">
            <div
              className="font-bold text-sm tracking-widest uppercase"
              style={{
                color: "#2d5a27",
                fontFamily: "Open Sans, sans-serif",
                letterSpacing: "0.1em",
              }}
            >
              Sharma Ayurvedic
            </div>
            <div
              className="text-xs tracking-wider"
              style={{ color: "#5b5b5b", fontFamily: "Open Sans, sans-serif" }}
            >
              Store
            </div>
          </div>
        </button>

        {/* Desktop Nav */}
        <nav
          className="hidden md:flex items-center gap-6"
          aria-label="Site sections"
        >
          {navLinks.map((link) => (
            <button
              key={link.href}
              type="button"
              data-ocid="header.link"
              className="text-sm font-medium transition-colors hover:text-green-700 bg-transparent border-0 cursor-pointer p-0"
              style={{ color: "#1a1a1a", fontFamily: "Open Sans, sans-serif" }}
              onClick={() => handleNavClick(link.href)}
            >
              {link.label}
            </button>
          ))}
          <button
            type="button"
            className="btn-gold text-sm"
            data-ocid="header.primary_button"
            onClick={() => handleNavClick("#booking")}
          >
            Book Now
          </button>
        </nav>

        {/* Mobile hamburger */}
        <button
          type="button"
          className="md:hidden p-2 rounded-lg bg-transparent border-0"
          style={{ color: "#2d5a27" }}
          onClick={() => setMenuOpen((v) => !v)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          data-ocid="header.toggle"
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          className="md:hidden px-4 pb-4 pt-2 border-t"
          style={{
            borderColor: "rgba(216,201,168,0.5)",
            backgroundColor: "rgba(249,247,242,0.97)",
          }}
        >
          <nav className="flex flex-col gap-3" aria-label="Mobile navigation">
            {navLinks.map((link) => (
              <button
                key={link.href}
                type="button"
                data-ocid="header.link"
                className="text-sm font-medium py-2 text-left bg-transparent border-0 cursor-pointer"
                style={{
                  color: "#1a1a1a",
                  fontFamily: "Open Sans, sans-serif",
                }}
                onClick={() => handleNavClick(link.href)}
              >
                {link.label}
              </button>
            ))}
            <button
              type="button"
              className="btn-gold text-sm text-center mt-1"
              data-ocid="header.primary_button"
              onClick={() => handleNavClick("#booking")}
            >
              Book Now
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
