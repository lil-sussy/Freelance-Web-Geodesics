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
	setContactFormContent: (content: { title: string; placeholder: string; succes: string; error: string }) => void;
};

const contactFormContent = {
	title: "Contact me for Expert AI Solutions",
	placeholder: "What can I help you achieve?",
	succes: "Thank you! I will get back to you shortly to discuss your needs.",
	error: "Error! Your message couldn't be sent. Please retry.",
	text: "I need assistance with developing an AI-driven application. Could you provide more details on your services?",
};
const Navbar: React.FC<NavbarProps> = ({ content, switchLanguage, setPageDisplayed, switchContact, setContactFormContent }) => {
  const [menuOpen, setMenuOpen] = React.useState(false);
  
	// Extract the first section for the navbar items
	const navbarSection = content;
	let i = 0;
	return (
		<div className={styles.navbarsContainer}>
			{/* Desktop Navbar */}
			<div className={`${styles.navbar} ${menuOpen ? styles.navbarPhoneVisible : ""}`}>
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
				<div className={styles.contactButton}>
					<Button
						onClick={() => {
							switchContact();
							setContactFormContent(contactFormContent);
						}}
						style="primary"
					>
						{content.content[++i].text}
					</Button>
				</div>
			</div>

			{/* Mobile Navbar */}
			<div className={styles.Navbar}>
				<div className={styles.NavbarContainer}>
					<div onClick={() => setMenuOpen(!menuOpen)} className={styles.BurgerMenu}>
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
						<Button
							onClick={() => {
								switchContact();
								setContactFormContent(contactFormContent);
							}}
							style="primary"
						>
							Contact
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
