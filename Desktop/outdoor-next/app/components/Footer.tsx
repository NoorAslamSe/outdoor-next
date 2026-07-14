export default function Footer() {
  return (
    <footer className="bg-[#111111] text-white py-12 px-6 w-full flex flex-col items-center justify-center">
      <div className="max-w-6xl w-full text-center flex flex-col items-center gap-4">
        
        {/* Contact info using Noto Sans */}
        <p className="font-noto text-[14px] md:text-[15px] leading-relaxed text-gray-300 tracking-wide max-w-3xl">
          123 Fifth Avenue, NY 10160, New York, USA <span className="hidden sm:inline mx-2 text-gray-500">|</span> <br className="sm:hidden" />
          Phone: +92330 1435193 <span className="hidden sm:inline mx-2 text-gray-500">|</span> <br className="sm:hidden" />
          Email: nooraslamchannel@gmail.com
        </p>

        {/* Copyright info using Noto Sans */}
        <p className="font-noto text-xs md:text-[14px] text-gray-400 tracking-wide mt-2">
          Copyright © 2026 Outdoor Adventure
        </p>
        
      </div>
    </footer>
  );
}