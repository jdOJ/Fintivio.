"use client";
import Image from "next/image";
import fint2 from "../assets/Vector.png";
import { motion } from "framer-motion";

export const Pricing = () => {
  return (
    <div className="bg-[#9cf] w-full py-48 flex items-center">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-8 md:mb-0">
            <motion.img 
            animate={{
              rotate:360
            }}
            transition={{
              duration:5,
              repeatType: "loop"
            }}
              className="w-55 h-55 object-contain" 
              src={fint2.src} 
              alt="fint2" 
            />
          </div>
          <div className="max-w-md text-white text-center md:text-right">
            <h2 className="text-4xl md:text-6xl font-bold leading-tight mb-2">
              Lorem ipsum
            </h2>
            <h2 className="text-4xl md:text-6xl font-bold leading-tight">
              Lorem ipsum
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};