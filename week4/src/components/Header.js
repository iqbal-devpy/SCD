import React from 'react';
import Link from 'next/link';

export default function Header() {
  return (
    <div className='flex justify-between items-center py-[10px] px-[20px] md:px-[40px] lg:px-[70px]'>
      <p className='text-[16px] md:text-[20px]'>Next Js</p>
      <div className='flex gap-2 md:gap-4'>
        <Link href="/services">
          <button className='bg-green-500 px-[20px] md:px-[40px] py-[6px] md:py-[8px] text-sm md:text-base rounded-[100px] hover:bg-red-600 transition-colors'>Services</button>
        </Link>
        <button className='bg-blue-400 px-[25px] md:px-[50px] py-[6px] md:py-[8px] text-sm md:text-base rounded-[100px] hover:bg-red-600 transition-colors'>CV</button>
      </div>
    </div>
  );
}
