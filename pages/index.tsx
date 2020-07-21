import styled from 'styled-components';
import Layout from '../containers/Layout';
import Carousel from '../components/Carousel';

export default function Home() {
	return (
		<>
			<Layout title="WebToolbox">
				<Advertisement>
					<h2>Advertisement ?</h2>
				</Advertisement>
				<Carousel />
			</Layout>
		</>
	);
}


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