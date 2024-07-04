import React from "react";
import styles from "./Footer.module.scss";

// Define the props type
type FooterProps = {
	content: {
		title: string;
		content: Array<{ type: string; text: string }>;
	};
	switchContact: () => void;
	setPageDisplayed: (page: "Main Page" | "Portfolio Page" | "Webdev Page") => void;
	setContactFormContent: (content: { title: string; placeholder: string; succes: string; error: string }) => void;
};

const contactFormContent = {
	title: "Let's Start a Conversation",
	placeholder: "How can I assist you?",
	succes: "Your message has been received. I will contact you shortly.",
	error: "Error! Your message couldn't be sent. Please retry.",
};

const Footer: React.FC<FooterProps> = ({ content, setPageDisplayed, switchContact, setContactFormContent }) => {
	let i = 0;
	return (
		<div className={styles.footer}>
			<div className={styles.content}>
				<div className={styles.logoSection}>
					<img src={"./images/webgeodesicslogo.svg"} className={styles.logoContainer} alt="web geodesics logo" />
					<div className={styles.logoContainer}></div>
				</div>
				<div className={styles.linksSection}>
					<div onClick={() => setPageDisplayed("Main Page")} className={styles.link}>
						{content.content[i++].text}
					</div>
					<div onClick={() => setPageDisplayed("Webdev Page")} className={styles.link}>
						{content.content[i++].text}
					</div>
					<div onClick={() => setPageDisplayed("Portfolio Page")} className={styles.link}>
						{content.content[i++].text}
					</div>
					<div
						onClick={() => {
							switchContact();
							setContactFormContent(contactFormContent);
						}}
						className={styles.link}
					>
						{content.content[i++].text}
					</div>
				</div>
				<div className={styles.socialLinksSection}>
					<a href="https://github.com/lil-sussy" className={styles.socialIcon} target="_blank" rel="noopener noreferrer">
						<svg width="20" height="21" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path
								d="M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74 5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95 7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31 12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12 7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01 13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C13.71 14.53 16 11.53 16 8C16 3.58 12.42 0 8 0Z"
								clipRule="evenodd"
								fillRule="evenodd"
								fill="white"
							></path>
						</svg>
					</a>
					<div className={styles.socialIcon}>
						<svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path
								d="M20 10.3033C20 4.7467 15.5229 0.242188 10 0.242188C4.47715 0.242188 0 4.7467 0 10.3033C0 15.325 3.65684 19.4874 8.4375 20.2422V13.2116H5.89844V10.3033H8.4375V8.08671C8.4375 5.56515 9.9305 4.17231 12.2146 4.17231C13.3088 4.17231 14.4531 4.36882 14.4531 4.36882V6.8448H13.1922C11.95 6.8448 11.5625 7.62041 11.5625 8.41609V10.3033H14.3359L13.8926 13.2116H11.5625V20.2422C16.3432 19.4874 20 15.3252 20 10.3033Z"
								fill="white"
							/>
						</svg>
					</div>
					<div className={styles.socialIcon}>
						<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M17.1761 4.24219H19.9362L13.9061 11.0196L21 20.2422H15.4456L11.0951 14.6488L6.11723 20.2422H3.35544L9.80517 12.993L3 4.24219H8.69545L12.6279 9.35481L17.1761 4.24219ZM16.2073 18.6176H17.7368L7.86441 5.78147H6.2232L16.2073 18.6176Z" fill="white" />
						</svg>
					</div>
					<div className={styles.socialIcon}>
						<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path
								d="M21.5933 7.20301C21.4794 6.78041 21.2568 6.39501 20.9477 6.08518C20.6386 5.77534 20.2537 5.55187 19.8313 5.43701C18.2653 5.00701 12.0003 5.00001 12.0003 5.00001C12.0003 5.00001 5.73633 4.99301 4.16933 5.40401C3.74725 5.52415 3.36315 5.75078 3.0539 6.06214C2.74464 6.3735 2.52062 6.75913 2.40333 7.18201C1.99033 8.74801 1.98633 11.996 1.98633 11.996C1.98633 11.996 1.98233 15.26 2.39233 16.81C2.62233 17.667 3.29733 18.344 4.15533 18.575C5.73733 19.005 11.9853 19.012 11.9853 19.012C11.9853 19.012 18.2503 19.019 19.8163 18.609C20.2388 18.4943 20.6241 18.2714 20.934 17.9622C21.2439 17.653 21.4677 17.2682 21.5833 16.846C21.9973 15.281 22.0003 12.034 22.0003 12.034C22.0003 12.034 22.0203 8.76901 21.5933 7.20301ZM9.99633 15.005L10.0013 9.00501L15.2083 12.01L9.99633 15.005Z"
								fill="white"
							/>
						</svg>
					</div>
				</div>
			</div>
			<div className={styles.freelanceLinkSection}>
				<a href="https://www.malt.fr/profile/yanregojo" className={styles.socialIcon} target="_blank" rel="noopener noreferrer">
					<img src={"./images/footer/malt.png"} className={styles.freelanceIcon} alt="Malt.fr logo freelance activity link" />
				</a>
				<a href="https://www.upwork.com/freelancers/~014db20b7487d64809" className={styles.socialIcon} target="_blank" rel="noopener noreferrer">
					<img src={"./images/footer/upwork.png"} className={styles.freelanceIcon} alt="upwork.com logo freelance activity link" />
				</a>
				<a href="https://www.linkedin.com/in/yan-regojo-g%C3%A9notal-9220142a2" className={styles.socialIcon} target="_blank" rel="noopener noreferrer">
					<img src={"./images/footer/linkedin.png"} className={styles.freelanceIcon} alt="upwork.com logo freelance activity link" />
				</a>
			</div>
			<div className={styles.creditsSection}>
				<div className={styles.divider}></div>
				<div className={styles.creditsRow}>
					<div className={styles.rightsReserved}>© 2023 Web-Geodesics. All rights reserved.</div>
					<div className={styles.footerLinks}>
						<div className={styles.privacyPolicy}>Privacy Policy</div>
						<div className={styles.termsOfService}>Terms of Service</div>
						<div className={styles.cookiesSettings}>Cookie Settings</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
