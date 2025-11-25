'use client';

import Image from 'next/image';
import { Calendar, Award, TrendingUp, Users, Clock, CheckCircle, Star, Zap } from 'lucide-react';
import { useState } from 'react';

export default function Services() {
  const [activeMembership, setActiveMembership] = useState('pro');

  const classes = [
    {
      name: 'HIIT Power',
      time: '6:00 AM',
      trainer: 'Marcus Chen',
      spots: 3,
      total: 15,
      intensity: 'High',
      image: 'https://images.unsplash.com/photo-1549576490-b0b4831ef60a?w=800&q=80'
    },
    {
      name: 'Yoga Flow',
      time: '9:30 AM',
      trainer: 'Sarah Williams',
      spots: 7,
      total: 20,
      intensity: 'Low',
      image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&q=80'
    },
    {
      name: 'CrossFit Elite',
      time: '5:00 PM',
      trainer: 'Jake Morrison',
      spots: 2,
      total: 12,
      intensity: 'Extreme',
      image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80'
    }
  ];

  const trainers = [
    {
      name: 'Marcus Chen',
      specialty: 'Strength & Conditioning',
      certifications: ['NASM-CPT', 'CrossFit L2', 'Nutrition Specialist'],
      experience: '8 years',
      rating: 4.9,
      avatar: 'https://i.pravatar.cc/300?img=12'
    },
    {
      name: 'Sarah Williams',
      specialty: 'Yoga & Wellness',
      certifications: ['RYT-500', 'Pilates Instructor', 'Meditation Coach'],
      experience: '6 years',
      rating: 5.0,
      avatar: 'https://i.pravatar.cc/300?img=45'
    },
    {
      name: 'Jake Morrison',
      specialty: 'HIIT & Athletic Performance',
      certifications: ['ACE-CPT', 'Sports Performance', 'TRX Certified'],
      experience: '10 years',
      rating: 4.8,
      avatar: 'https://i.pravatar.cc/300?img=33'
    }
  ];

  const memberships = [
    {
      id: 'basic',
      name: 'Basic',
      price: 49,
      features: ['Access to gym floor', '2 group classes/week', 'Locker access', 'Mobile app'],
      popular: false
    },
    {
      id: 'pro',
      name: 'Pro',
      price: 89,
      features: ['Unlimited gym access', 'Unlimited group classes', '2 PT sessions/month', 'Nutrition guidance', 'Premium locker', 'Guest passes (2/month)'],
      popular: true
    },
    {
      id: 'elite',
      name: 'Elite',
      price: 149,
      features: ['Everything in Pro', '8 PT sessions/month', 'Custom meal plans', 'Recovery suite access', 'Supplement discounts', 'Priority class booking', 'Free merchandise'],
      popular: false
    }
  ];

  const transformations = [
    {
      name: 'David Martinez',
      achievement: 'Lost 45 lbs in 6 months',
      before: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=400&q=80',
      after: 'https://images.unsplash.com/photo-1567013127542-490d757e51fc?w=400&q=80',
      quote: 'FitForce changed my life. The trainers pushed me beyond what I thought possible.'
    },
    {
      name: 'Emily Rodriguez',
      achievement: 'Gained 12 lbs muscle',
      before: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&q=80',
      after: 'https://images.unsplash.com/photo-1550259979-ed79b48d2a30?w=400&q=80',
      quote: 'From zero strength to deadlifting 200 lbs. This place builds champions.'
    },
    {
      name: 'Chris Thompson',
      achievement: 'Marathon ready in 4 months',
      before: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&q=80',
      after: 'https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?w=400&q=80',
      quote: 'The structured training program took me from couch to completing my first marathon.'
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-600 px-4 py-2 rounded-full mb-4">
            <Zap className="w-4 h-4" />
            <span className="font-semibold text-sm">YOUR FITNESS ARSENAL</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Everything You Need to <span className="text-orange-600">Dominate</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Real-time class booking, expert trainers, flexible memberships, and proven results
          </p>
        </div>

        {/* Live Class Schedule */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <div className="bg-orange-600 p-3 rounded-lg">
              <Calendar className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900">Today's Classes</h3>
              <p className="text-gray-600">Live availability • Book instantly</p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {classes.map((classItem, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group">
                <div className="relative h-48">
                  <Image
                    src={classItem.image}
                    alt={classItem.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent"></div>
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                      classItem.intensity === 'Extreme' ? 'bg-red-500 text-white' :
                      classItem.intensity === 'High' ? 'bg-orange-500 text-white' :
                      'bg-green-500 text-white'
                    }`}>
                      {classItem.intensity}
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h4 className="text-2xl font-bold text-white mb-1">{classItem.name}</h4>
                    <p className="text-orange-400 font-semibold">{classItem.trainer}</p>
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2 text-gray-900">
                      <Clock className="w-5 h-5 text-orange-600" />
                      <span className="font-bold text-lg">{classItem.time}</span>
                    </div>
                    <div className={`flex items-center gap-1 ${classItem.spots <= 3 ? 'text-red-600' : 'text-green-600'}`}>
                      <Users className="w-5 h-5" />
                      <span className="font-semibold">{classItem.spots}/{classItem.total} spots</span>
                    </div>
                  </div>
                  <button className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 rounded-lg transition-colors duration-200">
                    Reserve Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Personal Trainers */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <div className="bg-orange-600 p-3 rounded-lg">
              <Award className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900">Elite Trainers</h3>
              <p className="text-gray-600">Certified professionals • Proven track records</p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {trainers.map((trainer, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="flex items-start gap-4 mb-5">
                  <div className="relative">
                    <Image
                      src={trainer.avatar}
                      alt={trainer.name}
                      width={80}
                      height={80}
                      className="rounded-full ring-4 ring-orange-100"
                    />
                    <div className="absolute -bottom-1 -right-1 bg-orange-600 rounded-full p-1">
                      <Award className="w-4 h-4 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-gray-900 mb-1">{trainer.name}</h4>
                    <p className="text-orange-600 font-semibold text-sm mb-2">{trainer.specialty}</p>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-orange-500 text-orange-500" />
                      <span className="font-bold text-gray-900">{trainer.rating}</span>
                      <span className="text-gray-500 text-sm">• {trainer.experience}</span>
                    </div>
                  </div>
                </div>
                
                <div className="border-t border-gray-200 pt-4">
                  <p className="text-xs font-semibold text-gray-500 mb-3">CERTIFICATIONS</p>
                  <div className="flex flex-wrap gap-2">
                    {trainer.certifications.map((cert, i) => (
                      <span key={i} className="bg-gray-900 text-white px-3 py-1 rounded-full text-xs font-semibold">
                        {cert}
                      </span>
                    ))}
                  </div>
                </div>

                <button className="w-full mt-5 border-2 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white font-bold py-2 rounded-lg transition-colors duration-200">
                  Book Session
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Membership Tiers */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <div className="bg-orange-600 p-3 rounded-lg">
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900">Membership Plans</h3>
              <p className="text-gray-600">Flexible options • No hidden fees</p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {memberships.map((membership) => (
              <div 
                key={membership.id}
                className={`relative bg-white rounded-xl p-8 transition-all duration-300 ${
                  membership.popular 
                    ? 'ring-4 ring-orange-600 shadow-2xl scale-105' 
                    : 'shadow-lg hover:shadow-xl'
                }`}
              >
                {membership.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-orange-600 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                      MOST POPULAR
                    </span>
                  </div>
                )}

                <div className="text-center mb-6 pt-2">
                  <h4 className="text-2xl font-bold text-gray-900 mb-2">{membership.name}</h4>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-5xl font-bold text-orange-600">${membership.price}</span>
                    <span className="text-gray-500">/month</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {membership.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button 
                  className={`w-full font-bold py-3 rounded-lg transition-all duration-200 ${
                    membership.popular
                      ? 'bg-orange-600 hover:bg-orange-700 text-white shadow-lg hover:shadow-xl'
                      : 'border-2 border-gray-300 text-gray-900 hover:border-orange-600 hover:text-orange-600'
                  }`}
                >
                  {membership.popular ? 'Start Now' : 'Choose Plan'}
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Success Stories */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <div className="bg-orange-600 p-3 rounded-lg">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900">Transformation Gallery</h3>
              <p className="text-gray-600">Real members • Real results</p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {transformations.map((story, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                <div className="grid grid-cols-2 h-64">
                  <div className="relative">
                    <Image
                      src={story.before}
                      alt={`${story.name} before`}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="bg-gray-900 text-white px-3 py-1 rounded-full text-xs font-bold">
                        BEFORE
                      </span>
                    </div>
                  </div>
                  <div className="relative">
                    <Image
                      src={story.after}
                      alt={`${story.name} after`}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-3 right-3">
                      <span className="bg-orange-600 text-white px-3 py-1 rounded-full text-xs font-bold">
                        AFTER
                      </span>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h4 className="text-xl font-bold text-gray-900 mb-2">{story.name}</h4>
                  <p className="text-orange-600 font-bold mb-3">{story.achievement}</p>
                  <p className="text-gray-600 italic">"{story.quote}"</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}