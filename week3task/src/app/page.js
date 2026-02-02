import React from 'react';
import { FaFacebookSquare, FaYoutube, FaLinkedin } from 'react-icons/fa';

function Page() {
  return (
    <div className='bg-[#050522]  text-white min-h-screen'>
      {/* Section 1 Starts */}
      <div className='flex justify-between py-[10px] px-[70px]'>
        <p className='text-[20px] '>Next Js</p>
        <div className='flex gap-4'>
          {/* <Link href="/services">
            <button className='bg-purple-500 px-[40px] py-[8px] rounded-[100px] hover:bg-purple-600'>Services</button>
          </Link> */}
          <button className='bg-blue-400 px-[50px] rounded-[100px]'>CV</button>
        </div>
      </div>
      {/* Section 2 Starts */}

      <div className='w-[40%] m-auto flex flex-col items-center '>
        <h1 className=' text-blue-200 text-4xl font-serif font-bold  pt-[55px] '>John Wick</h1>
        <h3 className='text-white text-[22px] font-bold font-serif pt-[15px]'>Actor and Artist</h3>
        <p className='text-white text-center font-serif pt-[15px]'>John Wick is a 2014 American neo-noir action thriller film directed by Chad Stahelski (in his directorial debut) from a screen play by Derek Kolstad.</p>
        <div className='w-[300px] pt-[20px] flex justify-between'>
          <FaFacebookSquare className='w-6 h-6' />
          <FaYoutube className='w-6 h-6' />
          <FaLinkedin className='w-6 h-6' />
        </div>
        <div className='m-auto pt-[50px]'>
          <img src="/johnwick1.jpg" alt="" className='rounded-full w-[200px] h-[200px] ' />
        </div>
      </div>

      {/* Services Section */}
      <div className='bg-[#050522] text-white py-[80px] px-[70px] border-t border-gray-700'>
        <h2 className='text-3xl font-serif font-bold mb-[40px]'>Services I Offer</h2>
        <p className='text-white font-serif mb-[60px] text-left max-w-[1100px]'>
          Legendary assassin John Wick (Keanu Reeves) retired from his violent career after marrying the love of his life. Her sudden death leaves John in deep mourning. When sadistic mobster Iosef Tarasov (Alfie Allen) and his gang steal John's prized car and kill the puppy that was a last gift from his wife, John unleashes the remorseless killing machine within and seeks vengeance. Meanwhile, Iosef's father (Michael Nyqvist) -- John's former colleague -- puts a huge bounty on John's head.
        </p>

        {/* Cards Section */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
          {/* Card 1 */}
          <div className='bg-white text-black rounded-lg p-8 flex flex-col items-center'>
            <div className='mb-4'>
              <svg className='w-12 h-12' viewBox="0 0 24 24" fill="currentColor">
                <path d="M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z" />
              </svg>
            </div>
            <h3 className='text-xl font-bold mb-4'>Dummy Text</h3>
            <p className='text-center text-sm mb-4'>
              Lorem ipsum dolor sit amet consectetur adipiscing elit. Delenut suscipit iure corpors temporibus ipsa exercitationem rscunat impsdrit modi, est quae harum eaque cumque provident sit maiores enim corrupti aspernatur dolores.
            </p>
            <p className='text-sm font-semibold'>Dummy text</p>
          </div>

          {/* Card 2 */}
          <div className='bg-white text-black rounded-lg p-8 flex flex-col items-center'>
            <div className='mb-4'>
              <svg className='w-12 h-12' viewBox="0 0 24 24" fill="currentColor">
                <path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z" />
              </svg>
            </div>
            <h3 className='text-xl font-bold mb-4'>Dummy Text</h3>
            <p className='text-center text-sm mb-4'>
              Lorem ipsum dolor sit amet consectetur adipiscing elit. Delenut suscipit iure corpors temporibus ipsa exercitationem rscunat impsdrit modi, est quae harum eaque cumque provident sit maiores enim corrupti aspernatur dolores.
            </p>
            <p className='text-sm font-semibold'>Dummy text</p>
          </div>

          {/* Card 3 */}
          <div className='bg-white text-black rounded-lg p-8 flex flex-col items-center'>
            <div className='mb-4'>
              <svg className='w-12 h-12' viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.14,12.94c0.04-0.3,0.06-0.61,0.06-0.94c0-0.32-0.02-0.64-0.07-0.94l2.03-1.58c0.18-0.14,0.23-0.41,0.12-0.61 l-1.92-3.32c-0.12-0.22-0.37-0.29-0.59-0.22l-2.39,0.96c-0.5-0.38-1.03-0.7-1.62-0.94L14.4,2.81c-0.04-0.24-0.24-0.41-0.48-0.41 h-3.84c-0.24,0-0.43,0.17-0.47,0.41L9.25,5.35C8.66,5.59,8.12,5.92,7.63,6.29L5.24,5.33c-0.22-0.08-0.47,0-0.59,0.22L2.74,8.87 C2.62,9.08,2.66,9.34,2.86,9.48l2.03,1.58C4.84,11.36,4.8,11.69,4.8,12s0.02,0.64,0.07,0.94l-2.03,1.58 c-0.18,0.14-0.23,0.41-0.12,0.61l1.92,3.32c0.12,0.22,0.37,0.29,0.59,0.22l2.39-0.96c0.5,0.38,1.03,0.7,1.62,0.94l0.36,2.54 c0.05,0.24,0.24,0.41,0.48,0.41h3.84c0.24,0,0.44-0.17,0.47-0.41l0.36-2.54c0.59-0.24,1.13-0.56,1.62-0.94l2.39,0.96 c0.22,0.08,0.47,0,0.59-0.22l1.92-3.32c0.12-0.22,0.07-0.47-0.12-0.61L19.14,12.94z M12,15.6c-1.98,0-3.6-1.62-3.6-3.6 s1.62-3.6,3.6-3.6s3.6,1.62,3.6,3.6S13.98,15.6,12,15.6z" />
              </svg>
            </div>
            <h3 className='text-xl font-bold mb-4'>Dummy Text</h3>
            <p className='text-center text-sm mb-4'>
              Lorem ipsum dolor sit amet consectetur adipiscing elit. Delenut suscipit iure corpors temporibus ipsa exercitationem rscunat impsdrit modi, est quae harum eaque cumque provident sit maiores enim corrupti aspernatur dolores.
            </p>
            <p className='text-sm font-semibold'>Dummy text</p>
          </div>
        </div>
      </div>

      {/* Portfolio Section */}
      <div className='bg-[#050522] text-white min-h-screen'>

        {/* Services Section */}
        <div className='py-[80px] px-[70px]'>
          <h1 className='text-4xl font-serif font-bold mb-[30px]'>Services I Offer</h1>
          <p className='text-white font-serif mb-[60px] max-w-[1200px] text-lg'>
            Legendary assassin John Wick (Keanu Reeves) retired from his violent career after marrying the love of his life. Her sudden death leaves John in deep mourning. When sadistic mobster Iosef Tarasov (Alfie Allen) and his gang steal John's prized car and kill the puppy that was a last gift from his wife, John unleashes the remorseless killing machine within and seeks vengeance. Meanwhile, Iosef's father (Michael Nyqvist) -- John's former colleague -- puts a huge bounty on John's head.
          </p>

          {/* First Row - 2 Images */}
          <div className='grid grid-cols-2 gap-8 mb-8'>
            <div className='relative h-[350px] overflow-hidden rounded-lg'>
              <img
                src='/johnwick1.jpg'
                alt='John Wick Portfolio 1'
                className='w-full h-full object-cover hover:scale-110 transition-transform duration-300'
              />
            </div>
            <div className='relative h-[350px] overflow-hidden rounded-lg'>
              <img
                src='/johnwick2.jpg'
                alt='John Wick Portfolio 2'
                className='w-full h-full object-cover hover:scale-110 transition-transform duration-300'
              />
            </div>
          </div>

          {/* Divider Line */}
          {/* <div className='border-t border-gray-600 my-[60px]'></div> */}

          {/* Second Row - 2 Images */}
          <div className='grid grid-cols-2 gap-8 mb-8'>
            <div className='relative h-[350px] overflow-hidden rounded-lg'>
              <img
                src='/johnwick3.jpg'
                alt='John Wick Portfolio 3'
                className='w-full h-full object-cover hover:scale-110 transition-transform duration-300'
              />
            </div>
            <div className='relative h-[350px] overflow-hidden rounded-lg'>
              <img
                src='/johnwick4.jpg'
                alt='John Wick Portfolio 4'
                className='w-full h-full object-cover hover:scale-110 transition-transform duration-300'
              />
            </div>
          </div>

          {/* Divider Line */}
          {/* <div className='border-t border-gray-600 my-[60px]'></div> */}

          {/* Third Row - 2 Images */}
          <div className='grid grid-cols-2 gap-8'>
            <div className='relative h-[350px] overflow-hidden rounded-lg'>
              <img
                src='/johnwick5.jpg'
                alt='John Wick Portfolio 5'
                className='w-full h-full object-cover hover:scale-110 transition-transform duration-300'
              />
            </div>
            <div className='relative h-[350px] overflow-hidden rounded-lg'>
              <img
                src='/johnwick6.jpg'
                alt='John Wick Portfolio 6'
                className='w-full h-full object-cover hover:scale-110 transition-transform duration-300'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Page;