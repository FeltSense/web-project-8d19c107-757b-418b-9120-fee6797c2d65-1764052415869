'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Zap } from 'lucide-react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: '#services', label: 'Services' },
    { href: '#pricing', label: 'Pricing' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900/95 backdrop-blur-sm border-b border-orange-600/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="relative">
              <Zap className="w-8 h-8 text-orange-600 group-hover:text-orange-500 transition-colors" fill="currentColor" />
              <div className="absolute inset-0 bg-orange-600 blur-lg opacity-30 group-hover:opacity-50 transition-opacity" />
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-white tracking-tight">
                FIT<span className="text-orange-600">FORCE</span>
              </span>
              <span className="text-xs text-orange-500 tracking-widest -mt-1">GYM</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-gray-300 hover:text-orange-500 font-medium transition-colors relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-600 group-hover:w-full transition-all duration-300" />
              </a>
            ))}
            <a
              href="#pricing"
              className="px-6 py-2.5 bg-orange-600 text-white font-semibold rounded-lg hover:bg-orange-500 hover:scale-105 transition-all duration-300 shadow-lg shadow-orange-600/30"
            >
              Join Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-gray-300 hover:text-orange-500 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-orange-600/20">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-gray-300 hover:text-orange-500 font-medium transition-colors px-4 py-2"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#pricing"
                onClick={() => setIsOpen(false)}
                className="mx-4 px-6 py-2.5 bg-orange-600 text-white font-semibold rounded-lg hover:bg-orange-500 transition-colors text-center shadow-lg shadow-orange-600/30"
              >
                Join Now
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  </div></span>);
}