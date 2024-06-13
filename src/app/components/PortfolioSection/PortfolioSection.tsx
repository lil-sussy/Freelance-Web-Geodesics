import React from "react";
import styles from "./FeaturesSection.module.scss";

const FeaturesSection: React.FC = () => {
	return (
		<div className={styles.featuresSection}>
			<div className={styles.titleContainer}>
				<div className={styles.mainTitle}>Portfolio Highlights</div>
				<div className={styles.subTitle}>Discover my highlighted projects.</div>
			</div>
			<div className={styles.featureContainer}>
				<div className={styles.featureColumn}>
					<img className={styles.cuteSittingImage} src="./images/assets-sitting.png" alt="Cute Sitting" />
					<div className={styles.placeholderImage} />
					<div className={styles.content}>
						<div className={styles.sectionTitle}>
							<div className={styles.featureTitle}>AI Integration</div>
							<div className={styles.featureDescription}>
								Harness the power of AI to streamline processes and enhance decision-making
								<br />
								Automate routine tasks and increase efficiency.
								<br />
								Integrate intelligent algorithms that adapt to your business needs.
							</div>
						</div>
					</div>
				</div>
				<div className={styles.featureColumn}>
					<div className={styles.placeholderImage} />
					<div className={styles.content}>
						<div className={styles.sectionTitle}>
							<div className={styles.featureTitle}>Data Analysis</div>
							<div className={styles.featureDescription}>
								Turn complex data into actionable insights.
								<br />
								Analyze trends to drive strategic business decisions.
								<br />
								Leverage data visualization to simplify complex information.
							</div>
						</div>
					</div>
				</div>
				<div className={styles.featureColumn}>
					<img className={styles.cuteSittingImage} src="./images/assets-sitting.png" alt="Cute Sitting" />
					<div className={styles.placeholderImage} />
					<div className={styles.content}>
						<div className={styles.sectionTitle}>
							<div className={styles.featureTitle}>Web Development</div>
							<div className={styles.featureDescription}>
								Build dynamic and scalable web solutions.
								<br />
								Custom websites tailored to engage and captivate your audience.
								<br />
								Responsive designs that ensure seamless user experience across all devices.
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className={styles.actions}>
				<div className={styles.secondaryButtonContainer}>
					<div className={styles.button}>View all</div>
				</div>
			</div>
		</div>
	);
};

export default FeaturesSection;
