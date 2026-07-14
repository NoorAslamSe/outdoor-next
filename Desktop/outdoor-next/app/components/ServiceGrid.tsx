import Image from 'next/image';

interface ServiceItem {
  imageSrc: string;
  title: string;
  description: string;
}

export default function ServiceGrid() {
  const services: ServiceItem[] = [
    {
      imageSrc: '/service-1.jpg',
      title: 'Backpacking Trips',
      description: 'Fuerat aestu carentem habentia spectent tonitrua mutastis locavit liberioris inistra possedit.'
    },
    {
      imageSrc: '/service-2.jpg',
      title: 'Family Hiking Trips',
      description: 'Fuerat aestu carentem habentia spectent tonitrua mutastis locavit liberioris inistra possedit.'
    },
    {
      imageSrc: '/service-3.jpg',
      title: 'Water Sports',
      description: 'Fuerat aestu carentem habentia spectent tonitrua mutastis locavit liberioris inistra possedit.'
    },
    {
      imageSrc: '/service-4.jpg',
      title: 'Winter Sports',
      description: 'Fuerat aestu carentem habentia spectent tonitrua mutastis locavit liberioris inistra possedit.'
    }
  ];

  return (
    <section className="bg-[#f8f9fa] py-20 px-6 md:px-12 lg:px-20 w-full flex flex-col items-center">
      <div className="max-w-5xl w-full text-center mb-16 flex flex-col items-center">
        {/* Main Section Heading - Montserrat (Exact 34px size) */}
        <h2 className="font-sans text-[28px] md:text-[34px] font-bold text-gray-900 leading-tight tracking-tight mb-4">
          It's Time to Start Your Adventures
        </h2>

        {/* Center Pink Underline Accent */}
        <div className="w-16 h-[3px] bg-[#FF2060] mb-6" />

        {/* Section Subtitle - Noto Sans (Exact 16px size) */}
        <p className="font-noto text-[16px] leading-[26px] text-gray-600 max-w-[680px]">
          Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus ullamcorper pulvinar.
        </p>
      </div>

      {/* Grid: 1 column on mobile, 2 columns on tablet (sm/md) & desktop (lg) */}
      <div className="max-w-5xl w-full grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-16">
        {services.map((service, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            
            {/* Image Wrapper with matching bottom-right shadow displacement effect */}
            <div className="relative w-full aspect-[4/3] rounded-md overflow-hidden shadow-[12px_12px_0px_0px_rgba(230,230,230,0.8)] mb-6 transition-all duration-300 hover:shadow-[6px_6px_0px_0px_rgba(230,230,230,0.9)]">
              <Image 
                src={service.imageSrc} 
                alt={service.title} 
                fill 
                className="object-cover"
                priority={index < 2}
              />
            </div>

            {/* Service Title - Montserrat */}
            <h3 className="font-sans text-[20px] font-bold text-gray-900 mb-2 mt-2">
              {service.title}
            </h3>

            {/* Service Description - Noto Sans (Exact 16px size) */}
            <p className="font-noto text-[16px] leading-[26px] text-gray-500 max-w-[380px]">
              {service.description}
            </p>

          </div>
        ))}
      </div>
    </section>
  );
}