import React from "react";
import Button from "../Button/Button";
import bentoAsset from "./assets_upstanding.png"; // Ensure the path is correct for your project
import styles from "./ThirdHeader.module.scss";

const ThirdHeader = () => {
	return (
		<div className={styles.ThirdHeader}>
			<div className={styles.Container}>
				<div className={styles.ImageContainer}>
					<img className={styles.BentoAsset} src={bentoAsset} alt="Header Image" />
				</div>
				<div className={styles.ContainerInner}>
					<div className={styles.Content}>
						<div className={styles.Heading}>Faites concevoir votre site web par des professionnels</div>
						<div className={styles.Text}>Mon agence est spécialisée dans la création de sites web de haute qualité pour les propriétaires de petites entreprises. Grâce à mon expertise et mon souci du détail, je garantie un site non seulement esthétiquement attrayant, mais aussi facile à utiliser et optimisé pour les moteurs de recherche.</div>
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
