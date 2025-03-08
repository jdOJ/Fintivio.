import ArrowRight from "../assets/arrow-right.svg";
import Logo from "../assets/vector.png";
import Image from "next/image";
import MenuIcon from "../assets/menu.svg";

export const Header = () => {
  return (
    <header className="sticky top-0 w-full backdrop-blur-sm bg-transparent z-50">
      <div className="py-8">
        <div className="px-4 md:px-8 lg:px-12 w-full">
          <div className="flex items-center justify-between">
            <Image className="ml-7" src={Logo} alt="Logo" height={40} width={40} />
            <MenuIcon className="h-5 w-5 md:hidden" />
            <nav className="hidden md:flex gap-6 text-white/60 items-center justify-center">
              <a href="#" className="hover:text-white transition-colors">Pricing</a>
              <a href="#" className="hover:text-white transition-colors">About</a>
              <a href="#" className="hover:text-white transition-colors">Contact</a>
              <a href="#" className="hover:text-white transition-colors">Download</a>
              <div className="w-32 flex justify-end">
                <button className="border border-segundo text-segundo bg-[#D9D9D9]/80 px-4 py-2 rounded-full font-medium inline-flex items-center justify-center tracking-tight hover:bg-[#D9D9D9] transition-colors">
                  Download
                </button>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};