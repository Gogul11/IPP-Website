'useclient'

const Navbar = () => {
    return (
        <div
			className="w-[50%] bg-white/20 h-20 md:rounded-3xl fixed bottom-4 md:right-0 mx-10 max-md:w-full max-md:bottom-0 max-md:h-15"
		>
			<div className="flex justify-evenly h-full items-center">
				{
					["HOME", "ABOUT US", "CONTACT US", "EVENTS"].map((item, idx) => (
						<div
							key={idx}
							className="cursor-pointer"
						>
							{item}
						</div>
					))
				}
			</div>
		</div>
    )
}

export default Navbar