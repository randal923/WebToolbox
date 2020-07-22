import styled from 'styled-components';
import Carousel from '../components/Carousel';
import Card from '../components/Card';

function Home() {
	return (
		<>
			<Advertisement>
				<h2>Advertisement ?</h2>
			</Advertisement>
			<Carousel />
			<CardContainer>
				<Card>
					<img src="/credit-card.png" title="credit-card" />
					<Text>
						<h2>CreditCard Validator</h2>
						<p>Credit Card Validator provides validation utilities for credit card data inputs.</p>
					</Text>
				</Card>
			</CardContainer>
		</>
	);
}

export default Home;


const Advertisement = styled.div`
	height: 50px;
	background: var(--light-gray);
	border-bottom: 1px solid var(--border);
	display: flex;
	align-items: center;
	justify-content: center;

	h2 {
		color: var(--text-gray);
	}
`;

const CardContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	height: 400px;

	div {
		img {
			height: 200px;
			width: 100%;
		}
	}
`;

const Text = styled.div`
	height: 130px;
	display: flex;
	flex-direction: column;
	padding-bottom: 10px;
	margin: 10px;
	justify-content: flex-end;

	h2 {
		color: var(--light-black);
		font-size: 2rem;
		margin-bottom: 10px;
	}

	p {
		font-size: 1.4rem;
		color: var(--light-black);
		font-weight: 400;
	}
`;