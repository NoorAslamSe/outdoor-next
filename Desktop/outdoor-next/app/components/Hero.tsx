export default function Hero() {
  return (
    // 'h-screen' makes this take up the whole screen height
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      
      {/* BACKGROUND IMAGE: We use a beautiful nature image placeholder for now */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: `url('https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1920')` 
        }}
      />

      {/* BLACK OVERLAY: Makes the image a bit darker so white text is easy to read */}
      <div className="absolute inset-0 bg-black/40 z-10" />

      {/* HERO CONTENT: Centered text and button */}
      <div className="relative z-20 text-center text-white px-4 max-w-4xl mx-auto flex flex-col items-center">
        
        {/* Small subtitle */}
        <p className="text-lg md:text-xl font-bold tracking-wide mb-1">
          Explore the Colourful World
        </p>

        {/* Small red line underneath subtitle */}
        <div className="w-16 h-[2px] bg-[#FF2060] mb-6" />

        {/* Big Bold Main Heading */}
        <h1 className="font-bold tracking-tight mb-8 drop-shadow-md text-4xl md:text-[64px] leading-tight md:leading-[89.6px]">
        A Wonderful Gift
        </h1>

        {/* Learn More Button */}
        <button className="bg-[#FF2060] hover:bg-rose-700 text-white font-bold px-8 py-3 rounded-full text-sm tracking-widest uppercase transition-all duration-200 cursor-pointer">
          Learn More
        </button>

      </div>
    </section>
  );
}