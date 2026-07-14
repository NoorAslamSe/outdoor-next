import Image from 'next/image';

export default function OurMission() {
  return (
    <section className="bg-[#f8f9fa] py-16 px-6 md:px-12 lg:px-20 w-full flex justify-center">
      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center justify-between gap-12 md:gap-8">
        
        {/* LEFT COLUMN: Content (50% on Desktop) */}
        <div className="w-full md:w-1/2 flex flex-col items-center text-center md:items-start md:text-left">
          {/* Heading - Montserrat (Exact 34px size) */}
          <h2 className="font-sans text-[28px] md:text-[34px] font-bold text-gray-900 leading-tight tracking-tight mb-4">
            Our MissioN
          </h2>

          {/* Pink Underline Accent */}
          <div className="w-16 h-[3px] bg-[#FF2060] mb-6" />

          {/* Paragraphs - Noto Sans (Exact 16px size) */}
          <div className="font-noto text-[16px] leading-[26px] text-gray-600 space-y-4 max-w-[480px]">
            <p>
              Click edit button to change this text. Lorem ipsum dolor sit amet, adipiscing elit.
            </p>
            <p>
              Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
          </div>
        </div>

        {/* RIGHT COLUMN: Image Layout (50% on Desktop) */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
          {/* Outer container creating the matching light-gray background card displacement shadow */}
          <div className="relative w-full max-w-[540px] aspect-[4/3] rounded-md overflow-hidden shadow-[12px_12px_0px_0px_rgba(230,230,230,0.8)]">
            <Image 
              src="/mission.jpg" 
              alt="Our Mission" 
              fill 
              className="object-cover"
              priority
            />
          </div>
        </div>

      </div>
    </section>
  );
}