'use client'

import { useParams } from 'next/navigation';
import React from 'react';
import { events } from '@/utils/events';
import Navbar from '@/components/Navbar';
import { CalendarDays, Clock8, Users, MapPin, IndianRupee, PhoneCall } from 'lucide-react';

const EventPage = () => {
  const params = useParams();
  const eventId = Number(params.event);

  return (
    <div className="min-h-screen w-full bg-black text-white flex flex-col items-center p-4 max-md:p-2">

      <Navbar style="w-[50%] max-md:w-full fixed bottom-4 max-md:bottom-0 max-md:top-0" />

      {/* Event Card */}
      <div className="flex flex-col md:flex-row w-[70%] max-md:w-full  bg-white/10 rounded-2xl overflow-hidden mt-24 md:mt-16 shadow-lg">
        
        {/* Image */}
        <div className="w-full md:w-1/2 h-64 md:h-auto">
          <img
            src="https://placehold.co/600x400"
            alt="event"
            className="object-cover w-full h-full"
          />
        </div>

        {/* Event Details */}
        <div className="w-full md:w-1/2 flex flex-col gap-6 p-6 justify-center">
            <h2 className="text-2xl md:text-3xl font-bold text-center md:text-left">
                {events[eventId].name}
            </h2>
            <p className="text-base md:text-lg text-center md:text-left">
                {events[eventId].description}
            </p>

          {/* Info Section using flex */}
            <div className="flex flex-row max-md:flex-col gap-4 mt-4">
                <div className="flex flex-col gap-3 md:w-1/2">
                <p className="flex items-center gap-3">
                    <CalendarDays /> {events[eventId].date}
                </p>
                <p className="flex items-center gap-3">
                    <Clock8 /> {events[eventId].time}
                </p>
                <p className="flex items-center gap-3">
                    <Users /> {events[eventId].members} members
                </p>
                </div>
                <div className="flex flex-col gap-3 md:w-1/2">
                <p className="flex items-center gap-3">
                    <MapPin /> {events[eventId].location}
                </p>
                <p className="flex items-center gap-3">
                    <IndianRupee /> {events[eventId].prizePool}
                </p>
                <p className="flex items-start gap-3">
                    <PhoneCall />
                    <span className="flex flex-col leading-tight">
                    <span>{events[eventId].inChargeName}</span>
                    <span>{events[eventId].inChargeNumber}</span>
                    </span>
                </p>
                </div>
            </div>

        </div>
      </div>
    </div>
  );
};

export default EventPage;
