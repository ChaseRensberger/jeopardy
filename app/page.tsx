'use client';

import { useState } from 'react';
import QuestionCard from '../components/QuestionCard';

const Home = () => {
	const round_one_categories = [
		'HISTORY, OVER ON THE LEFT',
		'STATE MOTTOES',
		'MNEMONICS',
		'"AINT", NECESSARILY SO',
		'LITERATURE',
		'AN ALBUM COVER',
	];
	const round_one_questions = [
		{
			Price: 100,
			Question:
				'Since China was mostly peasants, its 1st translation of this 1848 Marx-Engels work used "common people", not "workers"',
		},
	];

	return (
		<div>
			<div className="grid grid-cols-6 gap-4 bg-black">
				{/* Generate columns */}
				{round_one_categories.map((category) => (
					<QuestionCard category={category} />
				))}
				{/* Generate Questions */}
			</div>
		</div>
	);
};

export default Home;
