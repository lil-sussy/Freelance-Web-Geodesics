import React from "react";
import styles from "./AboutMeSection.module.scss";
import Button from "../Button/Button";

const AboutMeSection: React.FC = () => {
	return (
		<div className={styles.aboutMeSection}>
			<div className={styles.pictureOfMeSide}>
				<img className={styles.womanPhotograph1} src="./images/picture-of-me.png" alt="picture of me professional, confident" />
				<div className={styles.name}>
					<div className={styles.yanRegojo}>Yan Regojo</div>
          <Button style="secondary">Download Resume</Button>
          <img className={styles.linkedin} src="./images/github.svg" alt="Github button" />
					<div className={styles.link}></div>
				</div>
			</div>
			<div className={styles.bentoLayout}>
				<div className={styles.bentoTitle}>
					<div className={styles.aboutMe}>About Me: Passionate AI Developer and Aspiring Researcher</div>
					<div className={styles.myWork}>Welcome to my personal section where I share my journey as a passionate developer, aspiring researcher, and dedicated learner.</div>
				</div>
				<div className={styles.bentoContainer}>
					<div className={styles.bentoDescription}>
						<div className={styles.description}>
							<div>Who I Am</div>
							<div>I am a young and enthusiastic freelance developer based in Paris, specializing in AI integration, fullstack development with Python Django and React, and data analysis. My journey is driven by a deep passion for technology and a relentless pursuit of knowledge.</div>
						</div>
						<div>My Passion</div>
						<div>Every morning, I dive into the world of mathematics and AI, reading a Wikipedia page or a research paper and trying to understand it with the help of ChatGPT. This routine fuels my curiosity and sharpens my problem-solving skills, keeping me at the forefront of the latest advancements in technology.</div>
					</div>
					<div className={styles.bentoSideIcons}>
						<img className={styles.figma} src="./images/chatgpt.png" alt="chatgpt" />
						<img className={styles.midjourney} src="./images/langchain.png" alt="langchain" />
						<img className={styles.chatgpt} src="./images/tensorflow.png" alt="tensorflow" />
						<img className={styles.photoshop} src="./images/django.png" alt="django" />
						<img className={styles.photoshop} src="./images/react.png" alt="react" />
					</div>
					<img className={styles.bentoAsset} src="images/assets_upstanding.png" alt="asset of a woman standing proud" />
					<div className={styles.assetSideContainer}>
						<div className={styles.bentoMissionText}>
							<div className={styles.missionText}>
								<div>My Vision</div>
								<div>As an aspiring AI and data science researcher, I am committed to pushing the boundaries of what is possible with technology. My ultimate goal is to contribute to groundbreaking research and innovative solutions that can make a significant impact on society. Currently, I am working on an AI agent project that I believe will revolutionize the field.</div>
							</div>
						</div>
						<div className={styles.bentoModernText}>
							<div className={styles.modernText}>
								<div>What I Do</div>
								<ul>
									<li>Prompt Engineering: Crafting sophisticated prompts to drive AI behavior.</li>
									<li>AI Agent Development: Building intelligent agents capable of autonomous actions.</li>
									<li>Fullstack Development: Creating robust web applications using Python Django and React.</li>
									<li>AI Integration: Seamlessly integrating AI solutions into existing systems.</li>
									<li>Data Analysis: Turning data into actionable insights.</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
				<div className={styles.bentoContainerCenter}>
					<div className={styles.bentConnectText}>
						<div className={styles.connectText}>
							<div>Let’s connect!</div>
							<div>Bring Your Digital Visions to Life</div>
						</div>
					</div>
					<div className={styles.actions}>
						<img className={styles.linkedin} src="./images/linkedin.png" alt="LinkedIn button" />
						<Button style="primary">Start your journey</Button>
					</div>
				</div>
				<div className={styles.bentoLast}>
					<div className={styles.lastText}>
						<div>Join Me on This Journey</div>
						<div>I invite you to explore my portfolio, learn about my projects, and join me on this exciting journey of discovery and innovation. Feel free to reach out if you're interested in collaboration or have any questions about my work.</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AboutMeSection;
