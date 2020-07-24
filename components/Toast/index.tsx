import React from 'react';
import styled, {keyframes} from 'styled-components';
import { toast } from 'react-toastify';

const Toast = (type: string, text: string) => {      

    function SuccessToast() {
		return (
			<ShowSucess>
				<h2>{text}</h2>
			</ShowSucess>
		);
	}
	
	
	if (type === 'success') {
		return (
			toast(SuccessToast(), {
				position: 'top-center',
				autoClose: 1500,
				hideProgressBar: true,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
			})
		)
	}
	
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

const ShowSucess = styled.div`
	padding: 10px;
	border-radius: 5px;
	width: 180px;
	border: 1px solid white;
	background: var(--button-blue);
	color: white;
	position: absolute;
	text-align: center;
	top: 0;
	left: 50%;
	z-index: 5;
	animation: ${showSuccessAnimation} 4s;
	animation-iteration-count: 1;
	animation-fill-mode: forwards;

	h2 {
		font-size: 1.2rem;
	}
`;