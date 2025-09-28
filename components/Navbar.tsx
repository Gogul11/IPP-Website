'use client'

import Link from "next/link"

const Navbar = () => {
	
	const links = [
		{ name : 'HOME', link : '/' },
		{ name : 'EVENTS', link : 'events'},
		{ name : 'ABOUT US', link : '/about'},
		{ name : 'CONTACT US', link : 'contact'}
	]

    return (
        <div
			className="w-[50%] bg-white/20 h-20 md:rounded-3xl fixed bottom-4 md:right-0 mx-10 max-md:w-full max-md:bottom-0 max-md:h-15 shadow-2xl"
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