"use client";
// import Image from "next/image";
// import { Play } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import ReactPlayer from "react-player";
import {
  SiNike,
  SiAdidas,
  SiPuma,
  SiReebok,
  SiNewbalance,
  SiUnderarmour,
} from "react-icons/si";

const brandIcons = [
  { Icon: SiNike, name: "Nike" },
  { Icon: SiAdidas, name: "Adidas" },
  { Icon: SiPuma, name: "Puma" },
  { Icon: SiReebok, name: "Reebok" },
  { Icon: SiNewbalance, name: "New Balance" },
  { Icon: SiUnderarmour, name: "Under Armour" },
];

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-zinc-900">
      {/* Main content container */}
      <div className="container mx-auto px-4 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left column - Text content */}
          <div className="space-y-6">
            <p className="text-sm text-gray-400 uppercase tracking-wider">
              For years, Rocky Saggoo has been the go-to personal development coach for high-achieving individuals, from A-list celebrities and CEOs to politicians, bureaucrats, and entrepreneurs. He's the secret weapon behind their success stories, the catalyst for their transformations.  And now, he's bringing his proven methods to you.

            </p>
            <h1 className="md:text-4xl font-bold">
              {/* <span className="bg-gradient-to-r leading-4 from-green-500 to-green-300 text-transparent bg-clip-text text-xl">
                The Rocky Saggoo Method isn't just about theory; it's about practical, actionable strategies that deliver real results.  It's a holistic approach that addresses every aspect of your personal and professional development, empowering you to:

              </span>{" "} */}
              <p className="bg-gradient-to-r leading-7 from-red-500 to-slate-200 text-transparent bg-clip-text text-lg">The Rocky Saggoo Method isn't just about theory; it's about practical, actionable strategies that deliver real results.  It's a holistic approach that addresses every aspect of your personal and professional development, empowering you to:
              </p>
              <span className="text-white text-sm">
                <ul>
                  <li>
                  -  Master the Art of Communication: Become a captivating speaker, a persuasive negotiator, and a master of interpersonal relationships. Learn to command attention, build rapport, and communicate your vision with clarity and confidence.

                  </li>
                  <li>- Cultivate an Unshakeable Mindset: Overcome limiting beliefs, conquer your fears, and develop the mental resilience to handle any challenge. Learn to harness the power of positive thinking and cultivate a winning attitude.
                  </li>
                  <li>- Elevate Your Personal Brand: Craft a powerful personal style that reflects your unique strengths and projects confidence and authority. Learn to make a lasting impression and command respect in any setting.
                  </li>
                  <li>- Unlock Your Leadership Potential: Develop the leadership skills necessary to inspire others, build high-performing teams, and achieve your goals. Learn to motivate, delegate, and lead with vision and integrity.
                  </li>
                </ul>

              </span>
            </h1>

            {/* Email form */}
            <div className="flex flex-col sm:flex-row gap-3 max-w-md">
              <Input
                type="email"
                placeholder="Your email address"
                className="bg-white"
              />
              <Button className="bg-gradient-to-r from-slate-800 to-red-600 hover:from-red-700 hover:to-red-900 text-white transition duration-500">
                Watch Training
              </Button>
            </div>
          </div>

          {/* Right column - Video preview */}
          {/* Image preview */}
          {/* <div className="relative rounded-2xl overflow-hidden border-8 border-white/10">
            <Image
              src="/assets/home-about-us.jpg"
              alt="Training video preview"
              width={800}
              height={600}
              className="w-full object-cover"
            />
          </div> */}

          {/* Video player */}
          <div className="relative rounded-2xl overflow-hidden border-8 border-white/10 aspect-video">
            <ReactPlayer
              url="/assets/home-about-us-video.mp4"
              width="100%"
              height="100%"
              playing={true}
              loop={true}
              muted={false}
              playsinline={true}
              controls={true}
              className="absolute top-0 left-0"
            />
          </div>
        </div>

        {/* Trusted by section */}
        <div className="mt-20">
          <p className="text-center text-sm text-gray-400 tracking-wider mb-8">
            TRUSTED BY 8-FIGURE BRANDS WORLDWIDE
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
            {brandIcons.map(({ Icon }, i) => (
              <div
                key={i}
                className="w-24 h-12 flex items-center justify-center"
              >
                <Icon className="w-12 h-12 text-gray-400 hover:text-white hover:scale-125 transition duration-500" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
