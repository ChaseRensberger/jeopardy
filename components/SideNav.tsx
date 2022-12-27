const SideNav = () => {
	return (
		<nav className="bg-gray-800 h-screen w-64 px-4 py-4 fixed left-0 top-0 bottom-0">
			<ul className="list-none">
				<li className="mb-4">
					<a
						href="#"
						className="block font-semibold text-white hover:text-gray-400"
					>
						Home
					</a>
				</li>
				<li className="mb-4">
					<a
						href="#"
						className="block font-semibold text-white hover:text-gray-400"
					>
						About
					</a>
				</li>
				<li className="mb-4">
					<a
						href="#"
						className="block font-semibold text-white hover:text-gray-400"
					>
						Contact
					</a>
				</li>
			</ul>
		</nav>
	);
};

export default SideNav;
