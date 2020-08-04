import styled from 'styled-components';
import Card from '../../../components/Card';
import Link from 'next/link';

function CreditCardGenerator () {
    return (
        <CardContainer>
            <Card>
                <Link href="/credit-card-generator">
                    <a>
                        <div>
                            <img src="/credit-card.png" title="credit-card" />
                            <Text>
                                <h2>Credit Card Generator</h2>
                                <p>
									Generate credit card numbers for testing purposes or for bogus data in websites where you don't want to put in your real credit card number. These cards do not work.
                                </p>
                            </Text>
                        </div>
                    </a>
                </Link>
            </Card>
        </CardContainer>
    )
}

export default CreditCardGenerator;

const CardContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;

	div {
		width: 280px;
		:hover {
			cursor: pointer;
		}
		
		img {
			height: 225px;
			width: 100%;
		}
		a {
			text-decoration: none;
		}
	}
`;

const Text = styled.div`
	display: flex;
	flex-direction: column;
	padding-bottom: 10px;
	margin: 60px 10px 10px 10px;
	text-align: justify;

	h2 {
		color: var(--light-black);
		font-size: 2.4rem;
		margin-bottom: 15px;
	}

	p {
		font-size: 1.4rem;
		color: var(--light-black);
		font-weight: 400;
		width: 250px;
	}
`;