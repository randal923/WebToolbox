import Card from '../components/Card/index';
import styled from 'styled-components';
import { breakpoints } from '../global/breakpoints';

const PrivacyPolicy = () => {

  return (
    <Container>
      <Card className="card">
        <h2>Privacy Policy</h2>
        <p>
          WebToolbox recognizes that privacy is important.
          <br />
          <br />
          WebToolbox receives and maintains information from your browser on our servers, 
          including your IP or reference address and the page you searched for. 
          In addition to this information, the only other personal information we collect about you is what you provide to us on our online forms. 
          WebToolbox will be the sole source of this information. This information will only be used for our statistical monitoring of the number of visits.
          <br />
          <br />
          WebToolbox uses cookies and other technologies to improve your online experience and to learn how you use our services, in order to improve their quality.
          <br />
          <br />
          We use third party advertising companies to serve ads during your visit to our website. 
          These companies may use information (which does not include your name, address, email address or telephone number) 
          about your visits to this and other websites in order to display advertisements related to products and services of interest to you. 
          For more information on this practice and how to prevent companies from using this data,  <a href="https://policies.google.com/technologies/ads">click here</a>.
          <br />
          <br />
          Google Ads:
          Google, as a third party vendor, uses cookies to serve ads on your site.
          With the DART cookie, Google can display ads to its users based on visits to its and other sites on the Internet.
          Users can disable the DART cookie by visiting Google’s content network and ads privacy policy.
          <br />
          <br />
          This policy may be updated without prior notice, so please review it periodically to ensure you are informed of these changes.
        </p>
      </Card>
    </Container>
  )
}

export default PrivacyPolicy;


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