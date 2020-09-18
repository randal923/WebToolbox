import Card from '../../../components/Card';
import styled from 'styled-components';
import { breakpoints } from '../../../global/breakpoints';

const CreditCardGeneratorPage = () => {

  return (
    <Container>
          <Card className="card">
            <h1>Credit Card Generator Tools</h1>

            <p>
              An online credit card generator produces a series of numbers with the help of an algorithm. While the number that is generated does not belong to an actual credit card used for payment, there are a number of uses for it. Legitimate uses include website testing to ensure correct processing of credit card numbers, free trials, and Luhn Algorithm, also called modulus 10 or mod 10, research. A credit card generator tool allows you to generate credit card numbers for testing purposes or for bogus data in websites for when you don’t want to put in your real credit card number. The numbers generated are not real credit card numbers but act as if they are.
            </p>

            <h2>Is it legal?</h2>

            <p>
              Generating and using an online credit card number generator is not prohibited by law unless you use the generated number for fraud or scams. Scammers sometimes misuse a generated number to create a fake credit card to use while shopping online. Sometimes a scammer will continue to generate numbers until they happen to find one that is an actual account. The numbers generated from an online tool are a result of chance and probability.
            </p>

            <h2> Why Do I Need An Online Credit Card Generator?</h2>

            <p>
              A credit card generator is not intended to be used for any malicious applications purpose such as making an online transaction with a fake number. Not only is that close to impossible to do, but it would also be illegal.
            </p>

            <p>
              These generated numbers are used for data testing for E-commerce sites. They are especially helpful when setting up a brand new site to make sure that the online platform processes credit card numbers correctly. 
            </p>

            <p>
              These randomly generated numbers are also helpful in getting around some loopholes. For instance, some online shopping stores request that their customers provide a credit card number to get a free trial. If you are not interested in buying the product but want the free trial, you can use a generated credit card number to satisfy the requirements for the free trial item.
            </p>

            <p>
              The generated credit card numbers are also used extensively for educational purposes. Additionally, the numbers are used for instruction in Luhn Algorithm research.
            </p>

            <h2>How Does It Work?</h2>

            <p>
              The first six digits of any credit card identifies the financial institution that issued the card. These six digits are the same across the board for every credit card that the specific company issues. The remaining digits are to indicate individual account holders. The remaining digits range from six to nine additional numbers. The last digit is called the Luhn Check digit. This is a validation key. The algorithm used to compile the random generated number is done so with Luhn algorithm’s standard format.
            </p>

            <p>
              The Luhn Algorithm formula uses the credit card digits to analyze them against a Luhn algorithm that verifies the numbers. When the credit card numbers add up to equal zero, then the credit card number passes the Luhn algorithm test, which means it’s a valid generated number
            </p>
          </Card>
    </Container>
  )
}

export default CreditCardGeneratorPage;


const Container = styled.article`
    * {
      :hover {
        cursor: pointer;
      }
    }
    a {
      text-decoration: none;
      color: black;
    }
    .card {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: left;

      h1, h2, p {
        margin: 15px 15px 5px 15px;
      }

      h1 {
        font-size: 1.5rem;
        align-self: center;
      }

      h2 {
        font-size: 1.3rem !important;
      }

      p {
        font-size: 1.3rem !important;
        margin-bottom: 20px;

        span {
          color: CornflowerBlue;
          font-size: 1.1rem;
          font-style: italic;
          :hover {
            color: blue;
          }
        }
      }

      @media(min-width: ${breakpoints.tablet}){
        h2 {
        font-size: 1.7rem;

        }
        p {
          font-size: 1.5rem;
        }
      }
    }
`