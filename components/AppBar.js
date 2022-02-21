import { Container } from "react-bootstrap";
import Link from "next/link";
import Image from "next/image";
import ImageLogo from "../assets/Logo.png";

export default function AppBar() {
	return (
		<div className="Container--navbar">
			<Container>
				<div style={{ cursor: "pointer" }}>
					<Link href="/">
						<Image src={ImageLogo} height={30} width={30} />
					</Link>
				</div>
			</Container>
		</div>
	);
}
