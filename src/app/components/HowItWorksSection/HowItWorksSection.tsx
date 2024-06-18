import React from "react";
import styles from "./HowItWorksSection.module.scss";
import Button from "../Button/Button";
import Markdown from "markdown-to-jsx";

// Define the props type
type HowItWorksSectionProps = {
	content: {
		title: string;
		content: Array<{ type: string; text: string }>;
	};
};

const HowItWorksSection: React.FC<HowItWorksSectionProps> = ({ content }) => {
	let i = 0;
	return (
		<div className={styles.featuresSection}>
			<div className={styles.titleContainer}>
				<div className={styles.mainTitle}>{content.content[i].text}</div>
				<div className={styles.subTitle}>{content.content[++i].text}</div>
			</div>
			<div className={styles.featureContainer}>
				<div className={styles.featureColumn}>
					<img className={styles.cuteSittingImage} src="./images/assets-sitting.png" alt="Cute Sitting" />
					<div className={styles.placeholderImage} />
					<div className={styles.content}>
						<div className={styles.sectionTitle}>
							<div className={styles.featureTitle}>
								<Markdown>{content.content[++i].text}</Markdown>
							</div>

							<ul className={styles.featureDescription}>
								<Markdown>{content.content[++i].text}</Markdown>
								<Markdown>{content.content[++i].text}</Markdown>
							</ul>
						</div>
					</div>
				</div>
				<div className={styles.featureColumn}>
					<div className={styles.placeholderImage} />
					<div className={styles.content}>
						<div className={styles.sectionTitle}>
							<div className={styles.featureTitle}>{content.content[++i].text}</div>
							<Markdown>{content.content[++i].text}</Markdown>
							<Markdown>{content.content[++i].text}</Markdown>
						</div>
					</div>
				</div>
				<div className={styles.featureColumn}>
					<img className={styles.cuteSittingImage} src="./images/assets-sitting.png" alt="Cute Sitting" />
					<div className={styles.placeholderImage} />
					<div className={styles.content}>
						<div className={styles.sectionTitle}>
							<div className={styles.featureTitle}>{content.content[++i].text}</div>
							<Markdown>{content.content[++i].text}</Markdown>
							<Markdown>{content.content[++i].text}</Markdown>
						</div>
					</div>
				</div>
			</div>
			<div className={styles.actions}>
				<Button style="primary">{content.content[++i].text}</Button>
				<Button style="secondary">{content.content[++i].text}</Button>
			</div>
		</div>
	);
};

export default HowItWorksSection;
