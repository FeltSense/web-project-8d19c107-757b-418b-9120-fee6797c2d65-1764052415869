"use client";

import Image from "next/image";
import { Check, Zap, Crown, TrendingUp } from "lucide-react";

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-gray-900">
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-orange-600/10 to-transparent" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-orange-600/20 text-orange-500 px-4 py-2 rounded-full mb-6">
              <Zap className="w-4 h-4" />
              <span className="text-sm font-semibold">LIMITED TIME OFFER</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Transform Your Life for
              <span className="block text-orange-500 mt-2">Just $29/Month</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              That's less than a dollar a day. What's your health worth?
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Card Section */}
      <section id="pricing" className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Main Pricing Card */}
            <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8 md:p-12 border-2 border-orange-500 shadow-2xl shadow-orange-500/20">
              {/* Popular Badge */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <div className="bg-orange-500 text-white px-6 py-2 rounded-full font-bold text-sm flex items-center gap-2">
                  <Crown className="w-4 h-4" />
                  MOST POPULAR
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8 items-center">
                {/* Left Side - Price & CTA */}
                <div>
                  <h2 className="text-3xl font-bold text-white mb-4">
                    FitForce Elite
                  </h2>
                  <div className="mb-6">
                    <div className="flex items-baseline gap-2 mb-2">
                      <span className="text-6xl font-bold text-orange-500">$29</span>
                      <span className="text-gray-400 text-xl">/month</span>
                    </div>
                    <p className="text-gray-400">
                      <span className="line-through">$99/month</span>
                      <span className="ml-2 text-orange-500 font-semibold">Save 70%</span>
                    </p>
                  </div>

                  <button
                    onClick={() => window.location.href = 'https://buy.stripe.com/test_cNicN778gcvQ2NZ3gV6Ri00'}
                    className="w-full bg-orange-600 hover:bg-orange-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-orange-500/50 mb-4"
                  >
                    Start Your Transformation
                  </button>

                  <p className="text-center text-gray-400 text-sm">
                    Cancel anytime. No hidden fees.
                  </p>
                </div>

                {/* Right Side - Features */}
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-orange-500" />
                    Everything Included
                  </h3>
                  {[
                    "Unlimited gym access 24/7",
                    "All group fitness classes",
                    "Personal training session",
                    "Nutrition planning guide",
                    "Member-only mobile app",
                    "Locker & shower facilities",
                    "Free guest passes monthly",
                    "Community challenges"
                  ].map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="bg-orange-500/20 rounded-full p-1 mt-0.5">
                        <Check className="w-4 h-4 text-orange-500" />
                      </div>
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Value Proposition Cards */}
            <div className="grid md:grid-cols-3 gap-6 mt-12">
              <div className="bg-gray-800 rounded-xl p-6 text-center border border-gray-700 hover:border-orange-500 transition-all duration-300">
                <div className="text-4xl font-bold text-orange-500 mb-2">$0.96</div>
                <div className="text-gray-400">Per Day</div>
                <p className="text-gray-500 text-sm mt-2">Less than your morning coffee</p>
              </div>

              <div className="bg-gray-800 rounded-xl p-6 text-center border border-gray-700 hover:border-orange-500 transition-all duration-300">
                <div className="text-4xl font-bold text-orange-500 mb-2">$348</div>
                <div className="text-gray-400">Saved Annually</div>
                <p className="text-gray-500 text-sm mt-2">vs. regular pricing</p>
              </div>

              <div className="bg-gray-800 rounded-xl p-6 text-center border border-gray-700 hover:border-orange-500 transition-all duration-300">
                <div className="text-4xl font-bold text-orange-500 mb-2">∞</div>
                <div className="text-gray-400">Value Delivered</div>
                <p className="text-gray-500 text-sm mt-2">Your health is priceless</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-16 bg-gray-800/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              Join 10,000+ Members Who Made the Best $29 Decision
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  name: "Sarah Chen",
                  image: "https://i.pravatar.cc/150?img=5",
                  result: "Lost 30 lbs in 3 months",
                  quote: "Best investment I've ever made. The value is incredible!"
                },
                {
                  name: "Marcus Johnson",
                  image: "https://i.pravatar.cc/150?img=12",
                  result: "Gained 15 lbs muscle",
                  quote: "For $29? This is a no-brainer. Do it now."
                },
                {
                  name: "Emily Rodriguez",
                  image: "https://i.pravatar.cc/150?img=9",
                  result: "Runs 5K daily now",
                  quote: "I spend more on subscriptions I don't use. This changed my life."
                }
              ].map((member, index) => (
                <div key={index} className="bg-gray-900 rounded-xl p-6 border border-gray-700">
                  <div className="flex items-center gap-4 mb-4">
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={60}
                      height={60}
                      className="rounded-full"
                    />
                    <div>
                      <div className="font-bold text-white">{member.name}</div>
                      <div className="text-orange-500 text-sm">{member.result}</div>
                    </div>
                  </div>
                  <p className="text-gray-400 italic">"{member.quote}"</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              What Else Costs $29/Month?
            </h2>
            <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700">
              <div className="space-y-6">
                {[
                  { item: "Streaming services you barely watch", value: "Entertainment" },
                  { item: "Premium coffee subscription (2 cups)", value: "Temporary buzz" },
                  { item: "Food delivery fees for 2-3 orders", value: "Convenience" },
                  { item: "FitForce Elite Membership", value: "Life transformation", highlight: true }
                ].map((comparison, index) => (
                  <div
                    key={index}
                    className={`flex justify-between items-center p-4 rounded-xl ${
                      comparison.highlight
                        ? "bg-orange-500/20 border-2 border-orange-500"
                        : "bg-gray-900"
                    }`}
                  >
                    <span className={`font-semibold ${comparison.highlight ? "text-orange-500" : "text-gray-300"}`}>
                      {comparison.item}
                    </span>
                    <span className={`text-sm ${comparison.highlight ? "text-orange-400" : "text-gray-500"}`}>
                      {comparison.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-br from-orange-600 to-orange-500">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              The Question Isn't "Can I Afford It?"
            </h2>
            <p className="text-2xl text-white/90 mb-8">
              It's "Can I Afford NOT To?"
            </p>
            <button
              onClick={() => window.location.href = 'https://buy.stripe.com/test_cNicN778gcvQ2NZ3gV6Ri00'}
              className="bg-gray-900 hover:bg-gray-800 text-white font-bold py-5 px-12 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl text-lg"
            >
              Claim Your $29 Membership Now
            </button>
            <p className="text-white/80 mt-6">
              ⚡ 500+ people joined this week • Limited spots available
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              Common Questions
            </h2>
            <div className="space-y-4">
              {[
                {
                  q: "Is there a contract?",
                  a: "No contracts. Cancel anytime with one click. We earn your membership every month."
                },
                {
                  q: "What's the catch?",
                  a: "No catch. We believe affordable fitness creates loyal, long-term members. Simple as that."
                },
                {
                  q: "Can I upgrade later?",
                  a: "This IS our premium tier. Everything is included at $29/month."
                },
                {
                  q: "Is this price guaranteed?",
                  a: "Your rate is locked in as long as you remain a member. New members may pay more."
                }
              ].map((faq, index) => (
                <div key={index} className="bg-gray-800 rounded-xl p-6 border border-gray-700">
                  <h3 className="font-bold text-white mb-2">{faq.q}</h3>
                  <p className="text-gray-400">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>);
}
