'use client'; // This tells Next.js we are using click interactions (useState)

import { useState } from 'react';
import Link from 'next/link';
// 1. CHILDSPLAY STEP: We bring our list of 10 Pakistan places into this file so we can search them
import { toursData } from '../data/toursData'; 

export default function Header() {
  // Your existing switch for mobile menu
  const [isOpen, setIsOpen] = useState(false);

  // 2. CHILDSPLAY STEP: Two new switches!
  const [isSearchOpen, setIsSearchOpen] = useState(false); // Is search bar open? (true/false)
  const [searchQuery, setSearchQuery] = useState('');     // What word did the user type?

  // 3. CHILDSPLAY STEP: Filter our 10 destinations based on what the user types
  const filteredTours = toursData.filter((tour) =>
    tour.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <header className="absolute top-0 left-0 w-full z-50 bg-transparent">
      <div className="max-w-6xl mx-auto px-8 lg:px-12 py-5 flex items-center justify-between">
        
        {/* LOGO (Completely Unchanged) */}
        <Link href="/" className="flex flex-col text-white z-50 select-none">
          <span className="text-[28px] font-semibold leading-none tracking-normal font-sans uppercase">
            OUTDOOR
          </span>
          <span className="flex justify-between text-[10px] font-normal text-gray-200 mt-1 font-sans uppercase w-full">
            <span>A</span><span>D</span><span>V</span><span>E</span><span>N</span>
            <span>T</span><span>U</span><span>R</span><span>E</span>
          </span>
        </Link>

        {/* ======================================================================= */}
        {/* RIGHT SIDE CONTAINER: Houses Navigation and Button grouped tight together */}
        {/* ======================================================================= */}
        <div className="hidden md:flex items-center space-x-10">
          
          {/* DESKTOP NAVIGATION LINKS (Completely Unchanged) */}
          <nav className="flex items-center space-x-8">
            <Link href="/" className="text-white hover:text-[#FF2060] transition-colors duration-200 font-normal">
              Home
            </Link>
            <Link href="/about" className="text-white hover:text-[#FF2060] transition-colors duration-200 font-normal">
              About
            </Link>
            <Link href="/services" className="text-white hover:text-[#FF2060] transition-colors duration-200 font-normal">
              Services
            </Link>
          </nav>

          {/* NEW SEARCH ICON + TAKE ACTION BUTTON CONTAINER */}
          <div className="flex items-center space-x-4">
            
            {/* 4. CHILDSPLAY STEP: Clickable Search Glass Icon */}
            <button 
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="text-white hover:text-[#FF2060] transition-colors duration-200 focus:outline-none cursor-pointer"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>

            {/* DESKTOP TAKE ACTION BUTTON (Completely Unchanged) */}
            <button className="bg-[#FF2060] hover:bg-rose-700 text-white font-bold px-6 py-2.5 rounded-full text-sm tracking-wider uppercase transition-all duration-200 cursor-pointer">
              Take Action
            </button>
          </div>

        </div>

        {/* MOBILE HAMBURGER / CLOSE BUTTON (Completely Unchanged) */}
        <div className="md:hidden z-50 flex items-center space-x-4">
          {/* Mobile Search Icon */}
          <button 
            onClick={() => setIsSearchOpen(!isSearchOpen)}
            className="text-white hover:text-[#FF2060] focus:outline-none cursor-pointer"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>

          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="bg-[#FF2060] text-white p-3 rounded-none focus:outline-none cursor-pointer flex items-center justify-center w-[50px] h-[50px]"
          >
            {isOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

      </div>

      {/* MOBILE DROPDOWN DRAWER (Completely Unchanged) */}
      {isOpen && (
        <div className="absolute top-[80px] left-0 w-full bg-white border-t border-gray-100 md:hidden z-40 shadow-lg">
          <nav className="flex flex-col py-2">
            <Link href="/" onClick={() => setIsOpen(false)} className="text-[#FF2060] hover:bg-gray-50 px-6 py-4 font-semibold border-b border-gray-100 transition-colors">
              Home
            </Link>
            <Link href="/about" onClick={() => setIsOpen(false)} className="text-gray-800 hover:text-[#FF2060] hover:bg-gray-50 px-6 py-4 font-semibold border-b border-gray-100 transition-colors">
              About
            </Link>
            <Link href="/services" onClick={() => setIsOpen(false)} className="text-gray-800 hover:text-[#FF2060] hover:bg-gray-50 px-6 py-4 font-semibold border-b border-gray-100 transition-colors">
              Services
            </Link>
          </nav>
        </div>
      )}

      {/* 5. CHILDSPLAY STEP: POP-OPEN SEARCH INPUT BAR PANEL */}
      {isSearchOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-xl border-t border-gray-100 z-50 p-6 animate-fade-in">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center border-b-2 border-gray-200 py-2">
              <input 
                type="text" 
                placeholder="Search Pakistan tour packages (e.g., Naran, Hunza, Murree)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none text-lg font-medium"
              />
              <button 
                onClick={() => { setIsSearchOpen(false); setSearchQuery(''); }}
                className="text-gray-400 hover:text-gray-600 focus:outline-none text-sm uppercase font-bold tracking-wider"
              >
                Close
              </button>
            </div>

            {/* LIVE TOUR SEARCH RESULTS POPPING UP HERE */}
            {searchQuery && (
              <div className="mt-4 max-h-[300px] overflow-y-auto bg-gray-50 rounded-lg p-2 shadow-inner">
                {filteredTours.length > 0 ? (
                  filteredTours.map((tour) => (
                    <Link 
                      key={tour.id} 
                      href={`/tours/${tour.slug}`}
                      onClick={() => { setIsSearchOpen(false); setSearchQuery(''); }}
                      className="block p-3 hover:bg-white rounded transition-colors border-b border-gray-100 last:border-0"
                    >
                      <p className="font-bold text-[#FF2060] text-md">{tour.title}</p>
                      <p className="text-xs text-gray-500 line-clamp-1">{tour.description}</p>
                    </Link>
                  ))
                ) : (
                  <p className="p-3 text-sm text-gray-500 text-center font-medium">No beautiful places found by that name. Try searching "Hunza" or "Murree"!</p>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
}