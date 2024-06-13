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
		const section1 = document.getElementById("section1");
		const section2 = document.getElementById("section2");
		const section3 = document.getElementById("section3");

		const handleScroll = () => {
			const scrollPosition = window.scrollY + window.innerHeight; // Adjusted to consider the viewport height
			const section1Top = section1!.offsetTop;
			const section2Bottom = section2!.offsetTop + section2!.offsetHeight;

			// Calculate the scroll progress between the bottom of section 1 and the bottom of section 2
			if (scrollPosition > section1Top && scrollPosition < section2Bottom) {
				const progressInRange = scrollPosition - section1Top;
				const totalRange = section2Bottom - section1Top;
				setProgress(Math.min(Math.max((progressInRange / totalRange - 0.5) * 2, 0), 1));
			} else if (scrollPosition <= section1Top) {
				setProgress(0); // User hasn't reached section 1 bottom
			} else if (scrollPosition >= section2Bottom) {
				setProgress(1); // User has scrolled past section 2 bottom
			}
		};

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<div className={styles.frame}>
			<div className={styles.div}>
				<div className={styles.content} id="section1">
					<Header />
				</div>
				<Background advancement={progress} />
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
