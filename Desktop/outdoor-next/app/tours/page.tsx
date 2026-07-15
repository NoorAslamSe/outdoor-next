import { toursData } from '../data/toursData';
import Link from 'next/link';
import Header from '../components/Header';

export default function AllToursPage() {
  return (
    <>
      {/* 
        This style tag injects a quick fix ONLY for this page. 
        It forces your header component to take a dark slate background 
        and positions it perfectly so your white text is visible!
      */}
      <style dangerouslySetInnerHTML={{__html: `
        header, .fixed, [class*='Header'] {
          background-color: #0f172a !important; /* Beautiful dark slate */
          position: fixed !important;
          top: 0 !important;
          left: 0 !important;
          width: 100% !important;
          box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1) !important;
        }
      `}} />

      <Header />

      {/* Main content shifted down cleanly */}
      <main className="min-h-screen bg-gray-50 pt-44 pb-16">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          
          {/* Header section matching your corporate styling */}
          <div className="mb-12 flex justify-between items-end border-b border-gray-100 pb-6">
            <div>
              <span className="text-[#FF2060] font-bold text-xs uppercase tracking-[0.2em]">
                Our Complete Catalog
              </span>
              <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-2">
                All Holiday Packages
              </h1>
            </div>
            <Link href="/" className="text-sm font-bold text-gray-500 hover:text-[#FF2060] transition-colors">
              ← Home
            </Link>
          </div>

          {/* 3-column responsive grid view layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {toursData.map((tour) => (
              <div 
                key={tour.id} 
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col h-full border border-gray-100"
              >
                <div className="relative h-48 w-full">
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
                    >
                      Details →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </main>
    </>
  );
}