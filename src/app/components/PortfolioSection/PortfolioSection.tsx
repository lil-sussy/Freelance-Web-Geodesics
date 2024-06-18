import React, { useState } from "react";
import styles from "./PortfolioSection.module.scss";
import Button from "../Button/Button";

// Define the props type
type FeaturesSectionProps = {
	content: {
		title: string;
		content: Array<{ type: string; text: string }>;
	};
};

const FeaturesSection: React.FC<FeaturesSectionProps> = ({ content }) => {
	const [visible, setVisible] = useState(false);

	let i = 0;
	return (
		<div className={styles.featuresSection}>
			<div className={styles.titleContainer}>
				<div className={styles.mainTitle}>{content.content[i].text}</div>
				<div className={styles.subTitle}>{content.content[++i].text}</div>
			</div>
			<div className={styles.featureContainer}>
				<div className={styles.featureColumn}>
					<img className={styles.placeholderImage} src="./images/PortfolioSection/DRK.png" alt="Cute Sitting" />
					<div className={styles.content}>
						<div className={styles.sectionTitle}>
							<div className={styles.featureTitle}>{content.content[++i].text}</div>
							<div className={styles.featureDescription}>{content.content[++i].text}</div>
						</div>
						<Button style="secondary">{content.content[++i].text}</Button>
					</div>
				</div>
				<div className={styles.featureColumn}>
					<img className={styles.placeholderImage} src="./images/PortfolioSection/AIAgent.png" alt="Cute Sitting" />
					<div className={styles.content}>
						<div className={styles.sectionTitle}>
							<div className={styles.featureTitle}>{content.content[++i].text}</div>
							<div className={styles.featureDescription}>{content.content[++i].text}</div>
						</div>
						<Button style="secondary">{content.content[++i].text}</Button>
					</div>
				</div>
				<div className={styles.featureColumn}>
					<img className={styles.placeholderImage} src="./images/PortfolioSection/Demetrius.png" alt="Cute Sitting" />
					<div className={styles.content}>
						<div className={styles.sectionTitle}>
							<div className={styles.featureTitle}>{content.content[++i].text}</div>
							<div className={styles.featureDescription}>{content.content[++i].text}</div>
						</div>
						<Button style="secondary">{content.content[++i].text}</Button>
					</div>
				</div>
				{visible ? (
					<>
						<div className={styles.featureColumn}>
							<img className={styles.placeholderImage} src="./images/PortfolioSection/NeptuneProject.png" alt="Cute Sitting" />
							<div className={styles.content}>
								<div className={styles.sectionTitle}>
									<div className={styles.featureTitle}>{content.content[++i].text}</div>
									<div className={styles.featureDescription}>{content.content[++i].text}</div>
								</div>
								<Button style="secondary">{content.content[++i].text}</Button>
							</div>
						</div>
						<div className={styles.featureColumn}>
							<img className={styles.cuteSittingImage} src="./images/assets-sitting.png" alt="Cute Sitting" />
							<div className={styles.placeholderImage} />
							<div className={styles.content}>
								<div className={styles.sectionTitle}>
									<div className={styles.featureTitle}>{content.content[++i].text}</div>
									<div className={styles.featureDescription}>{content.content[++i].text}</div>
								</div>
								<Button style="secondary">{content.content[++i].text}</Button>
							</div>
						</div>
					</>
				) : (
					<></>
				)}
			</div>
			<div
				onClick={() => {
					setVisible(true);
				}}
				className={styles.actions}
			>
				<Button style="primary">{content.content[content.content.length - 1].text}</Button>
			</div>
		</div>
	);
};

export default FeaturesSection;
