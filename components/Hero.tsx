"use client";
import { ArrowUpRight} from 'lucide-react';
import { AnimatedTooltipPreview } from './animations/User';
import { DemoFloatingPhone } from './animations/FloatingPhone';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Hero = () => {
return (
<>
    {/* Hero Section */}
    <section id="hero" className="mt-10 container mx-auto px-4 sm:px-6 py-10 sm:py-20 grid grid-cols-1 md:grid-cols-2 gap-8">
        <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="space-y-6 sm:space-y-8"
        >
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
            
            <div className="flex items-center space-x-8">
                <div className="flex items-center space-x-8">
                    <AnimatedTooltipPreview />
                    <span className="text-base sm:text-lg md:text-xl whitespace-nowrap">168K+ <br />Realtime Users</span>
                </div>
            </div>
             
             
            <div className="flex items-center space-x-2 bg-[#111111] p-3 sm:p-4 rounded-lg w-fit">
                <div className="bg-[#CCFF00] p-2 rounded-full">
                    <ArrowUpRight className="w-5 h-5 sm:w-6 sm:h-6 text-black" />
                </div>
                <p className="text-xs sm:text-sm max-w-[280px] sm:max-w-md">
                    Polkadot unites and secures a growing ecosystem of specialized blockchains, called parachains. Apps
                    and services on Polkadot can.
                </p>
            </div>
        </motion.div>

        <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative mt-8 md:mt-0"
        >
          <div className="relative w-full max-w-[280px] mx-auto md:max-w-none">
            <DemoFloatingPhone />
            <div className="absolute -left-2 sm:-left-4 md:-left-6 top-1/2 -translate-y-1/2 flex items-center flex-col gap-2 sm:gap-3">
              <Image 
                src="/apple.svg" 
                alt="Download on the App Store" 
                className="w-20 sm:w-28 md:w-32 object-contain hover:scale-105 transition-transform duration-300 cursor-pointer" 
                width={128} 
                height={128}
              />
              <Image 
                src="/google.svg" 
                alt="Get it on Google Play" 
                className="w-24 sm:w-32 md:w-36 object-contain hover:scale-105 transition-transform duration-300 cursor-pointer" 
                width={144} 
                height={144}
              />
            </div>
          </div>
        </motion.div>
    </section>
</>
);
}

export default Hero;