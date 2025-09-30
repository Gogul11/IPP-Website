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
    <div className="h-full w-full bg-black text-white flex flex-col items-center max-md:pb-30 p-4">
      
      
      <Navbar style="w-[50%] max-md:w-full fixed bottom-4 max-md:bottom-0 z-50"/>

      {/* Filter Buttons */}
      <div className="flex gap-4 mb-8 flex-wrap justify-center ">
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

      <div className="w-full flex flex-wrap justify-center max-w-5xl gap-8 pb-32">
        {filteredEvents.map((event) => (
          <Link
            key={event.id}
            href={`events/${event.id}`}
            className="group relative flex flex-col items-center bg-white/10 rounded-2xl border border-white/20 p-6 shadow-lg w-full sm:w-[48%] lg:w-[30%] hover:shadow-2xl transition-shadow duration-300"
          >
            {/* Event Image */}
            <img
              src="/image.png"
              alt={event.name}
              className="h-56 w-56 object-cover"
            />

            {/* Event Name */}
            <h2 className="mt-4 text-2xl font-bold text-white text-center group-hover:text-blue-300 transition-colors duration-300">
              {event.name}
            </h2>

            {/* Optional: Date & Location */}
            <p className="mt-2 text-sm text-gray-300 text-center">
              {event.date} • {event.time}
            </p>
            <p className="text-sm text-gray-300 text-center">{event.location}</p>
          </Link>
        ))}
      </div>




    </div>
  );
};

export default Events;
