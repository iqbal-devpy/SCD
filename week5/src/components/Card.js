'use client';

export default function Card({ image, title, date, location, onExplore }) {
  return (
    <div className='flex gap-6 bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition mb-6'>
      {/* Image Section */}
      <div className='w-96 h-48 flex-shrink-0'>
        <img
          src={image}
          alt={title}
          className='w-full h-full object-cover'
        />
      </div>

      {/* Content Section */}
      <div className='flex-1 p-8 flex flex-col justify-between'>
        <div>
          <h2 className='text-2xl font-bold text-gray-900 mb-3'>
            {title}
          </h2>
          <p className='text-sm text-gray-600 mb-2'>
            <span className='font-semibold'>{date}</span>
          </p>
          <p className='text-sm text-gray-500'>
            {location}
          </p>
        </div>

        <button
          onClick={onExplore}
          className='mt-4 bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-6 rounded transition w-fit flex items-center gap-2'
        >
          Explore Event →
        </button>
      </div>
    </div>
  );
}
