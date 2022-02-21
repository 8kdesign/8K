export default function YouTube({ url }) {
	return (
		<iframe
			width={800}
			height={450}
			src={url}
			frameBorder={0}
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
			allowFullScreen
		/>
	);
}
