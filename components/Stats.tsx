import { ArrowUpRight, Star } from 'lucide-react';
const Stats = () => {
return (
<>
    {/* Stats Section */}
    <section id="stats" className="container mx-auto px-4 sm:px-6 py-10 sm:py-20 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 w-full max-w-[1440px]">
        <div className="bg-[#111111] p-6 sm:p-8 rounded-2xl">
            <div className="text-[#CCFF00] text-xl sm:text-2xl font-bold mb-4">$4,528 USD</div>
            <div className="flex items-center justify-between">
                <div>
                    <div className="text-xs sm:text-sm text-gray-400">Average Rate</div>
                    <div className="text-base sm:text-lg font-bold">$4,528 USD</div>
                    <div className="text-[#CCFF00] text-xs sm:text-sm">+15.96%</div>
                </div>
                <button className="bg-[#CCFF00] text-black px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm">
                    Buy now
                </button>
            </div>
        </div>

        <div className="mt-8 md:mt-0">
            <h3 className="text-3xl sm:text-4xl font-bold mb-4">
                Trusted <span className="text-[#CCFF00]">platform</span>
                <br />
                anytime & anywhere.
            </h3>
            <div className="flex space-x-2 mb-4">
                {[1, 2, 3, 4].map((i) => (
                <Star key={i} className="w-5 h-5 sm:w-6 sm:h-6 text-[#CCFF00]" fill="#CCFF00" />
                ))}
            </div>
            <p className="text-sm sm:text-base text-gray-400 mb-6 sm:mb-8">
                This is a unites and secures a growing ecosystem of specialized blockchains called parachains. Apps and
                services on Polkadot can ecosystem of specialized called.
            </p>
            <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-8">
                <button className="bg-[#CCFF00] text-black px-5 sm:px-6 py-2.5 sm:py-3 rounded-full flex items-center space-x-2 w-full sm:w-auto justify-center">
                    <span>Learn More</span>
                    <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
                <button className="text-white text-sm sm:text-base w-full sm:w-auto text-center">Ask question ?</button>
            </div>
        </div>
    </section>
</>
);
}

export default Stats;