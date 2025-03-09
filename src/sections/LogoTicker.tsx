"use client";
import acmeLogo from "../assets/logo-acme.png";
import celestialLogo from "../assets/logo-celestial.png";
import fint1 from "../assets/fint1.png";
import fint2 from "../assets/fint2.png";
import fint3 from "../assets/fint3.png";
import fint4 from "../assets/fint4.png";
import fint5 from "../assets/fint5.png";
import fint6 from "../assets/fint6.png";
import QuantumLogo from "../assets/logo-quantum.png";
import apexLogo from "../assets/logo-apex.png"
import echoLogo from "../assets/logo-echo.png"
import pulse from "../assets/logo-pulse.png"
import Image from "next/image";
import { motion } from "framer-motion";


export const LogoTicker = () => {
  return (
    <div className="py-8 md:py-12 bg-white ">
      <div className="container">
        <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)] ">
          
          <motion.div className="flex gap-14 flex-none pr-14" animate={{
            translateX: "-50%"
          }}transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
            repeatType: "loop"
          }}
          >

            <Image className="logo-ticker-image" src={acmeLogo} alt="acme logo" />
            <Image className="logo-ticker-image" src={fint1} alt="fint1 logo" />
            <Image className="logo-ticker-image" src={echoLogo} alt="echo logo" />
            <Image className="logo-ticker-image" src={fint2} alt="fint2 logo" />
            <Image className="logo-ticker-image" src={celestialLogo} alt="celestial logo" />
            <Image className="logo-ticker-image" src={fint3} alt="fint3 logo" />
            <Image className="logo-ticker-image" src={pulse} alt="pulse logo" />
            <Image className="logo-ticker-image" src={fint4} alt="fint4 logo" />
            <Image className="logo-ticker-image" src={QuantumLogo} alt="quantum logo" />
            <Image className="logo-ticker-image" src={fint5} alt="fint5 logo" />
            <Image className="logo-ticker-image" src={apexLogo} alt="apex logo" />
            <Image className="logo-ticker-image" src={fint6} alt="fint6 logo" />
            <Image className="logo-ticker-image" src={apexLogo} alt="apex logo" />
            <Image className="logo-ticker-image" src={fint2} alt="fint2 logo" />

          </motion.div>
        </div>
      </div>
    </div>
  );
};
