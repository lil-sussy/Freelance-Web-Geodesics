import React from "react";
import styles from "./HowItWorksSection.module.scss";

const FeaturesSection: React.FC = () => {
	return (
		<div className={styles.featuresSection}>
			<div className={styles.titleContainer}>
				<div className={styles.mainTitle}>How It Works: From Concept to Completion</div>
				<div className={styles.subTitle}>A streamlined process designed to deliver customized solutions efficiently and effectively.</div>
			</div>
			<div className={styles.featureContainer}>
				<div className={styles.featureColumn}>
					<img className={styles.cuteSittingImage} src="./images/assets-sitting.png" alt="Cute Sitting" />
					<div className={styles.placeholderImage} />
					<div className={styles.content}>
						<div className={styles.sectionTitle}>
							<div className={styles.featureTitle}>Initial Consultation</div>
							<ul className={styles.featureDescription}>
								<li>Discuss your project requirements and goals with a personalized consultation. </li>
								<li>Understand your needs and project scope. </li>
								<li>Identify key objectives and desired outcomes.</li>
								<li>Outline a preliminary plan and timeline.</li>
							</ul>
						</div>
					</div>
				</div>
				<div className={styles.featureColumn}>
					<div className={styles.placeholderImage} />
					<div className={styles.content}>
						<div className={styles.sectionTitle}>
							<div className={styles.featureTitle}>Development Phase</div>
							<ul className={styles.featureDescription}>
								<li>Implementing innovative solutions tailored to your specifications.</li>
								<li>Develop and test AI and fullstack components.</li>
								<li>Regular updates and feedback loops to ensure alignment.</li>
								<li>Adjust and refine based on iterative testing and client feedback.</li>
							</ul>
						</div>
					</div>
				</div>
				<div className={styles.featureColumn}>
					<img className={styles.cuteSittingImage} src="./images/assets-sitting.png" alt="Cute Sitting" />
					<div className={styles.placeholderImage} />
					<div className={styles.content}>
						<div className={styles.sectionTitle}>
							<div className={styles.featureTitle}>Project Delivery</div>
							<ul className={styles.featureDescription}>
								<li>Finalize and launch your project with comprehensive support.</li>
								<li>Complete final testing and quality assurance.</li>
								<li>Ensure seamless integration and deployment.</li>
								<li>Provide post-launch support and maintenance.</li>
							</ul>
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
		</div>
	);
};

export default FeaturesSection;
