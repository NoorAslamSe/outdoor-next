export default function ServiceDetails() {
  const whyItems = [
    { label: "Experience", text: "Locavit liberioris possedit" },
    { label: "Reputation", text: "Diremit mundi mare undae" },
    { label: "Guide Experience", text: "Spectent tonitrua mutastis" },
  ];

  const whatItems = [
    { label: "Private Hike", text: "Locavit liberioris possedit" },
    { label: "Transportation", text: "Diremit mundi mare undae" },
    { label: "Great Facilities", text: "Spectent tonitrua mutastis" },
  ];

  return (
    <section className="bg-[#f8f9fa] pb-24 pt-4 px-6 md:px-12 lg:px-20 w-full flex justify-center">
      <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
        
        {/* LEFT COLUMN: Why Outdoor Adventure */}
        <div className="flex flex-col items-start text-left">
          {/* Heading - Montserrat (Exact 34px size) */}
          <h2 className="font-sans text-[26px] md:text-[34px] font-bold text-gray-900 leading-tight tracking-tight mb-4">
            Why Outdoor Adventure
          </h2>

          {/* Pink Underline Accent */}
          <div className="w-12 h-[3px] bg-[#FF2060] mb-6" />

          {/* Top Paragraph - Noto Sans (Exact 16px size) */}
          <p className="font-noto text-[16px] leading-[26px] text-gray-600 mb-8 max-w-[480px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>

          {/* Bullet List with Pink Dash Accent */}
          <ul className="space-y-4">
            {whyItems.map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                {/* Custom pink dash bullet */}
                <span className="text-[#FF2060] font-bold select-none leading-[26px]">—</span>
                <span className="font-noto text-[16px] leading-[26px] text-gray-700">
                  <strong className="font-semibold text-gray-950">{item.label}:</strong> {item.text}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* RIGHT COLUMN: What You Get */}
        <div className="flex flex-col items-start text-left">
          {/* Heading - Montserrat (Exact 34px size) */}
          <h2 className="font-sans text-[26px] md:text-[34px] font-bold text-gray-900 leading-tight tracking-tight mb-4">
            What You Get
          </h2>

          {/* Pink Underline Accent */}
          <div className="w-12 h-[3px] bg-[#FF2060] mb-6" />

          {/* Top Paragraph - Noto Sans (Exact 16px size) */}
          <p className="font-noto text-[16px] leading-[26px] text-gray-600 mb-8 max-w-[480px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>

          {/* Bullet List with Pink Dash Accent */}
          <ul className="space-y-4">
            {whatItems.map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                {/* Custom pink dash bullet */}
                <span className="text-[#FF2060] font-bold select-none leading-[26px]">—</span>
                <span className="font-noto text-[16px] leading-[26px] text-gray-700">
                  <strong className="font-semibold text-gray-950">{item.label}:</strong> {item.text}
                </span>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </section>
  );
}