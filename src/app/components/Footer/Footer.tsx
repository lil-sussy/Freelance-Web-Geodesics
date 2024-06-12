import React from "react";
import styles from "./Footer.module.scss";

const Footer: React.FC = () => {
	return (
		<div className={styles.footer}>
			<div className={styles.content}>
				<div className={styles.logoSection}>
					<img src={"./images/webgeodesicslogo.svg"} className={styles.logoContainer} alt="web geodesics logo" />
					<div className={styles.logoContainer}></div>
				</div>
				<div className={styles.linksSection}>
					<div className={styles.link}>Services</div>
					<div className={styles.link}>Portfolio</div>
					<div className={styles.link}>Contactez-moi</div>
					<div className={styles.link}>FAQ</div>
				</div>
				<div className={styles.socialLinksSection}>
					<div className={styles.socialIcon}>
						<div className={styles.facebookIcon}></div>
					</div>
					<div className={styles.socialIcon}>
						<div className={styles.instagramIcon}></div>
					</div>
					<div className={styles.socialIcon}>
						<div className={styles.twitterIcon}></div>
					</div>
					<div className={styles.socialIcon}>
						<div className={styles.linkedinIcon}></div>
					</div>
					<div className={styles.socialIcon}>
						<div className={styles.youtubeIcon}></div>
					</div>
				</div>
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
