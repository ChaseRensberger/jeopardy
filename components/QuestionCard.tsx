const QuestionCard = (props: any) => {
	return (
		<div className="bg-blue-700 h-32 flex items-center justify-center text-white font-bold">
			<div>{props.category}</div>
		</div>
	);
};

export default QuestionCard;
