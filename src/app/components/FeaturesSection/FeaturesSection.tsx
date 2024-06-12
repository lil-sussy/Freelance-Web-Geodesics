import React from "react";
import styles from "./FeaturesSection.module.scss";

const FeaturesSection: React.FC = () => {
	return (
		<div className={styles.featuresSection}>
			<div className={styles.titleContainer}>
				<div className={styles.mainTitle}>Transform Your Business with Advanced AI and Data Insights</div>
				<div className={styles.subTitle}>
					Explore the frontier of technology with our integrated solutions in AI, data analysis, and web development. Leveraging expertise in prompt engineering and AI-driven innovations, we empower your business to thrive in the digital age. Discover how our tailored AI integration can transform your operations and decision-making processes.
				</div>
			</div>
			<div className={styles.featureContainer}>
				<div className={styles.featureColumn}>
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
						<div className={styles.action}>
							<div className={styles.linkContainer}>
								<div className={styles.button}>En savoir plus</div>
								<div className={styles.iconChevronRight}>
									<div className={styles.icon}></div>
								</div>
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
						<div className={styles.action}>
							<div className={styles.linkContainer}>
								<div className={styles.button}>En savoir plus</div>
								<div className={styles.iconChevronRight}>
									<div className={styles.icon}></div>
								</div>
							</div>
							tsx
						</div>
					</div>
				</div>
				<div className={styles.featureColumn}>
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
						<div className={styles.action}>
							<div className={styles.linkContainer}>
								<div className={styles.button}>En savoir plus</div>
								<div className={styles.iconChevronRight}>
									<div className={styles.icon}></div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className={styles.actions}>
				<div className={styles.primaryButtonContainer}>
					<div className={styles.button}>Learn More</div>
				</div>
				<div className={styles.secondaryButtonContainer}>
					<div className={styles.button}>See my work</div>
				</div>
			</div>
			<img className={styles.cuteSittingImage} src="https://via.placeholder.com/447x447" alt="Cute Sitting" />
		</div>
	);
};

export default FeaturesSection;
