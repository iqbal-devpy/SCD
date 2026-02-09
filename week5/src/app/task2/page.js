'use client';

import { useState } from 'react';
import Card from '../../components/Card';

const events = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=250&fit=crop',
    title: 'Programming for everyone',
    date: 'May 12, 2021',
    location: 'Somestreet 25, 12345 San Somewhere',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=250&fit=crop',
    title: 'Networking for introverts',
    date: 'May 30, 2021',
    location: 'New Wall Street 5, 98765 New Work',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=250&fit=crop',
    title: 'Networking for extroverts',
    date: 'April 10, 2022',
    location: 'My Street 12, 10115 Brose City',

  },
];

export default function Task2Page() {
  const [selectedEvent, setSelectedEvent] = useState(null);

  const handleExplore = (event) => {
    setSelectedEvent(event);
  };

  const handleClose = () => {
    setSelectedEvent(null);
  };

  return (
    <div className='min-h-screen bg-gray-50'>
      {/* Header */}
      <div className='bg-gradient-to-r from-teal-500 to-teal-600 text-white py-8'>
        <div className='max-w-6xl mx-auto px-4'>
          <h1 className='text-4xl font-bold'>Events</h1>
        </div>
      </div>

      {/* Main Content */}
      <div className='max-w-6xl mx-auto px-4 py-12'>
        {!selectedEvent ? (
          // Events List View
          <div>
            {events.map((event) => (
              <Card
                key={event.id}
                image={event.image}
                title={event.title}
                date={event.date}
                location={event.location}
                onExplore={() => handleExplore(event)}
              />
            ))}
          </div>
        ) : (
          // Event Detail View
          <div className='max-w-2xl mx-auto'>
            {/* Back Button */}
            <button
              onClick={handleClose}
              className='mb-6 text-teal-600 hover:text-teal-700 font-semibold flex items-center gap-2'
            >
              ← Back to Events
            </button>

            {/* Header with teal background */}
            <div className='bg-gradient-to-r from-teal-500 to-teal-600 text-white py-12 px-8 rounded-t-lg'>
              <h1 className='text-4xl font-bold text-center'>
                {selectedEvent.title}
              </h1>
            </div>

            {/* Dark Card Container */}
            <div className='bg-gray-800 rounded-b-lg p-8 mb-8 shadow-xl'>
              <div className='flex gap-8 items-start'>
                {/* Circular Image */}
                <div className='flex-shrink-0'>
                  <div className='w-48 h-48 rounded-full border-4 border-teal-400 overflow-hidden'>
                    <img
                      src={selectedEvent.image}
                      alt={selectedEvent.title}
                      className='w-full h-full object-cover'
                    />
                  </div>
                </div>

                {/* Event Details */}
                <div className='flex-1 pt-4'>
                  {/* Date */}
                  <div className='mb-6'>
                    <div className='flex items-center gap-3 text-teal-400'>
                      <span className='text-2xl'>📅</span>
                      <span className='text-xl font-semibold'>{selectedEvent.date}</span>
                    </div>
                  </div>

                  {/* Location */}
                  <div>
                    <div className='flex items-center gap-3 text-teal-400'>
                      <span className='text-2xl'>📍</span>
                      <span className='text-lg'>{selectedEvent.location}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className='bg-white p-8 rounded-lg mb-8 shadow-lg'>
              <p className='text-gray-700 leading-relaxed text-center text-lg'>
                Everyone can learn to code! Yes, everyone! In this live event, we are going to go through all the key basics and get you started with programming as well.
              </p>
            </div>

            {/* Action Buttons */}
            <div className='flex gap-4 justify-center'>
              <button className='bg-teal-500 hover:bg-teal-600 text-white font-semibold py-3 px-8 rounded transition'>
                Register Event
              </button>
              <button
                onClick={handleClose}
                className='bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-3 px-8 rounded transition'
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
