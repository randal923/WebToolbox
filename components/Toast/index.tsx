import React from 'react';
import styled, {keyframes, css} from 'styled-components';
import { toast } from 'react-toastify';
import {breakpoints} from '../../global/breakpoints';

interface IProps {
	type: string
}

function Toast(type: string, text: string) {      

    function SuccessToast() {
		return (
			<ShowSucess type={type}>
				<h2>{text}</h2>
			</ShowSucess>
		);
	}
	
	
	return toast(SuccessToast(), {
		position: 'top-center',
		autoClose: 1500,
		hideProgressBar: true,
		closeOnClick: true,
		pauseOnHover: true,
		draggable: true,
		progress: undefined,
	});	
}

export default Toast;

const showSuccessAnimation = keyframes`
  0% {transform: translate(-50%,-45px);}
  10% {transform: translate(-50%,5px);}
  50% {transform: translate(-50%,5px);}
  55% {transform: translate(-50%,7px);}
  100% {transform: translate(-50%, -200px);}
}
`;

const ShowSucess = styled.div<IProps>`
	padding: 10px;
	border-radius: 5px;
	border: 1px solid white;
	background: var(--button-blue);
	color: white;
	text-align: center;
	position: fixed;
	top: 0;
	left: 50%;
	z-index: 5;
	animation: ${showSuccessAnimation} 4s;
	animation-iteration-count: 1;
	animation-fill-mode: forwards;

	h2 {
		font-size: 1.2rem;
	}

	@media(max-width: ${breakpoints.mobileL}){
		h2{
			font-size:1.1rem
		}
	}

	${(props) => {
		if (props.type === 'error') {
			return css`
				background: var(--button-red);
			`;
		}
	}}
`;