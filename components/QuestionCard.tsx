'use client';
import Link from 'next/link';
import { useState } from 'react';

const QuestionCard = (props: any) => {
	const [isUsed, setIsUsed] = useState(false);

	return (
		<Link
			href="/question"
			as="/question"
			onClick={() => {
				localStorage.setItem('currentQuestion', props?.question);
			}}
		>
			<div className="bg-blue-700 h-32 flex items-center justify-center font-bold text-center">
				<div className="text-white">{props?.category}</div>
				<div className="text-orange-400 text-3xl">{props?.price}</div>
			</div>
		</Link>
	);
};

export default QuestionCard;
