import Article from "../components/article";
import articlesFile from "../review_articles/articles.json";

export async function getServerSideProps(context) {
	const { id } = context.params;
	var article = articlesFile.articles.find(
		(item) => item["link-postfix"] === id
	);
	if (article === undefined) {
		return {
			redirect: {
				permanent: false,
				destination: "/",
			},
		};
	}
	return {
		props: {
			article: article,
		},
	};
}

export default function Review({ article }) {
	if (article === undefined) {
		return <></>;
	}
	return (
		<>
			<Article article={article} />
		</>
	);
}
