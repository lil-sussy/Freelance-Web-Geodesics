import React from "react";
import Button from "../Button/Button";
import styles from "./Navbar.module.scss";

// Define the props type
type NavbarProps = {
	content: {
		title: string;
		content: Array<{ type: string; text: string }>;
	};
	switchLanguage: () => void;
	switchContact: () => void;
	setPageDisplayed: (page: "Main Page" | "Portfolio Page" | "Webdev Page") => void;
};

const Navbar: React.FC<NavbarProps> = ({ content, switchLanguage, setPageDisplayed, switchContact }) => {
	// Extract the first section for the navbar items
	const navbarSection = content;
	let i = 0;
	return (
		<>
			{/* Desktop Navbar */}
			<div className={styles.navbar}>
				<div onClick={() => setPageDisplayed("Main Page")} className={`${styles.item} ${styles.logoItems}`}>
					<img className={styles.logo} src={"./images/webgeodesicslogo.svg"} alt="Web Geodesics Logo" />
				</div>
				<div onClick={() => setPageDisplayed("Main Page")} className={styles.item}>
					{content.content[i].text}
				</div>
				<div onClick={() => setPageDisplayed("Webdev Page")} className={styles.item}>
					{content.content[++i].text}
				</div>
				<div onClick={() => setPageDisplayed("Portfolio Page")} className={styles.item}>
					{content.content[++i].text}
				</div>
				<div onClick={switchLanguage} className={styles.item}>
					{content.content[++i].text}
				</div>
				<Button onClick={() => switchContact()} style="primary">
					{content.content[++i].text}
				</Button>
			</div>

			{/* Mobile Navbar */}
			<div className={styles.Navbar}>
				<div className={styles.NavbarContainer}>
					<div className={styles.BurgerMenu}>
						<div className={styles.Rectangle38}></div>
						<div className={styles.Rectangle39}></div>
						<div className={styles.Rectangle40}></div>
					</div>
					<div className={styles.LogoMiddleForPhone}>
						<img className={styles.artboard} src={"./images/webgeodesicslogo.svg"} alt="Web Geodesics Logo" />
						<div className={styles.WebGeodesics}>
							WEB
							<br />
							GEODESICS
						</div>
					</div>
					<div className={styles.Actions}>
						<Button style="primary">Contact</Button>
					</div>
				</div>
			</div>
		</>
	);
};

export default Navbar;
