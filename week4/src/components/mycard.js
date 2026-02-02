import React from 'react';

export default function MyCard({ icon, title, description, footer }) {
  return (
    <div className='bg-white text-black rounded-lg p-8 flex flex-col items-center'>
      <div className='mb-4'>
        {icon}
      </div>
      <h3 className='text-xl font-bold mb-4'>{title}</h3>
      <p className='text-center text-sm mb-4'>
        {description}
      </p>
      <p className='text-sm font-semibold'>{footer}</p>
    </div>
  );
}
