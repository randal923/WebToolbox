import Layout from '../containers/Layout';

export default function Home() {
	return (
		<div className="container">
			<Layout title="WebToolbox">
				
			</Layout>





			
			<style jsx global>{`
				html,
				body {
					font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell,
						Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
					font-size: 62.5%;
				}

				* {
					margin: 0;
					padding: 0;
					box-sizing: border-box;
				}
			`}</style>
		</div>
	);
}