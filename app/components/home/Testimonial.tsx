"use client";

import { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
const testimonials = [
  {
    quote:
      "Working with Rocky has been a game-changer. He helped me unlock a level of confidence I never knew I had.",
    author: "Business Executive",
    image: "/assets/profile-pic-chris.jpg"
  },
  {
    quote:
      "Rocky's coaching has transformed my communication skills. I'm now a much more effective leader and speaker.",
    author: "Entrepreneur",
    image: "/assets/profile-pic-chris.jpg"
  },
  {
    quote:
      "I finally have the clarity and direction I need to pursue my dreams. And my new style? It's totally me!",
    author: "Young Professional",
    image: "/assets/profile-pic-chris.jpg"
  },
  {
    quote:
      "The insights I've gained from Rocky's program have been invaluable. My career has taken off in ways I never imagined.",
    author: "Tech Leader",
    image: "/assets/profile-pic-chris.jpg"
  },
  {
    quote:
      "Rocky's approach is refreshing and effective. I've seen remarkable growth in both my personal and professional life.",
    author: "Creative Director",
    image: "/assets/profile-pic-chris.jpg"
  },
];

const TestimonialCarousel = () => {
  const sliderRef = useRef<Slider>(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const goToPrev = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  const goToNext = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white overflow-hidden">
      <div className="container mx-auto px-4 relative">
        <div className="absolute top-0 left-0 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-0 right-0 w-72 h-72 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>

        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 relative z-10">
          What Our Clients Say
        </h2>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Custom Navigation Arrows */}
          <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 flex justify-between z-20 pointer-events-none">
            <button
              onClick={goToPrev}
              className="transform -translate-x-4 w-12 h-12 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 flex items-center justify-center backdrop-blur-sm pointer-events-auto transition hover:bg-purple-500/20"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={goToNext}
              className="transform translate-x-4 w-12 h-12 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 flex items-center justify-center backdrop-blur-sm pointer-events-auto transition hover:bg-purple-500/20"
              aria-label="Next slide"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          <Slider ref={sliderRef} {...settings} className="testimonial-slider">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="px-2">
                <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg p-6 border border-gray-700 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20 h-[350px] flex flex-col justify-between">
                  <div className="flex justify-center mb-6">
                    <Image
                      width={100}
                      height={100}
                      src={testimonial.image} 
                      alt={`${testimonial.author}'s profile`}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                  </div>
                  <div className="relative">
                    <svg
                      className="absolute top-0 left-0 transform -translate-x-6 -translate-y-8 h-16 w-16 text-purple-400 opacity-20"
                      fill="currentColor"
                      viewBox="0 0 32 32"
                      aria-hidden="true"
                    >
                      <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                    </svg>
                    <blockquote className="relative z-10 text-lg md:text-xl text-gray-300">
                      &ldquo;{testimonial.quote}&rdquo;
                    </blockquote>
                  </div>
                  <p className="text-right text-purple-400 font-semibold mt-4">
                    - {testimonial.author}
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default TestimonialCarousel;
