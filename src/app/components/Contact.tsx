import styles from "./ContactForm.module.scss";
import { Input, Form, message as AntMessage } from "antd";
import Button from "./Button/Button";
import React, { useState, ChangeEvent } from "react";

const { TextArea } = Input;

type ContactProps = {
	content: {
		title: string;
    placeholder: string;
    succes: string;
    error: string;
    text?: string;
	};
};

const ContactPage: React.FC<ContactProps> = ({ content }) => {
	const [name, setName] = useState<string>("");
	const [email, setEmail] = useState<string>("");
	const [message, setMessage] = useState<string>(content.text ? content.text : "");
	const [error, setError] = useState<string>("");
	const [success, setSuccess] = useState<string>("");

	const validateEmail = (email: string): boolean => {
		const re = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
		return re.test(String(email).toLowerCase());
	};

	const handleSubmit = (): void => {
		setError("");
		setSuccess("");

		if (!name || !email || !message) {
			setError("All fields are required.");
			return;
		}

		if (!validateEmail(email)) {
			setError("Please enter a valid email address.");
			return;
		}

		fetch("/api/contact", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ name, email, message }),
		})
			.then((response) => {
				if (!response.ok) {
					throw new Error("Network response was not ok");
				}
				return response.json();
			})
			.then(() => {
				setSuccess("Thank you for your feedback!");
				setName("");
				setEmail("");
				setMessage("");
				AntMessage.success("Thank you for your contact submission, you will hear back from me soon!");
			})
			.catch((err) => {
				setError("Something went wrong. Please try again later.");
				AntMessage.error("Something went wrong. Please try again later.");
			});
	};

	return (
		<div className={styles.centeringDiv}>
			<div className={styles.feedbackSection}>
				<div className={styles.feedbackContainer}>
					<div className={styles.contentContainer}>
						<div className={styles.formWrapper}>
							<div className={styles.feedbackTitle}>{content.title ? content.title : "Contact form submission"}</div>
							<Form className={styles.feedbackForm} onFinish={handleSubmit}>
								<div className={styles.inputGroup}>
									<Form.Item>
										<Input name="Name" placeholder="Your name" value={name} onChange={(e: ChangeEvent<HTMLInputElement>) => setName(e.target.value)} />
									</Form.Item>
									<Form.Item>
										<Input name="Email" placeholder="Your email" value={email} onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)} />
									</Form.Item>
								</div>
								<Form.Item>
									<TextArea name="Message" placeholder={content.placeholder} rows={10} value={message} onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setMessage(e.target.value)} />
								</Form.Item>
								<Form.Item>
									<Button onClick={() => handleSubmit()} style="primary">
										Submit
									</Button>
								</Form.Item>
								{error && <div className={styles.errorMessage}>{error}</div>}
								{success && <div className={styles.successMessage}>{success}</div>}
							</Form>
						</div>
						<img className={styles.imageConfident} src="./images/assets-board.png" alt="Dr K confident" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default ContactPage;
