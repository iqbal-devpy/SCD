import React from 'react';
import MyCard from './mycard';

export default function ServicesSection() {
  return (
    <div className='bg-[#050522] text-white py-[80px] px-[70px] border-t border-gray-700'>
      <h2 className='text-3xl font-serif font-bold mb-[40px]'>Services I Offer</h2>
      <p className='text-white font-serif mb-[60px] text-left max-w-[1100px]'>
        Legendary assassin John Wick (Keanu Reeves) retired from his violent career after marrying the love of his life. Her sudden death leaves John in deep mourning. When sadistic mobster Iosef Tarasov (Alfie Allen) and his gang steal John's prized car and kill the puppy that was a last gift from his wife, John unleashes the remorseless killing machine within and seeks vengeance. Meanwhile, Iosef's father (Michael Nyqvist) -- John's former colleague -- puts a huge bounty on John's head.
      </p>

      <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
        {/* Card 1 */}
        <MyCard 
          icon={<svg className='w-12 h-12' viewBox="0 0 24 24" fill="currentColor"><path d="M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z"/></svg>}
          title="Dummy Text"
          description="Lorem ipsum dolor sit amet consectetur adipiscing elit. Delenut suscipit iure corpors temporibus ipsa exercitationem rscunat impsdrit modi, est quae harum eaque cumque provident sit maiores enim corrupti aspernatur dolores."
          footer="Dummy text"
        />

        {/* Card 2 */}
        <MyCard 
          icon={<svg className='w-12 h-12' viewBox="0 0 24 24" fill="currentColor"><path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z"/></svg>}
          title="Dummy Text"
          description="Lorem ipsum dolor sit amet consectetur adipiscing elit. Delenut suscipit iure corpors temporibus ipsa exercitationem rscunat impsdrit modi, est quae harum eaque cumque provident sit maiores enim corrupti aspernatur dolores."
          footer="Dummy text"
        />

        {/* Card 3 */}
        <MyCard 
          icon={<svg className='w-12 h-12' viewBox="0 0 24 24" fill="currentColor"><path d="M19.14,12.94c0.04-0.3,0.06-0.61,0.06-0.94c0-0.32-0.02-0.64-0.07-0.94l2.03-1.58c0.18-0.14,0.23-0.41,0.12-0.61l-1.92-3.32c-0.12-0.22-0.37-0.29-0.59-0.22l-2.39,0.96c-0.5-0.38-1.03-0.7-1.62-0.94L14.4,2.81c-0.04-0.24-0.24-0.41-0.48-0.41h-3.84c-0.24,0-0.43,0.17-0.47,0.41L9.25,5.35C8.66,5.59,8.12,5.92,7.63,6.29L5.24,5.33c-0.22-0.08-0.47,0-0.59,0.22L2.74,8.87C2.62,9.08,2.66,9.34,2.86,9.48l2.03,1.58C4.84,11.36,4.8,11.69,4.8,12s0.02,0.64,0.07,0.94l-2.03,1.58c-0.18,0.14-0.23,0.41-0.12,0.61l1.92,3.32c0.12,0.22,0.37,0.29,0.59,0.22l2.39-0.96c0.5,0.38,1.03,0.7,1.62,0.94l0.36,2.54c0.05,0.24,0.24,0.41,0.48,0.41h3.84c0.24,0,0.44-0.17,0.47-0.41l0.36-2.54c0.59-0.24,1.13-0.56,1.62-0.94l2.39,0.96c0.22,0.08,0.47,0,0.59-0.22l1.92-3.32c0.12-0.22,0.07-0.47-0.12-0.61L19.14,12.94z M12,15.6c-1.98,0-3.6-1.62-3.6-3.6s1.62-3.6,3.6-3.6s3.6,1.62,3.6,3.6S13.98,15.6,12,15.6z"/></svg>}
          title="Dummy Text"
          description="Lorem ipsum dolor sit amet consectetur adipiscing elit. Delenut suscipit iure corpors temporibus ipsa exercitationem rscunat impsdrit modi, est quae harum eaque cumque provident sit maiores enim corrupti aspernatur dolores."
          footer="Dummy text"
        />
      </div>
    </div>
  );
}
