import React from "react";
import { Star, StarHalf } from "lucide-react";

const OurOffering = () => {
  return (
    <div>
      <section className="bg-zinc-900 px-4 py-16 md:py-24">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-zinc-400 text-4xl md:text-5xl font-bold text-center mb-12">
            OUR OFFERING
          </h2>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-20">
            {/* Agency Card */}
            <div className="bg-zinc-800/50 rounded-3xl p-8 sm:mx-8 flex flex-col items-center text-center">
              <div className="bg-black rounded-full h-20 flex items-center justify-center w-20 p-4 mb-6">
                <span className="text-[#a2ff00]  text-6xl font-bold">R</span>
              </div>

              <span className="text-[#a2ff00] font-semibold mb-4 text-xl tracking-wider">
                HIRE US TO DO IT FOR YOU
              </span>

              <h3 className="text-white lg:text-6xl text-lg font-extrabold mb-6 font-futuraCondensed">
              Super Human Skills
              </h3>

              <p className="text-zinc-300 mb-8 max-w-md text-lg">
                Managed and &apos;done-for-you&apos; digital marketing services
                for mid-to-large companies looking to accelerate
                &apos;hyper-growth&apos;. And yes, we guarantee results and
                smell fantastic *wink*.
              </p>

              <button className="bg-[#a2ff00] text-black font-semibold px-8 py-3 rounded-full mb-8 hover:bg-[#8ce600] transition-colors">
                Get Started
              </button>

              <div className="flex items-center gap-2">
                <div className="flex">
                  {[...Array(4)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-[#CCFF00] text-[#CCFF00]"
                    />
                  ))}
                  <StarHalf className="w-4 h-4 fill-[#CCFF00] text-[#CCFF00]" />
                </div>
                <span className="text-zinc-300">
                  4.5 stars out of 383 reviews
                </span>
              </div>
            </div>

            {/* Courses Card */}
            <div className="bg-zinc-800/50 rounded-3xl p-8 sm:mx-8 flex flex-col items-center text-center">
              <div className="bg-black rounded-full h-20 flex items-center justify-center w-20 p-4 mb-6">
                <span className="text-purple-500 text-6xl font-bold">S</span>
              </div>

              <span className="text-[#a2ff00] font-semibold mb-4 text-xl tracking-wider">
                LEARN HOW TO DO IT YOURSELF
              </span>

              <h3 className="text-white lg:text-6xl text-7xl font-extrabold mb-6 font-futuraCondensed">
              Person To Personality
              </h3>

              <p className="text-zinc-300 mb-8 max-w-md text-lg">
                Business growth training programs for companies serious about
                scaling their coaching, consulting or service business to seven
                and eight figures FAST (in months, not years).
              </p>

              <button className="bg-[#a2ff00] text-black font-semibold px-8 py-3 rounded-full mb-8 hover:bg-[#8ce600] transition-colors">
                Get Started
              </button>

              <div className="flex items-center gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-[#CCFF00] text-[#CCFF00]"
                    />
                  ))}
                </div>
                <span className="text-zinc-300">
                  4.9 stars out of 5,633 reviews
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurOffering;
