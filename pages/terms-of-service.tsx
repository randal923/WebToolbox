import Card from '../components/Card/index';
import styled from 'styled-components';
import Link from 'next/link';
import { breakpoints } from '../global/breakpoints';

const TermsOfService = () => {

  return (
    <Container>
      <Card className="card">
        <h2>Terms of Service</h2>
        <p>
          When accessing WebToolbox you must be aware of and in accordance with the terms of use set out here. If you do not agree with the terms, please do not use the site. WebToolbox reserves the right to change the terms of use at any time.
        </p>
        <p>  
          WebToolbox guarantees limited access only to those who agree and comply with the terms of use. WebToolbox reserves the right to limit access to anyone, at any time and for any reason.
        </p>
        <p>
          All the contents of this site are for informational purposes only, they should not be considered complete, updated, and are not intended to be used in place of a legal, medical, financial, or any other professional consultation. 
          The contents are provided without warranty of any kind. 
          Any risk of using the content is assumed by the user.
        </p>
      </Card>
    </Container>
  )
}

export default TermsOfService;


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