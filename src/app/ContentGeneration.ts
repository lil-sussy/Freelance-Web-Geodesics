import * as fs from "fs";

type Section = {
	title: string;
	content: Array<{ type: string; text: string }>;
};

type JsonData = {
	content: Section[];
};

export function markdownToJson(markdownContent: string): string {
	const sections = markdownContent
		.split("---")
		.map((section) => section.trim())
		.filter(Boolean);
	const jsonData: JsonData = { content: [] };

	sections.forEach((sectionContent, index) => {
		const lines = sectionContent
			.split("\n")
			.map((line) => line.trim())
			.filter(Boolean);
		const section: Section = {
			title: `section ${index + 1}`,
			content: [],
		};

		lines.forEach((line) => {
			if (line.startsWith("# ")) {
				section.content.push({ type: "h1", text: line.substring(2) });
			} else if (line.startsWith("## ")) {
				section.content.push({ type: "h2", text: line.substring(3) });
			} else if (line.startsWith("* ")) {
				section.content.push({ type: "li", text: line.substring(2) });
			} else {
				section.content.push({ type: "p", text: line });
			}
		});

		jsonData.content.push(section);
	});

	return JSON.stringify(jsonData, null, 4);
}
