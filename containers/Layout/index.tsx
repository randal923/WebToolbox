import Head from './Head';
import Body from './Body';
import Footer from './Footer';
import React from 'react';
import Header from './Header';

// Styles
import GlobalStyle from '../../global/styles';
import styled from 'styled-components';

interface IProps {
	title?: string,
	description?: string,
	url?: string,
	ogImage?: string,
	children?: React.ReactNode
}

const Layout = (props: IProps) => (
	<LaytoutContainer>
		<Head title={props.title} description={props.description} url={props.url} ogImage={props.ogImage} />
		<Header />
		<Body children={props.children} />
		<Footer />
		<GlobalStyle />
	</LaytoutContainer>
);

export default Layout

const LaytoutContainer = styled.div`
	max-width: 1200px;
	margin: 0 auto;
`
