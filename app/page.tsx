"use client";
import Hero from "@/components/Hero";
import About from "@/components/About"
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import Videos from "@/components/Videos";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
<main className="min-h-screen flex flex-col text-white pt-8">
  <div className="w-full max-w-6xl mx-auto px-6">
    <Hero />
    <About />
    <Services />
    <Testimonials />
    <Pricing />
    <Videos />
    <Contact />
  </div>

  <Footer />
</main>

  );
}
