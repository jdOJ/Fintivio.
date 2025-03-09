import ChasingGhost from "../assets/chasing-a-ghost 1.png"
import fint1 from "../assets/fint1.png"
import Image from "next/image";

export const ProductShowcase = () => {
  return (
    <section className="flex bg-gradient-to-b from-[#FFFFFF] to-[#D2DCFF] py-24 overflow-x-clip">
      <div className="container">
        {/* Usamos flexbox para alinear la imagen y el texto */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
          {/* Contenedor de la imagen a la izquierda */}
          <div className="relative w-full md:w-1/2">
            <Image 
              src={ChasingGhost} 
              alt="Chasing Ghost" 
              className="w-full"
            />
        
          </div>

          {/* Contenedor del texto a la derecha */}
          <div className="w-full md:w-1/2 flex flex-col justify-center">
            <div className="flex justify-center md:justify-start">
              <div className="tag">
                A more effective way to manage your finances.
              </div>
            </div>
            <h2 className="section-title mt-5">
              Evolve with your money.
            </h2>
            <p className="section-text mt-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus cum quas ratione assumenda debitis velit impedit soluta illum reiciendis. Dolores perferendis numquam ducimus tempore error voluptatem nemo nobis corporis saepe.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};