import styles from "./ContactForm.module.scss";
import { Button, Input, Form, message as AntMessage } from "antd";
import React, { useState, ChangeEvent } from "react";

const { TextArea } = Input;

const ContactSection: React.FC = () => {
	const [name, setName] = useState<string>("");
	const [email, setEmail] = useState<string>("");
	const [message, setMessage] = useState<string>("");
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
				AntMessage.success("Thank you for your feedback!");
			})
			.catch((err) => {
				setError("Something went wrong. Please try again later.");
				AntMessage.error("Something went wrong. Please try again later.");
			});
	};

	return (
		<div className={styles.CenteringDiv}>
			<div className={styles.FeedbackSection}>
				<div className={styles.WhiteContainer}>
					<div className={styles.ContentContainer}>
						<div className={styles.FormContainer}>
							<div className={styles.AnyQuestionsOrFeedback}>Any questions or Feedback?</div>
							<div className={styles.Rectangle4}></div>
							<Form className={styles.Form} onFinish={handleSubmit}>
								<div className={styles.Frame13}>
									<Form.Item>
										<Input name="Name" placeholder="Your name" value={name} onChange={(e: ChangeEvent<HTMLInputElement>) => setName(e.target.value)} />
									</Form.Item>
									<Form.Item>
										<Input name="Email" placeholder="Your email" value={email} onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)} />
									</Form.Item>
								</div>
								<Form.Item>
									<TextArea name="Message" placeholder="Your message" rows={10} value={message} onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setMessage(e.target.value)} />
								</Form.Item>
								<Form.Item>
									<Button type="primary" htmlType="submit">
										Submit
									</Button>
								</Form.Item>
								{error && <div className={styles.Error}>{error}</div>}
								{success && <div className={styles.Success}>{success}</div>}
							</Form>
						</div>
						<img className={styles.DrkConfident} src="./dr k confident 2.png" alt="Dr K confident" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default ContactSection;
