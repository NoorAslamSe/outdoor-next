'use client';

import { useState, useRef, useEffect, MouseEvent, TouchEvent } from 'react';
import Link from 'next/link';
import { toursData } from '../data/toursData';

export default function TourCarousel() {
  const cardsToShow = 3;
  const totalTours = toursData.length;

  // 1. Create an extended array for a seamless infinite scroll loop
  // We clone the last few items to the front, and the first few items to the back
  const extendedTours = [
    ...toursData.slice(-cardsToShow),
    ...toursData,
    ...toursData.slice(0, cardsToShow),
  ];

  // Start the index sitting exactly on the first real item (skipping the cloned items at the front)
  const [currentIndex, setCurrentIndex] = useState(cardsToShow);
  const [isTransitioning, setIsTransitioning] = useState(true);

  // Dragging states
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);

  const containerRef = useRef<HTMLDivElement>(null);

  const nextSlide = () => {
    if (isDragging) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev + 1);
  };

  const prevSlide = () => {
    if (isDragging) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev - 1);
  };

  // 2. Handle the seamless boundary reset behind the scenes
  const handleTransitionEnd = () => {
    // If we pass the end of the real cards, jump back smoothly to the matching real card at the front
    if (currentIndex >= totalTours + cardsToShow) {
      setIsTransitioning(false);
      setCurrentIndex(cardsToShow);
    }
    // If we pass the beginning of the real cards, jump ahead smoothly to the matching real card at the back
    if (currentIndex <= cardsToShow - 1) {
      setIsTransitioning(false);
      setCurrentIndex(totalTours + cardsToShow - 1);
    }
  };

  // 3. Automatic timer loop running every 4 seconds
  useEffect(() => {
    if (isDragging) return;
    const timer = setInterval(() => {
      nextSlide();
    }, 4000);
    return () => clearInterval(timer);
  }, [currentIndex, isDragging]);

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

  // --- TOUCH HANDLERS FOR MOBILE ---
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

  // Calculate percentage positions for layout mapping
  const baseTranslate = -currentIndex * (100 / cardsToShow);
  const dragTranslate = containerRef.current 
    ? (dragOffset / containerRef.current.clientWidth) * 100 
    : 0;

  // 4. Calculate display count cleanly (1 to 10 loop tracker)
  let activeDisplayCount = currentIndex - cardsToShow + 1;
  if (activeDisplayCount > totalTours) activeDisplayCount = 1;
  if (activeDisplayCount < 1) activeDisplayCount = totalTours;

  return (
    <section className="py-20 bg-white w-full overflow-hidden select-none">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        
        {/* ================= LINE 1: TOP HEADER ================= */}
        <div className="w-full flex items-center mb-12 gap-x-4">
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 tracking-tight whitespace-nowrap">
            Explore Pakistan
          </h2>
          <span className="text-gray-400 font-medium text-xs md:text-sm whitespace-nowrap pt-0.5">
            Popular Destinations
          </span>
          <div className="flex-grow h-[1px] bg-gray-200 mt-1" />
          <div className="flex-shrink-0">
            <Link 
              href="/tours" 
              className="inline-flex items-center gap-x-2 text-xs font-bold text-white bg-gray-800 hover:bg-[#ff205f] px-5 py-2.5 rounded-full transition-colors tracking-wider uppercase"
            >
              View All
              <span className="text-sm font-light">→</span>
            </Link>
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
            className="flex -mx-3"
            onTransitionEnd={handleTransitionEnd}
            style={{ 
              transform: `translateX(${baseTranslate + dragTranslate}%)`,
              transition: isTransitioning && !isDragging ? 'transform 500s cubic-bezier(0.25, 1, 0.5, 1)' : 'none',
              transitionDuration: isTransitioning && !isDragging ? '500ms' : '0ms'
            }}
          >
            {extendedTours.map((tour, index) => (
              <div key={`${tour.id}-${index}`} className="w-full sm:w-1/2 md:w-1/3 flex-shrink-0 px-3">
                <div className="bg-gray-50 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col h-full border border-gray-100">
                  <div className="relative h-48 w-full pointer-events-none">
                    <img src={tour.image} alt={tour.title} className="w-full h-full object-cover" />
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
                        className="text-xs font-bold text-[#ff205f] uppercase tracking-wider hover:text-rose-700 transition-colors"
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

        {/* ================= LINE 3: COUNT & NAVIGATION CONTROLS ================= */}
        <div className="flex items-center justify-between mt-10">
          
          {/* Bottom Left Capsule Counter displaying active index */}
          <div 
            className="text-xs font-bold text-white px-4 py-1.5 rounded-md tracking-wider shadow-sm transition-all duration-300"
            style={{ backgroundColor: '#ff205f' }}
          >
            {activeDisplayCount} - {totalTours}
          </div>

          {/* Bottom Right Circular Navigation Controls */}
          <div className="flex space-x-2">
            <button 
              onClick={prevSlide}
              className="w-9 h-9 rounded-full bg-gray-800 text-white flex items-center justify-center hover:bg-[#ff205f] transition-colors cursor-pointer text-sm shadow-sm"
            >
              <span className="transform rotate-180 block select-none">➤</span>
            </button>
            <button 
              onClick={nextSlide}
              className="w-9 h-9 rounded-full bg-gray-800 text-white flex items-center justify-center hover:bg-[#ff205f] transition-colors cursor-pointer text-sm shadow-sm select-none"
            >
              ➤
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}