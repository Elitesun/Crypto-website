import { ArrowUpRight} from 'lucide-react';
import { AnimatedTooltipPreview } from './animations/User';
import { DemoFloatingPhone } from './animations/FloatingPhone';
import Image from 'next/image';

const Hero = () => {
return (
<>
    {/* Hero Section */}
    <section id="hero" className="mt-10 container mx-auto px-4 sm:px-6 py-10 sm:py-20 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-6 sm:space-y-8">
            <div className="flex items-center space-x-2">
                <span className="text-sm sm:text-base">KEEP YOUR MONEY SAFE !</span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
                Best crypto
                <br />
                <span className="text-[#CCFF00]">investing platform</span>
                <br />
                <span className="text-gray-500">for your future.</span>
            </h2>

            <div className="flex items-center space-x-2 bg-[#111111] p-3 sm:p-4 rounded-lg w-fit">
                <div className="bg-[#CCFF00] p-2 rounded-full">
                    <ArrowUpRight className="w-5 h-5 sm:w-6 sm:h-6 text-black" />
                </div>
                <p className="text-xs sm:text-sm max-w-[280px] sm:max-w-md">
                    Polkadot unites and secures a growing ecosystem of specialized blockchains, called parachains. Apps
                    and services on Polkadot can.
                </p>
            </div>
        </div>

        <div className="relative mt-8 md:mt-0">
          <DemoFloatingPhone />
          <div className="absolute -left-5 top-1/2 -translate-y-1/2 flex items-center flex-col gap-2">
            <Image 
              src="/apple.svg" 
              alt="Download on the App Store" 
              className=" object-contain hover:scale-105 transition-transform duration-300 cursor-pointer" 
              width={130} 
              height={130}
            />
            <Image 
              src="/google.svg" 
              alt="Get it on Google Play" 
              className=" object-contain hover:scale-105 transition-transform duration-300 cursor-pointer" 
              width={160} 
              height={160}
            />
          </div>
        </div>
    </section>
</>
);
}

export default Hero;