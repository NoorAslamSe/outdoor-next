'use client';

import { useState, useRef, MouseEvent, TouchEvent } from 'react';
import Link from 'next/link';
import { toursData } from '../data/toursData';

export default function TourCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Dragging states
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);

  const containerRef = useRef<HTMLDivElement>(null);

  // Show exactly 3 cards inside the boxed view layout as requested
  const cardsToShow = 3; 
  const totalTours = toursData.length;
  const maxIndex = totalTours - cardsToShow;

  const nextSlide = () => {
    if (currentIndex < maxIndex) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0); // Loop back
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else {
      setCurrentIndex(maxIndex); // Loop to end
    }
  };

  // --- MOUSE DRAG HANDLERS ---
  const handleMouseDown = (e: MouseEvent<HTMLDivElement>) => {
    if (e.button !== 0) return;
    setIsDragging(true);
    setStartX(e.pageX);
    setDragOffset(0);
  };

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    e.preventDefault();
    const currentX = e.pageX;
    const diff = currentX - startX;
    setDragOffset(diff);
  };

  const handleMouseUpOrLeave = () => {
    if (!isDragging) return;
    setIsDragging(false);
    if (dragOffset < -50) nextSlide();
    else if (dragOffset > 50) prevSlide();
    setDragOffset(0);
  };

  // --- TOUCH HANDLERS ---
  const handleTouchStart = (e: TouchEvent<HTMLDivElement>) => {
    setIsDragging(true);
    setStartX(e.touches[0].clientX);
    setDragOffset(0);
  };

  const handleTouchMove = (e: TouchEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    const currentX = e.touches[0].clientX;
    const diff = currentX - startX;
    setDragOffset(diff);
  };

  const handleTouchEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);
    if (dragOffset < -50) nextSlide();
    else if (dragOffset > 50) prevSlide();
    setDragOffset(0);
  };

  const baseTranslate = -currentIndex * (100 / cardsToShow);
  const dragTranslate = containerRef.current 
    ? (dragOffset / containerRef.current.clientWidth) * 100 
    : 0;

  // Formatting slide count numbers (e.g., 1 -> "01")
  const currentCount = String(currentIndex + 1).padStart(2, '0');
  const totalCount = String(totalTours).padStart(2, '0');

  return (
    <section className="py-20 bg-white w-full overflow-hidden select-none">
      {/* BOX CONTAINER: Keeps everything safely padded and clean */}
      <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-16">
        
        {/* ================= LINE 1: TOP HEADER ================= */}
        <div className="flex items-end justify-between mb-12">
          {/* Top Left: View All Button */}
          <Link 
            href="/tours" 
            className="text-xs font-bold text-gray-900 border-b-2 border-gray-900 pb-1 uppercase tracking-wider hover:text-[#FF2060] hover:border-[#FF2060] transition-colors"
          >
            View All
          </Link>

          {/* Top Right: Title and Span Details */}
          <div className="text-right">
            <span className="text-[#FF2060] font-bold text-xs uppercase tracking-[0.2em]">
              Popular Destinations
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-2">
              Explore Pakistan
            </h2>
            <div className="w-12 h-[2px] bg-[#FF2060] mt-3 ml-auto" />
          </div>
        </div>

        {/* ================= LINE 2: THE CARDS LINE ================= */}
        <div 
          ref={containerRef}
          className={`relative w-full overflow-hidden ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}`}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUpOrLeave}
          onMouseLeave={handleMouseUpOrLeave}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div 
            className={`flex -mx-3 ${isDragging ? 'transition-none' : 'transition-transform duration-500 ease-out'}`}
            style={{ 
              transform: `translateX(${baseTranslate + dragTranslate}%)` 
            }}
          >
            {toursData.map((tour) => (
              <div 
                key={tour.id} 
                className="w-full sm:w-1/2 md:w-1/3 flex-shrink-0 px-3"
                onDragStart={(e) => e.preventDefault()} 
              >
                {/* Clean contained Card layout */}
                <div className="bg-gray-50 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col h-full border border-gray-100">
                  <div className="relative h-48 w-full pointer-events-none">
                    <img 
                      src={tour.image} 
                      alt={tour.title} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <div className="p-6 flex flex-col flex-grow text-left">
                    <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider block mb-1">
                      {tour.duration}
                    </span>
                    <h3 className="font-extrabold text-gray-800 text-lg line-clamp-1 mb-2">
                      {tour.title}
                    </h3>
                    <p className="text-gray-500 text-xs line-clamp-2 mb-4 leading-relaxed">
                      {tour.description}
                    </p>
                    
                    <div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between">
                      <span className="font-black text-gray-900 text-sm">{tour.price}</span>
                      <Link 
                        href={`/tours/${tour.slug}`}
                        className="text-xs font-bold text-[#FF2060] uppercase tracking-wider hover:text-rose-700 transition-colors"
                        onClick={(e) => isDragging && e.preventDefault()}
                      >
                        Details →
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ================= LINE 3: COUNT & NAVIGATION ================= */}
        <div className="flex items-center justify-between mt-10">
          {/* Bottom Left: Counter */}
          <div className="text-sm font-bold text-gray-400 tracking-wider">
            <span className="text-gray-900 text-base">{currentCount}</span>
            <span className="mx-2">/</span>
            <span>{totalCount}</span>
          </div>

          {/* Bottom Right: Navigation Buttons */}
          <div className="flex space-x-3">
            <button 
              onClick={prevSlide}
              className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-[#FF2060] hover:text-white hover:border-[#FF2060] transition-colors cursor-pointer font-bold"
            >
              ←
            </button>
            <button 
              onClick={nextSlide}
              className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-[#FF2060] hover:text-white hover:border-[#FF2060] transition-colors cursor-pointer font-bold"
            >
              →
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}