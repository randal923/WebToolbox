import styled from 'styled-components';
import Carousel from '../components/Carousel';
import React from 'react';
import ConvertCase from '../containers/Cards/TextConverters/ConvertCase';
import CreditCardGenerator from '../containers/Cards/Generators/CreditCardGenrator';
import {breakpoints} from '../global/breakpoints';

function Home() {
	return (
		<>
			<Advertisement>
				<h2>Your one stop shop for all the tools you need.</h2>
			</Advertisement>
			<Carousel />
			<Cards>
				<ConvertCase />
				<CreditCardGenerator />
			</Cards>
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
		font-size: 1rem;
		margin: 0 15px 0 15px;
	}
`;

const Cards = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	@media(min-width: ${breakpoints.tablet}) {
		flex-direction: row;
	}
`