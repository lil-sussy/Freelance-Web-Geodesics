import React, { useState  } from "react";
import Button from "../Button/Button";
import styles from "./CTASection.module.scss";
import { Input } from "antd";
import { MailFilled } from "@ant-design/icons";
import { message as AntMessage } from "antd";

// Define the props type
type Cta7Props = {
	content: {
		title: string;
		content: Array<{ type: string; text: string }>;
	};
  switchContact: () => void;
  setContactFormContent: (content: { title: string; placeholder: string; succes: string; error: string }) => void;
};

const contactFormContent1 = {
	title: "Get a Personalized Quote for Your Project",
	placeholder: "Describe your project for a free quote...",
	succes: "Thank you! I will prepare your quote and get back to you shortly.",
	error: "Error! Your message couldn't be sent. Please retry.",
	text: "I'm interested in your AI integration services. Can you give me a quote for my project?",
};
const contactFormContent2 = {
	title: "Schedule Your First Consultation",
	placeholder: "Tell me about your needs for a consultation...",
	succes: "YThank you! Your consultation has been scheduled. I will be in touch soon.",
	error: "Error! Your message couldn't be sent. Please retry.",
	text: "I need a consultation to understand the best AI solutions for my company.",
};

const Cta7: React.FC<Cta7Props> = ({ content, switchContact, setContactFormContent }) => {
  const [email, setEmail] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [success, setSuccess] = useState<string>("");

  const validateEmail = (email: string): boolean => {
		const re = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
		return re.test(String(email).toLowerCase());
	};

  const handleSubmit = (): void => {
		setError("");
		setSuccess("");

		if (!validateEmail(email)) {
			setError("Please enter a valid email address.");
			return;
		}

		fetch("/api/contact", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ name: "Simple Newsletter subscription", email, text: "Simple Newsletter subscription" }),
		})
			.then((response) => {
				if (!response.ok) {
					throw new Error("Network response was not ok");
				}
				return response.json();
			})
			.then(() => {
				setSuccess("Thank you for your feedback!");
				setEmail("");
				AntMessage.success("Thank you for your contact submission, you will hear back from me soon!");
			})
			.catch((err) => {
				setError("Something went wrong. Please try again later.");
				AntMessage.error("Something went wrong. Please try again later.");
			});
	};
  
	let i = 0;
	return (
		<div className={styles.ctaContainer}>
			<div className={styles.ctaSection}>
				<div className={styles.ctaContent}>
					<div className={styles.ctaRow}>
						<div className={styles.ctaHeading}>{content.content[i].text}</div>
						<div className={styles.ctaText}>{content.content[++i].text}</div>
					</div>
				</div>
				<div className={styles.ctaActions}>
					<Button
						onClick={() => {
							switchContact();
							setContactFormContent(contactFormContent1);
						}}
						style="primary"
					>
						{content.content[++i].text}
					</Button>
					<Button
						onClick={() => {
							switchContact();
							setContactFormContent(contactFormContent2);
						}}
						style="secondary"
					>
						{content.content[++i].text}
					</Button>
				</div>
			</div>
			<div className={styles.ctaSection}>
				<div className={styles.frameContainer}>
					<div className={styles.ctaContent}>
						<div className={styles.ctaRow}>
							<div className={styles.ctaHeading}>{content.content[++i].text}</div>
							<div className={styles.ctaText}>{content.content[++i].text}</div>
						</div>
					</div>
					<div className={styles.frameContainer}>
						<div className={styles.ctaActions}>
							<Input size="large" onSubmit={() => handleSubmit()} value={email} placeholder={content.content[++i].text} prefix={<MailFilled />} />
							<Button onClick={() => handleSubmit()} style="primary">
								{content.content[++i].text}
							</Button>
						</div>
						<div className={styles.ctaFooterText}>{content.content[++i].text}</div>
					</div>
				</div>
				<img className={styles.ctaImage} src="./images/assets_upstanding.png" alt="Bento Asset" />
			</div>
		</div>
	);
};

export default Cta7;
