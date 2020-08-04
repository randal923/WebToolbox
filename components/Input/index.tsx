import styled from 'styled-components';

interface IProps {
    label?: string
    type: string
    maxLength?: number
    placeholder?: string
    value?: any
    className?: string
    onChange?: (arg: any) => any
    name?: string
    onClick?: () => any
}

const Input = (props: IProps) => {
    return (
        <Container className={props.className}>
            <label>
                {props.label}
			</label>
            <input
                type={props.type}
                maxLength={props.maxLength}
                placeholder={props.placeholder}
                value={props.value}
                onChange={props.onChange}
                name={props.name}
            />
        </Container>
    )
}

export default Input;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin: 5px;
    
    label {
        font-size: 1.2rem;
        font-weight: bold;
        color: var(--text-gray);
        margin-bottom: 2px;
    }

    input {
		padding: 5px;
        border: 1px solid var(--border);
		outline: var(--border);
		:focus,
		::selection,
		:hover,
		outline {
			border-color: var(--button-blue);
		}
    }
`