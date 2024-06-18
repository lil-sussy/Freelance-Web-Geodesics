import React from "react";
import Button from "../Button/Button";
import styles from "./SecondHeader.module.scss";

// Define the props type
type SecondHeaderProps = {
	content: {
		title: string;
		content: Array<{ type: string; text: string }>;
	};
};

const SecondHeader: React.FC<SecondHeaderProps> = ({ content }) => {
  let i = 0;
	return (
		<div className={styles.secondHeader}>
			<div className={styles.headerContainer}>
				<div className={styles.headerContent}>
					<div className={styles.headerContentContainer}>
						<div className={styles.headerMainContent}>
							<div className={styles.headerHeading}>{content.content[i].text}</div>
							<div className={styles.headerText}>{content.content[++i].text}</div>
							<div className={styles.headerColumns}>
								<div className={styles.headerItem}>
									<h3>{content.content[++i].text}</h3>
									<ul>
										<li>{content.content[++i].text}</li>
										<li>{content.content[++i].text}</li>
										<li>{content.content[++i].text}</li>
										<li>{content.content[++i].text}</li>
									</ul>
								</div>
								<div className={styles.headerItem}>
									<h3>{content.content[++i].text}</h3>
									<ul>
										<li>{content.content[++i].text}</li>
										<li>{content.content[++i].text}</li>
										<li>{content.content[++i].text}</li>
									</ul>
								</div>
							</div>
						</div>
						{/* <div className={styles.headerActions}>
              <Button style="primary">Contactez-moi</Button>
              <Button style="secondary">Voir mon travail</Button>
            </div> */}
					</div>
				</div>
				<img className={styles.headerImage} src={"./images/assets-board.png"} alt="Board Image" />
			</div>
		</div>
	);
};

export default SecondHeader;
