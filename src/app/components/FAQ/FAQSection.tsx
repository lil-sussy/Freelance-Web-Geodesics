import React from "react";
import { Collapse, Divider, Typography } from "antd";
import Button from "../Button/Button";
import { RightOutlined } from "@ant-design/icons";
import styles from "./FAQSection.module.scss";

import "./Accordion.scss";
const { Panel } = Collapse;

// Define the props type
type FaqSectionProps = {
	content: {
		title: string;
		content: Array<{ type: string; text: string }>;
	};
};

const FaqSection: React.FC<FaqSectionProps> = ({ content }) => {
	let i = 0;
	return (
		<div className={styles.faqSection}>
			<div className={styles.container}>
				<div className={styles.sectionTitle}>
					<div className={styles.content}>
						<div className={styles.title}>{content.content[i].text}</div>
						<div className={styles.subtitle}>{content.content[++i].text}</div>
						<Button style="primary">{content.content[++i].text}</Button>
					</div>
				</div>
				<div className={styles.accordion}>
					<Collapse accordion expandIcon={({ isActive }) => <RightOutlined rotate={isActive ? 90 : 0} />} className={styles.accordion}>
						{content.content.slice(++i, -1).map((item, index) => (
							<Panel header={content.content[index+i].text} key={index + 1}>
								<div className={styles.answer}>
									<div className={styles.answerdiv}>{content.content[index+i+1].text}</div>
								</div>
							</Panel>
						))}
					</Collapse>
				</div>
			</div>
		</div>
	);
};

export default FaqSection;
