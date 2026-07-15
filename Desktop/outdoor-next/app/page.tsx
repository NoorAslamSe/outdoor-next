import Header from './components/Header';
import Hero from './components/Hero';
import Testimonial from './components/Testimonial';
import UpcomingEvents from './components/UpcomingEvents';
import ExploreWorld from './components/ExploreWorld';
import UpcomingTours from './components/UpcomingTours';
import TourCarousel from './components/TourCarousel';

export default function Home() {
  return (
    <main className="relative min-h-screen w-full bg-black">
      {/* 1. This shows your new header at the top of the page */}
      <Header />
      
      {/* 2. This shows your background image and middle text */}
      <Hero />
      <TourCarousel/>
      <Testimonial />
      <UpcomingEvents />
      <ExploreWorld />
      <UpcomingTours />
    </main>
  );
}