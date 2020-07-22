import styled from 'styled-components';

const Footer = () => <FooterContainer><h3>WebToolbox - All Rights Reserved</h3></FooterContainer>;

export default Footer;

const FooterContainer = styled.footer`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 20px;
    background: var(--light-gray);
    color: var(--light-black);
`;