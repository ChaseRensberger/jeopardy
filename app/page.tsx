'use client';

import { useState } from 'react';
import QuestionCard from '../components/QuestionCard';
import Link from 'next/link';

const Home = () => {
	const round_one_categories = [
		'HISTORY, OVER ON THE LEFT',
		'STATE MOTTOES',
		'MNEMONICS',
		'"AINT", NECESSARILY SO',
		'LITERATURE',
		'AN ALBUM COVER',
	];
	const [round_one_questions, set_round_one_questions] = useState([
		{
			price: 200,
			question:
				'Since China was mostly peasants, its 1st translation of this 1848 Marx-Engels work used "common people", not "workers"',
		},
		{
			price: 200,
			question: '"Live free or die"',
		},
		{
			price: 200,
			question:
				'"One big T equals teaspoons three" when that big T is one of these',
		},
		{
			price: 200,
			question: 'Barely perceptible, like a pale outline on paper',
		},
		{
			price: 200,
			question:
				'In 1850 he pitched his publisher a romance based on legends from southern sperm whale fisheries',
		},
		{
			price: 200,
			question:
				'Its cover has a lot of folks plus the fab 8--4 wax figures of The Beatles as well as the real-life ones',
		},
		{
			price: 400,
			question:
				'From 1919 to 1925 moderate socialist Friedrich Ebert led the German government known as this',
		},
		{
			price: 400,
			question:
				'In the Midwest: "Si quaeris peninsulam amoenam circumspice" ("if you seek a pleasant peninsula, look about you")',
		},
		{
			price: 400,
			question:
				'To distinguish these 2 cave formations: the one containing a "C" hangs from the ceiling, the one with a "G" rises from the ground',
		},
		{
			price: 400,
			question: 'Something that holds you in place to protect you--or others',
		},
		{
			price: 400,
			question:
				'George Orwell based Room 101 in "1984" on a real boardroom at this broadcast network where he spent many a long meeting',
		},
		{
			price: 400,
			question:
				'On this 1984 soundtrack album, the artist is dressed in the title color, aboard a motorcycle of the title color',
		},
		{
			price: 600,
			question:
				'In April 1965 this international pot stirrer left Cuba to try to bring revolution to Africa',
		},
		{
			price: 600,
			question: '"Sic semper tyrannis"',
		},
		{
			price: 600,
			question:
				'In a mnemonic for lines of the treble clef, these 3 words precede "does fine"',
		},
		{
			price: 600,
			question: 'Charmingly odd, especially in an old-fashioned way',
		},
		{
			price: 600,
			question:
				'The name of this Moliere character was based on a word for "truffle"',
		},
		{
			price: 600,
			question:
				"Billboard noted that only 40% of Fleetwood Mac's then-lineup is on the front cover of this, their biggest-selling album",
		},
		{
			price: 800,
			question:
				'In 1948 Henry Wallace got 2.4% of the vote as the pres. candidate of the party with this forward-looking name',
		},
		{
			price: 800,
			question:
				'"The crossroads of America"--like the intersection of Interstate 70 & U.S. Highway 41',
		},
		{
			price: 800,
			question:
				'It has atomic number 19, it\'s essential to life, but how to spell it? Oh yeah, "one tea, 2 sugars"',
		},
		{
			price: 800,
			question: 'To make someone aware of something',
		},
		{
			price: 800,
			question:
				'Stephen Crane\'s "War Memories" were not about the Civil War but this later war, including the taking of Guantanamo Bay',
		},
		{
			price: 800,
			question:
				"A 1969 cover featuring the Hindenburg disaster was this band's visual introduction to the world",
		},
		{
			price: 1000,
			question:
				'Among 1980s leaders Ferdinand Marcos was right-wing; over on the left of the "F.M." dial was this president of France',
		},
		{
			price: 1000,
			question: '"L\'etoile du nord" ("star of the north")',
		},
		{
			price: 1000,
			question:
				'buzzfeed.com listed "Prime ministers can\'t eat any nachos" for Canada\'s time zones: Pacific, Mountain, Central, Eastern, Atlantic, this',
		},
		{
			price: 1000,
			question:
				'A statement of dissatisfaction; Shakespeare wrote a poem called "A Lover\'s" one about a wronged woman',
		},
		{
			price: 1000,
			question:
				'Mentor Ezra Pound convinced this poet to cut half of "The Waste Land"',
		},
		{
			price: 1000,
			question:
				'The cover of her 1995 album "Post" represents postcards home to Iceland; she even has airmail-color trim on her jacket',
		},
	]);

	return (
		<div>
			<div className="grid grid-cols-6 gap-4 bg-black">
				{/* Generate columns */}
				{round_one_categories.map((category) => (
					<QuestionCard category={category} />
				))}
				{/* Generate Questions */}
				{round_one_questions.map((question) => (
					<Link
						href="/question"
						as="/question"
						onClick={() => {
							sessionStorage.setItem('currentQuestion', question.question);
							sessionStorage.setItem(question.question, 'beenUsed');
						}}
					>
						<QuestionCard question={question.question} price={question.price} />
					</Link>
				))}
			</div>
		</div>
	);
};

export default Home;
