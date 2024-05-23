import React from "react";
import Button from "../Button/Button";
import styles from "./SecondHeader.module.scss";

const SecondHeader = () => {
	return (
		<div className={styles.SecondHeader}>
			<div className={styles.Container}>
				<div className={styles.Content}>
					<div className={styles.ContentContainer}>
						<div className={styles.Content}>
							<div className={styles.Heading}>Dynamisez votre entreprise avec un site web professionnel</div>
							<div className={styles.Text}>Un site web professionnel peut aider votre petite entreprise à se développer et à attirer davantage de clients. Il établit une présence en ligne forte, met en valeur vos produits ou services et renforce votre crédibilité.</div>
						</div>
						<div className={styles.Actions}>
							<Button style="primary">Contactez-moi</Button>
							<Button style="secondary">Voir mon travail</Button>
						</div>
					</div>
				</div>
				<img className={styles.BoardAsset} src={"./images/assets_cute_board.png"} alt="Board Image" />
			</div>
		</div>
	);
};

export default SecondHeader;
