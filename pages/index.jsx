import AboutSection from "@/components/AboutSection";
import HeroSection from "../components/HeroSection";
import Header from "@/components/Header";
import ProductSection from "@/components/ProductSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <HeroSection />
      <AboutSection />
      <ProductSection />
      <Footer />
      {/* Tambahkan bagian lain seperti produk, footer, dll. */}
    </main>
  );
}
