import React from 'react';
import Styled from 'styled-components';

interface IBody {
    children: React.ReactNode
}

const Body = (props: IBody) => <BodyContainer>{props.children}</BodyContainer>;

export default Body;


const BodyContainer = Styled.div``