'use client'

import Link from "next/link"
import React from "react"

interface props {
	style : string
}
const Navbar : React.FC<props> = ({ style })=> {
	
	const links = [
		{ name : 'HOME', link : '/' },
		{ name : 'EVENTS', link : '/events'},
		{ name : 'ABOUT US', link : '/about'},
		{ name : 'CONTACT US', link : '/contact'}
	]

    return (
        <div
			className={` bg-[#007acc] h-20 md:rounded-3xl mx-10 max-md:h-15 ${style}`}
			style={{
				boxShadow: "1px 0px 73px 8px rgba(0,0,0,0.6) inset"
			}}
		>
			<div className="flex justify-evenly h-full items-center">
				{
					links.map((item, idx) => (
						<Link
							key={idx}
							className="cursor-pointer"
							href={item.link}
						>
							{item.name}
						</Link>
					))
				}
			</div>
		</div>
    )
}

export default Navbar