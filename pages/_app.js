import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/globals.css";
import "../App.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Head>
				<link rel="shortcut icon" href="/favicon.ico" />
			</Head>
			<div className="Container--content">
				<Component {...pageProps} />
			</div>
		</>
	);
}

export default MyApp;
