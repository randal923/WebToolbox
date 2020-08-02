import styled, { css, keyframes } from 'styled-components';
import React, { useState } from 'react';
import { MdKeyboardArrowRight, MdKeyboardArrowDown} from "react-icons/md";
import Link from 'next/link';

interface IProps {
	openModal?: boolean;
	handleModalClick?: () => void;
	openSubMenu?: boolean;
	openCreditCardGenerator?: boolean;
}


const HeaderMenu = (props: IProps) => {
	const [openSubMenu, setOpenSubMenu] = useState(false);
	const [openCreditCardGenerator, setOpenCreditCardGenerator] = useState(false);

	function handleSubMenuClick() {
		if(openSubMenu === false) {
			setOpenSubMenu(true)
		} else {
			setOpenSubMenu(false)
		}
	}

	function OpenCreditCardGenerator() {
		if (openCreditCardGenerator === false) {
			setOpenCreditCardGenerator(true)
		} else {
			setOpenCreditCardGenerator(false)
		}
	}

	return (
		<>
			<HeaderMenuContainer openModal={props.openModal}>
				<ul>
					<li onClick={() => handleSubMenuClick()}>
						<span>
							<h5>Text Converters</h5> {openSubMenu === true ? <MdKeyboardArrowDown /> : <MdKeyboardArrowRight />}
						</span>
						<TextConverter openSubMenu={openSubMenu}>
							<ul>
								<li onClick={() => props.handleModalClick()}>
									<Link href="/convert-case">
										<a>Convert Case</a>
									</Link>
								</li>
							</ul>
						</TextConverter>
					</li>

					<li onClick={() => OpenCreditCardGenerator()}>
						<span>
							<h5>Generators</h5> {openCreditCardGenerator === true ? <MdKeyboardArrowDown /> : <MdKeyboardArrowRight />}
						</span>
						<Generators openCreditCardGenerator={openCreditCardGenerator}>
							<ul>
								<li onClick={() => props.handleModalClick()}>
									<Link href="/credit-card-generator">
										<a>Credit Card Generator</a>
									</Link>
								</li>
							</ul>
						</Generators>
					</li>
				</ul>
			</HeaderMenuContainer>
			<BackDrop openModal={props.openModal} onClick={() => props.handleModalClick()}></BackDrop>
		</>
	)
}

export default HeaderMenu;

const slideIn = keyframes`
	0% {transform: translateX(-200px);}
	100% {transform: translateX(0px);}
`;

const slideOut = keyframes`
	0% {transform: translateX(0px);}
	100% {transform: translateX(-200px);}
`;

const HeaderMenuContainer = styled.div<IProps>`
	width: 200px;
	background: white;
	border-bottom: solid 1px var(--border);
	height: 100%;
	animation: ${slideIn} 0.2s linear;
	z-index: 6;
	display: none;
	position: absolute;
	top: 0;
	left: 0;

	${props => {
		if(props.openModal === true) {
			return css`
				display: block;
			`
		}
	}}

	ul {
		list-style: none;
		height: 100%;
		font-size: 1.6rem;
		display: flex;
		flex-direction: column;
		align-items: center;


		li {
			width: 100%;
			padding-bottom: 10px;
			border-bottom: solid 1px var(--border);

						
			:first-child {
				margin-top: 40px;
			}
			
			span {
				display: flex;
				align-items: center;

				h5 {
					font-weight: 400;
					font-size: 1.6rem;
					color: var(--gray);
					margin-left: 10px;
					:hover {
						color: var(--text-blue);
						cursor: pointer;
					}
				}

				svg {
					margin-top: 4px;
					:hover {
						cursor: pointer;
					}
				}
				
				
			}

			
			a {
				text-decoration: none;
				color: var(--gray);
				padding: 5px;
				font-weight: 300;

				:hover,
				:focus {
					color: var(--text-blue);
				}

				:focus {
					background: rgba(0, 118, 255, 0.1);
					border-radius: 5px;
				}
			}

			${props => {
				if(props.openSubMenu === true) {
					return css`
						padding-bottom: 0 !important;
					`
				}
			}}
		}
	}
`;

const BackDrop = styled.div<IProps>`
	position: absolute;
	z-index: 5;
	top: 0;
	left: 0;
	width: 100%;
	background: rgba(0, 0, 0, 0.3);
	height: 100%;
	display: none;
	cursor: pointer;

	${props => {
		if(props.openModal === true) {
			return css`
				display: block;
			`
		}
	}}
`

const TextConverter = styled.div<IProps>`
	display: none;

	ul {
		li {
			margin-top: 10px !important;
			border-top: 1px solid var(--border);
			padding: 5px 0 0 0;
			border-bottom: 0;

			a {
				margin-left: 15px;
			}
		}
	}

	${props => {
		if (props.openSubMenu === true) {
			return css`
				display: block;
			`
		}
	}}
`

const Generators = styled.div<IProps>`
	display: none;

	ul {
		li {
			margin-top: 10px !important;
			border-top: 1px solid var(--border);
			padding: 5px 0 0 0;
			border-bottom: 0;

			a {
				margin-left: 15px;
			}
		}
	}

	${props => {
		if (props.openCreditCardGenerator === true) {
			return css`
				display: block;
			`
		}
	}}
`