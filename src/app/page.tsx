import { Header } from "@/sections/Header";
import { Hero } from "@/sections/Hero";
import Fondo from "@/assets/fondo.jpeg";
import { LogoTicker } from "@/sections/LogoTicker";
import { ProductShowcase } from "@/sections/ProductShowcase";
import { Pricing } from "@/sections/Pricing";
import { Testimonials } from "@/sections/Testimonials";
import { Footer } from "@/sections/Footer";

export default function Home() {
  return (
    <div className="relative">
      <div 
        style={{ backgroundImage: `url(${Fondo.src})` }}
        className="bg-scroll w-full h-screen bg-cover bg-center bg-no-repeat  "
      >
        <Header />
        <Hero />

      </div>
      <div className="">
       <LogoTicker />
       <ProductShowcase />
       <Pricing/>
       <Testimonials/>
       <Footer/>
      </div>
    </div>
  )
}

