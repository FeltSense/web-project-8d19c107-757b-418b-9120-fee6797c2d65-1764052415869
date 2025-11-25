"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Marcus Thompson",
    role: "Lost 45 lbs in 6 months",
    image: "https://i.pravatar.cc/150?img=12",
    quote: "I've tried every gym in the city, but FitForce is different. The trainers don't just show you exercises—they push you to break through mental barriers you didn't know you had. I'm stronger, faster, and more confident than I've ever been.",
    rating: 5,
    transformation: "45 lbs lost"
  },
  {
    id: 2,
    name: "Sarah Chen",
    role: "Marathon Runner & Member Since 2022",
    image: "https://i.pravatar.cc/150?img=5",
    quote: "After my knee injury, I thought my running days were over. The recovery program at FitForce brought me back stronger than before. I just completed my first marathon post-injury, and I couldn't have done it without this community.",
    rating: 5,
    transformation: "Full recovery"
  },
  {
    id: 3,
    name: "David Rodriguez",
    role: "From Beginner to Competitor",
    image: "https://i.pravatar.cc/150?img=33",
    quote: "Walking into a gym at 42 with zero fitness experience was intimidating. But FitForce made me feel welcome from day one. Two years later, I competed in my first CrossFit competition. This place literally changed my life.",
    rating: 5,
    transformation: "2 years of progress"
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section id="testimonials" className="py-24 bg-gray-900 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-orange-600/5 to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-600/10 rounded-full mb-4">
            <Quote className="w-8 h-8 text-orange-600" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Real Results, Real Stories
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Don't just take our word for it. Hear from members who transformed their lives at FitForce.
          </p>
        </div>

        {/* Main Testimonial Card */}
        <div className="max-w-5xl mx-auto">
          <div className="bg-gray-800 rounded-2xl p-8 md:p-12 shadow-2xl border border-gray-700 relative">
            {/* Quote decoration */}
            <div className="absolute top-8 left-8 text-orange-600/20">
              <Quote className="w-16 h-16 md:w-20 md:h-20" fill="currentColor" />
            </div>

            <div className="relative z-10">
              {/* Testimonial Content */}
              <div className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-8">
                {/* Avatar with transformation badge */}
                <div className="relative flex-shrink-0">
                  <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-orange-600 shadow-lg shadow-orange-600/20">
                    <Image
                      src={currentTestimonial.image}
                      alt={currentTestimonial.name}
                      width={128}
                      height={128}
                      className="object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-2 -right-2 bg-orange-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg whitespace-nowrap">
                    {currentTestimonial.transformation}
                  </div>
                </div>

                {/* Text Content */}
                <div className="flex-1 text-center md:text-left">
                  <div className="flex justify-center md:justify-start mb-3">
                    {[...Array(currentTestimonial.rating)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-5 h-5 text-orange-600"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-6 italic">
                    "{currentTestimonial.quote}"
                  </p>
                  <div>
                    <h4 className="text-white font-bold text-xl mb-1">
                      {currentTestimonial.name}
                    </h4>
                    <p className="text-orange-600 font-medium">
                      {currentTestimonial.role}
                    </p>
                  </div>
                </div>
              </div>

              {/* Navigation Controls */}
              <div className="flex items-center justify-between pt-6 border-t border-gray-700">
                <button
                  onClick={prevTestimonial}
                  className="flex items-center gap-2 text-gray-400 hover:text-orange-600 transition-colors group"
                  aria-label="Previous testimonial"
                >
                  <div className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center group-hover:bg-orange-600 group-hover:scale-110 transition-all">
                    <ChevronLeft className="w-5 h-5" />
                  </div>
                  <span className="hidden sm:inline font-medium">Previous</span>
                </button>

                {/* Dots Indicator */}
                <div className="flex gap-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentIndex(index)}
                      className={`transition-all ${
                        index === currentIndex
                          ? "w-8 h-2 bg-orange-600"
                          : "w-2 h-2 bg-gray-600 hover:bg-gray-500"
                      } rounded-full`}
                      aria-label={`Go to testimonial ${index + 1}`}
                    />
                  ))}
                </div>

                <button
                  onClick={nextTestimonial}
                  className="flex items-center gap-2 text-gray-400 hover:text-orange-600 transition-colors group"
                  aria-label="Next testimonial"
                >
                  <span className="hidden sm:inline font-medium">Next</span>
                  <div className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center group-hover:bg-orange-600 group-hover:scale-110 transition-all">
                    <ChevronRight className="w-5 h-5" />
                  </div>
                </button>
              </div>
            </div>
          </div>

          {/* Stats Bar */}
          <div className="grid grid-cols-3 gap-4 mt-8 max-w-3xl mx-auto">
            <div className="bg-gray-800/50 rounded-lg p-4 text-center border border-gray-700/50">
              <div className="text-3xl font-bold text-orange-600 mb-1">500+</div>
              <div className="text-gray-400 text-sm">Success Stories</div>
            </div>
            <div className="bg-gray-800/50 rounded-lg p-4 text-center border border-gray-700/50">
              <div className="text-3xl font-bold text-orange-600 mb-1">4.9</div>
              <div className="text-gray-400 text-sm">Average Rating</div>
            </div>
            <div className="bg-gray-800/50 rounded-lg p-4 text-center border border-gray-700/50">
              <div className="text-3xl font-bold text-orange-600 mb-1">98%</div>
              <div className="text-gray-400 text-sm">Would Recommend</div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-400 mb-4">Ready to write your own success story?</p>
          <button className="bg-orange-600 hover:bg-orange-500 text-white font-bold px-8 py-4 rounded-lg transition-all hover:scale-105 shadow-lg shadow-orange-600/20">
            Start Your Transformation
          </button>
        </div>
      </div>
    </section>
  </div></button>);
}
