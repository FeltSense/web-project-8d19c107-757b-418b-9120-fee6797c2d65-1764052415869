import React from 'react';
import { Dumbbell, Mail, Phone, MapPin, Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Classes', href: '#classes' },
    { name: 'Trainers', href: '#trainers' },
  ];

  const programs = [
    { name: 'Strength Training', href: '#classes' },
    { name: 'Cardio Fitness', href: '#classes' },
    { name: 'Group Classes', href: '#classes' },
    { name: 'Personal Training', href: '#classes' },
  ];

  const contact = [
    { icon: Phone, text: '+1 (555) 123-4567' },
    { icon: Mail, text: 'info@fitforce.gym' },
    { icon: MapPin, text: '123 Fitness Ave, New York, NY 10001' },
  ];

  const socials = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Youtube, href: '#', label: 'YouTube' },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Brand Section */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <div className="bg-orange-600 p-2 rounded-lg">
                <Dumbbell className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-white">FitForce</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Transform your body, elevate your mind, and unleash your full potential with FitForce Gym.
            </p>
            <div className="flex space-x-4">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="bg-gray-800 p-3 rounded-lg hover:bg-orange-600 transition-all duration-300 hover:scale-110 group"
                >
                  <social.icon className="h-5 w-5 text-gray-400 group-hover:text-white transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6 relative inline-block">
              Quick Links
              <span className="absolute bottom-0 left-0 w-12 h-1 bg-orange-600 -mb-2"></span>
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-orange-500 transition-colors duration-300 hover:translate-x-1 inline-block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6 relative inline-block">
              Programs
              <span className="absolute bottom-0 left-0 w-12 h-1 bg-orange-600 -mb-2"></span>
            </h3>
            <ul className="space-y-3">
              {programs.map((program) => (
                <li key={program.name}>
                  <a
                    href={program.href}
                    className="text-gray-400 hover:text-orange-500 transition-colors duration-300 hover:translate-x-1 inline-block"
                  >
                    {program.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6 relative inline-block">
              Get In Touch
              <span className="absolute bottom-0 left-0 w-12 h-1 bg-orange-600 -mb-2"></span>
            </h3>
            <ul className="space-y-4">
              {contact.map((item, index) => (
                <li key={index} className="flex items-start space-x-3 group">
                  <div className="bg-gray-800 p-2 rounded-lg group-hover:bg-orange-600 transition-colors duration-300">
                    <item.icon className="h-4 w-4 text-orange-500 group-hover:text-white transition-colors" />
                  </div>
                  <span className="text-gray-400 text-sm leading-relaxed flex-1">
                    {item.text}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="mt-12 pt-12 border-t border-gray-800">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-white font-bold text-xl mb-3">Stay Updated</h3>
            <p className="text-gray-400 mb-6">
              Subscribe to our newsletter for fitness tips, class updates, and exclusive offers.
            </p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-orange-600 text-white placeholder-gray-500 transition-colors"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-orange-600 text-white font-semibold rounded-lg hover:bg-orange-500 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-orange-600/50"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} FitForce Gym. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-orange-500 text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-500 text-sm transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-500 text-sm transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
