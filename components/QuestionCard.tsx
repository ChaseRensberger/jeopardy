'use client';
import { useState, useEffect } from 'react';

const QuestionCard = (props: any) => {
	const [isVisible, setIsVisible] = useState(true);
	useEffect(() => {
		setIsVisible(sessionStorage.getItem(props.question) == null ? true : false);
	}, []);

	return (
		<>
			{isVisible ? (
				<div className="bg-blue-700 h-32 flex items-center justify-center font-bold text-center">
					<div className="text-white">{props?.category}</div>
					<div className="text-orange-400 text-3xl">{props?.value}</div>
				</div>
			) : (
				<div className="bg-black h-32 flex items-center justify-center font-bold text-center">
					<div className="text-white">{props?.category}</div>
					<div className="text-black text-3xl">{props?.value}</div>
				</div>
			)}
		</>
	);
};

export default QuestionCard;
