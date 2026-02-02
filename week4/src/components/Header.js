import React from 'react';
import Link from 'next/link';

export default function Header() {
  return (
    <div className='flex justify-between py-[10px] px-[70px]'>
      <p className='text-[20px]'>Next Js</p>
      <div className='flex gap-4'>
        <Link href="/services">
          <button className='bg-green-500 px-[40px] py-[8px] rounded-[100px] hover:bg-red-600'>Services</button>
        </Link>
        <button className='bg-blue-400 px-[50px] rounded-[100px] hover:bg-red-600'>CV</button>
      </div>
    </div>
  );
}
