import { useState } from 'react';
import AnimateHeight from 'react-animate-height';
import './card.css';

export default function Card() {
	const [height, setHeight] = useState(0);

	const toggle = () => {
		setHeight(height === 0 ? 'auto' : 0);
	};

	return (
		<div className="card">
			<div aria-expanded={height !== 0} aria-controls="example-panel" onClick={toggle}>
				{height === 0 ? 'Pergunta' : 'S'}
			</div>

			<AnimateHeight
				id="example-panel"
				duration={500}
				height={height} // see props documentation below
			>
				<h1>Your content goes here</h1>
				<p>Put as many React or HTML components here.</p>
			</AnimateHeight>
		</div>
	);
}
