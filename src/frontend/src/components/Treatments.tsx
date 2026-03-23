import { motion } from "motion/react";

const treatments = [
  {
    icon: (
      <svg
        viewBox="0 0 48 48"
        fill="none"
        className="w-12 h-12"
        aria-hidden="true"
      >
        <circle
          cx="24"
          cy="24"
          r="18"
          stroke="#2d5a27"
          strokeWidth="2"
          fill="#f2ebd9"
        />
        <path
          d="M24 10 C24 10 16 18 16 24 C16 30 20 34 24 34 C28 34 32 30 32 24 C32 18 24 10 24 10Z"
          fill="#2d5a27"
          opacity="0.15"
        />
        <path
          d="M24 14 C24 14 19 20 19 24 C19 28 21 31 24 31 C27 31 29 28 29 24 C29 20 24 14 24 14Z"
          fill="#2d5a27"
          opacity="0.35"
        />
        <circle cx="24" cy="24" r="3" fill="#d4af37" />
        <line
          x1="24"
          y1="18"
          x2="24"
          y2="30"
          stroke="#2d5a27"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <line
          x1="18"
          y1="24"
          x2="30"
          y2="24"
          stroke="#2d5a27"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
    title: "Nadi Pariksha",
    subtitle: "Pulse Diagnosis",
    description:
      "The ancient art of reading your body's vital force through pulse. Vaidya Pankaj Sharma uses this 5,000-year-old diagnostic technique to detect imbalances in Vata, Pitta, and Kapha doshas for precise personalized treatment.",
    detail: "Duration: 30–45 min",
  },
  {
    icon: (
      <svg
        viewBox="0 0 48 48"
        fill="none"
        className="w-12 h-12"
        aria-hidden="true"
      >
        <rect
          x="8"
          y="16"
          width="32"
          height="20"
          rx="4"
          fill="#f2ebd9"
          stroke="#2d5a27"
          strokeWidth="2"
        />
        <path
          d="M16 16 C16 10 20 8 24 8 C28 8 32 10 32 16"
          stroke="#2d5a27"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
        />
        <path
          d="M14 26 Q24 20 34 26"
          stroke="#d4af37"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
        />
        <circle cx="18" cy="28" r="2" fill="#2d5a27" />
        <circle cx="24" cy="25" r="2" fill="#2d5a27" />
        <circle cx="30" cy="28" r="2" fill="#2d5a27" />
      </svg>
    ),
    title: "Panchakarma",
    subtitle: "Deep Detoxification",
    description:
      "A profound five-action cleansing therapy that eliminates toxins from the body and mind. Our Panchakarma program includes Abhyanga, Shirodhara, and Basti procedures tailored to your specific constitution and health needs.",
    detail: "Program: 7–21 days",
  },
  {
    icon: (
      <svg
        viewBox="0 0 48 48"
        fill="none"
        className="w-12 h-12"
        aria-hidden="true"
      >
        <path
          d="M24 6 C24 6 12 12 10 22 C8 32 14 40 24 42 C34 40 40 32 38 22 C36 12 24 6 24 6Z"
          fill="#f2ebd9"
          stroke="#2d5a27"
          strokeWidth="2"
        />
        <path
          d="M24 12 C24 12 17 18 16 24 C15 30 18 35 24 37 C30 35 33 30 32 24 C31 18 24 12 24 12Z"
          fill="#2d5a27"
          opacity="0.20"
        />
        <path
          d="M20 24 Q24 18 28 24"
          stroke="#d4af37"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
        />
        <path
          d="M18 28 Q24 22 30 28"
          stroke="#d4af37"
          strokeWidth="1.5"
          fill="none"
          strokeLinecap="round"
        />
        <circle cx="24" cy="20" r="2" fill="#d4af37" />
      </svg>
    ),
    title: "Herbal Therapy",
    subtitle: "Custom Formulations",
    description:
      "Personalized herbal medicines prepared from authentic, ethically sourced Himalayan and local Rajasthani herbs. Each formulation is custom-crafted by Vaidya Pankaj Sharma based on your prakriti (body type) and specific health conditions.",
    detail: "Ongoing consultation",
  },
];

export default function Treatments() {
  return (
    <section
      id="treatments"
      className="py-20 px-4"
      style={{ backgroundColor: "#f9f7f2" }}
      aria-labelledby="treatments-heading"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-14">
          <div
            className="inline-block mb-3 text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-full"
            style={{
              background: "rgba(45,90,39,0.10)",
              color: "#2d5a27",
              fontFamily: "Open Sans, sans-serif",
            }}
          >
            Traditional Therapies
          </div>
          <h2
            id="treatments-heading"
            className="section-heading text-4xl md:text-5xl mb-4"
          >
            Our Holistic Treatments
          </h2>
          <p
            className="max-w-xl mx-auto"
            style={{
              color: "#5b5b5b",
              fontFamily: "Open Sans, sans-serif",
              fontSize: "1rem",
              lineHeight: "1.7",
            }}
          >
            Each treatment is rooted in authentic Ayurvedic tradition,
            personalised to your unique constitution for lasting wellness.
          </p>
        </div>

        {/* Cards grid */}
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-8 list-none p-0 m-0">
          {treatments.map((t, i) => (
            <motion.li
              key={t.title}
              className="card-ayur p-8 flex flex-col"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              data-ocid={`treatments.item.${i + 1}`}
            >
              <div className="mb-5">{t.icon}</div>
              <h3
                className="font-heading font-bold text-2xl mb-1"
                style={{
                  color: "#2d5a27",
                  fontFamily: "Crimson Text, Georgia, serif",
                }}
              >
                {t.title}
              </h3>
              <div
                className="text-xs font-semibold uppercase tracking-widest mb-4"
                style={{
                  color: "#d4af37",
                  fontFamily: "Open Sans, sans-serif",
                }}
              >
                {t.subtitle}
              </div>
              <p
                className="flex-1 leading-relaxed mb-5"
                style={{
                  color: "#5b5b5b",
                  fontFamily: "Open Sans, sans-serif",
                  fontSize: "0.92rem",
                  lineHeight: "1.7",
                }}
              >
                {t.description}
              </p>
              <div
                className="mt-auto pt-4 border-t text-xs font-medium"
                style={{
                  borderColor: "#d8c9a8",
                  color: "#2d5a27",
                  fontFamily: "Open Sans, sans-serif",
                }}
              >
                {t.detail}
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
