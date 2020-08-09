import styled from 'styled-components';
import Card from '../components/Card';
import React, { useState, useEffect } from 'react';
import Toast from '../components/Toast';
import Link from 'next/link';
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
        navigator.clipboard.writeText(finalText)
        Toast('success', 'Text Copied Successfully!')
    };

    function getCharacterCount() {
        const chractherCount = text.split('').length
        setCharacterCount(chractherCount)
    }

    function getWordCount () {
        const wordCount = text.split(' ').length
        return setWordCount(wordCount)
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
                            id="textArea"
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
                    <h2>Did you find a bug? <Link href="/contact-us"><a>Contact us</a></Link> and let us know.</h2>
                    <h1>Convert Case Tool</h1>
                    <p>
                        An online text tool that allows you to transform your text the way you want to. You can transform your text 
                        to sentence case, lower case, uppercase and alternating cases. We explain what each one of these do in more detail down below.
                    </p>
                    <h1>Sentence Case</h1>
                    <p>
                        The sentence case will transform any text into a sentence, where the first letter of the paragraph and 
                        the first letter after every full stop is uppercased. <strong>Let us know through our contact us page if you have found any bugs.</strong>
                        <br />
                        <br />
                        <strong>"An example of a sentence case. Uppercase letter after a full stop."</strong>
                    </p>
                    <h1>Lower Case</h1>
                    <p>
                        The lower case will transform any text into lower case. To use it, simply copy your text to the text area above and hit lower case.

                        <br />
                        <br />
                        <strong>an example of lower case text. it's lower case even after a full stop.</strong>
                    </p>
                    <h1>Upper Case</h1>
                    <p>
                        The upper case will transform any text to uppercase. It will also keep the uppercase letter uppercase.
                        <br />
                        To use it, simply copy your text to the text area above and hit uppercase

                        <br />
                        <br />
                        <strong>AN EXAMPLE OF UPPERCASE TEXT. IT CONTINUOUS TO BE UPPERCASE EVEN AFTER A FULL STOP.</strong>
                    </p>

                    <h1>Alternating Case</h1>
                    <p>
                        The alternating inverse case will alternate the cases between lower case and uppercase, <strong>in that order.</strong>

                        <br />
                        <br />
                        <strong>aN ExAmPlE Of aLtErNaTiNg cAsE. iT AlTeRnAtEs cAsEs eVeN AfTeR A FuLl sToP.</strong>
                    </p>

                    <h1>Inverse Alternating Case</h1>
                    <p>
                        The alternating inverse case will alternate the cases between uppercase and lower case, <strong>in that order.</strong>
                        <br />
                        <br />
                        <strong>An eXaMpLe oF AlTeRnAtInG CaSe. It aLtErNaTeS CaSeS EvEn aFtEr a fUlL StOp.</strong>
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

    h2 {
        font-size: 1.2rem;
    }
    p {
        font-size: 1.2rem;
    }

    p:last-child {
        margin-bottom: 30px;
    }
`