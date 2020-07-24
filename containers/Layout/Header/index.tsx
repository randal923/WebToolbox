import styled from 'styled-components';
import HeaderMenu from './HeaderMenu';
import React, { useState } from 'react';
import Link from 'next/link';

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
				  <h1>WebToolbox</h1>
				</Link>
				<HamburgerMenu onClick={() => handleModalClick()} />
			</HeaderContainer>
			<HeaderMenu openModal={openModal}/>
		</>

  );
};

export default Header;


const HeaderContainer = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 70px;
    border-bottom: solid 1px var(--border);

    h1 {
        margin-left: 20px;
        font-size: 1.6rem;

		:hover {
			cursor: pointer;
		}
    }
`;


const HamburgerMenu = styled.div`
	margin-right: 30px;
	width: 20px;
	height: 2px;
	background: var(--gray);
	z-index: 6;
	::before,
	::after {
		content: '';
		position: absolute;
		width: 20px;
		height: 2px;
		background: var(--gray);
	}
	::before {
		transform: translateY(-5px);
	}
	::after {
		transform: translateY(5px);
	}
`;