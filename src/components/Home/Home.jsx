import { useState } from 'react';
import Recall from '../Recall/Recall';

import './home.css';

export default function Home() {
	const [recallStarted, setRecall] = useState(false);

	const toggle = () => {
		setRecall(!recallStarted);
	};

	return <>{recallStarted ? <Recall /> : <Greeting />}</>;

	function Greeting() {
		return (
			<div className="container">
				<img src="imgs/zap.png" alt="zap img" />
				<h1>ZapRecall</h1>
				<button onClick={toggle}>Iniciar Recall</button>
			</div>
		);
	}
}
