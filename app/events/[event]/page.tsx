'use client'

import { useParams, useRouter } from 'next/navigation';
import React from 'react';
import { events } from '@/utils/events';
import { CalendarDays, Clock8, Users, MapPin, IndianRupee, PhoneCall, ChevronLeft  } from 'lucide-react';

const EventPage = () => {
  const params = useParams();
  const eventId = Number(params.event);
  const router = useRouter()
  return (
    <div className="h-full w-full bg-black text-white">

      <ChevronLeft 
        className='fixed text-white top-5 left-5 bg-black/20 rounded-[50%] h-7 w-7 cursor-pointer md:h-10 md:w-10'
        onClick={() => router.back()}
      />

      <div className='flex flex-col h-full w-full md:flex-row'>        
        <div className="w-full h-[40%] md:h-full">
          <img
            src="/image.png"
            alt="event"
            className="object-cover w-full h-full"
          />
        </div>

        {/* Event Details */}
        <div 
            className="w-full p-6 bg-white/10 h-[60%] max-md:rounded-t-4xl md:h-full flex flex-col gap-4 md:gap-6 md:pl-10 overflow-auto"
            style={{
              boxShadow: "0px 10px 200px 50px rgba(0,0,0,0.71)"
            }}
        >
            <h2 className="text-2xl md:text-3xl font-bold text-center md:text-left">
                {events[eventId].name}
            </h2>
            <p className="text-base md:text-lg text-center md:text-left">
                {events[eventId].description}
            </p>

          {/* Info Section using flex */}
            <div className="flex flex-col gap-4 mt-4">
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
