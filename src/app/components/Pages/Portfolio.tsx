import React, { useEffect, useState, useRef } from "react";
import Markdown from "markdown-to-jsx";
import styles from "./Portfolio.module.scss";
import pageStyles from "../../Page.module.scss";

interface PortfolioProps {
	locale: string;
	scroll: number;
	content: any;
}

const imagePaths = ["./images/PortfolioSection/AIAgent.png", "./images/PortfolioSection/DRK.png", "./images/PortfolioSection/Demetrius.png", "./images/PortfolioSection/NeptuneProject.png"];

const Portfolio: React.FC<PortfolioProps> = ({ content, locale, scroll }) => {
	const [sections, setSections] = useState<string[][]>([]);
	const [error, setError] = useState<string | null>(null);
	const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

	useEffect(() => {
    const primarySections = content.split(/---\n\n---/);
    const splitSections = primarySections.map((section: string) => section.split("---\n\n**Project Image or Screenshot:**\n*Insert Project Image or Screenshot Here*\n\n---"));
    setSections(splitSections);
	}, [locale]);

	useEffect(() => {
		if (sectionRefs.current[scroll]) {
			sectionRefs.current[scroll]?.scrollIntoView({ behavior: "smooth" });
		}
	}, [scroll, sections]);

	if (error) {
		return <div>Error: {error}</div>;
	}

	if (sections.length === 0) {
		return <div>Loading...</div>;
	}

	return (
		<>
			{sections.map((section, sectionIndex) => (
				<div
					className={`${styles.section} ${pageStyles.content}`}
          id={`section${sectionIndex + 1}`}
					key={sectionIndex}
					ref={(el) => {
						sectionRefs.current[sectionIndex] = el;
					}}
				>
					{section.map((subSection, subIndex) => (
						<div key={subIndex} className={styles.subsection}>
							<Markdown>{subSection}</Markdown>
							{subIndex < section.length - 1 && <img src={imagePaths[subIndex % imagePaths.length]} alt={`Section ${subIndex + 1}`} style={{ width: "100%", margin: "20px 0" }} />}
						</div>
					))}
				</div>
			))}
		</>
	);
};

export default Portfolio;
