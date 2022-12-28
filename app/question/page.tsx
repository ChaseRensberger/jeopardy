'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';
const questionPage = () => {
	const [questionText, setQuestionText] = useState('');
	useEffect(() => {
		let tempQuestion = sessionStorage.getItem('currentQuestion');
		setQuestionText(tempQuestion == null ? '' : tempQuestion);
	}, []);

	return (
		<div className="bg-blue-700 h-screen w-screen flex flex-col items-center justify-center text-center">
			<div className="text-white font-bold text-7xl drop-shadow-4xl">
				{questionText}
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
