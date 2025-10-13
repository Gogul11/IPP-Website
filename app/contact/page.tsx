import React from 'react';
import Navbar from '@/components/Navbar';
import { PhoneCall, Instagram, Linkedin, Mail } from 'lucide-react';
import { members } from '@/utils/contact';

const Contact = () => {
    return (
    	<div className="h-full w-full flex items-center bg-black text-white max-md:flex-col pt-25 max-md:pt-25">
            <div className='flex justify-center w-full max-md:w-full fixed bottom-4 max-md:bottom-0 z-50'>
        	    <Navbar style="w-[50%] max-md:w-full fixed bottom-4 max-md:bottom-0 z-50"/>
            </div>
    		
            <div className='w-full h-full flex flex-col p-4 justify-center items-center gap-4 max-md:mt-20'>
                <p
                    className='text-4xl font-bold underline'
                >Contact Us</p>

                <p className='font-medium text-xl'>{`"Join the loop. Be part of infinity."`}</p>

                <div className='flex flex-col gap-8 w-full items-center'>
                    {members.map((item, idx) => (
                        <div 
                            key={idx}
                            className='border border-white/20 bg-white/20 shadow p-4 space-y-2 rounded-2xl w-[40%] max-sm:w-full max-md:w-[80%]'
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

                <div className='flex flex-col w-full items-center justify-center gap-8 pb-32 my-8'>
                    <div className='flex gap-8 '>
                        <a
                            className='cursor-pointer border box-content p-2 rounded-2xl bg-white/20'
                            href="https://www.instagram.com/ista__ceg/"
                            target='_blank'
                        >
                            <Instagram size={35} />
                        </a>
                         <a
                            className='cursor-pointer border box-content p-2 rounded-2xl bg-white/20'
                            href="https://www.linkedin.com/company/ista-ceg/mycompany/"
                            target='_blank'
                        >
                            <Linkedin size={35}/>
                        </a>
                        <a
                            className='cursor-pointer border box-content p-2 rounded-2xl bg-white/20'
                            href="mailto:ista@auist.in"
                            target='_blank'
                        >
                            <Mail size={35}/>
                        </a>
                    </div>
                    <p className='font-serif text-md'>Designed and developed by ISTA Web Team</p>
                </div>
            </div>

        </div>
    );
}

export default Contact;
