"use client"; // Add this at the top of the file to indicate that this is a Client Component

import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Background from "./components/Background/Background";
import Header from "./components/FirstHeader/FirstHeader";
import SecondHeader from "./components/SecondHeader/SecondHeader";
import ThirdHeader from "./components/ThirdHeader/ThirdHeader";
import FeaturesSection from "./components/FeaturesSection/FeaturesSection";
import PortfolioSection from "./components/PortfolioSection/PortfolioSection";
import HowItWorksSection from "./components/HowItWorksSection/HowItWorksSection";
import CTASection from "./components/CTA/CTASection";
import AboutMeSection from "./components/AboutMeSection/AboutMeSection";
import styles from "./Page.module.scss";
import FaqSection from "./components/FAQ/FAQSection";
import Footer from "./components/Footer/Footer";

const Home = () => {
	const [progress, setProgress] = useState(0);

	useEffect(() => {
		const scrollContainer = document.getElementById("scroll-container");
		const scrollWindow = document.getElementById("scroll-window");

		if (!scrollContainer || !scrollWindow) {
			console.log("Scroll container or window is missing");
			return;
		}

		// Dynamic array for sections
		const sections: {element: HTMLElement, top: number, bottom: number}[] = [];
		for (let i = 1; i <= 10; i++) {
			const section = document.getElementById(`section${i}`);
			if (section) {
				sections.push({
					element: section,
					top: section.offsetTop,
					bottom: section.offsetTop + section.offsetHeight,
				});
			}
		}

		if (sections.length < 2) {
			console.log("Not enough sections found");
			return;
		}

		const handleScroll = () => {
			const scrollPosition = scrollWindow.scrollTop;

			let currentProgress = 0;
			sections.forEach((section, index) => {
				if (scrollPosition > section.bottom) {
					currentProgress = index + 1;
				} else if (scrollPosition > section.top && scrollPosition <= section.bottom) {
					const sectionProgress = (scrollPosition - section.top) / (section.bottom - section.top);
					currentProgress = index + sectionProgress;
				}
			});

			setProgress(currentProgress);
			console.log("Scroll Progress: ", currentProgress.toFixed(2));
		};


		scrollWindow.addEventListener("scroll", handleScroll);

		return () => {
			scrollWindow.removeEventListener("scroll", handleScroll);
		};
	}, []);


	return (
		<div className={styles.frame} id="scroll-window">
			<div className={styles.div} id="scroll-container">
				<Background advancement={0} />
				<div className={styles.content} id="section1">
					<Header />
				</div>
				<Navbar />
				<div className={styles.content} id="section2">
					<SecondHeader />
				</div>
				<div className={styles.content} id="section3">
					<FeaturesSection />
				</div>
				<div className={styles.content} id="section4">
					<ThirdHeader />
				</div>
				<div className={styles.content} id="section5">
					<PortfolioSection />
				</div>
				<div className={styles.content} id="section6">
					<HowItWorksSection />
				</div>
				<div className={styles.content} id="section7">
					<CTASection />
				</div>
				<div className={styles.content} id="section8">
					<FaqSection />
				</div>
				<div className={styles.content} id="section9">
					<AboutMeSection />
				</div>
				<div className={styles.content} id="section10">
					<Footer />
				</div>
			</div>
		</div>
	);
};

export default Home;
