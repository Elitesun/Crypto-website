import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Nav from "@/components/Nav";
import Pricing from "@/components/Pricing";
import Stats from "@/components/Stats";

const page = () => {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white">
      <Nav />
      <Hero />
      <Features />
      <Pricing />
      <Stats />
      <Footer />
      
    </div>
  );
}

export default page;