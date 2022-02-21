import Head from "next/head";
import { Container } from "react-bootstrap";

export default function Article({ article }) {
	return (
		<>
			<Head>
				<title>{article.title} | 8K</title>
				<meta
					name="viewport"
					content="initial-scale=1.0, width=device-width"
				/>
				<meta property="og:title" content={article.title + " | 8K"} />
				<meta property="og:image" content={article.img} />
			</Head>
			<Container>
				<p>{article.title}</p>
				<p>{article.date}</p>
			</Container>
		</>
	);
}
