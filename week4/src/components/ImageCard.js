import React from 'react';

export default function ImageCard({ src, alt }) {
  return (
    <div className='relative h-[200px] md:h-[280px] lg:h-[350px] overflow-hidden rounded-lg'>
      <img 
        src={src} 
        alt={alt}
        className='w-full h-full object-cover hover:scale-110 transition-transform duration-300'
      />
    </div>
  );
}
