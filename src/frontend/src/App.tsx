import About from "@/components/About";
import BookingForm from "@/components/BookingForm";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TopBar from "@/components/TopBar";
import Treatments from "@/components/Treatments";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function App() {
  return (
    <div
      className="min-h-screen"
      style={{
        backgroundColor: "#f9f7f2",
        fontFamily: "Open Sans, system-ui, sans-serif",
      }}
    >
      <TopBar />
      <Header />
      <main>
        <Hero />
        <Treatments />
        <About />
        <BookingForm />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
