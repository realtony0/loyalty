import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import Products from "./components/Products";
import Lookbook from "./components/Lookbook";
import About from "./components/About";
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
        <Lookbook />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
