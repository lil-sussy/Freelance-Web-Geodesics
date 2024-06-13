import React from "react";
import Button from "../Button/Button";
import { Arrow } from "../Icons";
import styles from "./FirstHeader.module.scss";

const FirstHeader = () => {
	return (
		<div className={styles.Header}>
			<div className={styles.Content}>
				<div className={styles.Space}></div>
				<div className={styles.ContentContainer}>
					<div className={styles.MediumLengthHeroHeadlineGoesHere}>Expert Prompt Engineering and AI Solutions</div>
					<div className={styles.LoremIpsumDolorSitAmetConsecteturAdipiscingElitSuspendisseVariusEnimInErosElementumTristiqueDuisCursusMiQuisViverraOrnareErosDolorInterdumNullaUtCommodoDiamLiberoVitaeErat}>
						<span>Transforming your tech ideas into reality with precision and </span>
						<span className={styles.creative}>innovation.</span>
						<span>Custom AI integrations tailored to streamline your business operations. Full-stack development </span>
						<span className={styles.innovative}>expertise</span>
						<span> from Python to React.</span>
					</div>
					<div className={styles.Actions}>
						<Button style="primary">Contact</Button>
						<Button style="secondary">See my work</Button>
					</div>
				</div>
			</div>
			<div className={styles.Logos}>
				<img src={"./images/webgeodesicslogo.svg"} className={styles.artboard} alt="web geodesics logo" />
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
