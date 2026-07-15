import { toursData } from '../../data/toursData';
import Link from 'next/link';

// This function finds the correct Pakistan tour data based on the link slug
export default async function TourDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  
  // Find the exact tour match from our 10 items
  const tour = toursData.find((t) => t.slug === slug);

  // If the link is wrong, show a nice "Not Found" message
  if (!tour) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Tour Not Found</h2>
        <p className="text-gray-600 mb-6">We couldn't find that beautiful destination in our list.</p>
        <Link href="/" className="bg-[#FF2060] text-white px-6 py-2.5 rounded-full font-bold uppercase text-xs tracking-wider">
          Go Back Home
        </Link>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50 pt-28 pb-16">
      {/* Boxed page container */}
      <div className="max-w-5xl mx-auto px-8 md:px-16 lg:px-24">
        
        {/* Back Link */}
        <Link href="/" className="inline-flex items-center text-sm font-semibold text-gray-500 hover:text-[#FF2060] mb-8 transition-colors">
          ← Back to All Tours
        </Link>

        {/* Tour Layout Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 bg-white rounded-2xl overflow-hidden shadow-md p-6 md:p-10">
          
          {/* Left Side: Tour Image */}
          <div className="relative h-[300px] md:h-[450px] w-full rounded-xl overflow-hidden shadow-inner">
            <img 
              src={tour.image} 
              alt={tour.title} 
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right Side: Tour Details */}
          <div className="flex flex-col justify-center">
            <span className="text-[#FF2060] font-bold text-xs uppercase tracking-[0.2em] mb-2 block">
              {tour.duration}
            </span>
            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 leading-tight">
              {tour.title}
            </h1>
            <div className="w-16 h-[3px] bg-[#FF2060] mb-6" />
            
            <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-8">
              {tour.description}
            </p>

            <div className="border-t border-gray-100 pt-6 flex items-center justify-between">
              <div>
                <p className="text-xs text-gray-400 uppercase font-bold tracking-wider">Total Package Cost</p>
                <p className="text-2xl md:text-3xl font-black text-gray-900 mt-1">{tour.price}</p>
              </div>
              
              <button className="bg-[#FF2060] hover:bg-rose-700 text-white font-bold px-8 py-3.5 rounded-full text-xs md:text-sm tracking-wider uppercase transition-all shadow-md cursor-pointer">
                Book This Tour
              </button>
            </div>

          </div>

        </div>

      </div>
    </main>
  );
}