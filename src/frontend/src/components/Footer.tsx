import { Clock, Facebook, Instagram, Leaf, MapPin, Phone } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();
  const hostname =
    typeof window !== "undefined"
      ? window.location.hostname
      : "sharmaayurvedic.in";

  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer
      className="pt-14 pb-6 px-4"
      style={{ backgroundColor: "#2d5a27", borderRadius: "2rem 2rem 0 0" }}
      aria-label="Site footer"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Brand column */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center"
                style={{
                  background: "rgba(212,175,55,0.20)",
                  border: "1px solid rgba(212,175,55,0.40)",
                }}
              >
                <Leaf
                  className="w-5 h-5"
                  style={{ color: "#d4af37" }}
                  aria-hidden="true"
                />
              </div>
              <div>
                <div
                  style={{
                    color: "#f9f7f2",
                    fontFamily: "Crimson Text, serif",
                    fontSize: "1.1rem",
                    fontWeight: 700,
                  }}
                >
                  Sharma Ayurvedic
                </div>
                <div
                  style={{
                    color: "rgba(249,247,242,0.60)",
                    fontFamily: "Open Sans, sans-serif",
                    fontSize: "0.7rem",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                  }}
                >
                  Store
                </div>
              </div>
            </div>
            <p
              style={{
                color: "rgba(249,247,242,0.70)",
                fontFamily: "Open Sans, sans-serif",
                fontSize: "0.88rem",
                lineHeight: "1.7",
              }}
            >
              Authentic Ayurvedic healing rooted in tradition. Led by Vaidya
              Pankaj Sharma, bringing ancient wisdom to the people of Alwar
              since decades.
            </p>
            <div className="flex gap-3 mt-5">
              <a
                href="https://wa.me/919414283196"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full flex items-center justify-center transition-colors"
                style={{
                  background: "rgba(212,175,55,0.15)",
                  border: "1px solid rgba(212,175,55,0.30)",
                }}
                aria-label="Contact us on WhatsApp"
              >
                <svg
                  className="w-4 h-4"
                  fill="#d4af37"
                  viewBox="0 0 24 24"
                  role="img"
                  aria-label="WhatsApp"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full flex items-center justify-center transition-colors"
                style={{
                  background: "rgba(212,175,55,0.15)",
                  border: "1px solid rgba(212,175,55,0.30)",
                }}
                aria-label="Follow us on Instagram"
              >
                <Instagram
                  className="w-4 h-4"
                  style={{ color: "#d4af37" }}
                  aria-label="Instagram"
                />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full flex items-center justify-center transition-colors"
                style={{
                  background: "rgba(212,175,55,0.15)",
                  border: "1px solid rgba(212,175,55,0.30)",
                }}
                aria-label="Follow us on Facebook"
              >
                <Facebook
                  className="w-4 h-4"
                  style={{ color: "#d4af37" }}
                  aria-label="Facebook"
                />
              </a>
            </div>
          </div>

          {/* Links column */}
          <div>
            <h3
              className="font-bold mb-4 text-xs tracking-widest uppercase"
              style={{ color: "#d4af37", fontFamily: "Open Sans, sans-serif" }}
            >
              Quick Links
            </h3>
            <nav aria-label="Footer navigation">
              <ul className="space-y-2">
                {[
                  { label: "Home", href: "#home" },
                  { label: "Our Treatments", href: "#treatments" },
                  { label: "About Us", href: "#about" },
                  { label: "Book Consultation", href: "#booking" },
                ].map((link) => (
                  <li key={link.href}>
                    <button
                      type="button"
                      data-ocid="footer.link"
                      className="text-sm transition-colors hover:text-yellow-300 bg-transparent border-0 cursor-pointer p-0 text-left"
                      style={{
                        color: "rgba(249,247,242,0.75)",
                        fontFamily: "Open Sans, sans-serif",
                      }}
                      onClick={() => scrollTo(link.href)}
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Contact column */}
          <div>
            <h3
              className="font-bold mb-4 text-xs tracking-widest uppercase"
              style={{ color: "#d4af37", fontFamily: "Open Sans, sans-serif" }}
            >
              Contact
            </h3>
            <ul
              className="space-y-3"
              style={{ fontFamily: "Open Sans, sans-serif" }}
            >
              <li className="flex items-start gap-2.5">
                <MapPin
                  className="w-4 h-4 flex-shrink-0 mt-0.5"
                  style={{ color: "#d4af37" }}
                  aria-hidden="true"
                />
                <span
                  className="text-sm"
                  style={{ color: "rgba(249,247,242,0.75)" }}
                >
                  Near Homeopathic College, Shivaji Park, Alwar, Rajasthan
                  301001
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone
                  className="w-4 h-4 flex-shrink-0"
                  style={{ color: "#d4af37" }}
                  aria-hidden="true"
                />
                <a
                  href="tel:+919414283196"
                  className="text-sm hover:text-yellow-300 transition-colors"
                  style={{
                    color: "rgba(249,247,242,0.75)",
                    textDecoration: "none",
                  }}
                >
                  +91-9414283196
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Clock
                  className="w-4 h-4 flex-shrink-0 mt-0.5"
                  style={{ color: "#d4af37" }}
                  aria-hidden="true"
                />
                <span
                  className="text-sm"
                  style={{ color: "rgba(249,247,242,0.75)" }}
                >
                  Mon–Sat: 10 AM – 1 PM
                  <br />
                  5:30 PM – 9 PM
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider + credits */}
        <div
          className="pt-6 border-t flex flex-col sm:flex-row items-center justify-between gap-3 text-xs"
          style={{
            borderColor: "rgba(212,175,55,0.25)",
            color: "rgba(249,247,242,0.50)",
            fontFamily: "Open Sans, sans-serif",
          }}
        >
          <span>© {year} Sharma Ayurvedic Store. All rights reserved.</span>
          <span>
            Built with ❤ using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(hostname)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-300 transition-colors"
              style={{ color: "rgba(212,175,55,0.60)", textDecoration: "none" }}
            >
              caffeine.ai
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
