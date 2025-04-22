import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Nav from "@/components/Nav";
import Stats from "@/components/Stats";

const page = () => {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white">
      <Nav />
      <Hero />
      <Features />
      <Stats />
    </div>
  );
}

export default page;