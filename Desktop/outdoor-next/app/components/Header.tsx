'use client'; // This tells Next.js we are using click interactions (useState)

import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  // This state variable keeps track of whether the mobile menu is open (true) or closed (false)
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 w-full z-50 bg-transparent">
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        
        {/* LOGO */}
        <Link href="/" className="flex flex-col text-white tracking-wider z-50">
          <span className="text-2xl font-extrabold leading-none">OUTDOOR</span>
          <span className="text-[10px] font-semibold tracking-[0.3em] text-gray-300">ADVENTURE</span>
        </Link>

        {/* DESKTOP NAVIGATION LINKS (Hidden on mobile 'hidden', visible on medium screens 'md:flex') */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link href="/" className="text-white hover:text-[#FF2060] transition-colors duration-200 font-medium">
            Home
          </Link>
          <Link href="/about" className="text-white hover:text-[#FF2060] transition-colors duration-200 font-medium">
            About
          </Link>
          <Link href="/services" className="text-white hover:text-[#FF2060] transition-colors duration-200 font-medium">
            Services
          </Link>
        </nav>

        {/* DESKTOP TAKE ACTION BUTTON (Hidden on mobile, visible on desktop) */}
        <div className="hidden md:block">
          <button className="bg-[#FF2060] hover:bg-rose-700 text-white font-bold px-6 py-2.5 rounded-full text-sm tracking-wider uppercase transition-all duration-200 cursor-pointer">
            Take Action
          </button>
        </div>

        {/* MOBILE HAMBURGER / CLOSE BUTTON (Visible only on small screens 'md:hidden') */}
        <div className="md:hidden z-50">
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="bg-[#FF2060] text-white p-3 rounded-none focus:outline-none cursor-pointer flex items-center justify-center w-[50px] h-[50px]"
          >
            {isOpen ? (
              // If menu is open, show the 'X' icon
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              // If menu is closed, show the 'Hamburger' icon
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

      </div>

      {/* MOBILE DROPDOWN DRAWER */}
      {isOpen && (
        <div className="absolute top-[80px] left-0 w-full bg-white border-t border-gray-100 md:hidden z-40 shadow-lg">
          <nav className="flex flex-col py-2">
            <Link 
              href="/" 
              onClick={() => setIsOpen(false)}
              className="text-[#FF2060] hover:bg-gray-50 px-6 py-4 font-semibold border-b border-gray-100 transition-colors"
            >
              Home
            </Link>
            <Link 
              href="/about" 
              onClick={() => setIsOpen(false)}
              className="text-gray-800 hover:text-[#FF2060] hover:bg-gray-50 px-6 py-4 font-semibold border-b border-gray-100 transition-colors"
            >
              About
            </Link>
            <Link 
              href="/services" 
              onClick={() => setIsOpen(false)}
              className="text-gray-800 hover:text-[#FF2060] hover:bg-gray-50 px-6 py-4 font-semibold border-b border-gray-100 transition-colors"
            >
              Services
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}