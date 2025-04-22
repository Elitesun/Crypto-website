import { ArrowUpRight, Star } from 'lucide-react';
const Stats = () => {
return (
<>
    {/* Stats Section */}
    <section className="container mx-auto px-6 py-20 grid grid-cols-2 gap-16">
        <div className="bg-[#111111] p-8 rounded-2xl">
            <div className="text-[#CCFF00] text-2xl font-bold mb-4">$4,528 USD</div>
            <div className="flex items-center justify-between">
                <div>
                    <div className="text-sm text-gray-400">Average Rate</div>
                    <div className="text-lg font-bold">$4,528 USD</div>
                    <div className="text-[#CCFF00] text-sm">+15.96%</div>
                </div>
                <button className="bg-[#CCFF00] text-black px-4 py-2 rounded-full text-sm">
                    Buy now
                </button>
            </div>
        </div>

        <div>
            <h3 className="text-4xl font-bold mb-4">
                Trusted <span className="text-[#CCFF00]">platform</span>
                <br />
                anytime & anywhere.
            </h3>
            <div className="flex space-x-2 mb-4">
                {[1, 2, 3, 4].map((i) => (
                <Star key={i} className="w-6 h-6 text-[#CCFF00]" fill="#CCFF00" />
                ))}
            </div>
            <p className="text-gray-400 mb-8">
                This is a unites and secures a growing ecosystem of specialized blockchains called parachains. Apps and
                services on Polkadot can ecosystem of specialized called.
            </p>
            <div className="flex items-center space-x-8">
                <button className="bg-[#CCFF00] text-black px-6 py-3 rounded-full flex items-center space-x-2">
                    <span>Learn More</span>
                    <ArrowUpRight className="w-5 h-5" />
                </button>
                <button className="text-white">Ask question ?</button>
            </div>
        </div>
    </section>
</>
);
}

export default Stats;