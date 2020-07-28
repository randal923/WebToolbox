import styled from 'styled-components';
import Card from '../components/Card';
import React, { useState, useRef, useEffect } from 'react';
import Toast from '../components/Toast';

import useDidMountEffect from '../components/Hooks/useDidMountEffect';

export default function ConvertCase () {
    const [text, setText] = useState('');
    const [finalText, setFinalText] = useState('');
    const [characterCount, setCharacterCount] = useState(0);
    const [wordCount, setWordCount] = useState(0);

    useDidMountEffect(() => {
        copyToClipboard()
    }, [finalText])

    useEffect(() => {
        getCharacterCount();
        getWordCount();
    }, [text])

    function sentenceCase (): void {
        const lowerCaseText = text.toLowerCase();
        const capitalizeFirstLetterAfterEveryStop = lowerCaseText.replace(/([!?.]\s+)([a-z])/g, (m, fullStop, letter) => {
            return fullStop + letter.toUpperCase();
        })
        const capitalizedText = text.charAt(0).toUpperCase() + capitalizeFirstLetterAfterEveryStop.slice(1);
        setText(capitalizedText);
        setFinalText(capitalizedText);
    }

    function lowerCase (): void {
        const lowerCaseText = text.toLowerCase();
        setText(lowerCaseText);
        setFinalText(lowerCaseText);
    }

    function upperCase (): void {
        const upperCaseText = text.toUpperCase();
        setText(upperCaseText)
        setFinalText(upperCaseText)
    }

    function alternatingCase (): void {
        const alternatingText = text.split('').map((letter, index) => index % 2 == 0 ? letter.toLowerCase() : letter.toUpperCase())
        setText(alternatingText.join(''))
        setFinalText(alternatingText.join(''));
    }
    function inverseAlternatingCase (): void {
        const inverseAlternaingText = text.split('').map((letter, index) => index % 2 == 1 ? letter.toLowerCase() : letter.toUpperCase())
        setText(inverseAlternaingText.join(''))
        setFinalText(inverseAlternaingText.join(''));
    }

    function handleTextArea (e: any): void {
        setText(e.target.value);
    }

    function copyToClipboard (): void {
        navigator.clipboard.writeText(text)
        Toast('success', 'Text Copied Successfully!')
    };

    function getCharacterCount() {
        const count = text.split('').length
        setCharacterCount(count)
    }

    function getWordCount () {
        const count = text.split('').length
        setWordCount(count)
    }

    return (
		<>
			<Container>
				<Card>
					<h1>Convert Case</h1>
					<div>
						<textarea
							rows={5}
                            cols={33}
                            onChange={(e) => handleTextArea(e)}
                            value={text}
						></textarea>
                       <WordData>
                            <h4>Word Count: {wordCount}</h4>
                            <h4>Character Count: {characterCount}</h4>
                       </WordData>
						<Buttons>
                            <button onClick={sentenceCase}>Sentence case</button>
                            <button onClick={lowerCase}>lower case</button>
                            <button onClick={upperCase}>UPPERCASE</button>
                            <button onClick={alternatingCase}>aLtErNaTiNg cAsE</button>
                            <button onClick={inverseAlternatingCase}>InVeRsE aLtErNaTiNg CaSe</button>
                        </Buttons>
					</div>
				</Card>
                <Text>
                    <h1>Convert Case Tool</h1>
                    <p>
                        A very handy online text tool where you can change between lower case and upper case letters,
                        where you can capitalize, uncapitalize, convert to mix case and transform your text.
                        Explore the options below:
                    </p>
                    <h1>Sentence Case</h1>
                    <p>
                        The sentence case converter will allow you to paste any text you’d like, and it will automatically 
                        transform it to a fully formed structured sentence.
                        <br />
                        It works by capitalizing the very first letter in each sentence, and will then go on to transform 
                        the rest of the text into lowercase as well as converting i’s into I’s. Every letter after a full 
                        stop will get converted into an upper case letter.

                        <br />
                        <br />
                        <strong>This is an example of sentence case.</strong>
                    </p>
                    <h1>Lower Case</h1>
                    <p>
                        If you are wondering how to uncapitalize text, this is exactly what the lower case text converter will allow you to do - it transforms all the letters in your text into lowercase letters. Simply copy the text that you need generating into lower case and paste the text into the box above and select the ‘lower case’ tab.

                        <br />
                        <br />
                        <strong>this is an example of lower case.</strong>
                    </p>
                    <h1>Upper Case</h1>
                    <p>
                        The upper case transformer will take any text that you have and will generate all the letters into upper case ones. 
                        It will essentially make all lower case letters into CAPITALS (as well as keep upper case letters as upper case letters).
                        <br />
                        To do this, you simply have to select the text that you need changing and pasting into the box above and then select the UPPER CASE tab.

                        <br />
                        <br />
                        <strong>THIS IS AN EXAMPLE OF UPPER CASE.</strong>
                    </p>
                    <h1>Capitalized Case</h1>
                    <p>
                        The capitalized case converter will automatically convert the starting letter 
                        of every word into an upper case and will leave the remaining letters as lower case ones.
                        <br />
                        Simply copy the content that you will like to generate into this format, 
                        then paste into the box form above and select the Capitalized Case tab.

                        <br />
                        <br />
                        <strong>This Is An Example Of Capitalized Case</strong>
                    </p>

                    <h1>Alternating Case</h1>
                    <p>
                        The alternating case converter will allow you to transform your text (no matter the current format) 
                        into text that alternates between lower case and upper case. It will generate a lower case and then 
                        a capital case letter within the same word.

                        <br />
                        <br />
                        <strong>tHiS Is aN ExAmPlE Of aLtErNaTiNg cAsE.</strong>
                    </p>

                    <h1>Inverse Alternating Case</h1>
                    <p>
                        The inverse alternating case converter will allow you to transform your text (no matter the current format) 
                        into text that alternates between lower case and upper case starting from the first letter. It will generate a capital letter and then 
                        a lower case letter within the same word.
                        <br />
                        <br />
                        <strong>ThIs iS An eXaMpLe oF InVeRsE AlTeRnAtInG CaSe</strong>
                    </p>
                </Text>
			</Container>
		</>
	);
}

