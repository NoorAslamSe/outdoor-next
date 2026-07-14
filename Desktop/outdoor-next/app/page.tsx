import Header from './components/Header';
import Hero from './components/Hero';
import Testimonial from './components/Testimonial';
import UpcomingEvents from './components/UpcomingEvents';

export default function Home() {
  return (
    <main className="relative min-h-screen w-full bg-black">
      {/* 1. This shows your new header at the top of the page */}
      <Header />
      
      {/* 2. This shows your background image and middle text */}
      <Hero />
      <Testimonial />
      <UpcomingEvents />
    </main>
  );
}