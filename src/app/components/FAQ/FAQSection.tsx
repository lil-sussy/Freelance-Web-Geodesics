import React from "react";
import styles from "./FAQSection.module.scss";

const FaqSection: React.FC = () => {
	return (
		<div className={styles.faqSection}>
			<div className={styles.container}>
				<div className={styles.sectionTitle}>
					<div className={styles.content}>
						<div className={styles.title}>FAQs</div>
						<div className={styles.subtitle}>Find answers to common questions about our web design and development services.</div>
					</div>
					<div className={styles.moreQuestionsButtonContainer}>
						<div className={styles.moreQuestionsButton}>More questions?</div>
					</div>
				</div>
				<div className={styles.accordion}>
					<div className={styles.accordionItem}>
						<div className={styles.divider} />
						<div className={styles.question}>
							<div className={styles.questionText}>What is the typical timeline for a full stack development project?</div>
							<div className={styles.icon}>
								<div className={styles.iconVector}></div>
							</div>
						</div>
						<div className={styles.answer}>
							<div className={styles.answerText}>
								The timeline varies based on the project's complexity but generally ranges from 3 to 6 months. For a more precise timeline, <span className={styles.underline}>Contact us</span> for a consultation.
							</div>
						</div>
					</div>
					<div className={styles.accordionItem}>
						<div className={styles.divider} />
						<div className={styles.question}>
							<div className={styles.questionText}>How do you ensure data security during AI integration projects?</div>
							<div className={styles.icon}>
								<div className={styles.iconVector}></div>
							</div>
						</div>
						<div className={styles.answer}>
							<div className={styles.answerText}>
								We implement industry-standard security protocols including data encryption and secure access controls. Learn more about our <span className={styles.underline}>Data Security Practices</span>.
							</div>
						</div>
					</div>
					<div className={styles.accordionItem}>
						<div className={styles.divider} />
						<div className={styles.question}>
							<div className={styles.questionText}>Are there any ongoing costs after project completion?</div>
							<div className={styles.icon}>
								<div className={styles.iconVector}></div>
							</div>
						</div>
						<div className={styles.answer}>
							<div className={styles.answerText}>Post-delivery, we offer maintenance and support packages, which are billed annually. These are tailored to your needs to ensure optimal performance and updates.</div>
						</div>
					</div>
					<div className={styles.accordionItem}>
						<div className={styles.divider} />
						<div className={styles.question}>
							<div className={styles.questionText}>What measures do you take to ensure project delivery on time and budget?</div>
							<div className={styles.icon}>
								<div className={styles.iconVector}></div>
							</div>
						</div>
						<div className={styles.answer}>
							<div className={styles.answerText}>
								We employ agile project management techniques to ensure timely delivery within your budget. Regular updates and checkpoints allow us to stay aligned with your goals. <span className={styles.underline}>Schedule a Consultation</span> to discuss your project in detail.
							</div>
						</div>
					</div>
					<div className={styles.accordionItem}>
						<div className={styles.divider} />
						<div className={styles.question}>
							<div className={styles.questionText}>What exactly does "Prompt Engineering" involve?</div>
							<div className={styles.icon}>
								<div className={styles.iconVector}></div>
							</div>
						</div>
						<div className={styles.answer}>
							<div className={styles.answerText}>
								Prompt Engineering involves creating and refining prompts to improve the performance and accuracy of AI models. It helps tailor AI responses to specific tasks, enhancing user interaction and optimizing AI efficiency. This process includes designing, testing, and iteratively improving prompts to ensure the best outcomes for AI applications.{" "}
								<span className={styles.underline}>Learn More</span> or <span className={styles.underline}>Contact Me</span> for details.
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default FaqSection;
