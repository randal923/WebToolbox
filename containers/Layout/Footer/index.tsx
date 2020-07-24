import styled from 'styled-components';

const Footer = () => <FooterContainer><h3>WebToolbox - All Rights Reserved</h3></FooterContainer>;

export default Footer;

const FooterContainer = styled.footer`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 20px;
    width: 100%;
    background: var(--light-gray);
    color: var(--light-black);
    font-size: 0.8rem;
`;