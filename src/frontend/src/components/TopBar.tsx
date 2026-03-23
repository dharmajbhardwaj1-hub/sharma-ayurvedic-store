import { Clock, Phone } from "lucide-react";

export default function TopBar() {
  return (
    <div
      className="w-full text-sm py-2 px-4"
      style={{
        backgroundColor: "#2d5a27",
        color: "#f9f7f2",
        fontFamily: "Open Sans, sans-serif",
      }}
      role="banner"
      aria-label="Contact and hours information"
    >
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-1">
        <a
          href="tel:+919414283196"
          className="flex items-center gap-2 hover:text-yellow-300 transition-colors"
          aria-label="Call for emergencies: +91-9414283196"
        >
          <Phone className="w-3.5 h-3.5" aria-hidden="true" />
          <span>
            Emergency: <strong>+91-9414283196</strong>
          </span>
        </a>
        <div className="flex items-center gap-2" aria-label="Clinic hours">
          <Clock className="w-3.5 h-3.5" aria-hidden="true" />
          <span>
            Hours: <strong>10 AM – 1 PM</strong> &amp;{" "}
            <strong>5:30 PM – 9 PM</strong>
          </span>
        </div>
      </div>
    </div>
  );
}
