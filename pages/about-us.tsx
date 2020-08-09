import Card from '../components/Card/index';
import styled from 'styled-components';
import Link from 'next/link';
import {breakpoints} from '../global/breakpoints';

const AboutUs = () => {

  return (
    <Container>
      <Card className="card">
        <h2>About Us</h2>
        <p>
          WebToolbox is a website that contains free online tools for your everyday need. 
          <br />
          <br />
          At the moment we have two tools available, one that transforms any text to lowercase, sentence case, uppercase or alternating cases.
          The other tool is a credit card generator. It generates bogus but valid credit card numbers, dates and CVV.
          <br />
          <br />
          Your help is invaluable, please let us know if you find a bug or if you would like to have a specific tool added to the website. 
          You can contact us through <Link href="/contact-us"><a>this</a></Link> link.
        </p>
      </Card>
    </Container>
  )
}

export default AboutUs;


const Container = styled.div`
    .card {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: left;
      h2 {
        font-size: 1.3rem;
        margin: 10px;

      }
      p {
        font-size: 1.2rem;
        margin: 10px;
      }

      @media(min-width: ${breakpoints.tablet}){
        h2 {
        font-size: 1.7rem;

      }
      p {
        font-size: 1.5rem;
      }
    }
`