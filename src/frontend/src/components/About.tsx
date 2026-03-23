import { Award, BookOpen, Heart, MapPin } from "lucide-react";
import { motion } from "motion/react";

const highlights = [
  { icon: Award, text: "20+ years of authentic Ayurvedic practice" },
  { icon: BookOpen, text: "Deep traditional training in classical texts" },
  {
    icon: MapPin,
    text: "Located near Homeopathic College, Shivaji Park, Alwar",
  },
  { icon: Heart, text: "Over 5,000 patients treated naturally" },
];

export default function About() {
  const scrollToBooking = () => {
    document.querySelector("#booking")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="about"
      className="py-20 px-4"
      style={{ backgroundColor: "#f2ebd9" }}
      aria-labelledby="about-heading"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image side */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div
              className="relative rounded-2xl overflow-hidden"
              style={{
                border: "3px solid #d4af37",
                boxShadow: "0 12px 48px rgba(45,90,39,0.15)",
              }}
            >
              <img
                src="/assets/generated/vaidya-portrait.dim_600x700.jpg"
                alt="Vaidya Pankaj Sharma in his Ayurvedic clinic"
                className="w-full object-cover"
                style={{ maxHeight: "540px" }}
                loading="lazy"
              />
              {/* Decorative badge */}
              <div
                className="absolute bottom-5 left-5 px-4 py-3 rounded-xl"
                style={{
                  background: "rgba(45,90,39,0.92)",
                  backdropFilter: "blur(8px)",
                }}
              >
                <div
                  style={{
                    color: "#d4af37",
                    fontFamily: "Crimson Text, serif",
                    fontSize: "1.1rem",
                    fontWeight: 700,
                  }}
                >
                  Vaidya Pankaj Sharma
                </div>
                <div
                  style={{
                    color: "rgba(249,247,242,0.80)",
                    fontFamily: "Open Sans, sans-serif",
                    fontSize: "0.75rem",
                  }}
                >
                  BAMS · Ayurvedic Physician
                </div>
              </div>
            </div>
            {/* Decorative leaf */}
            <div
              className="absolute -top-5 -right-5 w-16 h-16 rounded-full flex items-center justify-center"
              style={{
                background: "#2d5a27",
                boxShadow: "0 4px 16px rgba(45,90,39,0.3)",
              }}
              aria-hidden="true"
            >
              <svg
                viewBox="0 0 32 32"
                fill="none"
                className="w-9 h-9"
                role="img"
                aria-label="Leaf decoration"
              >
                <title>Leaf</title>
                <path
                  d="M16 4 C16 4 6 10 6 18 C6 24 10 28 16 28 C22 28 26 24 26 18 C26 10 16 4 16 4Z"
                  fill="#d4af37"
                />
                <line
                  x1="16"
                  y1="28"
                  x2="16"
                  y2="16"
                  stroke="#f9f7f2"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </motion.div>

          {/* Text side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <div
              className="inline-block mb-3 text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-full"
              style={{
                background: "rgba(45,90,39,0.10)",
                color: "#2d5a27",
                fontFamily: "Open Sans, sans-serif",
              }}
            >
              Our Story
            </div>
            <h2
              id="about-heading"
              className="section-heading text-4xl md:text-5xl mb-5"
            >
              About Sharma Ayurvedic
            </h2>
            <p
              className="mb-4 leading-relaxed"
              style={{
                color: "#1a1a1a",
                fontFamily: "Open Sans, sans-serif",
                fontSize: "1rem",
                lineHeight: "1.8",
              }}
            >
              Nestled in the heart of Shivaji Park, Alwar,{" "}
              <strong>Sharma Ayurvedic Store</strong> is a beacon of authentic
              traditional healing. Founded by{" "}
              <strong>Vaidya Pankaj Sharma</strong>, the clinic upholds the
              centuries-old wisdom of Ayurveda — treating not just symptoms, but
              the root cause of imbalance.
            </p>
            <p
              className="mb-6 leading-relaxed"
              style={{
                color: "#5b5b5b",
                fontFamily: "Open Sans, sans-serif",
                fontSize: "0.95rem",
                lineHeight: "1.8",
              }}
            >
              Vaidya Pankaj Sharma brings deep traditional roots in classical
              Ayurvedic texts combined with decades of hands-on clinical
              experience. Located conveniently near the Homeopathic College,
              Shivaji Park, Alwar, the clinic is easily accessible to patients
              from across the Alwar district and the surrounding regions of
              Rajasthan.
            </p>

            <ul className="space-y-3 mb-8" aria-label="Clinic highlights">
              {highlights.map((h) => (
                <li key={h.text} className="flex items-start gap-3">
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{ background: "rgba(45,90,39,0.12)" }}
                  >
                    <h.icon
                      className="w-4 h-4"
                      style={{ color: "#2d5a27" }}
                      aria-hidden="true"
                    />
                  </div>
                  <span
                    style={{
                      color: "#1a1a1a",
                      fontFamily: "Open Sans, sans-serif",
                      fontSize: "0.93rem",
                    }}
                  >
                    {h.text}
                  </span>
                </li>
              ))}
            </ul>

            <button
              type="button"
              className="btn-gold inline-flex items-center gap-2"
              data-ocid="about.primary_button"
              onClick={scrollToBooking}
            >
              Book a Consultation
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
