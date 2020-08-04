import styled from 'styled-components';
import React from 'react';

interface IProps {
	className?: string;
	children?: React.ReactNode;
}
const Card = (props: IProps) => <CardContainer className={props.className}>{props.children}</CardContainer>

export default Card;

const CardContainer = styled.div`
	display: flex;
	margin: 30px;
	-webkit-box-shadow: 3px 3px 5px 0px rgba(222,222,222,0.75), -1px -1px 5px 0px rgba(222,222,222,0.75);
	-moz-box-shadow: 3px 3px 5px 0px rgba(222,222,222,0.75), -1px -1px 5px 0px rgba(222,222,222,0.75);
	box-shadow: 3px 3px 5px 0px rgba(222,222,222,0.75), -1px -1px 5px 0px rgba(222,222,222,0.75);
`;
