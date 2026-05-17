import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import Shop from "@/components/Shop";
import Order from "@/components/Order";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Testimonials />
      <Shop />
      <Order />
      <Contact />
      <Footer />
    </main>
  );
}
