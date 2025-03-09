import logo from "../assets/fint3.png";
import Image from "next/image";
import SocialX from "../assets/social-x.svg";
import SocialInsta from "../assets/social-insta.svg";
import SocialLinkd from "../assets/social-linkedin.svg";
import SocialYoutube from "../assets/social-youtube.svg";
import SocialPin from "../assets/social-pin.svg";

export const Footer = () => {
  return (
    <footer className="bg-cuarto text-[#BCBCBC] text-sm py-10 text-center">
      <div className="container">
        <div className="inline-flex relative before:content-[''] before:top-2 before:bottom-0  before:w-full before:blur before:bg-[linear-gradient(to_right,#1494E2,#0F6CA9,#0C4B7A,#093156,#071F3C,#1494E2)] before:absolute">
          <Image src={logo} height={40} alt="Fintivio Logo" className="relative"/>
        </div>
        <nav className="flex flex-col md:flex-row md:justify-center gap-6 mt-6">
          <a href="#">About</a>
          <a href="#">Features</a>
          <a href="#">Costumers</a>
          <a href="#">Help</a>
          <a href="#">Careers</a>
          </nav>
          <div className="flex justify-center gap-6 mt-6">
            <SocialX />
            <SocialInsta />
            <SocialLinkd />
            <SocialYoutube />
            <SocialPin />
          </div>
          <p className="mt-6">
            &copy; 2025 Your Company, Inc. All rights reserved.
          </p>
        
      </div>
    </footer>
  );
};
