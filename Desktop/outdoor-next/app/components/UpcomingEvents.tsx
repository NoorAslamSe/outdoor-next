import Image from 'next/image';

export default function UpcomingEvents() {
  const events = [
    {
      id: 1,
      title: "Everest Camp Trek",
      description: "Fuerat aestu carentem habentia spectent tonitrua mutastis locavit liberioris inistra possedit.",
      image: "/everest.jpg",
    },
    {
      id: 2,
      title: "Walking Holidays",
      description: "Fuerat aestu carentem habentia spectent tonitrua mutastis locavit liberioris inistra possedit.",
      image: "/walking.jpg",
    },
  ];

  return (
    // Responsive outer section with a soft light-gray background to match your design
    <section className="bg-[#f8f9fa] py-16 px-6 w-full flex flex-col items-center justify-center">
      
      {/* 1. Header with Montserrat Font */}
      <div className="text-center flex flex-col items-center mb-12">
        <h2 className="font-sans text-3xl md:text-[40px] font-bold text-gray-900 tracking-tight mb-4">
          Upcoming Events
        </h2>
        {/* Pink divider line */}
        <div className="w-16 h-[3px] bg-[#FF2060]" />
      </div>

      {/* 2. Responsive Cards Grid */}
      {/* - Mobile: 1 column (flex-col) */}
      {/* - Tablet/PC: 2 columns (md:flex-row) with a maximum width limit */}
      <div className="max-w-5xl w-full flex flex-col md:flex-row gap-10 md:gap-8 justify-center items-stretch">
        {events.map((event) => (
          <div key={event.id} className="flex-1 flex flex-col items-center max-w-[480px] mx-auto md:mx-0">
            
            {/* Card Image with soft shadow and white offset margin wrapper matching mockup */}
            <div className="relative w-full aspect-[3/2] rounded-md overflow-hidden shadow-[10px_10px_0px_0px_rgba(230,230,230,0.8)] mb-6">
              <Image 
                src={event.image}
                alt={event.title}
                fill
                className="object-cover"
              />
            </div>

            {/* Event Title (Montserrat Bold) */}
            <h3 className="font-sans text-[22px] font-bold text-gray-900 mb-3 text-center">
              {event.title}
            </h3>

            {/* Event Description (Noto Sans Normal) */}
            <p className="font-noto text-[15px] leading-[24px] text-gray-600 text-center mb-6 max-w-[380px]">
              {event.description}
            </p>

            {/* LEARN MORE Button (Noto Sans, exact Pink Brand color) */}
            <button className="font-noto bg-[#FF2060] text-white font-bold text-xs tracking-wider uppercase py-4 px-8 rounded-full hover:bg-[#e01650] transition-colors flex items-center justify-center gap-2">
              Learn More <span>➔</span>
            </button>

          </div>
        ))}
      </div>

    </section>
  );
}