export default function ExploreWorld() {
  return (
    // We use bg-fixed for the parallax scrolling effect, and cover/center to keep it positioned perfectly
    <section 
      className="relative w-full min-h-[500px] md:min-h-[600px] bg-cover bg-center bg-fixed flex items-center justify-center py-16 px-6 md:px-12"
      style={{ backgroundImage: "url('/explore-bg.jpg')" }}
    >
      {/* Dark overlay to make the text pop */}
      <div className="absolute inset-0 bg-[#1a2b30]/50" />

      {/* Content Box (Stays relative to sit on top of the overlay) */}
      <div className="relative z-10 max-w-6xl w-full flex flex-col md:flex-row items-center md:justify-end gap-8">
        
        {/* Left side is empty on desktop to keep the backpacker visible, right side holds the content */}
        <div className="hidden md:block md:w-1/2" />

        {/* Content wrapper */}
        <div className="w-full md:w-1/2 flex flex-col items-start text-left">
          
          {/* 1. Heading using Montserrat */}
          <h2 className="font-sans text-3xl md:text-[34px] font-bold text-white tracking-tight leading-tight mb-4">
            Explore The World
          </h2>

          {/* Pink Underline */}
          <div className="w-16 h-[3px] bg-[#FF2060] mb-6" />

          {/* 2. Paragraph using Noto Sans */}
          <p className="font-noto text-[15px] md:text-[16px] leading-[26px] text-white/90 font-light mb-8 max-w-[500px]">
            Diremit mundi mare undae nunc mixtam tanto sibi. Nubes unda concordi. 
            Fert his. Recessit mentes praecipites locum caligine sui egens erat. 
            Silvas caeli regna.
          </p>

          {/* 3. Button using Noto Sans */}
          <button className="font-noto bg-[#FF2060] text-white font-bold text-xs tracking-wider uppercase py-4 px-8 rounded-full hover:bg-[#e01650] transition-colors flex items-center justify-center gap-2">
            Learn More <span>➔</span>
          </button>

        </div>
      </div>
    </section>
  );
}