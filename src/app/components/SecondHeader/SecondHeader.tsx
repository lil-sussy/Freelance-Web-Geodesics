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
							<div className={styles.Heading}>Expertise in Prompt Engineering, AI Agent Development, and Fullstack Development</div>
							<div className={styles.Text}>As a dedicated freelancer, I specialize in creating bespoke technological solutions that cater precisely to your business needs.</div>
							<div className={styles.columnsContainer}>
								<div className={styles.item}>
									<h3>Prompt Engineering</h3>
									<ul>
										<li>I provide customized prompt engineering services to enhance the efficiency and effectiveness of your AI applications.</li>
										<li>Development of tailored prompts that improve user interaction.</li>
										<li>Seamless integration with existing AI systems</li>
									</ul>
								</div>
								<div className={styles.item}>
									<h3>AI Agent Development</h3>
									<ul>
										<li>I craft intelligent AI agents that are designed to solve complex problems and drive innovation in your business.</li>
										<li>Building robust, scalable AI solutions customized to meet unique challenges.</li>
										<li>Ensuring smooth deployment and integration into business processes.</li>
									</ul>
								</div>
							</div>
						</div>
						{/* <div className={styles.Actions}>
							<Button style="primary">Contactez-moi</Button>
							<Button style="secondary">Voir mon travail</Button>
						</div> */}
					</div>
				</div>
				<img className={styles.BoardAsset} src={"./images/assets_cute_board.png"} alt="Board Image" />
			</div>
		</div>
	);
};

export default SecondHeader;
