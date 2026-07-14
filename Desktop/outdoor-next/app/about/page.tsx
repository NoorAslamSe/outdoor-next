import Header from '../components/Header'; // Adjust path if your Header is named differently

export default function AboutPage() {
  return (
    <div className="w-full min-h-screen flex flex-col">
      {/* 1. Header (Stays transparent over the background hero) */}
      <Header />

      {/* 2. Inner Hero Section */}
      <section 
        className="relative w-full h-[450px] md:h-[500px] bg-cover bg-center flex items-center justify-center text-center px-4"
        style={{ backgroundImage: "url('/about-bg.jpg')" }}
      >
        {/* Dark overlay to match the mockup styling and keep text readable */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Heading - Montserrat (Exact 64px on Desktop, scaling down beautifully on Mobile) */}
        <h1 className="relative z-10 font-sans text-[40px] md:text-[64px] font-bold text-white tracking-tight leading-tight select-none">
          Who We Are?
        </h1>
      </section>

      {/* 3. Empty Content Section Placeholder (Ready for the next sections) */}
      <div className="bg-[#f8f9fa] flex-grow w-full py-12">
        {/* Your upcoming about body text sections will go here */}
      </div>
    </div>
  );
}