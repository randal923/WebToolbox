import styled from 'styled-components';
import Carousel from '../components/Carousel';
import React from 'react';
import ConvertCase from '../containers/Cards/TextConverters/ConvertCase';
import CreditCardGenerator from '../containers/Cards/Generators/CreditCardGenrator';
import {breakpoints} from '../global/breakpoints';
import Link from 'next/link';

function Home() {
	return (
		<>
			<Advertisement>
				<h2>Would you like a tool to be added to our website? <Link href="/contact-us"><a><strong>Contact us</strong></a></Link> and let us know.</h2>
				<h2>
					To know more about our tools, check out our 
					
					<Link href="/blog">
					  <a> Blog.</a>
					</Link>
				</h2>
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


const Advertisement = styled.aside`
	display: flex;
	flex-direction: column;
	height: 50px;
	background: var(--light-gray);
	border-bottom: 1px solid var(--border);
	display: flex;
	align-items: center;
	justify-content: center;
	text-align: center;

	h2 {
		color: var(--text-gray);
		font-size: 1rem;
		margin: 2.5px 15px 2.5px 15px;
	}

	a {
		text-decoration: none;
		color: var(--text-blue);
	}
`;

const Cards = styled.section`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	@media(min-width: ${breakpoints.tablet}) {
		flex-direction: row;
	}
`