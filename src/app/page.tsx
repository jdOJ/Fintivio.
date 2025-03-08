import { Header } from "@/sections/Header";
import { Hero } from "@/sections/Hero";
import Fondo from "@/assets/fondo.jpeg";

export default function Home() {
  return (
    <div className="relative">
      <div 
        style={{ backgroundImage: `url(${Fondo.src})` }}
        className="bg-scroll w-full h-screen bg-cover bg-center bg-no-repeat"
      >
        <Header />
        <Hero />
      </div>
      <div className="text-center">
        <h1>
          aaaaa
        </h1>
      </div>
    </div>
  )
}

