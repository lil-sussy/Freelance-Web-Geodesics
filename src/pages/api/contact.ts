import type { NextApiRequest, NextApiResponse } from "next";
import { db } from "../../app/firebase";
import nodemailer from "nodemailer";

const validateEmail = (email: string): boolean => {
	const re = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
	return re.test(String(email).toLowerCase());
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	if (req.method === "POST") {
		const { name, email, message } = req.body;

		if (!name || !email || !message) {
			return res.status(400).json({ error: "All fields are required." });
		}

		if (!validateEmail(email)) {
			return res.status(400).json({ error: "Please enter a valid email address." });
		}

		try {
			await db.collection("contacts").add({ name, email, message, timestamp: new Date() });

			const transporter = nodemailer.createTransport({
				service: "gmail",
				auth: {
					user: process.env.EMAIL_USER,
					pass: process.env.EMAIL_PASS,
				},
			});

			const mailOptions = {
				from: process.env.EMAIL_USER,
				to: process.env.EMAIL_RECEIVER,
				subject: "New Contact Form Submission",
				text: `You have a new contact form submission from ${name} (${email}):\n\n${message}`,
			};

			await transporter.sendMail(mailOptions);

			res.status(200).json({ message: "Feedback submitted successfully." });
		} catch (error) {
			res.status(500).json({ error: "Something went wrong." });
		}
	} else {
		res.setHeader("Allow", ["POST"]);
		res.status(405).end(`Method ${req.method} Not Allowed`);
	}
}
