import { ArrowUpRight} from 'lucide-react';
import { AnimatedTooltipPreview } from './animations/User';
import { DemoFloatingPhone } from './animations/FloatingPhone';
const Hero = () => {
return (
<>
    {/* Hero Section */}
    <section id="hero" className="container mx-auto px-4 sm:px-6 py-10 sm:py-20 grid grid-cols-1 md:grid-cols-2 gap-8">
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

            <div className="flex items-center space-x-4 sm:space-x-8">
                    <AnimatedTooltipPreview />
                <span className="text-base sm:text-lg md:text-xl">168K+ <br />Realtime Users</span>
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
        </div>

        <div className="relative mt-8 md:mt-0">
          <DemoFloatingPhone />
        </div>
    </section>
</>
);
}

export default Hero;