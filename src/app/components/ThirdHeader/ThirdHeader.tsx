import React from "react";
import Button from "../Button/Button";
import styles from "./ThirdHeader.module.scss";

const ThirdHeader = () => {
	return (
		<div className={styles.ThirdHeader}>
			<div className={styles.Container}>
				<div className={styles.ImageContainer}>
					<img className={styles.BentoAsset} src={"images/assets_upstanding.png"} alt="Header Image" />
				</div>
				<div className={styles.ContainerInner}>
					<div className={styles.Content}>
						<div className={styles.Heading}>Empower Your Projects with Freelance AI and Fullstack Expertise</div>
						<div className={styles.Text}>Discover the competitive edge of integrating specialized freelance skills into your technology strategy. Leverage cutting-edge artificial intelligence to enhance automation, data analysis, and user experience. Gain the flexibility of comprehensive development services from backend to frontend.</div>
					</div>
					<div className={styles.Actions}>
						<Button style="primary">Contactez-moi</Button>
						<Button style="secondary">Voir mon travail</Button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ThirdHeader;
