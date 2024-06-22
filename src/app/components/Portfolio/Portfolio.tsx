import React, { useEffect, useState, useRef } from "react";

interface PortfolioProps {
	locale: string;
	scroll: number;
}

const imagePaths = ["./images/PortfolioSection/AIAgent.png", "./images/PortfolioSection/DRK.png", "./images/PortfolioSection/Demetrius.png", "./images/PortfolioSection/NeptuneProject.png"];

const Portfolio: React.FC<PortfolioProps> = ({ locale, scroll }) => {
	const [sections, setSections] = useState<string[][]>([]);
	const [error, setError] = useState<string | null>(null);
	const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

	useEffect(() => {
		setError(null); // Reset error state
		fetch(`/api/getContent?locale=${locale}portfolio=true`)
			.then((response) => {
				if (!response.ok) {
					throw new Error("Network response was not ok");
				}
				return response.json();
			})
			.then((data) => {
				if (data && typeof data === "object" && data.fr && data.en) {
					const content = locale === "en" ? data.en : data.fr;
					const primarySections = content.split(/---\n\n---/);
					const splitSections = primarySections.map((section: string) => section.split(/---\n\n\*\*Project Image or Screenshot:\*\*\n\*Insert Project Image or Screenshot Here\*\n\n---/));
					setSections(splitSections);
				} else {
					setError("Unexpected data format");
				}
			})
			.catch((error) => {
				setError("Failed to fetch content");
			});
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
		<div>
			{sections.map((section, sectionIndex) => (
				<div
					key={sectionIndex}
					ref={(el) => {
						sectionRefs.current[sectionIndex] = el;
					}}
					style={{ margin: "20px 0", padding: "10px", border: "1px solid #ccc" }}
				>
					{section.map((subSection, subIndex) => (
						<React.Fragment key={subIndex}>
							<div>{subSection}</div>
							{subIndex < section.length - 1 && <img src={imagePaths[subIndex % imagePaths.length]} alt={`Section ${subIndex + 1}`} style={{ width: "100%", margin: "20px 0" }} />}
						</React.Fragment>
					))}
				</div>
			))}
		</div>
	);
};

export default Portfolio;
