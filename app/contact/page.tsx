import React from 'react';
import Navbar from '@/components/Navbar';
import Scene from '@/components/Scene';
import { PhoneCall } from 'lucide-react';
import { members } from '@/utils/contact';

const Contact = () => {
    return (
    	<div className="h-full w-full flex items-center bg-black text-white max-md:flex-col ">
            <div className='flex justify-center w-full max-md:w-full fixed bottom-4 max-md:bottom-0 z-50'>
        	    <Navbar style="w-[50%] max-md:w-full fixed bottom-4 max-md:bottom-0 z-50"/>
            </div>
    		<div className="h-full w-[50%] flex justify-center items-center max-md:w-full max-md:h-[50%]">
			    <div>
				    <Scene/>
			    </div>
		    </div>
            <div className='w-[80%] h-full flex flex-col p-4 justify-center items-center gap-4'>
                <p
                    className='text-4xl font-bold'
                >Contact Us</p>

                <p className='font-medium text-xl'>"Join the loop. Be part of infinity."</p>

                <div className='flex flex-col gap-8 w-full items-center pb-32'>
                    {members.map((item, idx) => (
                        <div 
                            key={idx}
                            className='border border-white/20 bg-white/20 shadow p-4 space-y-2 rounded-2xl w-[50%] max-sm:w-full max-md:w-[80%]'
                            style={{
                                boxShadow : "0px 0px 20px 20px rgba(0, 0, 0, 0.1) inset"
                            }}
                        >
                            <p>{item.name}</p>
                            <p>{item.post}</p>
                            <p className='flex items-center gap-4'>
                                <PhoneCall />
                                {item.number}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Contact;
