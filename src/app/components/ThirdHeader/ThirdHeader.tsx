import React from "react";
import Button from "../Button/Button";
import styles from "./ThirdHeader.module.scss";

// Define the props type
type ThirdHeaderProps = {
	content: {
		title: string;
		content: Array<{ type: string; text: string }>;
	};
	switchContact: () => void;
	switchToPortfolio: (scroll: number) => void;
	setContactFormContent: (content: { title: string; placeholder: string; succes: string; error: string }) => void;
};

const contactFormContent = {
	title: "Connect with a Passionate AI Developer",
	placeholder: "What can I help you achieve?",
	succes: "Your message has been received. I will contact you shortly.",
	error: "Error! Your message couldn't be sent. Please retry.",
	text: "I have an idea for an AI project. Can you help me bring it to life?",
};

const ThirdHeader: React.FC<ThirdHeaderProps> = ({ content, switchContact, setContactFormContent, switchToPortfolio }) => {
	let i = 0;
	return (
		<div className={styles.ThirdHeader}>
			<div className={styles.Container}>
				<div className={styles.ImageContainer}>
					<img className={styles.BentoAsset} src={"images/assets_upstanding.png"} alt="Header Image" />
				</div>
				<div className={styles.ContainerInner}>
					<div className={styles.Content}>
						<div className={styles.Heading}>{content.content[i].text}</div>
						<div className={styles.SecondHeading}>{content.content[++i].text}</div>
						<div className={styles.Text}>{content.content[++i].text}</div>
					</div>
					<div className={styles.Actions}>
						<Button onClick={() => switchToPortfolio(0)} style="primary">
							{content.content[++i].text}
						</Button>
						<Button
							onClick={() => {
								switchContact();
								setContactFormContent(contactFormContent);
							}}
							style="secondary"
						>
							{content.content[++i].text}
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ThirdHeader;
