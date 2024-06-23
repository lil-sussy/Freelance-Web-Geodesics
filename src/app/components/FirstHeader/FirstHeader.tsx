import React from "react";
import Button from "../Button/Button";
import { Arrow } from "../Icons";
import styles from "./FirstHeader.module.scss";

// Define the props type
type FirstHeaderProps = {
	content: {
		title: string;
		content: { type: string; text: string }[];
	};
	switchContact: () => void;
	switchToPortfolio: (scroll: number) => void;
	setContactFormContent: (content: { title: string; placeholder: string; succes: string; error: string }) => void;
};

const contactFormContent = {
	title: "Let's Start a Conversation",
	placeholder: "Connect with a Passionate AI Developer",
	succes: "Your message has been received. We'll be in touch shortly.",
	error: "Error! Your message couldn't be sent. Please retry.",
	text: "I'd like to understand how your AI solutions can benefit my startup. Can we connect?",
};

const FirstHeader: React.FC<FirstHeaderProps> = ({ content, switchContact, setContactFormContent, switchToPortfolio }) => {
	return (
		<header className={styles.header}>
			<div className={styles.content}>
				<div className={styles.space}></div>
				<div className={styles.contentContainer}>
					<h1 className={styles.headline}>{content.content[0].text}</h1>
					<p className={styles.description}>
						<span>{content.content[1].text}</span>
						<span className={styles.highlight}> {content.content[2].text}</span>.
						<br />
						<span>{content.content[3].text}</span>
						<span className={styles.highlight}> {content.content[4].text}</span>
						<span> {content.content[5].text}</span>
					</p>
					<div className={styles.actions}>
						<Button
							onClick={() => {
								switchContact();
								setContactFormContent(contactFormContent);
							}}
							style="primary"
						>
							{content.content[6].text}
						</Button>
						<Button onClick={() => switchToPortfolio(0)} style="secondary">{content.content[7].text}</Button>
					</div>
				</div>
			</div>
			<div className={styles.logos}>
				<div className={styles.wrapper}>
					<img src={"./images/webgeodesicslogo.svg"} className={styles.logoImage} alt="web geodesics logo" />
					<div className={styles.logoText}>
						WEB
						<br />
						GEODESICS
					</div>
				</div>
				<div className={styles.arrow}>
					<Arrow />
				</div>
			</div>
		</header>
	);
};

export default FirstHeader;
