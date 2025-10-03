'use client'

import { useParams, useRouter } from 'next/navigation';
import React from 'react';
import { events } from '@/utils/events';
import { CalendarDays, Clock8, Users, MapPin, IndianRupee, PhoneCall, ChevronLeft  } from 'lucide-react';

const EventPage = () => {
  
  const { eventId } = useParams();
  const event = events.find(e => e.id === eventId)
  const router = useRouter()

  return (
    <div className="h-full w-full bg-black text-white flex md:justify-center md:items-center pt-20">

      <ChevronLeft 
        className='fixed text-white top-25 left-5 bg-black/20 rounded-[50%] h-7 w-7 cursor-pointer md:h-10 md:w-10'
        onClick={() => router.back()}
      />

      <div className='flex flex-col h-[70%] w-[70%] md:flex-row max-md:h-full max-md:w-full'>        
        <div className="w-full h-[40%] md:h-full">
          <img
            src="/image.png"
            alt="event"
            className="object-cover w-full h-full md:rounded-l-4xl"
          />
        </div>

        {/* Event Details */}
        <div 
            className="w-full p-6 bg-white/10 h-[60%]  md:h-full flex flex-col gap-4 md:gap-6 md:pl-10 overflow-auto md:rounded-r-4xl"
            style={{
              boxShadow: "0px 10px 200px 50px rgba(0,0,0,0.71)"
            }}
        >
            <p className="text-2xl md:text-3xl font-bold text-center md:text-left">
                {event?.name}
            </p>
            <p className="text-base md:text-lg text-center md:text-left">
                {event?.description}
            </p>

          {/* Info Section using flex */}
            <div className="flex flex-col gap-4 mt-4">
                <div className="flex flex-col gap-3 md:w-1/2">
                  <p className="flex items-center gap-4 text-xl">
                      <CalendarDays /> {event?.date}
                  </p>
                  <p className="flex items-center gap-4 text-xl">
                      <Clock8 /> {event?.time}
                  </p>
                  <p className="flex items-center gap-4 text-xl">
                      <Users /> {event?.members} members
                  </p>
                </div>
                <div className="flex flex-col gap-3 md:w-1/2">
                  <p className="flex items-center gap-4 text-xl">
                      <MapPin /> {event?.location}
                  </p>
                  <p className="flex items-center gap-4 text-xl">
                      <IndianRupee /> {event?.prizePool}
                  </p>
                  <p className="flex items-center gap-4 text-xl">
                      <PhoneCall />
                      <span className="flex flex-col leading-tight">
                      <span>{event?.inChargeName}</span>
                      <span>{event?.inChargeNumber}</span>
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