const Container = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;


    div:first-child {
        width: 90%;
        margin: 10px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        h1 {
            margin: 10px auto 10px 10px;
        }

        div {
            width: 90%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }
    }


    textarea {
        max-width: 100%;
        margin-top: 20px;
        min-width: 100%;

        :focus {
            outline: 1px solid var(--text-blue);
            box-shadow: 0 0 10px #719ECE;
        }
    }

    h1 {
        margin: 20px 0 0 30px;
        font-size: 1.6rem;
        color: var(--light-black);
    }
`

const Buttons = styled.div`
    margin: 80px 0 20px 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items:center;

    button {
        margin-bottom: 10px;
        padding: 5px;
        width: 200px;
        background-color: rgba(0,118,255,0.9);
        color: white;
        border: 1px solid rgba(0,118,255,0.9);
        border-radius: 5px;
        box-shadow: 3px 3px 5px 0px rgba(222,222,222,0.75);

        :hover{
            cursor: pointer;
            background-color: white;
            color: var(--text-blue);
            border: 1px solid rgba(0,118,255,0.9);
        }
        :focus {
            outline: none;
        }
    }
`

const WordData = styled.span`
    display: flex;
    margin-right: auto;
    h4 {
        font-size: 1.1rem;
        margin-right: 10px;
        color: var(--text-gray);
    }
`

const Text = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 80%;
    text-align: center;

    h1 {
        margin: 25px 0 10px 0;
    }
    p {
        font-size: 1.2rem;
    }

    p:last-child {
        margin-bottom: 30px;
    }
`