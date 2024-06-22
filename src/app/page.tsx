"use client"; // Add this at the top of the file to indicate that this is a Client Component

import React, { useEffect, useState, useRef, useCallback } from "react";
import { AnimationProvider } from "./components/AnimationContext";
import Navbar from "./components/Navbar/Navbar";
import Background from "./components/Background/Background";
import styles from "./Page.module.scss";
import "antd/dist/reset.css"; // Import Ant Design styles
// src/index.tsx or src/App.tsx
import Footer from "./components/Footer/Footer";
// import 'antd/dist/antd.less';
import { ConfigProvider } from "antd";
import { theme as antdTheme } from "antd";
// @ts-ignore
import Cookies from "js-cookie";
import { NextSeo } from "next-seo";
import MainPage from "./components/Pages/MainPage";
import Portfolio from "./components/Pages/Portfolio";

const Home = () => {
	const [progress, setProgress] = useState(0);
	const requestRef = useRef<number | null>(null);
	const lastProgressRef = useRef(0);
	const alpha = 0.1; // Smoothing factor
	const darkMode = true;

	const [locale, setLocale] = useState<"en" | "fr">("en");
	const [mainPageContent, setMainPageContent] = useState([]);
	const [portfolioContent, setPortfolioContent] = useState([]);
  const [pageDisplayed, setPageDisplayed] = useState<"Main Page" | "Portfolio Page" | "Webdev Page">("Main Page");

	useEffect(() => {
		const data = fetch(`/api/getContent?locale=en`);
		const browserLocale = navigator.language.startsWith("fr") ? "fr" : "en";
		const currentLocale = Cookies.get("locale");
		if (currentLocale !== browserLocale) {
      Cookies.set("locale", browserLocale);
			window.location.reload(); // Reload the page to apply the new locale
		} else {
      const portfolioData = fetch(`/api/getContent?locale=${browserLocale}&portfolio=true`);
			setLocale(currentLocale);
			data
				.then((res) => res.json())
				.then((data) => {
          setMainPageContent(data.content);
				});
			portfolioData
				.then((res) => res.json())
				.then((data) => {
          setPortfolioContent(data);
				});
		}
	}, [locale]);

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
	}, [updateSections, mainPageContent]);

	if (!mainPageContent.length) {
		return <div>Loading...</div>;
	}

  let i = 2;

  function switchLanguage() {
    const newLocale = locale === "en" ? "fr" : "en";
    Cookies.set("locale", newLocale);
    setLocale(newLocale);
  }

	return (
		<>
			<NextSeo
				title="AI Developer freelance @ Web Geodesics"
				description="Explore the innovative AI Prompt engineering and machine learning projects by Regojo Yan."
				canonical="https://web-geodesics.com"
				openGraph={{
					type: "website",
					url: "https://web-geodesics.com",
					title: "Regojo Yan's AI Prompt and Machine Learning Portfolio",
					description: "Discover AI-powered solutions and innovative projects by Regojo Yan.",
					images: [
						{
							url: "/embedThumbnail.png",
							width: 800,
							height: 600,
							alt: "Portfolio Thumbnail",
						},
					],
				}}
				twitter={{
					handle: "@yourhandle",
					site: "@yoursite",
					cardType: "./embedThumbnail.png",
				}}
			/>
			<ConfigProvider theme={{ token: { colorPrimary: "#FBFF30" }, algorithm: darkMode ? [antdTheme.darkAlgorithm] : [antdTheme.defaultAlgorithm] }}>
				{/* <Switch checked={darkMode} onChange={toggleDarkMode} /> */}
				<AnimationProvider>
					<div className={styles.frame} id="scroll-window">
						<div className={styles.div} id="scroll-container">
							<Background advancement={progress} />
							<Navbar content={mainPageContent[0]} switchLanguage={switchLanguage} setPageDisplayed={setPageDisplayed} />
              {pageDisplayed === "Main Page" ? (
                <MainPage content={mainPageContent} locale={locale} scroll={progress} />
              ) : (
                <Portfolio content={portfolioContent} locale={locale} scroll={progress} />
              )}
							<Footer content={mainPageContent[mainPageContent.length - 1]} setPageDisplayed={setPageDisplayed}/>
						</div>
					</div>
				</AnimationProvider>
			</ConfigProvider>
		</>
	);
};

export default Home;
