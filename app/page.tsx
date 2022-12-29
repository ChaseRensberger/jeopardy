'use client';

import QuestionCard from '../components/QuestionCard';
import Link from 'next/link';
import { questions } from '../data/questions';
import { useEffect, useState } from 'react';

const Home = () => {
	const [roundOneCategories, setRoundOneCategories] = useState([]);
	const [roundOneQuestions, setRoundOneQuestions] = useState([]);
	const [roundTwoCategories, setRoundTwoCategories] = useState([]);
	const [roundTwoQuestions, setRoundTwoQuestions] = useState([]);

	useEffect(() => {
		const updatedRoundOneCategories: any = ['', '', '', '', '', ''];
		let updatedRoundOneQuestions: any = [];
		const updatedRoundTwoCategories: any = ['', '', '', '', '', ''];
		let updatedRoundTwoQuestions: any = [];

		questions.map((question: any) => {
			if (question.round == 'first') {
				updatedRoundOneCategories[question.categoryCol] = question.category;
				updatedRoundOneQuestions.push(question);
			} else if (question.round == 'second') {
				updatedRoundTwoCategories[question.categoryCol] = question.category;
				updatedRoundTwoQuestions.push(question);
			}
		});
		setRoundOneCategories(updatedRoundOneCategories);
		setRoundOneQuestions(updatedRoundOneQuestions);
		setRoundTwoCategories(updatedRoundTwoCategories);
		setRoundTwoQuestions(updatedRoundTwoQuestions);
	}, []);

	// list of value question objects
	const round = 1;
	return (
		<div>
			<div className="grid grid-cols-6 gap-4 bg-black">
				{/* Generate columns */}

				{round == 1
					? roundOneCategories.map((category: any) => (
							<QuestionCard category={category} />
					  ))
					: roundTwoCategories.map((category: any) => (
							<QuestionCard category={category} />
					  ))}
				{/* Generate Questions */}
				{round == 1
					? roundOneQuestions.map((question: any) => (
							<Link
								href="/question"
								as="/question"
								onClick={() => {
									sessionStorage.setItem('currentQuestion', question.question);
									sessionStorage.setItem(question.question, 'beenUsed');
								}}
							>
								<QuestionCard
									question={question.question}
									value={question.value}
								/>
							</Link>
					  ))
					: roundTwoQuestions.map((question: any) => (
							<Link
								href="/question"
								as="/question"
								onClick={() => {
									sessionStorage.setItem('currentQuestion', question.question);
									sessionStorage.setItem(question.question, 'beenUsed');
								}}
							>
								<QuestionCard
									question={question.question}
									value={question.value}
								/>
							</Link>
					  ))}
			</div>
		</div>
	);
};

export default Home;
