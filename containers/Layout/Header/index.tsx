import styled, {css} from 'styled-components';
import HeaderMenu from './HeaderMenu';
import React, { useState } from 'react';
import Link from 'next/link';

interface IProps {
	openModal: boolean;
	handleModalClick?: () => void;
}

const Header = () => {
  const [openModal, setOpenModal] = useState(false);

  function handleModalClick() {
    if(openModal === true) {
      setOpenModal(false);
    } else {
      setOpenModal(true);
    }
  }

  return (
		<>
			<HeaderContainer>
				<Link href="/">
				  	<a>
					  <Logo>
						  <img src="/logo.png" title="logo" />
						  <h1>WebToolbox</h1>
					  </Logo>
					</a>
				</Link>
			  <Hamburger openModal={openModal} onClick={() => handleModalClick()}>
				   <Menu openModal={openModal}></Menu>
			  </Hamburger>
			</HeaderContainer>
		  <HeaderMenu openModal={openModal} handleModalClick={handleModalClick}/>
		</>

  );
};

export default Header;


const HeaderContainer = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    min-height: 70px;
    border-bottom: solid 1px var(--border);

	a {
		text-decoration: none;
		color: black;
	}

`;


const Hamburger = styled.div<IProps>`
	height: 25px;
	width: 25px;
	display: flex;
	align-items: center;
	justify-content: center;
	margin-right: 30px;
	z-index: 15;
	:hover {
		cursor: pointer;
	}
`;

const Menu = styled.div<IProps>`
	width: 20px;
	height: 2px;
	background: var(--gray);
	
	::before,
	::after {
		content: '';
		position: absolute;
		width: 20px;
		height: 2px;
		background: var(--gray);
		transition: transform 0.4s ease-in-out;
	}
	::before {
		transform: translateY(-5px);
	}
	::after {
		transform: translateY(5px);
	}

	${props => {
		if(props.openModal === true) {
			return css`
				background: transparent;
				::before {
					transform: rotate(45deg);
				}

				::after {
					transform: rotate(-45deg);
					
				}
			`
		}
	}}
`

const Logo = styled.div`
	display: flex;
	align-items: center;
	margin-left: 20px;
		
	:hover {
		cursor: pointer;
	}

	img {
		height: 30px;
		
	}

	h1 {
        font-size: 1.6rem;
		:hover {
			cursor: pointer;
		}
    }
`