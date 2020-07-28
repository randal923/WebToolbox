import styled from 'styled-components';
import Card from '../../../components/Card';
import Link from 'next/link';

function ConvertCase() {
    return (
        <CardContainer>
            <Card>
                <Link href="/convert-case">
                    <div>
                        <img src="/convert-case.png" title="credit-card" />
                        <Text>
                            <h2>Convert Case</h2>
                            <p>A very handy online text tool where you can change between lower case and upper case letters, where you can capitalize, uncapitalize, convert to mix case and transform your text.</p>
                        </Text>
                    </div>
                </Link>
            </Card>
        </CardContainer>
    )
}

export default ConvertCase;

const CardContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	height: 600px;

	div {
		:hover {
			cursor: pointer;
		}
		
		img {
			height: 225px;
			width: 100%;
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
	}
`;