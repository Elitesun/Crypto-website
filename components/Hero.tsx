import { ArrowUpRight} from 'lucide-react';
import { AnimatedTooltipPreview } from './animations/User';
import { DemoFloatingPhone } from './animations/FloatingPhone';
const Hero = () => {
return (
<>
    {/* Hero Section */}
    <section className="container mx-auto px-6 py-20 grid grid-cols-2 gap-8">
        <div className="space-y-8">
            <div className="flex items-center space-x-2">
                <span>KEEP YOUR MONEY SAFE !</span>
            </div>
            <h2 className="text-6xl font-bold leading-tight">
                Best crypto
                <br />
                <span className="text-[#CCFF00]">investing platform</span>
                <br />
                <span className="text-gray-500">for your future.</span>
            </h2>

            <div className="flex items-center space-x-4">
                <div className="flex -space-x-4">
                    <AnimatedTooltipPreview />
                </div>
                <span className="text-xl">168K+ <br />Realtime Users</span>
            </div>

            <div className="flex items-center space-x-2 bg-[#111111] p-4 rounded-lg w-fit">
                <div className="bg-[#CCFF00] p-2 rounded-full">
                    <ArrowUpRight className="w-6 h-6 text-black" />
                </div>
                <p className="text-sm max-w-md">
                    Polkadot unites and secures a growing ecosystem of specialized blockchains, called parachains. Apps
                    and services on Polkadot can.
                </p>
            </div>
        </div>

        <div className="relative">
          <DemoFloatingPhone />
        </div>
    </section>
</>
);
}

export default Hero;