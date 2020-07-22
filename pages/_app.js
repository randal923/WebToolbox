import React from 'react';
import Layout from '../containers/Layout/index';

/* ADD PERSISNTENT LAYOUT TO SSR */
export default function MyApp({ Component, pageProps }) {
	//const Layout = Component.Layout ? Component.Layout : React.Fragment;

	return (
		<Layout>
			<Component {...pageProps} />
		</Layout>
	);
}
