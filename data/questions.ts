const questions = [
	{
		_id: {
			$oid: '63acf2d79f3e172615ad5967',
		},
		question:
			"In 2015 Iran's city of Bandar Mahshahr hit a near-record 165 on this index",
		isDouble: false,
		value: 200,
		round: 'first',
		category: 'BIG 4 SPORTS TEAM NAMES IRL',
		categoryCol: 0,
	},
	{
		_id: {
			$oid: '63acf2d79f3e172615ad5968',
		},
		question: '"The Bad Beginning" is Book One in "A Series of" these',
		isDouble: false,
		value: 200,
		round: 'first',
		category: 'BOOKS',
		categoryCol: 1,
	},
	{
		_id: {
			$oid: '63acf2d79f3e172615ad5969',
		},
		question:
			"Unfortunately, Robert Todd Lincoln was in town for 3 of these--his dad's in 1865, then McKinley's & Garfield's",
		isDouble: false,
		value: 200,
		round: 'first',
		category: 'WHAT A COINKYDINK',
		categoryCol: 2,
	},
	{
		_id: {
			$oid: '63acf2d79f3e172615ad596a',
		},
		question:
			'Oh yes, Captain Kirk worked with Batman when he starred as "Alexander the Great", with Adam West as Cleander',
		isDouble: false,
		value: 200,
		round: 'first',
		category: 'ENTERTAINMENT',
		categoryCol: 3,
	},
	{
		_id: {
			$oid: '63acf2d79f3e172615ad596b',
		},
		question:
			'Any neutral spirit can be infused with blackthorn berries to make sloe this',
		isDouble: false,
		value: 200,
		round: 'first',
		category: "LET'S HAVE A CORDIAL",
		categoryCol: 4,
	},
	{
		_id: {
			$oid: '63acf2d79f3e172615ad596c',
		},
		question: 'Capricorn is one of its 12 divisions',
		isDouble: false,
		value: 200,
		round: 'first',
		category: 'OUT TO "C"',
		categoryCol: 5,
	},
	{
		_id: {
			$oid: '63acf2d79f3e172615ad596d',
		},
		question: 'Vermilion, burgundy,scarlet',
		isDouble: false,
		value: 400,
		round: 'first',
		category: 'BIG 4 SPORTS TEAM NAMES IRL',
		categoryCol: 0,
	},
	{
		_id: {
			$oid: '63acf2d79f3e172615ad596e',
		},
		question:
			'The first woman to win the Pulitzer for Fiction, Edith Wharton won for this 1920 novel about 1870s New York City',
		isDouble: false,
		value: 400,
		round: 'first',
		category: 'BOOKS',
		categoryCol: 1,
	},
	{
		_id: {
			$oid: '63acf2d79f3e172615ad596f',
		},
		question:
			'When 67-year-old Dorothy Fletcher had a heart attack on a plane in 2004, she was lucky there were 15 of these specialists aboard',
		isDouble: false,
		value: 400,
		round: 'first',
		category: 'WHAT A COINKYDINK',
		categoryCol: 2,
	},
	{
		_id: {
			$oid: '63acf2d79f3e172615ad5970',
		},
		question:
			'Every New Year\'s Day, this rhyming cable channel airs its "Twilight Zone" marathon',
		isDouble: false,
		value: 400,
		round: 'first',
		category: 'ENTERTAINMENT',
		categoryCol: 3,
	},
	{
		_id: {
			$oid: '63acf2d79f3e172615ad5971',
		},
		question:
			'Cointreau is considered this 2-word type of orange liqueur, but you wont find it on the label (I checked 3 times!)',
		isDouble: false,
		value: 400,
		round: 'first',
		category: "LET'S HAVE A CORDIAL",
		categoryCol: 4,
	},
	{
		_id: {
			$oid: '63acf2d79f3e172615ad5972',
		},
		question:
			'General term for an annual publication with sunrise & sunset times',
		isDouble: false,
		value: 400,
		round: 'first',
		category: 'OUT TO "C"',
		categoryCol: 5,
	},
	{
		_id: {
			$oid: '63acf2d79f3e172615ad5973',
		},
		question: 'Canada has 105 of these lawmakers',
		isDouble: false,
		value: 600,
		round: 'first',
		category: 'BIG 4 SPORTS TEAM NAMES IRL',
		categoryCol: 0,
	},
	{
		_id: {
			$oid: '63acf2d79f3e172615ad5974',
		},
		question:
			'A foreword to this novel says Humbert Humbert died in legal captivity before the start of his trial',
		isDouble: false,
		value: 600,
		round: 'first',
		category: 'BOOKS',
		categoryCol: 1,
	},
	{
		_id: {
			$oid: '63acf2d79f3e172615ad5975',
		},
		question:
			'John Tierney was among the first to die building this on the Arizona/Nevada border; the last was his son, Patrick',
		isDouble: false,
		value: 600,
		round: 'first',
		category: 'WHAT A COINKYDINK',
		categoryCol: 2,
	},
	{
		_id: {
			$oid: '63acf2d79f3e172615ad5976',
		},
		question:
			'Ralph Macchio & William Zabka can be seen on YouTube Premium in "Cobra Kai", a continuation of this movie series',
		isDouble: false,
		value: 600,
		round: 'first',
		category: 'ENTERTAINMENT',
		categoryCol: 3,
	},
	{
		_id: {
			$oid: '63acf2d79f3e172615ad5977',
		},
		question:
			'This brand began mixing whiskey & cream together in Ireland in 1974',
		isDouble: false,
		value: 600,
		round: 'first',
		category: "LET'S HAVE A CORDIAL",
		categoryCol: 4,
	},
	{
		_id: {
			$oid: '63acf2d79f3e172615ad5978',
		},
		question:
			'In the United States, this type of transport helps half a million people in distress each year',
		isDouble: true,
		value: 600,
		round: 'first',
		category: 'OUT TO "C"',
		categoryCol: 5,
	},
	{
		_id: {
			$oid: '63acf2d79f3e172615ad5979',
		},
		question: 'In song Gene Autry had these "that jingle jangle jingle"',
		isDouble: false,
		value: 800,
		round: 'first',
		category: 'BIG 4 SPORTS TEAM NAMES IRL',
		categoryCol: 0,
	},
	{
		_id: {
			$oid: '63acf2d79f3e172615ad597a',
		},
		question:
			'Hunter S. Thompson heads into the desert in this book subtitled "A Savage Journey to the Heart of the American Dream"',
		isDouble: false,
		value: 800,
		round: 'first',
		category: 'BOOKS',
		categoryCol: 1,
	},
	{
		_id: {
			$oid: '63acf2d79f3e172615ad597b',
		},
		question:
			'Like Molly Brown, Violet Jessop got this 10-letter nickname after surviving disaster on the Britannic, Titanic & Olympic',
		isDouble: false,
		value: 800,
		round: 'first',
		category: 'WHAT A COINKYDINK',
		categoryCol: 2,
	},
	{
		_id: {
			$oid: '63acf2d79f3e172615ad597c',
		},
		question:
			'Before playing record exec Ray Foster, he dealt with "Bohemian Rhapsody" in a much different way in 1992; no way! Way',
		isDouble: false,
		value: 800,
		round: 'first',
		category: 'ENTERTAINMENT',
		categoryCol: 3,
	},
	{
		_id: {
			$oid: '63acf2d79f3e172615ad597d',
		},
		question:
			'Legend says this Scottish honey liqueur was created for Bonnie Prince Charlie',
		isDouble: false,
		value: 800,
		round: 'first',
		category: "LET'S HAVE A CORDIAL",
		categoryCol: 4,
	},
	{
		_id: {
			$oid: '63acf2d79f3e172615ad597e',
		},
		question: 'Dogs of war aside, you "cry" this to warn of danger',
		isDouble: false,
		value: 800,
		round: 'first',
		category: 'OUT TO "C"',
		categoryCol: 5,
	},
	{
		_id: {
			$oid: '63acf2d79f3e172615ad597f',
		},
		question: 'Moyers,Nye,Pecos',
		isDouble: false,
		value: 1000,
		round: 'first',
		category: 'BIG 4 SPORTS TEAM NAMES IRL',
		categoryCol: 0,
	},
	{
		_id: {
			$oid: '63acf2d79f3e172615ad5980',
		},
		question:
			'"The Fates of Human Societies" is the subtitle of Jared Diamond\'s book with this trio as its title',
		isDouble: false,
		value: 1000,
		round: 'first',
		category: 'BOOKS',
		categoryCol: 1,
	},
	{
		_id: {
			$oid: '63acf2d79f3e172615ad5981',
		},
		question:
			"Lewis & Clark needed Shoshone horses & luckily ran into Cameahwait, this person's long-lost brother",
		isDouble: false,
		value: 1000,
		round: 'first',
		category: 'WHAT A COINKYDINK',
		categoryCol: 2,
	},
	{
		_id: {
			$oid: '63acf2d79f3e172615ad5982',
		},
		question:
			'Tweeting kudos to Michael Palin on his knighthood, John Cleese wrote, "He\'ll have to" say this sound "for the rest of his life now"',
		isDouble: false,
		value: 1000,
		round: 'first',
		category: 'ENTERTAINMENT',
		categoryCol: 3,
	},
	{
		_id: {
			$oid: '63acf2d79f3e172615ad5983',
		},
		question: 'Soak lemon zest in alcohol & sugar to make this Italian delight',
		isDouble: false,
		value: 1000,
		round: 'first',
		category: "LET'S HAVE A CORDIAL",
		categoryCol: 4,
	},
	{
		_id: {
			$oid: '63acf2d79f3e172615ad5984',
		},
		question:
			'If we had tactile as well as video clues, we could demonstrate how soft & soapy this mineral feels',
		isDouble: false,
		value: 1000,
		round: 'first',
		category: 'OUT TO "C"',
		categoryCol: 5,
	},
	{
		_id: {
			$oid: '63acf2d79f3e172615ad5985',
		},
		question: 'Communist Party wing led by Lenin in 1917',
		isDouble: false,
		value: 400,
		round: 'second',
		category: 'WHO ARE THEY?',
		categoryCol: 0,
	},
	{
		_id: {
			$oid: '63acf2d79f3e172615ad5986',
		},
		question:
			'This group term refers to the 95% of animal species that lack a backbone',
		isDouble: false,
		value: 400,
		round: 'second',
		category: 'ANIMAL TALK',
		categoryCol: 1,
	},
	{
		_id: {
			$oid: '63acf2d79f3e172615ad5987',
		},
		question: 'This state capital is south of Ogden & north of Provo',
		isDouble: false,
		value: 400,
		round: 'second',
		category: '3-WORD CITY NAMES',
		categoryCol: 2,
	},
	{
		_id: {
			$oid: '63acf2d79f3e172615ad5988',
		},
		question:
			'Without this wavy line on top of the "N", uña, "fingernail", becomes una, a form of "one" in Spanish',
		isDouble: false,
		value: 400,
		round: 'second',
		category: 'ACCENT MARKS & SPECIAL LETTERS',
		categoryCol: 3,
	},
	{
		_id: {
			$oid: '63acf2d79f3e172615ad5989',
		},
		question:
			'Kanye West & Jamie Foxx advised getting a prenup before getting involved with this title type of gal',
		isDouble: false,
		value: 400,
		round: 'second',
		category: '"GOLD" RECORDS',
		categoryCol: 4,
	},
	{
		_id: {
			$oid: '63acf2d79f3e172615ad598a',
		},
		question:
			'(Sarah of the Clue Crew presents from the Mercer Museum.) Seen on roofs since ancient Athens, these went beyond the traditional rooster & are prized as folk art, as well as letting people know which way the wind is blowing',
		isDouble: false,
		value: 400,
		round: 'second',
		category: 'AMERICAN INGENUITY',
		categoryCol: 5,
	},
	{
		_id: {
			$oid: '63acf2d79f3e172615ad598b',
		},
		question: 'Itinerant people once called the Gypsies',
		isDouble: false,
		value: 800,
		round: 'second',
		category: 'WHO ARE THEY?',
		categoryCol: 0,
	},
	{
		_id: {
			$oid: '63acf2d79f3e172615ad598c',
		},
		question:
			"What flying squirrels do isn't flying, it's called volplaning, another word for this",
		isDouble: false,
		value: 800,
		round: 'second',
		category: 'ANIMAL TALK',
		categoryCol: 1,
	},
	{
		_id: {
			$oid: '63acf2d79f3e172615ad598d',
		},
		question:
			'The full name of this South American city begins with Cidade de Sao Sebastiao do',
		isDouble: true,
		value: 800,
		round: 'second',
		category: '3-WORD CITY NAMES',
		categoryCol: 2,
	},
	{
		_id: {
			$oid: '63acf2d79f3e172615ad598e',
		},
		question:
			"A straight line over a vowel is called this, like France's president",
		isDouble: false,
		value: 800,
		round: 'second',
		category: 'ACCENT MARKS & SPECIAL LETTERS',
		categoryCol: 3,
	},
	{
		_id: {
			$oid: '63acf2d79f3e172615ad598f',
		},
		question: 'In a 1993 hit Sting walked in these',
		isDouble: false,
		value: 800,
		round: 'second',
		category: '"GOLD" RECORDS',
		categoryCol: 4,
	},
	{
		_id: {
			$oid: '63acf2d79f3e172615ad5990',
		},
		question:
			"(Sarah of the Clue Crew shows a device at the Mercer Museum.) In colonial America, practically every homestead had this device to turn apples into the nation's drink of choice, to the tune of 35 gallons per person per year",
		isDouble: false,
		value: 800,
		round: 'second',
		category: 'AMERICAN INGENUITY',
		categoryCol: 5,
	},
	{
		_id: {
			$oid: '63acf2d79f3e172615ad5991',
		},
		question: 'Native American nation of Will Rogers',
		isDouble: false,
		value: 1200,
		round: 'second',
		category: 'WHO ARE THEY?',
		categoryCol: 0,
	},
	{
		_id: {
			$oid: '63acf2d79f3e172615ad5992',
		},
		question:
			'The axolotl is a member of this "double-life" class of animals that has more than 6,000 species',
		isDouble: false,
		value: 1200,
		round: 'second',
		category: 'ANIMAL TALK',
		categoryCol: 1,
	},
	{
		_id: {
			$oid: '63acf2d79f3e172615ad5993',
		},
		question:
			'In English this California university town would be Saint Louis Bishop',
		isDouble: false,
		value: 1200,
		round: 'second',
		category: '3-WORD CITY NAMES',
		categoryCol: 2,
	},
	{
		_id: {
			$oid: '63acf2d79f3e172615ad5994',
		},
		question:
			'The German eszett character seen here is often represented by two of these letters in a row',
		isDouble: false,
		value: 1200,
		round: 'second',
		category: 'ACCENT MARKS & SPECIAL LETTERS',
		categoryCol: 3,
	},
	{
		_id: {
			$oid: '63acf2d79f3e172615ad5995',
		},
		question:
			'One Direction, Fitz & the Tantrums & Graham Parker & the Rumour have all recorded songs titled this',
		isDouble: false,
		value: 1200,
		round: 'second',
		category: '"GOLD" RECORDS',
		categoryCol: 4,
	},
	{
		_id: {
			$oid: '63acf2d79f3e172615ad5996',
		},
		question:
			'(Sarah of the Clue Crew shows a flail at the Mercer Museum.) A flail, which gave us the expression "to flail around" was used to beat the wheat in threshing, the age-old practice of separating it from this',
		isDouble: false,
		value: 1200,
		round: 'second',
		category: 'AMERICAN INGENUITY',
		categoryCol: 5,
	},
	{
		_id: {
			$oid: '63acf2d79f3e172615ad5997',
		},
		question: 'Mythic warrior women led by Penthesilea',
		isDouble: false,
		value: 1600,
		round: 'second',
		category: 'WHO ARE THEY?',
		categoryCol: 0,
	},
	{
		_id: {
			$oid: '63acf2d79f3e172615ad5998',
		},
		question:
			'The Amateur Entomologists\' Soc. glossary entry "stridulation", making noise with body parts, mentions these creatures',
		isDouble: false,
		value: 1600,
		round: 'second',
		category: 'ANIMAL TALK',
		categoryCol: 1,
	},
	{
		_id: {
			$oid: '63acf2d79f3e172615ad5999',
		},
		question:
			"There's a 4-letter preposition & a river in the name of this historic northern England coal center",
		isDouble: false,
		value: 1600,
		round: 'second',
		category: '3-WORD CITY NAMES',
		categoryCol: 2,
	},
	{
		_id: {
			$oid: '63acf2d79f3e172615ad599a',
		},
		question:
			'The field of digging up human artifacts is occasionally spelled with an ash in the middle--these 2 letters mushed together',
		isDouble: false,
		value: 1600,
		round: 'second',
		category: 'ACCENT MARKS & SPECIAL LETTERS',
		categoryCol: 3,
	},
	{
		_id: {
			$oid: '63acf2d79f3e172615ad599b',
		},
		question: 'Neil Young was a miner for this title of a 1972 No. 1 hit',
		isDouble: false,
		value: 1600,
		round: 'second',
		category: '"GOLD" RECORDS',
		categoryCol: 4,
	},
	{
		_id: {
			$oid: '63acf2d79f3e172615ad599c',
		},
		question:
			"(Sarah of the Clue Crew shows a wagon at the Mercer Museum.) This type of pioneer wagon curved up at the ends so goods wouldn't fall out on bad roads--it's named for the area where it was developed in southeast Pennsylvania, not far from here",
		isDouble: false,
		value: 1600,
		round: 'second',
		category: 'AMERICAN INGENUITY',
		categoryCol: 5,
	},
	{
		_id: {
			$oid: '63acf2d79f3e172615ad599d',
		},
		question:
			"Any guerrilla force, like Tito's in Yugoslavia resisting the Nazis",
		isDouble: false,
		value: 2000,
		round: 'second',
		category: 'WHO ARE THEY?',
		categoryCol: 0,
	},
	{
		_id: {
			$oid: '63acf2d79f3e172615ad599e',
		},
		question:
			'The norm in mammals & birds is a nictitating membrane, also called the third this--humans are weird in lacking it',
		isDouble: true,
		value: 2000,
		round: 'second',
		category: 'ANIMAL TALK',
		categoryCol: 1,
	},
	{
		_id: {
			$oid: '63acf2d79f3e172615ad599f',
		},
		question:
			'2 towns named this stare at each other across the rapids of the St. Marys River between Michigan & Ontario',
		isDouble: false,
		value: 2000,
		round: 'second',
		category: '3-WORD CITY NAMES',
		categoryCol: 2,
	},
	{
		_id: {
			$oid: '63acf2d79f3e172615ad59a0',
		},
		question:
			'Pronounced "T-H", the Icelandic thorn is one of these 24 old Viking letters also known as Futhark',
		isDouble: false,
		value: 2000,
		round: 'second',
		category: 'ACCENT MARKS & SPECIAL LETTERS',
		categoryCol: 3,
	},
	{
		_id: {
			$oid: '63acf2d79f3e172615ad59a1',
		},
		question:
			'Striking it rich in love, Colbie Caillat sings, "Feels like we\'re sittin\' on top of" this "yeah, our love is" this',
		isDouble: false,
		value: 2000,
		round: 'second',
		category: '"GOLD" RECORDS',
		categoryCol: 4,
	},
	{
		_id: {
			$oid: '63acf2d79f3e172615ad59a2',
		},
		question:
			'(Sarah of the Clue Crew shows a trade figure at the Mercer Museum.) Trade figures were designed to draw attention to stores; a popular one was this character every kid knew from puppet shows',
		isDouble: false,
		value: 2000,
		round: 'second',
		category: 'AMERICAN INGENUITY',
		categoryCol: 5,
	},
	{
		_id: {
			$oid: '63acf2d79f3e172615ad59a3',
		},
		question:
			'The final scene of this play takes place by a grave & includes the line "He had the wrong dreams"',
		isDouble: false,
		category: '20th CENTURY THEATER',
		round: 'final',
	},
];

export { questions };
