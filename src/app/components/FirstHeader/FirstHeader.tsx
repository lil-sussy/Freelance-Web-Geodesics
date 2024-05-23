import React from "react";
import logo from "./webgeodesicslogo.svg";
import arrow from "./images/arrow.svg";
import Button from "../Button/Button";
import { Arrow } from "../Icons";
import styles from "./FirstHeader.module.scss";

const FirstHeader = () => {
	return (
		<div className={styles.Header}>
			<div className={styles.Content}>
				<div className={styles.Space}></div>
				<div className={styles.ContentContainer}>
					<div className={styles.MediumLengthHeroHeadlineGoesHere}>Transformer les idées en sites web sublimes</div>
					<div className={styles.LoremIpsumDolorSitAmetConsecteturAdipiscingElitSuspendisseVariusEnimInErosElementumTristiqueDuisCursusMiQuisViverraOrnareErosDolorInterdumNullaUtCommodoDiamLiberoVitaeErat}>
						<span>Partenaire </span>
						<span className={styles.creative}>créatif</span>
						<span> en conception web, réalisez une présence en ligne pour votre marque aussi </span>
						<span className={styles.innovative}>innovante</span>
						<span> que votre vision.</span>
					</div>
					<div className={styles.Actions}>
						<Button style="primary">Contact</Button>
						<Button style="secondary">Voir mon travail</Button>
					</div>
				</div>
			</div>
			<div className={styles.Logos}>
				<img src={logo} className={styles.artboard} alt="web geodesics logo" />
				<div className={styles.WebGeodesics}>
					WEB
					<br />
					GEODESICS
				</div>
				<div className={styles.arrow}>
					<Arrow />
				</div>
			</div>
		</div>
	);
};

export default FirstHeader;
