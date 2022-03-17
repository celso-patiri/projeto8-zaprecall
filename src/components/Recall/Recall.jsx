import Card from '../Card/Card';
import './recall.css';

const cards = [
	{
		question: 'O que é JSX?',
		answer: 'Uma extensão da linguagem JavaScript utilizada pelo React',
	},

	{
		question: 'O React é ___',
		answer: 'Uma bibliotaca JavaScript para a construção de interfaces',
	},
	{
		question: 'Componentes devem ser iniciados com ___',
		answer: 'Letra Maiuscula!',
	},
	{
		question: 'Podemos colocar qualquer ___ JavaScript dentro do JSX',
		answer: 'Expressão',
	},
	{
		question: 'Como o ReactDOM nos ajuda?',
		answer: 'Interagindo com o DOM para nele inserir os componentes React',
	},
	{
		question: 'Usamos o npm para ___',
		answer: 'Gerenciar os pacotes necessários e suas dependencias',
	},
	{
		question: 'Usamo props para ___',
		answer: 'Passar informações de um componente pai para um filho',
	},
	{
		question: 'Usamos state para ___',
		answer: 'Dizer ao react sobre quais informações, quando atualizadas, o componente deve ser re-renderizado  ',
	},
];

export default function Recall() {
	return (
		<div className="container">
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
					/>
				))}
			</main>

			<footer>{`0/${cards.length} Concluídos`}</footer>
		</div>
	);
}
