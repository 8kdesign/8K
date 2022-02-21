import Head from "next/head";
import { Container, Image, Col, Row } from "react-bootstrap";
import YouTube from "./Youtube";

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
			<Container style={{ maxWidth: 1000 }}>
				<Image src={article.img} fluid />
				<div className="Buffer--50px" />
				<p className="Text--header-article">{article.title}</p>
				<p className="Text--paragraph">{article.date}</p>

				<div className="Buffer--20px" />
				<Row>
					{article.video !== undefined ? (
						<p className="Text--paragraph">
							Watch it here:{" "}
							<a href={article.video}>{article.video}</a>
						</p>
					) : null}
					<Content postfix={article["link-postfix"]} />
				</Row>
				<div className="Buffer--50px" />
			</Container>
		</>
	);
}

function Content({ postfix }) {
	const itemsArray = [];
	const content = articles[postfix];
	if (content === undefined) return <div />;
	content.article.forEach((item) => {
		itemsArray.push(getItem(item));
	});
	return itemsArray;
}

function getItem(item) {
	switch (item.type) {
		case "text":
			return <p className="Text--paragraph">{item.text}</p>;
		case "link":
			return (
				<div>
					<a
						target="_blank"
						href={item.link}
						className="Text--paragraph"
						rel="noreferrer"
					>
						{item.text}
					</a>
				</div>
			);
		case "header":
			return <p className="Text--header">{item.text}</p>;
		case "subheader":
			return <p className="Text--subheader">{item.text}</p>;
		case "imageSingle":
			return (
				<Col
					sm={12}
					md={{ span: 8, offset: 2 }}
					lg={{ span: 6, offset: 3 }}
				>
					<Image src={item.text} alt="" fluid />
					<div className="Buffer--20px" />
				</Col>
			);
		case "imageDouble":
			return (
				<Col sm={12} md={6} lg={6}>
					<Image src={item.text} alt="" fluid />
					<div className="Buffer--20px" />
				</Col>
			);
		case "imageTriple":
			return (
				<Col sm={12} md={6} lg={4}>
					<Image src={item.text} alt="" fluid />
					<div className="Buffer--20px" />
				</Col>
			);
		case "imageQuad":
			return (
				<Col sm={12} md={6} lg={6}>
					<Image src={item.text} alt="" fluid />
					<div className="Buffer--20px" />
				</Col>
			);
		case "video":
			return <YouTube url={item.text} />;
		default:
			return <div />;
	}
}

/* Articles */
let articles = {
	"oppo-watch-46mm-review": require("../review_articles/oppo_watch_46mm_review.json"),
	"smartwatch-future-of-smartphones": require("../review_articles/smartwatch_future_of_smartphones.json"),
	"logitech-k375s-keyboard-m331-mouse-review": require("../review_articles/logitech_k375s_keyboard_m331_mouse_review.json"),
	"yeelight-clip-on-lamp-j1-rechargable-sensor-night-light-review": require("../review_articles/yeelight_clip_on_lamp_j1.json"),
	"mi-band-4-review": require("../review_articles/mi_band_4_review.json"),
	"creative-sxfi-air-review": require("../review_articles/creative_sxfi_air_review.json"),
	"oppo-reno-10x-zoom-preview": require("../review_articles/oppo_reno_10x_zoom_preview.json"),
	"redmi-7-review": require("../review_articles/redmi_7_review.json"),
	"redmi-note-7-review": require("../review_articles/redmi_note_7_review.json"),
	"honor-band-4-review": require("../review_articles/honor_band_4_review.json"),
	"aqara-smart-home-gadgets-review": require("../review_articles/aqara_smart_home_gadgets_review.json"),
	"vivo-v11-review": require("../review_articles/vivo_v11_review.json"),
	"madv-madventure-360-review": require("../review_articles/madv_madventure_360_review.json"),
	"redmi-note-6-pro-review": require("../review_articles/redmi_note_6_pro_review.json"),
};
