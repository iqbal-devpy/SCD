import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import ServicesSection from '../components/ServicesSection';

function Page() {
  return (
    <div className='bg-[#050522] text-white min-h-screen'>
      <Header />
      <Hero />
      <ServicesSection />
    </div>
  );
}
export default Page;