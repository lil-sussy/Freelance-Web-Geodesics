"use client"; // Add this at the top of the file to indicate that this is a Client Component

import React, { useEffect, useState, useRef, useCallback } from "react";
import { AnimationProvider } from "./components/AnimationContext";
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
import "antd/dist/reset.css"; // Import Ant Design styles
// src/index.tsx or src/App.tsx
// import 'antd/dist/antd.less';
import { ConfigProvider } from "antd";
import { theme as antdTheme } from "antd";
import Cookies from "js-cookie";

const Home = () => {
	const [progress, setProgress] = useState(0);
	const requestRef = useRef<number | null>(null);
	const lastProgressRef = useRef(0);
	const alpha = 0.1; // Smoothing factor
	const darkMode = true;

  const [locale, setLocale] = useState<"en" | "fr">("en");

  useEffect(() => {
    const browserLocale = navigator.language.startsWith("fr") ? "fr" : "en";
    const currentLocale = Cookies.get("locale");
    if (currentLocale !== browserLocale) {
      Cookies.set("locale", browserLocale);
      window.location.reload(); // Reload the page to apply the new locale
    } else {
      setLocale(currentLocale);
    }
  }, []);

	// Cache DOM elements and section positions
	const sectionsRef = useRef<{ element: HTMLElement; top: number; bottom: number }[]>([]);

	const updateSections = useCallback(() => {
		const sections: { element: HTMLElement; top: number; bottom: number }[] = [];
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
		sectionsRef.current = sections;
	}, []);

	useEffect(() => {
		const scrollContainer = document.getElementById("scroll-container");
		const scrollWindow = document.getElementById("scroll-window");

		if (!scrollContainer || !scrollWindow) {
			console.log("Scroll container or window is missing");
			return;
		}

		// Update sections initially and on window resize
		updateSections();
		window.addEventListener("resize", updateSections);

		const handleScroll = () => {
			const scrollPosition = scrollWindow.scrollTop;
			let currentProgress = 0;
			sectionsRef.current.forEach((section, index) => {
				if (scrollPosition > section.bottom) {
					currentProgress = index + 1;
				} else if (scrollPosition > section.top && scrollPosition <= section.bottom) {
					const sectionProgress = (scrollPosition - section.top) / (section.bottom - section.top);
					currentProgress = index + sectionProgress;
				}
			});

			const smoothedProgress = lastProgressRef.current + alpha * (currentProgress - lastProgressRef.current);
			lastProgressRef.current = smoothedProgress;

			setProgress(smoothedProgress);
			// console.log("Scroll Progress: ", smoothedProgress.toFixed(2));

			requestRef.current = requestAnimationFrame(handleScroll);
		};

		const animationLoop = () => {
			handleScroll();
			requestRef.current = requestAnimationFrame(animationLoop);
		};

		requestRef.current = requestAnimationFrame(animationLoop);

		return () => {
			if (requestRef.current) {
				cancelAnimationFrame(requestRef.current);
			}
			window.removeEventListener("resize", updateSections);
		};
	}, [updateSections]);

	return (
		<ConfigProvider theme={{ token: { colorPrimary: "#FBFF30" }, algorithm: darkMode ? [antdTheme.darkAlgorithm] : [antdTheme.defaultAlgorithm] }}>
			{/* <Switch checked={darkMode} onChange={toggleDarkMode} /> */}
			<AnimationProvider>
				<div className={styles.frame} id="scroll-window">
					<div className={styles.div} id="scroll-container">
						<Background advancement={progress} />
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
			</AnimationProvider>
		</ConfigProvider>
	);
};

export default Home;
