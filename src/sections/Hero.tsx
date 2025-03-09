import ArrowIcon from '../assets/arrow-right.svg';
import cogImage from '../assets/cog.png';
import Image from 'next/image';
export const Hero = () => {
  return (
    <section className='pt-8 pb-20 '>
      <div className="container">
        <div className="md:flex items-center">
          <div className='md:w-[478px]'>
            <div className="text-white text-sm inline-flex border border-cuarto/10 px-3 py-1 rounded-lg tracking-tight">Version 2.0 is here</div>
            <h1 className="text-5xl font-bold tracking-tighter  text-white text-transparent bg-clip-text mt-6">Fintivio.</h1>
            <p className="text-xl text-white tracking-tight mt-6">Welcome to Burger Bliss, where we take your cravings to a whole new level! Our mouthwatering burgers are made from 100% beef and are served on freshly baked buns. </p>
           
            {/* <div className="flex gap-1 items-center mt-[30px]">
              <button className="btn">Get for free</button>
              <button className="btn-text gap-1"><span>Learn More</span> <ArrowIcon className="h-5 w-5" />
              </button>
            </div>
          </div>
          <div className='mt-20 md:mt-0 md:h-[648px] md:flex-1 '>
            <Image src={cogImage} alt="cog image" />
        
          */}
 </div>

        </div>
      </div>
    </section>
  );
};
