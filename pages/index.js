import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import { Card, Col, Container, Image, Pagination, Row } from "react-bootstrap";
import articlesFile from "../review_articles/articles.json";

const itemsPerPage = 9;
const pages = (articlesFile.articles.length - 1) / itemsPerPage;

export default function Reviews() {
	const [currentPage, setCurrentPage] = useState(0);

	function PaginationItems() {
		const items = [];
		for (let i = 0; i < pages; i++) {
			items.push(
				<div
					key={i}
					onClick={() => {
						setCurrentPage(i);
						window.scrollTo(0, 0);
					}}
					className={
						i === currentPage
							? "Toggle--pagination-selected"
							: "Toggle--pagination"
					}
				>
					{i + 1}
				</div>
			);
		}
		return items;
	}

	return (
		<>
			<Head>
				<title>Reviews | 8K</title>
				<meta
					name="viewport"
					content="initial-scale=1.0, width=device-width"
				/>
				<meta property="og:title" content="Reviews | 8K" />
				<meta
					property="og:image"
					content="https://firebasestorage.googleapis.com/v0/b/logicui-9667a.appspot.com/o/others%2Freview_banner.png?alt=media&token=13befc98-b3c6-40ba-8e1b-29a00fa127b0"
				/>
			</Head>
			<Container>
				<div className="Buffer--20px" />
				{currentPage === 0 ? (
					<Row>
						<Col sm={12} md={12} lg={8}>
							<TopContent />
						</Col>
						<Col
							sm={12}
							md={12}
							lg={4}
							style={{
								flex: 1,
								marginBottom: 20,
							}}
						>
							<YoutubeChannel />
						</Col>
					</Row>
				) : null}
				<Row>
					<Content currentPage={currentPage} />
				</Row>
				<div className="Buffer--50px" />
				<div className="Container--center">
					<Pagination>
						<PaginationItems />
					</Pagination>
				</div>
				<div className="Buffer--50px" />
			</Container>
		</>
	);

	function TopContent() {
		const article = articlesFile.articles[0];
		return (
			<Link href={getLink(article)}>
				<a target="_blank">
					<Card
						className="Card"
						bg="light"
						style={{
							cursor: "pointer",
							flex: 1,
							marginBottom: 20,
							display: "flex",
						}}
					>
						<Image src={article.img} fluid />
						<Card.Body>
							<Card.Title>FEATURED: {article.title}</Card.Title>
							<Card.Subtitle>{article.date}</Card.Subtitle>
						</Card.Body>
					</Card>
				</a>
			</Link>
		);
	}

	function YoutubeChannel() {
		return <Card style={{ height: "100%" }}></Card>;
	}

	function Content({ currentPage }) {
		const itemArray = [];
		const size = articlesFile.articles.length;

		for (let i = 0; i < itemsPerPage; i++) {
			const itemIndex = 1 + currentPage * itemsPerPage + i;
			if (itemIndex < size) {
				const item = articlesFile.articles[itemIndex];
				itemArray.push(
					<Col sm={12} md={6} lg={4} style={{ display: "flex" }}>
						<Link href={getLink(item)}>
							<a target="_blank">
								<Card
									className="Card"
									bg="light"
									style={{
										cursor: "pointer",
										flex: 1,
										marginBottom: 20,
									}}
								>
									<Image src={item.img} fluid />
									<Card.Body>
										<Card.Title>{item.title}</Card.Title>
										<Card.Subtitle>
											{item.date}
										</Card.Subtitle>
									</Card.Body>
								</Card>
							</a>
						</Link>
					</Col>
				);
			}
		}
		return itemArray;
	}

	function getLink(article) {
		if (article.video === undefined) {
			return "/" + article["link-postfix"];
		} else {
			return article.video;
		}
	}
}
