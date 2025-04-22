"use client";
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';

const Features = () => {
    return (
        <>
            <section id="features" className="container mx-auto px-4 sm:px-6 py-10 sm:py-20">
                <motion.div 
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mb-10 sm:mb-16"
                >
                    <div className="mb-10 sm:mb-16 flex flex-col items-center justify-center">
                        <h3 className="text-3xl sm:text-4xl font-bold mb-4">
                            Your <span className="text-[#CCFF00]">trusted</span> partner of cryptocurrency.
                        </h3>
                        <p className="text-sm sm:text-base text-gray-400 flex flex-wrap items-center justify-center">
                            Polkadot unites and secures a growing ecosystem of specialized blockchains called parachains.
                        </p>
                    </div>
                
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                        {[
                            {
                                number: "01.",
                                title: "Service for Any Level of Expertise.",
                                description: "Polkadot unites and secures a growing ecosystem of specialized blockchain called specialized unites."
                            },
                            {
                                number: "02.",
                                title: "Industry best practices.",
                                description: "Polkadot unites and secures a growing ecosystem of specialized blockchain called specialized unites.",
                                highlight: true
                            },
                            {
                                number: "03.",
                                title: "Protected by Insurance.",
                                description: "Polkadot unites and secures a growing ecosystem of specialized blockchain called specialized unites."
                            }
                        ].map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.2 }}
                                className={`p-6 sm:p-8 rounded-2xl ${
                                    feature.highlight
                                        ? 'bg-[#CCFF00] text-black'
                                        : 'bg-[#111111]'
                                }`}
                            >
                                <div className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">{feature.number}</div>
                                <h4 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">{feature.title}</h4>
                                <p className={`text-sm sm:text-base ${feature.highlight ? 'text-black/80' : 'text-gray-400'}`}>
                                    {feature.description}
                                </p>
                                {feature.highlight && (
                                    <button className="mt-4 flex items-center space-x-2 font-bold text-sm sm:text-base">
                                        Learn More <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5" />
                                    </button>
                                )}
                            </motion.div>
                        ))}
                    </div>
                  </motion.div>
                </section>
            </>
    );
}

export default Features;