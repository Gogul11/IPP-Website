import React from "react";
import Navbar from "@/components/Navbar";
import { aboutUsContent } from "@/utils/aboutusContent";

const AboutUs = () => {
  return (
    <div className="h-full w-full bg-black text-white flex flex-col items-center p-6 gap-5 ">
    	<Navbar style="w-[50%] max-md:w-full fixed bottom-4 max-md:bottom-0 z-50"/>

		<div className="flex  w-[80%] gap-8 items-center justify-center p-4 max-md:flex-col">
			<div className="w-[50%]  flex justify-center max-md:w-full">
				<img src="/image.png" className="h-100 w-100" alt="ISTA image" />
			</div>

			<div className="w-[50%] flex flex-col gap-8 justify-center items-center max-md:w-full ">
				<p
					className="lg:text-4xl underline font-bold md:text-3xl text-2xl"
				>ISTA</p>
				<p
					className="lg:text-xl text-center md:text-lg text-md"
				>{aboutUsContent.content1} 
					<a
						href="https://istaceg.in/"
						target="_blank"
						className="text-blue-500 mx-2 cursor-pointer"
					>Visit ISTA</a>
				</p>
			</div>
		</div>
		<hr className="text-white w-[80%]" color="white"/>
		<div className=" w-[80%] flex flex-row-reverse gap-8 items-center justify-center  pb-32 max-md:flex-col">
			<div className="w-[50%]  flex justify-center max-md:w-full">
				<img src="/image.png" className="h-100 w-100" alt="I++ image" />
			</div>

			<div className="w-[50%] flex flex-col gap-8 justify-center items-center max-md:w-full ">
				<p
					className="lg:text-4xl underline font-bold md:text-3xl text-2xl"
				>I++</p>
				<p
					className="lg:text-xl text-center md:text-lg text-md"
				>{aboutUsContent.content2}</p>
			</div>
		</div>
		
	</div>
  );
};

export default AboutUs;
