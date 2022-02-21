import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import { Card, Col, Container, Image, Pagination, Row } from "react-bootstrap";
import articlesFile from "../../review_articles/articles.json";

const itemsPerPage = 9;
const pages = (articlesFile.articles.length - 1) / itemsPerPage;

export default function Reviews() {
	const [currentPage, setCurrentPage] = useState(0);

	function PaginationItems() {
		const items = [];
		for (let i = 0; i < pages; i++) {
			items.push(
				<Pagination.Item
					key={i}
					active={currentPage === i}
					onClick={() => {
						setCurrentPage(i);
						window.scrollTo(0, 0);
					}}
				>
					{i + 1}
				</Pagination.Item>
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
			<div
				className="Container--background Color--reviews"
				style={{ height: 200 }}
			>
				<Container className="Container--center">
					<p
						className="Text--header-article"
						style={{
							padding: 0,
							textAlign: "center",
							color: "white",
						}}
					>
						Gadget Reviews
					</p>
				</Container>
			</div>
			<Container>
				<div className="Buffer--50px" />
				{currentPage === 0 ? (
					<Row>
						<Col sm={12} md={12} lg={8}>
							<TopContent />
						</Col>
					</Row>
				) : null}
				<Row>
					<Content currentPage={currentPage} />
				</Row>
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
			<Link href={"/reviews/" + article["link-postfix"]}>
				<Card
					className="Card"
					bg="light"
					style={{ cursor: "pointer", flex: 1, marginBottom: 20 }}
				>
					<Image src={article.img} fluid />
					<Card.Body>
						<Card.Title>FEATURED: {article.title}</Card.Title>
						<Card.Subtitle>{article.date}</Card.Subtitle>
					</Card.Body>
				</Card>
			</Link>
		);
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
						<Link href={"/reviews/" + item["link-postfix"]}>
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
									<Card.Subtitle>{item.date}</Card.Subtitle>
								</Card.Body>
							</Card>
						</Link>
					</Col>
				);
			}
		}
		return itemArray;
	}
}
