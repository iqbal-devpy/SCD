import React from 'react';
import ImageCard from '../../components/ImageCard';

export default function ServicesPage() {
  return (
    <div className='bg-[#050522] text-white min-h-screen'>
      
      {/* Services Section */}
      <div className='py-[80px] px-[70px]'>
        <h1 className='text-4xl font-serif font-bold mb-[30px]'>Services I Offer</h1>
        <p className='text-white font-serif mb-[60px] max-w-[1200px] text-lg'>
          Legendary assassin John Wick (Keanu Reeves) retired from his violent career after marrying the love of his life. Her sudden death leaves John in deep mourning. When sadistic mobster Iosef Tarasov (Alfie Allen) and his gang steal John's prized car and kill the puppy that was a last gift from his wife, John unleashes the remorseless killing machine within and seeks vengeance. Meanwhile, Iosef's father (Michael Nyqvist) -- John's former colleague -- puts a huge bounty on John's head.
        </p>

        {/* First Row - 2 Images */}
        <div className='grid grid-cols-2 gap-8 mb-8'>
          <ImageCard src='/johnwick1.jpg' alt='John Wick Portfolio 1' />
          <ImageCard src='/johnwick2.jpg' alt='John Wick Portfolio 2' />
        </div>

        {/* Divider Line */}
        <div className='border-t border-gray-600 my-[60px]'></div>

        {/* Second Row - 2 Images */}
        <div className='grid grid-cols-2 gap-8 mb-8'>
          <ImageCard src='/johnwick3.jpg' alt='John Wick Portfolio 3' />
          <ImageCard src='/johnwick4.jpg' alt='John Wick Portfolio 4' />
        </div>

        {/* Divider Line */}
        <div className='border-t border-gray-600 my-[60px]'></div>

        {/* Third Row - 2 Images */}
        <div className='grid grid-cols-2 gap-8'>
          <ImageCard src='/johnwick5.jpg' alt='John Wick Portfolio 5' />
          <ImageCard src='/johnwick6.jpg' alt='John Wick Portfolio 6' />
        </div>
      </div>
    </div>
  );
}
