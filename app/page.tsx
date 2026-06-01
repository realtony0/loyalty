import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import Products from "./components/Products";
import Manifesto from "./components/Manifesto";
import Steps from "./components/Steps";
import Lookbook from "./components/Lookbook";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import FloatingWhatsApp from "./components/FloatingWhatsApp";

export default function Home() {
  return (
    <>
      <FloatingWhatsApp />
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Products />
        <Manifesto />
        <Steps />
        <Lookbook />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
