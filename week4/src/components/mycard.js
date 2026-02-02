import React from 'react';

export default function MyCard({ icon, title, description, footer }) {
  return (
    <div className='bg-white text-black rounded-lg p-4 md:p-6 lg:p-8 flex flex-col items-center hover:shadow-lg transition-shadow h-full'>
      <div className='mb-3 md:mb-4'>
        <div className='w-10 md:w-12 h-10 md:h-12'>
          {icon}
        </div>
      </div>
      <h3 className='text-lg md:text-xl font-bold mb-3 md:mb-4 text-center'>{title}</h3>
      <p className='text-center text-xs md:text-sm mb-3 md:mb-4 flex-grow'>
        {description}
      </p>
      <p className='text-xs md:text-sm font-semibold'>{footer}</p>
    </div>
  );
}
