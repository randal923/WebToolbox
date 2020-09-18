import Card from '../components/Card/index';
import styled from 'styled-components';
import { breakpoints } from '../global/breakpoints';
import Link from 'next/link';

const Blog = () => {

  return (
    <Container>
      <h1>Articles</h1>
      <Link href="/blog/article/credit-card-generator">
        <a>
          <Card className="card">
            <h1>Credit Card Generator Tools</h1>
            <p>
              An online credit card generator produces a series of numbers with the help of an algorithm.
              While the number that is generated does not belong to an actual credit card used for payment, there are a number of uses for it.
              Legitimate uses include website testing to ensure correct processing of credit card numbers, free trials, and Luhn Algorithm, also called modulus 10 or mod 10, research... <span>See More</span>
            </p>
          </Card>
        </a>
      </Link>

      <Link href="/blog/article/case-conversion">
        <a>
          <Card className="card">
            <h1>Case Conversion Tools And Why You Need One</h1>
            <p>
              A good case converter makes life easier for those who deal with text everyday. 
              Many word editing software tools do not offer the ability to convert case, so finding a reliable and easy to use online tool that will quickly convert the text to the case 
              you want is very important. 
              A case conversion tool allows you to change text to look the way you need it to look... <span>See More</span>
            </p>
          </Card>
        </a>
      </Link>
      
    </Container>
  )}

export default Blog;


const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content:center;
    flex-direction: column;

    * {
      :hover {
        cursor: pointer;
      }
    }
    a {
      text-decoration: none;
      color: black;
    }

    h1 {
      font-size: 2rem;
      margin-top: 15px;
    }

    .card {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: left;

      h1, p {
        margin: 15px 15px 5px 15px;
      }

      h1 {
        font-size: 1.5rem;
      }

      p {
        font-size: 1.2rem;
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