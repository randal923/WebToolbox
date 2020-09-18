import styled from 'styled-components';
import Link from 'next/link';
import {breakpoints} from '../../../global/breakpoints';

const Footer = () => (
    <FooterContainer>  
        <h3>WebToolbox - All Rights Reserved</h3>
       <Links>
            <Link href="/contact-us"><a>Contact Us</a></Link>
            <Link href="/privacy-policy"><a>Privacy Policy</a></Link>
            <Link href="/terms-of-service"><a>Terms of Service</a></Link>
        </Links>
    </FooterContainer>
)

export default Footer;

const FooterContainer = styled.footer`
    display: flex;
    align-items: left;
    justify-content: left;
    flex-direction: column;
    width: 100%;
    background: var(--light-gray);
    color: var(--light-black);
    font-size: 0.8rem;

    h3 {
        margin: 10px 0 3px 5px;
        font-size: 1.1rem;
        @media(min-with: ${breakpoints.tablet}) {
            font-size: 1.3rem;
        }
    }
`;

const Links = styled.nav`
    display: flex;

    a {
        margin: 2px 5px 10px 5px;
        font-size: 1.1rem;

        @media(min-with: ${breakpoints.tablet}) {
            font-size: 1.3rem;
        }
    }
`