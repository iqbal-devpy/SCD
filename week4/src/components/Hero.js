import React from 'react';
import { FaFacebookSquare, FaYoutube, FaLinkedin } from 'react-icons/fa';

export default function Hero() {
  return (
    <div className='w-[40%] m-auto flex flex-col items-center'>
      <h1 className='text-blue-200 text-4xl font-serif font-bold pt-[55px]'>John Wick</h1>
      <h3 className='text-white text-[22px] font-bold font-serif pt-[15px]'>Actor and Artist</h3>
      <p className='text-white text-center font-serif pt-[15px]'>
        John Wick is a 2014 American neo-noir action thriller film directed by Chad Stahelski (in his directorial debut) from a screen play by Derek Kolstad.
      </p>
      <div className='w-[300px] pt-[20px] flex justify-between'>
        <FaFacebookSquare className='w-6 h-6' />
        <FaYoutube className='w-6 h-6' />
        <FaLinkedin className='w-6 h-6' />
      </div>
      <div className='m-auto pt-[50px]'>
        <img src="/johnwick1.jpg" alt="" className='rounded-full w-[200px] h-[200px]' />
      </div>
    </div>
  );
}
