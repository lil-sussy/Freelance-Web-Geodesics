import React from "react";
import { Collapse, Divider, Typography } from "antd";
import Button from "../Button/Button";
import { RightOutlined } from "@ant-design/icons";
import styles from "./FAQSection.module.scss";

import "./Accordion.scss";
const { Panel } = Collapse;

const FaqSection: React.FC = () => {
	return (
		<div className={styles.faqSection}>
			<div className={styles.container}>
				<div className={styles.sectionTitle}>
					<div className={styles.content}>
						<div className={styles.title}>FAQs</div>
						<div className={styles.subtitle}>Find answers to common questions about my work and services.</div>
						<Button style="primary">More questions?</Button>
					</div>
				</div>
				<div className={styles.accordion}>
					<Collapse accordion expandIcon={({ isActive }) => <RightOutlined rotate={isActive ? 90 : 0} />} className={styles.accordion}>
						<Panel header="What is the typical timeline for a full stack development project?" key="1">
							<div className={styles.answer}>
								<div className={styles.answerdiv}>
									The timeline varies based on the project's complexity but generally ranges from 3 to 6 months. For a more precise timeline, <span className={styles.underline}>Contact us</span> for a consultation.
								</div>
							</div>
						</Panel>
						<Panel header="How do you ensure data security during AI integration projects?" key="2">
							<div className={styles.answer}>
								<div className={styles.answerdiv}>
									We implement industry-standard security protocols including data encryption and secure access controls. Learn more about our <span className={styles.underline}>Data Security Practices</span>.
								</div>
							</div>
						</Panel>
						<Panel header="Are there any ongoing costs after project completion?" key="3">
							<div className={styles.answer}>
								<div className={styles.answerdiv}>Post-delivery, we offer maintenance and support packages, which are billed annually. These are tailored to your needs to ensure optimal performance and updates.</div>
							</div>
						</Panel>
						<Panel header="What measures do you take to ensure project delivery on time and budget?" key="4">
							<div className={styles.answer}>
								<div className={styles.answerdiv}>
									We employ agile project management techniques to ensure timely delivery within your budget. Regular updates and checkpoints allow us to stay aligned with your goals. <span className={styles.underline}>Schedule a Consultation</span> to discuss your project in detail.
								</div>
							</div>
						</Panel>
						<Panel header="What exactly does 'Prompt Engineering' involve?" key="5">
							<div className={styles.answer}>
								<div className={styles.answerdiv}>
									Prompt Engineering involves creating and refining prompts to improve the performance and accuracy of AI models. It helps tailor AI responses to specific tasks, enhancing user interaction and optimizing AI efficiency. This process includes designing, testing, and iteratively improving prompts to ensure the best outcomes for AI applications.{" "}
									<span className={styles.underline}>Learn More</span> or <span className={styles.underline}>Contact Me</span> for details.
								</div>
							</div>
						</Panel>
					</Collapse>
				</div>
			</div>
		</div>
	);
};

export default FaqSection;
