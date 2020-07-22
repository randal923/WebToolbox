import styled from 'styled-components';
import React from 'react';

interface IProps {
	children?: React.ReactNode
}
const Card = (props: IProps) => <CardContainer>{props.children}</CardContainer>;

export default Card;

const CardContainer = styled.div`
	height: 350px;
	background: white;
	width: 280px;
`;
