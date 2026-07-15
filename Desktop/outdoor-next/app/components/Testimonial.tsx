export default function Testimonial() {
  return (
    <section className="bg-[#ececec] py-16 px-6 w-full flex justify-center">
      {/* Outer row: keeps icon on the left, text block on the right */}
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8">
        
        {/* Left side: Quote icon */}
        <div className="flex-shrink-0 leading-none h-[80px] flex items-center justify-center">
          <span className="text-white text-[220px] font-serif leading-none select-none block">
            “
          </span>
        </div>

        {/* Right side: Text block (Centered internally) */}
        {/* We changed "md:text-left" to "text-center flex flex-col items-center" */}
        <div className="max-w-none flex flex-col items-center text-center">
          <p className="font-noto text-[20.8px] leading-[27.2px] text-[#404040] italic font-normal">
            "Fuerat aestu carentem habentia spectent tonitrua mutastis locavit liberioris."
          </p>
          <p className="text-sm md:text-base font-medium text-gray-700 mt-4 tracking-wide font-sans">
            - Adam Sendler
          </p>
        </div>

      </div>
    </section>
  );
}