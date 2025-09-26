import Navbar from "@/components/Navbar";
import React from "react";

const Page = () => {
  return (
    <div className="h-full w-full flex items-center bg-black text-white max-md:flex-col">
		<div className="h-full w-[50%] flex justify-center items-center max-md:w-full max-md:h-[50%]">
			<div
				
			>
				yet to be styled
			</div>
		</div>
		<div className="h-full w-[50%] flex flex-col items-center justify-center gap-4 max-md:w-full max-md:h-[50%] mb-10">
			<div className="flex justify-center items-center gap-4">
				<p
					className="text-[200px] max-md:text-7xl max-lg:text-8xl"
				>
					I++
				</p>
				<p className="text-9xl max-md:text-7xl max-lg:text-8xl">
					' 25
				</p>
			</div>
			<p
				className="text-5xl flex gap-4 max-md:text-2xl max-lg:text-3xl items-center"
			>
				Iterate to Infinity
				 <span className="flex">
					<span className="dot animate-wave-delay1 text-4xl max-md:text-2xl">.</span>
					<span className="dot animate-wave-delay2 text-4xl max-md:text-2xl">.</span>
					<span className="dot animate-wave-delay3 text-4xl max-md:text-2xl">.</span>
				</span>
			</p>

		</div>
		
		<Navbar/>
    </div>
  );
};

export default Page;
