import React from "react";
import Button from "../Button/Button";
import { Arrow } from "../Icons";
import styles from "./FirstHeader.module.scss";

const FirstHeader: React.FC = () => {
	return (
		<header className={styles.header}>
			<div className={styles.content}>
				<div className={styles.space}></div>
				<div className={styles.contentContainer}>
					<h1 className={styles.headline}>Expert Prompt Engineering and AI Solutions</h1>
					<p className={styles.description}>
						<span>Transforming your tech ideas into reality with precision and </span>
						<span className={styles.highlight}>innovation</span>.
						<br />
						<span>
							Custom AI integrations tailored to streamline your business operations.
							<br />
							Full-stack development{" "}
						</span>
						<span className={styles.highlight}>expertise</span>
						<span> from Python to React.</span>
					</p>
					<div className={styles.actions}>
						<Button style="primary">Contact</Button>
						<Button style="secondary">See my work</Button>
					</div>
				</div>
			</div>
			<div className={styles.logos}>
        <div className={styles.wrapper}>
          <img src={"./images/webgeodesicslogo.svg"} className={styles.logoImage} alt="web geodesics logo" />
          <div className={styles.logoText}>
            WEB
            <br />
            GEODESICS
          </div>
        </div>
				<div className={styles.arrow}>
					<Arrow />
				</div>
			</div>
		</header>
	);
};

export default FirstHeader;
