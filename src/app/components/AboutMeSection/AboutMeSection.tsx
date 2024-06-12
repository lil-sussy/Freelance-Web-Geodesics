import React from "react";
import styles from "./AboutMeSection.module.scss";

const AboutMeSection: React.FC = () => {
	return (
		<div className={styles.aboutMeSection}>
			<div className={styles.pictureOfMeSide}>
				<img className={styles.womanPhotograph1} src="/photoOfMe.png" alt="picture of me professional, confident" />
				<div className={styles.name}>
					<div className={styles.yanRegojo}>Yan Regojo</div>
					<div className={styles.downloadButton}>
						<div className={styles.button}>Télécharger le CV</div>
					</div>
					<div className={styles.link}></div>
				</div>
			</div>
			<div className={styles.bentoLayout}>
				<div className={styles.bentoTitle}>
					<div className={styles.aboutMe}>À propos de Yan R.</div>
					<div className={styles.myWork}>Maestro du Web Design avec une Touche Moderne</div>
				</div>
				<div className={styles.bentoContainer}>
					<div className={styles.bentoDescription}>
						<div className={styles.description}>
							<span>
								Pionnier Numérique et Centrale Créative
								<br />
							</span>
							<span>
								Depuis le début de mon parcours web à 15 ans, j'ai été à l'avant-garde de l'innovation en ligne. À 16 ans, j'avais déjà fait le grand saut de passionné apprenti à créateur professionnel, en vendant mon premier site web. Aujourd'hui, je mêle l'exubérance juvénile à la technologie de pointe en IA pour offrir des expériences web exceptionnelles adaptées à l'ère
								moderne. Mon expertise autodidacte ne consiste pas seulement à suivre l'évolution numérique – je cherche à en définir le rythme.
							</span>
						</div>
					</div>
					<div className={styles.bentoSideIcons}>
						<img className={styles.figma} src="https://via.placeholder.com/70x70" alt="Figma" />
						<img className={styles.midjourney} src="https://via.placeholder.com/60x60" alt="Midjourney" />
						<img className={styles.chatgpt} src="https://via.placeholder.com/60x62" alt="ChatGPT" />
						<img className={styles.photoshop} src="https://via.placeholder.com/60x60" alt="Photoshop" />
					</div>
					<img className={styles.bentoAsset} src="./bento-asset.png" alt="asset of a woman standing proud" />
					<div className={styles.assetSideContainer}>
						<div className={styles.bentoMissionText}>
							<div className={styles.missionText}>
								<span>
									Élevez Votre Vision avec une Expertise Sur Mesure
									<br />
								</span>
								<span>
									Votre Vision Unique, Notre Mission Commune Ensemble, nous transformerons votre vision en une expérience numérique distinctive. Avec une compréhension approfondie de votre marque et une collaboration continue, les sites web que je crée ne sont pas seulement visuellement impressionnants, mais une véritable représentation du cœur et de l'âme de votre entreprise
									dans le domaine numérique.
								</span>
							</div>
						</div>
						<div className={styles.bentoModernText}>
							<div className={styles.modernText}>
								<span>
									Une Fusion Moderne de Design et Technologie
									<br />
								</span>
								<span>
									Conception Web Améliorée par IA : Au-delà de l'esthétique, j'intègre des technologies IA intelligentes pour créer des sites web qui sont intuitifs et innovants, offrant une expérience utilisateur sophistiquée et engageante.
									<br />
								</span>
								<span>
									<br />
								</span>
								<span>
									Expérience Utilisateur au Centre : Les interfaces centrées sur l'utilisateur sont au cœur de mes conceptions, assurant simplicité, engagement et facilité d'utilisation pour captiver les visiteurs et les inciter à revenir.
									<br />
									Solutions Réactives : Je crée des sites web avec une fluidité réactive, assurant une performance stellaire et une expérience utilisateur transparente sur tout appareil ou plateforme.
								</span>
							</div>
						</div>
					</div>
				</div>
				<div className={styles.bentoContainerCenter}>
					<div className={styles.bentConnectText}>
						<div className={styles.connectText}>
							<span>
								Connectons-nous
								<br />
							</span>
							<span>Transformez vos aspirations numériques en réalité</span>
						</div>
					</div>
					<div className={styles.actions}>
						<img className={styles.linkedin} src="https://via.placeholder.com/93x93" alt="LinkedIn button" />
						<div className={styles.button}>
							<div className={styles.button}>Commencez maintenant</div>
						</div>
					</div>
				</div>
				<div className={styles.bentoLast}>
					<div className={styles.lastText}>
						<span>
							{" "}
							Restez à la Pointe des Tendances Avant-gardistes
							<br />
						</span>
						<span>Constamment immergé dans les derniers développements web, je m'assure que votre présence en ligne ne soit pas seulement actuelle mais aussi prête pour l'avenir, attirant de nouvelles générations et établissant des références dans l'industrie.</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AboutMeSection;
