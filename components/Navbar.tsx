'use client'

import Link from "next/link"
import { usePathname } from "next/navigation"
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

	const pathname = usePathname()

    return (
        <div
			className={` bg-white/20 h-20 md:rounded-3xl mx-10 max-md:h-15 backdrop-blur-md ${style}`}
			style={{
				boxShadow: "1px 0px 73px 8px rgba(0,0,0,0.8) inset"
			}}
		>
			<div className="flex justify-evenly h-full items-center">
				{
					links.map((item, idx) => (
						<Link
							key={idx}
							className={`cursor-pointer max-md:text-xs text-sm ${
								pathname === item.link ? "text-blue-500 font-semibold underline" : "text-white"
							}`}
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