import { useState } from 'react';
import AnimateHeight from 'react-animate-height';
import './card.css';

export default function Card({ id, question, answer }) {
	const [height, setHeight] = useState(0);
	const [rotated, setRotated] = useState(false);

	function expandCard(e) {
		if (!rotated) setHeight(height === 0 ? 'auto' : 0);
	}

	function turnCard(e) {
		e.stopPropagation(); //prevent parent onclick from 'expandCard'
		setRotated(true);
	}

	return (
		<div
			className={rotated ? 'card rotateRight' : 'card'}
			aria-expanded={height !== 0}
			aria-controls="example-panel"
			onClick={(e) => expandCard(e)}
		>
			<CardHeader />

			<AnimateHeight duration={500} height={height}>
				{rotated ? <CardBackFace /> : <CardFrontFace />}
			</AnimateHeight>
		</div>
	);

	function CardHeader() {
		return (
			<>
				{height === 0 ? (
					<header>
						<h3>{`Pergunta ${id}`}</h3>
						<img src="imgs/play-icon.png" alt="" />
					</header>
				) : (
					''
				)}
			</>
		);
	}

	function CardFrontFace() {
		return (
			<>
				<div>
					<h2>{question}</h2>
					<img
						className="turn-arrow"
						onClick={turnCard}
						src="imgs/setinha.png"
						alt="set"
					/>
				</div>
			</>
		);
	}

	function CardBackFace() {
		return (
			<div className="card-back-face">
				<h2>{answer}</h2>
				<div className="recall-buttons">
					<button className="red">Não lembrei</button>
					<button className="yellow">Quase não lembrei</button>
					<button className="green"> Zap!</button>
				</div>
			</div>
		);
	}
}
