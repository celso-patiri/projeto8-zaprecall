import { useEffect, useState } from 'react';
import Card from '../Card/Card';
import './recall.css';

export default function Recall({ setRecallState, cards }) {
	const [answers, setAnswers] = useState([]);

	useEffect(() => {
		shuffleArray(cards);
	}, []);

	return (
		<div className="container-recall">
			<header>
				<img src="imgs/zap.png" alt="zap img" />
				<h1>ZapRecall</h1>
			</header>

			<main>
				{cards.map((card, index) => (
					<Card
						key={card.toString + index}
						id={index + 1}
						question={card.question}
						answer={card.answer}
						answersState={{ array: answers, set: setAnswers }}
					/>
				))}
			</main>

			<footer>
				<h2>{`${answers.length}/${cards.length} Concluídos`}</h2>
				<div className="answer-icons">{answers.map((answer) => getAnswerIcon(answer))}</div>
				<RestartButton />
			</footer>
		</div>
	);

	function RestartButton() {
		return (
			<>
				{answers.length === cards.length ? (
					<button className="restart" onClick={restartRecall}>
						Reiniciar Recall
					</button>
				) : (
					''
				)}
			</>
		);
	}

	function restartRecall() {
		setRecallState(false);
		setAnswers([]);
	}

	function getAnswerIcon(answer) {
		return <img src={`imgs/${answer.status}-icon.png`} alt="icon" />;
	}

	function shuffleArray(array) {
		for (let i = array.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			const temp = array[i];
			array[i] = array[j];
			array[j] = temp;
		}
	}
}
