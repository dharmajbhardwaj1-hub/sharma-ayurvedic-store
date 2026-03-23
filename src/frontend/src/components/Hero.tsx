import { Calendar, MessageCircle } from "lucide-react";
import { useEffect, useRef } from "react";

declare global {
  interface Window {
    VANTA: {
      BIRDS: (config: Record<string, unknown>) => { destroy: () => void };
    };
    // biome-ignore lint/suspicious/noExplicitAny: THREE is loaded via CDN
    THREE: any;
  }
}

export default function Hero() {
  const vantaRef = useRef<HTMLElement>(null);
  const vantaEffect = useRef<{ destroy: () => void } | null>(null);

  useEffect(() => {
    const init = () => {
      if (vantaRef.current && window.VANTA?.BIRDS && !vantaEffect.current) {
        vantaEffect.current = window.VANTA.BIRDS({
          el: vantaRef.current,
          THREE: window.THREE,
          backgroundColor: 0x2d5a27,
          color1: 0xd4af37,
          color2: 0x4a8a44,
          wingSpan: 20,
          cohesion: 20,
          separation: 30,
          alignment: 20,
          quantity: 4,
          backgroundAlpha: 1,
        });
      }
    };

    const timer = setTimeout(init, 300);
    return () => {
      clearTimeout(timer);
      if (vantaEffect.current) {
        vantaEffect.current.destroy();
        vantaEffect.current = null;
      }
    };
  }, []);

  const scrollToBooking = () => {
    const el = document.querySelector("#booking");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      ref={vantaRef}
      className="relative flex items-center justify-center min-h-[92vh] overflow-hidden"
      style={{ backgroundColor: "#2d5a27" }}
      aria-label="Hero section"
    >
      {/* Overlay for text legibility */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(135deg, rgba(0,0,0,0.30) 0%, rgba(0,0,0,0.10) 60%, transparent 100%)",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
        {/* Decorative tag */}
        <div
          className="inline-block mb-4 px-4 py-1 rounded-full text-xs font-semibold tracking-widest uppercase"
          style={{
            background: "rgba(212,175,55,0.20)",
            border: "1px solid rgba(212,175,55,0.60)",
            color: "#d4af37",
            fontFamily: "Open Sans, sans-serif",
          }}
        >
          आयुर्वेद · Alwar, Rajasthan
        </div>

        <h1
          className="font-heading font-bold leading-tight mb-4"
          style={{
            color: "#f9f7f2",
            fontSize: "clamp(2.8rem, 6vw, 4.5rem)",
            fontFamily: "Crimson Text, Georgia, serif",
            textShadow: "0 2px 16px rgba(0,0,0,0.3)",
          }}
        >
          Ancient Wisdom.
          <br />
          <span style={{ color: "#d4af37" }}>Modern Healing.</span>
        </h1>

        <p
          className="mb-8 max-w-xl mx-auto leading-relaxed"
          style={{
            color: "rgba(249,247,242,0.90)",
            fontSize: "1.15rem",
            fontFamily: "Open Sans, sans-serif",
            textShadow: "0 1px 8px rgba(0,0,0,0.25)",
          }}
        >
          Authentic Ayurvedic Care by <strong>Vaidya Pankaj Sharma</strong> in
          the heart of Alwar.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            type="button"
            className="btn-gold flex items-center gap-2 text-base"
            onClick={scrollToBooking}
            data-ocid="hero.primary_button"
            aria-label="Book a consultation"
          >
            <Calendar className="w-4 h-4" aria-hidden="true" />
            Book Consultation
          </button>
          <a
            href="https://wa.me/919414283196"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline-cream flex items-center gap-2 text-base"
            data-ocid="hero.secondary_button"
            aria-label="Contact us on WhatsApp"
          >
            <MessageCircle className="w-4 h-4" aria-hidden="true" />
            WhatsApp Us
          </a>
        </div>

        {/* Trust badges */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-6">
          {[
            { label: "20+ Years", sub: "of Practice" },
            { label: "5000+", sub: "Patients Healed" },
            { label: "100%", sub: "Natural Remedies" },
          ].map((badge) => (
            <div key={badge.label} className="text-center">
              <div
                style={{
                  color: "#d4af37",
                  fontSize: "1.4rem",
                  fontFamily: "Crimson Text, serif",
                  fontWeight: 700,
                }}
              >
                {badge.label}
              </div>
              <div
                style={{
                  color: "rgba(249,247,242,0.75)",
                  fontSize: "0.78rem",
                  fontFamily: "Open Sans, sans-serif",
                  letterSpacing: "0.05em",
                }}
              >
                {badge.sub}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
