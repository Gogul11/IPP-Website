'use client'

import Link from 'next/link';
import React, { useState } from 'react';
import { events } from '@/utils/events';
import Navbar from '@/components/Navbar';

const Events = () => {
  const [filter, setFilter] = useState<'all' | 'tech' | 'non-tech' | 'big-show'>('all');

  const filteredEvents = filter === 'all' 
    ? events 
    : events.filter(event => event.category === filter);

  return (
    <div className="h-full w-full bg-black text-white flex flex-col items-center max-md:pt-30 p-4">
      
      <Navbar style="w-[50%] max-md:w-full fixed bottom-4 max-md:bottom-0 max-md:top-0 z-50"/>


      {/* Filter Buttons */}
      <div className="flex gap-4 mb-8 flex-wrap justify-center">
        {[
          { label: 'All Events', value: 'all' },
          { label: 'Tech Events', value: 'tech' },
          { label: 'Non-Tech Events', value: 'non-tech' },
          { label: 'Big Shows', value: 'big-show' },
        ].map(btn => (
          <button
            key={btn.value}
            onClick={() => setFilter(btn.value as any)}
            className={`px-4 py-2 rounded-lg font-semibold transition-all duration-300 ${
              filter === btn.value
                ? 'bg-white text-black'
                : 'bg-white/10 text-white hover:bg-white/20'
            }`}
          >
            {btn.label}
          </button>
        ))}
      </div>

      {/* Events Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">
        {filteredEvents.map((event, idx) => (
          <Link
            key={idx}
            className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-6 hover:scale-105 transition-transform duration-300 shadow-lg"
            href={`events/${idx}`}
          >
            <h2 className="text-2xl font-semibold mb-2">{event.name}</h2>
            <p className="text-sm text-gray-300 mb-1">
              <span className="font-medium">Time:</span>{' '}
              {`${event.date} ${event.time}`}
            </p>
            <p className="text-sm text-gray-300 mb-4">
              <span className="font-medium">Location:</span> {event.location}
            </p>
            <p className="text-gray-200">{event.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Events;
