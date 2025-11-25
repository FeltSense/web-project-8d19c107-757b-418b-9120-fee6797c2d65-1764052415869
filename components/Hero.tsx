'use client';

import Image from 'next/image';
import { Dumbbell, Users, Trophy, ArrowRight } from 'lucide-react';

export default function Hero() {
  const stats = [
    { icon: Users, value: '5K+', label: 'Active Members' },
    { icon: Dumbbell, value: '200+', label: 'Equipment' },
    { icon: Trophy, value: '15+', label: 'Years Strong' },
  ];

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1920&q=80"
          alt="Fitness training"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/95 via-gray-900/90 to-orange-900/80" />
        
        {/* Animated Grid Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="h-full w-full bg-[linear-gradient(rgba(249,115,22,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(249,115,22,0.3)_1px,transparent_1px)] bg-[size:50px_50px]" />
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-600/20 border border-orange-600/50 rounded-full backdrop-blur-sm">
              <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" />
              <span className="text-orange-500 font-semibold text-sm tracking-wide">
                TRANSFORM YOUR LIFE TODAY
              </span>
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight">
                Unleash Your
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600 mt-2">
                  Inner Force
                </span>
              </h1>
              <p className="text-xl text-gray-300 max-w-xl leading-relaxed">
                Join the elite community where champions are made. State-of-the-art equipment, 
                expert trainers, and unlimited motivation await you.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#pricing"
                className="group px-8 py-4 bg-orange-600 text-white font-bold rounded-lg hover:bg-orange-500 transition-all duration-300 shadow-2xl shadow-orange-600/40 hover:shadow-orange-500/50 hover:scale-105 flex items-center justify-center gap-2"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#services"
                className="px-8 py-4 bg-white/10 text-white font-bold rounded-lg hover:bg-white/20 transition-all duration-300 backdrop-blur-sm border border-white/20 hover:border-orange-500/50 flex items-center justify-center"
              >
                Explore Programs
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-orange-600/30">
              {stats.map((stat, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-center gap-2">
                    <stat.icon className="w-5 h-5 text-orange-500" />
                    <span className="text-2xl font-bold text-white">{stat.value}</span>
                  </div>
                  <p className="text-sm text-gray-400">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Image Showcase */}
          <div className="relative hidden lg:block">
            <div className="relative">
              {/* Main Image */}
              <div className="relative h-[600px] rounded-2xl overflow-hidden border-4 border-orange-600/30 shadow-2xl shadow-orange-600/20 hover:scale-105 transition-transform duration-500">
                <Image
                  src="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=1920&q=80"
                  alt="Athlete training"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent" />
                
                {/* Floating Achievement Card */}
                <div className="absolute bottom-8 left-8 right-8 bg-gray-900/90 backdrop-blur-md border border-orange-600/30 rounded-xl p-6 shadow-2xl">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-orange-600 to-orange-500 rounded-full flex items-center justify-center shadow-lg">
                      <Trophy className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-white">92% Success Rate</p>
                      <p className="text-gray-400">Members achieve their goals</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-orange-600/20 rounded-full blur-2xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-orange-500/20 rounded-full blur-3xl" />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-orange-500 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-orange-500 rounded-full" />
        </div>
      </div>
    </section>
  </div></div></div></div></div></div></div>);
}