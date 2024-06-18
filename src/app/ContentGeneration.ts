import * as fs from "fs";

type Section = {
	title: string;
	content: Array<{ type: string; text: string }>;
};

type JsonData = {
	fr: Section[];
	en: Section[];
};

export function markdownToJson(markdownContent: string): string {
	const lines = markdownContent.trim().split("\n");

	const jsonData: JsonData = {
		fr: [],
		en: [],
	};

	let section: Section | null = null;

	for (const line of lines) {
		const trimmedLine = line.trim();
		if (!trimmedLine) {
			continue;
		}

		const headerMatch = /^(#+)\s+(.*)/.exec(trimmedLine);
		if (headerMatch) {
			const headerLevel = headerMatch[1].length;
			const headerText = headerMatch[2];

			if (headerLevel === 1) {
				if (section) {
					jsonData.en.push(section);
				}
				section = {
					title: headerText,
					content: [],
				};
			} else {
				if (section) {
					section.content.push({
						type: `h${headerLevel}`,
						text: headerText,
					});
				}
			}
		} else {
			if (trimmedLine.startsWith("* ")) {
				if (section) {
					section.content.push({
						type: "li",
						text: trimmedLine.substring(2),
					});
				}
			} else {
				if (section) {
					section.content.push({
						type: "p",
						text: trimmedLine,
					});
				}
			}
		}
	}

	if (section) {
		jsonData.en.push(section);
	}

	return JSON.stringify(jsonData, null, 4);
}
