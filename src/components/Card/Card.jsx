import { useState } from 'react';
import AnimateHeight from 'react-animate-height';
import './card.css';

export default function Card({ id, question, answer, answersState }) {
	const [height, setHeight] = useState(0);
	const [rotated, setRotated] = useState(false);
	const [answeredStatus, setAnsweredStatus] = useState('unanswered');

	function toggleExpand(e) {
		if (!rotated && answeredStatus === 'unanswered') setHeight(height === 0 ? 'auto' : 0);
	}

	function turnCard(e) {
		e.stopPropagation(); //prevent parent onclick from 'toggleExpand'
		setRotated(true);
	}

	return (
		<div
			className={rotated ? 'card rotateRight' : 'card'}
			onClick={rotated ? null : (e) => toggleExpand(e)}
		>
			{height === 0 ? <CardHeader /> : ''}

			<AnimateHeight duration={500} height={height}>
				{rotated ? <CardBackFace /> : <CardFrontFace />}
			</AnimateHeight>
		</div>
	);

	function CardHeader() {
		return (
			<header className={answeredStatus}>
				<h3>
					<span
						className={answeredStatus !== 'unanswered' ? 'strike-animation' : ''}
					>{`Pergunta ${id}`}</span>
				</h3>
				<img src={`imgs/${answeredStatus}-icon.png`} alt="" />
			</header>
		);
	}

	function CardFrontFace() {
		return (
			<div>
				<h2>{question}</h2>
				<img className="turn-arrow" onClick={turnCard} src="imgs/setinha.png" alt="set" />
			</div>
		);
	}

	function CardBackFace() {
		return (
			<div className="card-back-face">
				<h2>{answer}</h2>
				<div className="recall-buttons">
					<button className="red" onClick={() => setAnswer('wrong')}>
						Não lembrei
					</button>
					<button className="yellow" onClick={() => setAnswer('maybe')}>
						Quase não lembrei
					</button>
					<button className="green" onClick={() => setAnswer('right')}>
						Zap!
					</button>
				</div>
			</div>
		);
	}

	function setAnswer(status) {
		setRotated(false);
		setHeight(0);
		setAnsweredStatus(status);
		answersState.set([...answersState.array, { status: status }]);
	}
}
