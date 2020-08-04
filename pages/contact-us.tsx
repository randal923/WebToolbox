import Card from '../components/Card/index';
import styled from 'styled-components';
import Input from '../components/Input';
import { breakpoints } from '../global/breakpoints';
import React, {useState} from 'react';
import Toast from '../components/Toast';
import axios from 'axios';
import Loading from '../components/Loading';

const contactUs = () => {
    const [state, setState] = useState({ name: "", email: "", text: "" });
    const [isLoading, setIsLoading] = useState(false);

    async function sendEmail() {
        setIsLoading(true)
        const body = {
            from: `${state.email}`,
            subject: 'New Email From WebToolbox42',
            text: `${state.name} - ${state.text}`
        }

        const response = await axios.post('https://formspree.io/mbjzwanl', body);

        if(response.status === 200) {
            setIsLoading(false)
            Toast('success', 'Email sent successfully!')
        } else {
            Toast('error', 'Something went wrong. We will look into it!')
        }
    }

    function handleOnChange(e) {
        const { name, value } = e.target
        setState({...state, [name]: value });
    }

    return (
        <Container>
            <Card className="card">
                <h1>Contact Us</h1>
                <NameEmail>
                    <Input type="text" label="Name" name="name" onChange={handleOnChange}/>
                    <Input type="email" label="Email" name="email" onChange={handleOnChange}/>
                </NameEmail>
                <TextArea>
                    <label>Description</label>
                    <textarea name="text" placeholder="Please include all information relevant to your opnion or issue." onChange={handleOnChange}/>
                </TextArea>
                <button onClick={sendEmail} >{isLoading === true ? <Loading /> : 'SEND'}</button>
            </Card>
        </Container>
    )
}

export default contactUs;


const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    .card {
        display: flex;
        flex-direction: column;

        h1 {
            margin: 20px 0 5px 20px;
            font-size: 1.5rem;
        }

        button {
            background: var(--button-blue);
            color: white;
            border: none;
            width: 100px;
            height: 30px;
            margin: 0 20px 20px 20px;
            align-self: flex-end;
            text-transform: uppercase;
            font-weight: bold;
            border-radius: 2px;
            outline: none;
            :hover {
                cursor: pointer;
                background: var(--text-blue);
		    }
        }

        @media(min-width: ${breakpoints.tablet}) {
            width: 800px;
        }
    }
`

const NameEmail = styled.div`
    display: flex;
    flex-direction: column;
    margin: 15px 15px 0 15px;


    div {
        width: 100%;
    }

    @media(min-width: ${breakpoints.tablet}) {
        flex-direction: row;
    }
`

const TextArea = styled.div`
    margin: 10px 20px 20px 20px;
    
    label {
        font-size: 1.2rem;
        font-weight: bold;
        color: var(--text-gray);
        margin-bottom: 2px;
    }
    
    textarea {
        width: 100%;
        height: 200px;
        padding: 5px;
        border: 1px solid var(--border);
		outline: var(--border);
        resize: none;
		:focus,
		::selection,
		:hover,
		outline {
			border-color: var(--button-blue);
		}
    }

`