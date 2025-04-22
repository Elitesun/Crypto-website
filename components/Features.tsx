import { ArrowUpRight } from 'lucide-react';
const Features = () => {
    return (
        <>
               {/* Features Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="mb-16">
          <h3 className="text-4xl font-bold mb-4">
            Your <span className="text-[#CCFF00]">trusted</span> partner of
            <br />cryptocurrency.
          </h3>
          <p className="text-gray-400 max-w-lg">
            Polkadot unites and secures a growing ecosystem of specialized blockchains called parachains. Apps and services on Polkadot can ecosystem of specialized called.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-8">
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
            <div
              key={index}
              className={`p-8 rounded-2xl ${
                feature.highlight
                  ? 'bg-[#CCFF00] text-black'
                  : 'bg-[#111111]'
              }`}
            >
              <div className="text-xl font-bold mb-4">{feature.number}</div>
              <h4 className="text-xl font-bold mb-4">{feature.title}</h4>
              <p className={feature.highlight ? 'text-black/80' : 'text-gray-400'}>
                {feature.description}
              </p>
              {feature.highlight && (
                <button className="mt-4 flex items-center space-x-2 font-bold">
                  Learn More <ArrowUpRight className="w-5 h-5" />
                </button>
              )}
            </div>
          ))}
        </div>
      </section>
        </>
    );
}

export default Features;