import styled from 'styled-components';
import Carousel from '../components/Carousel';
import React from 'react';
import ConvertCase from '../containers/Cards/TextConverters/ConvertCase';

function Home() {
	return (
		<>
			<Advertisement>
				<h2>advertisement ?</h2>
			</Advertisement>
			<Carousel />
			<ConvertCase />
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