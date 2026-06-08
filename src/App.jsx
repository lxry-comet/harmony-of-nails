import React from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import ServicesGrid from './components/ServicesGrid.jsx';
import PromoPackages from './components/PromoPackages.jsx';
import WhyChooseUs from './components/WhyChooseUs.jsx';
import Portfolio from './components/Portfolio.jsx';
import Testimonials from './components/Testimonials.jsx';
import MapAndPromo from './components/MapAndPromo.jsx';
import BookingForm from './components/BookingForm.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      {/* <ServicesGrid /> */}
      <PromoPackages />
      <WhyChooseUs />
      <Portfolio />
      <Testimonials />
      {/* <MapAndPromo /> */}
      {/* <BookingForm /> */}
      <Footer />
    </>
  );
}