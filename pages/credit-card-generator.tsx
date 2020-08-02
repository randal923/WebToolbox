import Card from '../components/Card';
import * as generator from 'creditcard-generator';
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { breakpoints } from '../global/breakpoints';

function CreditCardGenerator () {
    const [cvv, setCvv] = useState(0);
    const [showCardInfo, setShowCardInfo] = useState(false);
    const [cardInfo, setCardInfo] = useState({
        brand: '',
        number: '',
        month: '',
        year: '',
        cvv: 0
    })

    useEffect(() => {
        if (cvv === 0) {
            setCvv(Math.floor(100 + Math.random() * 1000))
        }
    }, [cardInfo.cvv])

    function generateCreditCard (): string[] {
        const creditCard = document.getElementById('creditCard') as HTMLInputElement;
        return generator.GenCC(creditCard.value);
    }

    function handleChange (e): void {
        setCvv(e.target.value.replace(/\D/, ''));
    }

    function getYearOptions () {
        const date = new Date();
        const year = date.getFullYear();
        const maxYear = year + 10;
        const content = [];
        for (let i = year; i <= maxYear; i++) {
            content.push(<option key={i} value={i}>{i}</option>)
        }

        return content;
    }

    function getMonthOptions () {
        const content = [];
        for (let i = 1; i <= 12; i++) {
            content.push(<option key={i} value={(i < 10 ? '0' : '') + i}>{(i < 10 ? '0' : '') + i}</option>)
        }

        return content;
    }

    function returnCardInformation () {
        const creditCard = document.getElementById('creditCard') as HTMLInputElement;
        const cardNumber = generateCreditCard()
        const year = document.getElementById('year') as HTMLInputElement;
        const month = document.getElementById('month') as HTMLInputElement;

        setShowCardInfo(true)

        return setCardInfo({
            brand: creditCard.value,
            number: cardNumber[0],
            month: month.value,
            year: year.value,
            cvv: cvv
        })
    }

    return (
        <>
            <Container>
                <Card className="Card1">
                    <CreditCard>
                        <label>Brand</label>
                        <select name="creditCard" id="creditCard">
                            <option value="visa">Visa</option>
                            <option value="masterCard">Master Card</option>
                            <option value="amex">Amex</option>
                        </select>
                    </CreditCard>
                    <CVVDATE>
                        <CVV>
                            <label>
                                CVV
							</label>
                            <input
                                type="text"
                                maxLength={3}
                                placeholder="Random"
                                value={cvv}
                                pattern="[0-9]{3}"
                                onChange={(e) => handleChange(e)}
                            />
                        </CVV>
                        <YearMonth>
                            <div>
                                <label>Month</label>
                                <select name="month" id="month">
                                    {getMonthOptions()}
                                </select>
                            </div>
                            <div>
                                <label>Year</label>
                                <select name="year" id="year">
                                    {getYearOptions()}
                                </select>
                            </div>
                        </YearMonth>
                    </CVVDATE>
                    <button onClick={() => returnCardInformation()}>Generate</button>
                </Card>

                <Card className="Card2">
                    <h1>Card Details</h1>

                    {showCardInfo === true ?
                        <ul>
                            <li>Brand: {cardInfo.brand.toUpperCase()}</li>
                            <li>Number: {cardInfo.number}</li>
                            <li>Date: {cardInfo.month}/{cardInfo.year}</li>
                            <li>CVV: {cardInfo.cvv}</li>
                        </ul>
                        :
                        ''
                    }
                </Card>
            </Container>
            <p style={{ margin: '0 25px 0 25px', fontSize: '1.3rem', textAlign: 'center' }}>
                These are <strong>valid</strong> credit card numbers buy they <strong>DO NOT</strong> work! Use this credit card generator for testing purposes and bogus data.
               
			</p>
        </>

    );
}

export default CreditCardGenerator;

const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	@media(min-width: ${breakpoints.tablet}) {
		flex-direction: row;
	}

	select, input {
		border: 1px solid var(--border);
		outline: var(--border);
		:focus,
		::selection,
		:hover,
		outline {
			border-color: var(--button-blue);
		}
	}

	select {
		height: 30px;
	}

	input {
		height: 30px;
		padding: 5px;
		width: 100px;
	}

	label {
		font-size: 1.2rem;
		font-weight: bold;
		margin-bottom: 2px !important;
	}

	button {
		background: var(--button-blue);
		color: white;
		border: none;
		width: 100px;
		height: 30px;
		margin: 5px 0 15px 0;
		align-self: center;
		text-transform: uppercase;
		font-weight: bold;
		border-radius: 5px;
		outline: none;
		:hover {
			cursor: pointer;
			background: var(--text-blue);
		}
	}

	.Card1{
		display: flex;
		flex-direction: column;
		justify-content: center;
	}

	.Card2 {
		display: flex;
		flex-direction: column;
		height: 191px;
		ul {
			list-style: none;
			margin-left: 15px;
			li {
				font-size: 1.2rem;
				font-weight: bold;
				margin-bottom: 5px;
			}
		}

		h1 {
			margin: 15px;
			font-size: 1.5rem;
		}
	}
	
`

const CreditCard = styled.div`
	display: flex;
	flex-direction: column;
	select {
		margin: 0 15px 15px 15px;
	}
	label {
		margin: 15px 0 0 15px;
	}
`

const CVV = styled.div`
	display: flex;
	flex-direction: column;
	margin: 0 0 15px 15px;

`

const CVVDATE = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`

const YearMonth = styled.div`
	display: flex;
	margin-right: 12px;

	div {
		display: flex;
		flex-direction: column;
		margin: 0 3px 15px 5px
	}
	select {
		width:  65px;
	}
`