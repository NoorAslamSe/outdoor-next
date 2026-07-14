import Header from '../components/Header'; // Adjust if path to your Header is different
import ServiceGrid from '../components/ServiceGrid';

export default function ServicesPage() {
  return (
    <div className="w-full min-h-screen flex flex-col">
      {/* 1. Header (Stays transparent over the background hero) */}
      <Header />

      {/* 2. Services Hero Section */}
      <section 
        className="relative w-full h-[450px] md:h-[500px] bg-cover bg-center flex items-center justify-center text-center px-4"
        style={{ backgroundImage: "url('/services-bg.jpg')" }}
      >
        {/* Dark overlay to match mockup and keep header/title extremely readable */}
        <div className="absolute inset-0 bg-black/45" />

        {/* Title - Montserrat (Sized perfectly at 64px on Desktop, auto-scaling for Mobile) */}
        <h1 className="relative z-10 font-sans text-[40px] md:text-[64px] font-bold text-white tracking-tight leading-tight select-none">
          Services
        </h1>
      </section>

      {/* 3. Services Body Section Placeholder */}
      <div className="bg-[#f8f9fa] flex-grow w-full">
        {/* The service cards or descriptions will go right here in the next step */}
        <ServiceGrid />
      </div>
    </div>
  );
}