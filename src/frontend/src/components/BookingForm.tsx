import { useSubmitBooking } from "@/hooks/useQueries";
import {
  Calendar,
  CheckCircle,
  Loader2,
  Phone,
  Stethoscope,
  User,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { type FormEvent, useState } from "react";

const services = [
  { value: "Nadi Pariksha", label: "Nadi Pariksha (Pulse Diagnosis)" },
  { value: "Panchakarma", label: "Panchakarma (Detoxification)" },
  { value: "Herbal Therapy", label: "Herbal Therapy (Custom Formulations)" },
];

export default function BookingForm() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    service: "",
    date: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const { mutate: submitBooking, isPending, isError } = useSubmitBooking();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    submitBooking(
      {
        name: form.name,
        phone: form.phone,
        service: form.service,
        date: form.date,
      },
      {
        onSuccess: () => {
          setSubmitted(true);
          setForm({ name: "", phone: "", service: "", date: "" });
        },
      },
    );
  };

  const inputClass =
    "w-full px-4 py-3 rounded-xl border text-sm outline-none transition-all focus:ring-2";
  const inputStyle = {
    borderColor: "#d8c9a8",
    backgroundColor: "#f9f7f2",
    color: "#1a1a1a",
    fontFamily: "Open Sans, sans-serif",
  };

  const handleFocus = (
    e: React.FocusEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    e.target.style.borderColor = "#2d5a27";
  };
  const handleBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    e.target.style.borderColor = "#d8c9a8";
  };

  return (
    <section
      id="booking"
      className="py-20 px-4"
      style={{ backgroundColor: "#f9f7f2" }}
      aria-labelledby="booking-heading"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
        {/* Form card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-2xl p-8 md:p-10"
          style={{
            background: "#f2ebd9",
            border: "2px solid #d8c9a8",
            boxShadow: "0 8px 40px rgba(45,90,39,0.12)",
          }}
        >
          <div
            className="inline-block mb-3 text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-full"
            style={{
              background: "rgba(45,90,39,0.10)",
              color: "#2d5a27",
              fontFamily: "Open Sans, sans-serif",
            }}
          >
            Schedule a Visit
          </div>
          <h2
            id="booking-heading"
            className="section-heading text-3xl md:text-4xl mb-2"
          >
            Book Your Consultation
          </h2>
          <p
            className="mb-7 text-sm"
            style={{ color: "#5b5b5b", fontFamily: "Open Sans, sans-serif" }}
          >
            Fill in your details and we will confirm your appointment.
          </p>

          <AnimatePresence mode="wait">
            {submitted ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="flex flex-col items-center text-center py-10 gap-4"
                data-ocid="booking.success_state"
                role="alert"
                aria-live="polite"
              >
                <CheckCircle
                  className="w-16 h-16"
                  style={{ color: "#2d5a27" }}
                  aria-hidden="true"
                />
                <h3
                  className="font-heading text-2xl font-bold"
                  style={{
                    color: "#2d5a27",
                    fontFamily: "Crimson Text, serif",
                  }}
                >
                  Appointment Requested!
                </h3>
                <p
                  style={{
                    color: "#5b5b5b",
                    fontFamily: "Open Sans, sans-serif",
                    fontSize: "0.9rem",
                  }}
                >
                  Thank you! Vaidya Pankaj Sharma will confirm your appointment
                  via phone shortly.
                </p>
                <button
                  type="button"
                  className="btn-gold mt-2"
                  onClick={() => setSubmitted(false)}
                  data-ocid="booking.secondary_button"
                >
                  Book Another
                </button>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                onSubmit={handleSubmit}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="space-y-4"
                noValidate
              >
                {/* Name */}
                <div>
                  <label
                    htmlFor="booking-name"
                    className="block text-sm font-medium mb-1.5"
                    style={{
                      color: "#2d5a27",
                      fontFamily: "Open Sans, sans-serif",
                    }}
                  >
                    <User
                      className="inline w-3.5 h-3.5 mr-1"
                      aria-hidden="true"
                    />
                    Full Name
                  </label>
                  <input
                    id="booking-name"
                    type="text"
                    required
                    autoComplete="name"
                    placeholder="Your full name"
                    className={inputClass}
                    style={{ ...inputStyle }}
                    value={form.name}
                    onChange={(e) =>
                      setForm((p) => ({ ...p, name: e.target.value }))
                    }
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    data-ocid="booking.input"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label
                    htmlFor="booking-phone"
                    className="block text-sm font-medium mb-1.5"
                    style={{
                      color: "#2d5a27",
                      fontFamily: "Open Sans, sans-serif",
                    }}
                  >
                    <Phone
                      className="inline w-3.5 h-3.5 mr-1"
                      aria-hidden="true"
                    />
                    Phone Number
                  </label>
                  <input
                    id="booking-phone"
                    type="tel"
                    required
                    autoComplete="tel"
                    placeholder="+91 XXXXX XXXXX"
                    className={inputClass}
                    style={{ ...inputStyle }}
                    value={form.phone}
                    onChange={(e) =>
                      setForm((p) => ({ ...p, phone: e.target.value }))
                    }
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    data-ocid="booking.input"
                  />
                </div>

                {/* Service */}
                <div>
                  <label
                    htmlFor="booking-service"
                    className="block text-sm font-medium mb-1.5"
                    style={{
                      color: "#2d5a27",
                      fontFamily: "Open Sans, sans-serif",
                    }}
                  >
                    <Stethoscope
                      className="inline w-3.5 h-3.5 mr-1"
                      aria-hidden="true"
                    />
                    Treatment
                  </label>
                  <select
                    id="booking-service"
                    required
                    className={inputClass}
                    style={{ ...inputStyle, cursor: "pointer" }}
                    value={form.service}
                    onChange={(e) =>
                      setForm((p) => ({ ...p, service: e.target.value }))
                    }
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    data-ocid="booking.select"
                  >
                    <option value="" disabled>
                      Select a treatment
                    </option>
                    {services.map((s) => (
                      <option key={s.value} value={s.value}>
                        {s.label}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Date */}
                <div>
                  <label
                    htmlFor="booking-date"
                    className="block text-sm font-medium mb-1.5"
                    style={{
                      color: "#2d5a27",
                      fontFamily: "Open Sans, sans-serif",
                    }}
                  >
                    <Calendar
                      className="inline w-3.5 h-3.5 mr-1"
                      aria-hidden="true"
                    />
                    Preferred Date
                  </label>
                  <input
                    id="booking-date"
                    type="date"
                    required
                    className={inputClass}
                    style={{ ...inputStyle }}
                    value={form.date}
                    min={new Date().toISOString().split("T")[0]}
                    onChange={(e) =>
                      setForm((p) => ({ ...p, date: e.target.value }))
                    }
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    data-ocid="booking.input"
                  />
                </div>

                {isError && (
                  <div
                    className="text-sm px-3 py-2 rounded-lg"
                    style={{
                      background: "rgba(220,38,38,0.08)",
                      color: "#dc2626",
                      fontFamily: "Open Sans, sans-serif",
                    }}
                    data-ocid="booking.error_state"
                    role="alert"
                  >
                    Something went wrong. Please try again or call us directly.
                  </div>
                )}

                <button
                  type="submit"
                  className="btn-gold w-full flex items-center justify-center gap-2 py-3 text-base mt-2"
                  disabled={isPending}
                  data-ocid="booking.submit_button"
                  aria-busy={isPending}
                >
                  {isPending ? (
                    <>
                      <Loader2
                        className="w-4 h-4 animate-spin"
                        aria-hidden="true"
                      />{" "}
                      Booking...
                    </>
                  ) : (
                    <>
                      <Calendar className="w-4 h-4" aria-hidden="true" />{" "}
                      Confirm Appointment
                    </>
                  )}
                </button>
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Map + contact info */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="space-y-6"
        >
          <div
            className="rounded-2xl overflow-hidden"
            style={{
              border: "2px solid #d8c9a8",
              boxShadow: "0 8px 40px rgba(45,90,39,0.10)",
            }}
          >
            <iframe
              title="Sharma Ayurvedic Store location on Google Maps"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3537.05!2d76.6346!3d27.5530!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjfCsDMzJzEwLjgiTiA3NsKwMzgnMDQuNiJF!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="320"
              style={{ border: 0, display: "block" }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              aria-label="Map showing Sharma Ayurvedic Store location in Shivaji Park, Alwar"
            />
          </div>

          {/* Contact info card */}
          <div
            className="rounded-2xl p-6 space-y-4"
            style={{ background: "#2d5a27", color: "#f9f7f2" }}
          >
            <h3
              className="font-heading font-bold text-2xl"
              style={{ color: "#d4af37", fontFamily: "Crimson Text, serif" }}
            >
              Find Us
            </h3>
            <div
              className="space-y-3 text-sm"
              style={{ fontFamily: "Open Sans, sans-serif" }}
            >
              <div className="flex items-start gap-3">
                <svg
                  className="w-5 h-5 flex-shrink-0 mt-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="#d4af37"
                  strokeWidth={2}
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span>
                  Near Homeopathic College, Shivaji Park, Alwar, Rajasthan –
                  301001
                </span>
              </div>
              <div className="flex items-center gap-3">
                <svg
                  className="w-5 h-5 flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="#d4af37"
                  strokeWidth={2}
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <a
                  href="tel:+919414283196"
                  className="hover:text-yellow-300 transition-colors"
                >
                  +91-9414283196
                </a>
              </div>
              <div className="flex items-center gap-3">
                <svg
                  className="w-5 h-5 flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="#d4af37"
                  strokeWidth={2}
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>10 AM – 1 PM &amp; 5:30 PM – 9 PM (Mon–Sat)</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
