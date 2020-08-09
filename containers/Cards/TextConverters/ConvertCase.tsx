import styled from 'styled-components';
import Card from '../../../components/Card';
import Link from 'next/link';

function ConvertCase() {
    return (
        <CardContainer>
            <Card>
                <Link href="/convert-case">
                    <a>
						<div>
							<img src="/convert-case.png" title="credit-card" />
							<Text>
								<h2>Convert Case</h2>
								<p>A text tool that allows you to transform texts the way you want to. You can transform your text 
                        			to sentence case, lower case, uppercase and alternating cases.
								</p>
							</Text>
						</div>
					</a>
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