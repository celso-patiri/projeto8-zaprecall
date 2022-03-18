import { useState } from 'react';
import Recall from '../Recall/Recall';

import './home.css';

export default function Home() {
	const [recallStarted, setRecall] = useState(false);
	const [zapGoal, setZapGoal] = useState(0);

	const startRecall = () => {
		if (zapGoal > 0) {
			setRecall(true);
		}
	};

	return <>{recallStarted ? <Recall setRecallState={setRecall} /> : <Greeting />}</>;

	function handleInputChange(event) {
		setZapGoal(event.target.value);
	}

	function Greeting() {
		return (
			<div className="container">
				<img src="imgs/zap.png" alt="zap img" />
				<h1>ZapRecall</h1>
				<input
					type="text"
					id="zap-goal-input"
					value={zapGoal > 0 ? zapGoal : ''}
					placeholder="Digite sua meta de zaps"
					onChange={handleInputChange}
				/>
				<button onClick={startRecall}>Iniciar Recall</button>
			</div>
		);
	}
}
