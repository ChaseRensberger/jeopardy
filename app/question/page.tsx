'use client';
import Link from 'next/link';

const questionPage = () => {
	return (
		<div className="bg-blue-700 h-screen w-screen flex flex-col items-center justify-center text-center">
			<div className="text-white font-bold text-7xl drop-shadow-4xl">
				{localStorage.getItem('currentQuestion')}
			</div>
			<Link href="/">
				<button className="absolute bottom-20 bg-green-300 rounded-lg font-bold p-2">
					BACK
				</button>
			</Link>
		</div>
	);
};

export default questionPage;
