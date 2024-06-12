import React from "react";
import styles from "./CTASection.module.scss";

const Cta7: React.FC = () => {
	return (
		<div className={styles.ctaContainer}>
			<div className={styles.ctaSection}>
				<div className={styles.ctaContent}>
					<div className={styles.ctaRow}>
						<div className={styles.ctaHeading}>Ready to Elevate Your Tech?</div>
						<div className={styles.ctaText}>Connect with a leading expert in AI and Fullstack Development today.</div>
					</div>
				</div>
				<div className={styles.ctaActions}>
					<div className={styles.primaryButtonContainer}>
						<div className={styles.primaryButton}>Get a Free Quote</div>
					</div>
					<div className={styles.secondaryButtonContainer}>
						<div className={styles.secondaryButton}>Schedule a Consultation</div>
					</div>
				</div>
			</div>
			<div className={styles.ctaSection}>
				<div className={styles.frameContainer}>
					<div className={styles.ctaContent}>
						<div className={styles.ctaRow}>
							<div className={styles.ctaHeading}>Stay Ahead of the Curve</div>
							<div className={styles.ctaText}>Subscribe to our newsletter for exclusive insights and the latest tech updates.</div>
						</div>
					</div>
					<div className={styles.frameContainer}>
						<div className={styles.ctaActions}>
							<div className={styles.secondaryButtonContainer}>
								<div className={styles.secondaryButton}>Enter your email</div>
							</div>
							<div className={styles.primaryButtonContainer}>
								<div className={styles.primaryButton}>Get a Free Quote</div>
							</div>
						</div>
						<div className={styles.ctaFooterText}>By clicking Sign Up, you confirm that you agree to our Terms and Conditions.</div>
					</div>
				</div>
				<img className={styles.ctaImage} src="./images/assets_upstanding.png" alt="Bento Asset" />
			</div>
		</div>
	);
};

export default Cta7;
