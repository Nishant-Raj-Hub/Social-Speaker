import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Star, StarHalf } from "lucide-react";
import { FaArrowRightLong } from "react-icons/fa6";

const Hero = () => {
  return (
    <div>
      <div className="h-[100vh] bg-red-800">
        <div className="relative w-full h-full">
          <video
            autoPlay
            src="/assets/hero-bg-video.mp4"
            loop
            muted
            playsInline
            className="absolute top-0 left-0 w-full h-full object-cover"
          />

          {/* Dark overlay */}
          <div className="absolute top-0 left-0 w-full h-full bg-black/80" />

          {/* Content */}
          <div className="absolute top-[55%] left-1/2 transform -translate-x-1/2 -translate-y-1/2  text-white px-4">
            <div className="flex flex-col items-center justify-center w-full h-full">
              <h1 className="   font-bold md:text-[40px] leading-tight  uppercase font-futuraCondensed text-center mb-6">
              The Secret Weapon of CEOs, Celebrities, and YOU:<span className="font-futuraBold">*</span>
                <br />
                Unleash Your Untapped Potential with Rocky Saggoo

              </h1>
              <p className="text-xl md:text-3xl text-center max-w-[700px] font-futuraBook">
              Trained by the best, now it&apos;s your turn. Discover the personal development secrets that have transformed the lives of top performers, from A-list celebrities to influential leaders.

              </p>

              {/* Email subscription form */}
              <div className="w-full max-w-3xl mt-10">
                <div className="relative flex items-center">
                  <div className="absolute left-4 text-2xl">👋</div>
                  <Input
                    type="email"
                    placeholder="Enter your email here and we'll send you some 'magic'..."
                    className="w-full h-14 pl-12 pr-32 rounded-full bg-white/90 text-black text-lg"
                  />
                  <Button className="absolute group right-1 h-12 px-8 rounded-full bg-gradient-to-r from-red-400 to-red-700 hover:from-red-600 hover:to-red-800 text-white font-bold">
                    Do it
                    <FaArrowRightLong className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                </div>

                {/* Rating section */}
                <div className="mt-4 flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-gray-300">
                  <p className="text-gray-400">
                    *But it&apos;s 100% legal (pinky promise)
                  </p>
                  <div className="flex items-center gap-2">
                    <div className="flex">
                      {[...Array(4)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 text-red-500 fill-red-500"
                        />
                      ))}
                      <StarHalf className="w-4 h-4 fill-red-500 text-red-500" />
                    </div>
                    <span>4.8 stars out of 6,016 reviews</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
