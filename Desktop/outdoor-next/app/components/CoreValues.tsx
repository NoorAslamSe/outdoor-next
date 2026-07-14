export default function CoreValues() {
  const valueItems = [
    "Locavit liberioris possedit",
    "Diremit mundi mare undae",
    "Spectent tonitrua mutastis",
  ];

  return (
    <section className="bg-[#f8f9fa] pb-20 pt-8 px-6 md:px-12 lg:px-20 w-full flex justify-center">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
        
        {/* LEFT COLUMN: Extraordinary Experiences */}
        <div className="flex flex-col items-start text-left">
          {/* Heading - Montserrat (Exact 34px size) */}
          <h2 className="font-sans text-[26px] md:text-[34px] font-bold text-gray-900 leading-tight tracking-tight mb-4">
            Extraordinary Experiences
          </h2>

          {/* Pink Underline Accent */}
          <div className="w-12 h-[3px] bg-[#FF2060] mb-6" />

          {/* Paragraphs - Noto Sans (Exact 16px size) */}
          <div className="font-noto text-[16px] leading-[26px] text-gray-600 space-y-4 max-w-[480px]">
            <p>
              Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <p>
              Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
          </div>
        </div>

        {/* RIGHT COLUMN: Our Core Values */}
        <div className="flex flex-col items-start text-left">
          {/* Heading - Montserrat (Exact 34px size) */}
          <h2 className="font-sans text-[26px] md:text-[34px] font-bold text-gray-900 leading-tight tracking-tight mb-4">
            Our Core Values
          </h2>

          {/* Pink Underline Accent */}
          <div className="w-12 h-[3px] bg-[#FF2060] mb-6" />

          {/* Top Paragraph - Noto Sans (Exact 16px size) */}
          <p className="font-noto text-[16px] leading-[26px] text-gray-600 mb-6 max-w-[480px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>

          {/* Bullet List with Pink Dash Accent */}
          <ul className="space-y-3">
            {valueItems.map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                {/* Custom pink dash bullet to match your screenshot */}
                <span className="text-[#FF2060] font-bold select-none leading-[26px]">—</span>
                <span className="font-noto text-[16px] leading-[26px] text-gray-700 font-medium">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </section>
  );
}