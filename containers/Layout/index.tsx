import Head from './Head';
import Body from './Body';
import Footer from './Footer';
import React from 'react';
import Header from './Header';

interface IProps {
	title: string,
	description?: string,
	url?: string,
	ogImage?: string,
	children: React.ReactNode
}

const Layout = (props: IProps) => (
	<>
		<Head title={props.title} description={props.description} url={props.url} ogImage={props.ogImage} />
		<Header />
		<Body children={props.children} />
		<Footer />
	</>
);

export default Layout;
