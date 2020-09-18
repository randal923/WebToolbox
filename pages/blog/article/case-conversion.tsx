import Card from '../../../components/Card';
import styled from 'styled-components';
import { breakpoints } from '../../../global/breakpoints';

const CaseConversionpage = () => {

  return (
    <Container>
      <Card className="card">
        <h1>Case Conversion Tools And Why You Need One</h1>

        <p>
          A good case converter makes life easier for those who deal with text everyday. Many word editing software tools do not offer the ability to convert case, so finding a reliable and easy to use online tool that will quickly convert the text to the case you want is very important. A case conversion tool allows you to change text to look the way you need it to look. The tool can be used to transform text into sentence case, lower case, uppercase, or alternating cases.
        </p>

        <h2>But, why do you need to convert case text?</h2>

        <p>
          There are many reasons you may wish you had access to a case text converter. Have you ever typed out an entire note or document and realized you had the caps lock on the whole time? Maybe you need to have the title bar fit specific criteria for posting an article to an online publication. If you are trying to optimize your article post for search engines, capitalizing each word in a title can increase the click-through-rate CTR. It’s helpful when you’ve forgotten to capitalize certain words without having to retype the entire sentence or paragraph.
        </p>

        <h2>What Are The Different Case Type Options?</h2>

        <p>
          Sentence case capitalizes the first letter of the paragraph or sentence as well as the first letter following every period. Lower case keeps all of the letters lowercase, while uppercase keeps them all in uppercase fashion. Where it gets tricky is with alternating or inverse alternating cases. The differences look like the following:
        </p>
        <p>
          Sentence case
          <br />
          lower case
          <br />
          UPPERCASE
          <br />
          aLtErNaTiNg cAsE
          <br />
          InVeRsE aLtErNaTiNg CaSe
          <br />
        </p>

        <p>
          As you can see, sentence case, lower case, or even uppercase is not too difficult to type on your own. However, when you want to get fancy with alternating or inverse alternating case, it can be challenging to type long chunks of text like this. That’s where the case conversion tool comes into play.
        </p>

        <p>
          These randomly generated numbers are also helpful in getting around some loopholes. For instance, some online shopping stores request that their customers provide a credit card number to get a free trial. If you are not interested in buying the product but want the free trial, you can use a generated credit card number to satisfy the requirements for the free trial item.
        </p>

        <h2>How To Use A Case Conversion Tool</h2>

        <p>
          Use the online tool by typing text into the Convert Case text box. Once you are done typing, select whether you want the text to read in Sentence case, lower case, uppercase, alternating case, or inverse alternating case. 
        </p>

        <p>
          It is free and easy to use. Just copy and paste your text into the box, and then copy and paste the results back into your document. It’s that easy. Give it a try today!
        </p>
        
      </Card>
    </Container>
  )
}

export default CaseConversionpage;


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