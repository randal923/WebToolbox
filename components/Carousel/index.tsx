import styled, { keyframes } from 'styled-components';
import React from 'react';


const Carousel = () => {
    return (
		<CarouselContainer>
			<SliderWrapper>
				<h1>You Can Find</h1>
				<Slider>
					<h2 className="slider__text-1">Validators</h2>
					<h2 className="slider__text-2">Text Converters</h2>
					<h2 className="slider__text-2">Calculators</h2>
				</Slider>
			</SliderWrapper>
		</CarouselContainer>
	);
}

export default Carousel;


const CarouselContainer = styled.div`
    height: 100px;
`

const slide = keyframes`
 0% {margin-top:-300px;}
  5% {margin-top:-200px;}
  33% {margin-top:-200px;}
  38% {margin-top:-100px;}
  66% {margin-top:-100px;}
  71% {margin-top:0px;}
  100% {margin-top:0px;}
`;

const SliderWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	height: 100%;

	h1 {
		font-size: 2rem;
		color: var(--light-black);
		font-weight: 600;
	}
`;
const Slider = styled.div`
	height: 35px;
	width: 100%;
	overflow: hidden;

	h2 {
		height: 50px;
		margin-bottom: 50px;
		text-align: center;
		font-size: 2.6rem;
        color: var(--light-black);
        font-weight: 700;

		:hover,
		:focus {
			color: var(--text-blue);
			cursor: pointer;
		}
	}

	.slider__text-1 {
		animation: ${slide} 6s linear infinite;
	}
`;