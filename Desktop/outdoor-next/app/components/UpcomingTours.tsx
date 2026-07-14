import Image from 'next/image';

export default function UpcomingTours() {
  return (
    <section className="bg-[#f8f9fa] py-16 px-6 md:px-12 lg:px-20 w-full flex justify-center">
      <div className="max-w-6xl w-full flex flex-col lg:flex-row items-center lg:items-start justify-between gap-12 lg:gap-8">
        
        {/* ========================================================= */}
        {/* LEFT COLUMN: Text Content (Stacked on mobile, 40% width on desktop) */}
        {/* ========================================================= */}
        <div className="w-full lg:w-[38%] flex flex-col items-center text-center lg:items-start lg:text-left mt-4">
          {/* Heading - Montserrat (Exact 34px size on desktop) */}
          <h2 className="font-sans text-[28px] md:text-[34px] font-bold text-gray-900 leading-tight tracking-tight mb-4">
            Upcoming Tours <br className="hidden md:inline" />& Destination
          </h2>

          {/* Pink Underline Accent */}
          <div className="w-12 h-[3px] bg-[#FF2060] mb-6" />

          {/* Description - Noto Sans (Exact 16px size) */}
          <p className="font-noto text-[16px] leading-[26px] text-gray-600 mb-8 max-w-[450px]">
            Fuerat aestu carentem habentia spectent tonitrua mutastis locavit liberioris. Sinistra possedit litora ut nabataeaque. Setucant coepyterunt perveniunt animal! Concordi aurea nabataeaque seductaque constaque cepit sublime flexi nullus.
          </p>

          {/* Learn More Button - Noto Sans (Exact 14px size) */}
          <button className="font-noto bg-[#FF2060] text-white font-bold text-[14px] tracking-wide uppercase py-4 px-8 rounded-full hover:bg-[#e01650] transition-colors">
            LEARN MORE
          </button>
        </div>

        {/* ========================================================= */}
        {/* RIGHT COLUMN: Asymmetric Image Grid (60% width on desktop) */}
        {/* ========================================================= */}
        <div className="w-full lg:w-[58%] grid grid-cols-1 sm:grid-cols-2 gap-4">
          
          {/* LEFT SUB-COLUMN */}
          <div className="flex flex-col gap-4">
            {/* Tour Image 1 (Top Left) */}
            <div className="relative w-full aspect-[4/3] rounded-md overflow-hidden shadow-sm">
              <Image 
                src="/tour-1.jpg" 
                alt="Skiing Tour" 
                fill 
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            
            {/* Tour Image 3 (Bottom Left) */}
            <div className="relative w-full aspect-square rounded-md overflow-hidden shadow-sm">
              <Image 
                src="/tour-3.jpg" 
                alt="Cycling Tour" 
                fill 
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          {/* RIGHT SUB-COLUMN */}
          <div className="flex flex-col gap-4">
            {/* Tour Image 2 (Top Right - Taller aspect ratio matching mockup) */}
            <div className="relative w-full aspect-[4/5] rounded-md overflow-hidden shadow-sm">
              <Image 
                src="/tour-2.jpg" 
                alt="Snow Mountain Tour" 
                fill 
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Tour Image 4 (Bottom Right) */}
            <div className="relative w-full aspect-[4/3] rounded-md overflow-hidden shadow-sm">
              <Image 
                src="/tour-4.jpg" 
                alt="Mountain Hiking" 
                fill 
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}