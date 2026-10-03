import productsData from "./data/products.json";
import type { Product } from "./types/product";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import Manifesto from "./components/Manifesto";
import ProductsSection from "./components/ProductsSection";
import Specs from "./components/Specs";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Marquee />
      <Manifesto />
      <ProductsSection products={productsData as Product[]} />
      <Specs />
      <Contact />
      <Footer />
    </>
  );
}
