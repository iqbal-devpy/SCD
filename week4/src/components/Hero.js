import React from 'react';
import { FaFacebookSquare, FaYoutube, FaLinkedin } from 'react-icons/fa';

export default function Hero() {
  return (
    <div className='w-full md:w-[60%] lg:w-[50%] m-auto flex flex-col items-center px-[20px]'>
      <h1 className='text-blue-200 text-2xl md:text-3xl lg:text-4xl font-serif font-bold pt-[40px] md:pt-[55px] text-center'>John Wick</h1>
      <h3 className='text-white text-[18px] md:text-[22px] font-bold font-serif pt-[15px]'>Actor and Artist</h3>
      <p className='text-white text-center font-serif pt-[15px] text-sm md:text-base'>
        John Wick is a 2014 American neo-noir action thriller film directed by Chad Stahelski (in his directorial debut) from a screen play by Derek Kolstad.
      </p>
      <div className='w-[200px] md:w-[250px] pt-[20px] flex justify-between'>
        <FaFacebookSquare className='w-5 md:w-6 h-5 md:h-6 hover:text-blue-500 transition-colors cursor-pointer' />
        <FaYoutube className='w-5 md:w-6 h-5 md:h-6 hover:text-red-600 transition-colors cursor-pointer' />
        <FaLinkedin className='w-5 md:w-6 h-5 md:h-6 hover:text-blue-600 transition-colors cursor-pointer' />
      </div>
      <div className='m-auto pt-[40px] md:pt-[50px]'>
        <img src="/johnwick1.jpg" alt="John Wick" className='rounded-full w-[140px] md:w-[180px] lg:w-[200px] h-[140px] md:h-[180px] lg:h-[200px] object-cover' />
      </div>
    </div>
  );
}
