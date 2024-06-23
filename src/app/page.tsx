"use client"; // Add this at the top of the file to indicate that this is a Client Component

import React, { useEffect, useState, useRef, useCallback } from "react";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { AnimationProvider } from "./components/AnimationContext";
import Navbar from "./components/Navbar/Navbar";
import Background from "./components/Background/Background";
import styles from "./Page.module.scss";
import "antd/dist/reset.css"; // Import Ant Design styles
// src/index.tsx or src/App.tsx
import Footer from "./components/Footer/Footer";
import Contact from "./components/Contact";
// import 'antd/dist/antd.less';
import { ConfigProvider } from "antd";
import { theme as antdTheme } from "antd";
// @ts-ignore
import Cookies from "js-cookie";
import { NextSeo } from "next-seo";
import MainPage from "./components/Pages/MainPage";
import Portfolio from "./components/Pages/Portfolio";

const Home: React.FC = () => {
	const [progress, setProgress] = useState(0);
	const requestRef = useRef<number | null>(null);
	const lastProgressRef = useRef(0);
	const alpha = 0.1; // Smoothing factor
	const darkMode = true;
	const router = useRouter(); // Initialize router

	const [locale, setLocale] = useState<"en" | "fr">("en");
  const [showContact, setShowContact] = useState(false);
	const [mainPageContent, setMainPageContent] = useState([]);
	const [portfolioContent, setPortfolioContent] = useState([]);
	const [pageDisplayed, setPageDisplayed] = useState<"Main Page" | "Portfolio Page" | "Webdev Page">("Main Page");
  const [contactFormContent, setContactFormContent] = useState({ title: "", placeholder: "", succes: "", error: "" });

	useEffect(() => {
    const browserLocale = navigator.language.startsWith("fr") ? "fr" : "en";
		const currentLocale = Cookies.get("locale");
		if (currentLocale === undefined || currentLocale.length === 0) {
      Cookies.set("locale", browserLocale);
			window.location.reload(); // Reload the page to apply the new locale
		} else {
      const data = fetch(`/api/getContent?locale=${currentLocale}`);
			const portfolioData = fetch(`/api/getContent?locale=${currentLocale}&portfolio=true`);
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

	const searchParams = useSearchParams();

	useEffect(() => {
		const pageQuery = searchParams!.get("page");
		if (pageQuery === "portfolio") {
			setPageDisplayed("Portfolio Page");
		} else if (pageQuery === "webdevagency") {
			setPageDisplayed("Webdev Page");
		} else {
			setPageDisplayed("Main Page");
		}
	}, [searchParams]);

	if (!mainPageContent.length) {
		return <div>Loading...</div>;
	}

	let i = 2;

	function switchLanguage() {
		const newLocale = locale === "en" ? "fr" : "en";
		Cookies.set("locale", newLocale);
		setLocale(newLocale);
	}

  function switchContact() {
    setShowContact(!showContact);
  }

	const handlePageChange = (newPage: "Main Page" | "Portfolio Page" | "Webdev Page") => {
		setPageDisplayed(newPage);
		let url = "/";
		if (newPage === "Portfolio Page") {
			url = "/?page=portfolio";
		} else if (newPage === "Webdev Page") {
			url = "/?page=webdevagency";
		}
    // @ts-ignore
		router.push(url, { shallow: true });
	};

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
				<AnimationProvider>
					{showContact && <Contact content={contactFormContent} />}
					<div className={styles.frame} id="scroll-window">
						<div className={styles.div} id="scroll-container"> 
							<Background advancement={progress} />
							<Navbar content={mainPageContent[0]} switchLanguage={switchLanguage} setPageDisplayed={handlePageChange} switchContact={switchContact} setContactFormContent={setContactFormContent} />
							{pageDisplayed === "Main Page" ? <MainPage content={mainPageContent} locale={locale} scroll={progress} switchContact={switchContact} setContactFormContent={setContactFormContent} /> : <Portfolio content={portfolioContent} locale={locale} scroll={progress} />}
							<Footer content={mainPageContent[mainPageContent.length - 1]} setPageDisplayed={handlePageChange} switchContact={switchContact} setContactFormContent={setContactFormContent}/>
						</div>
					</div>
				</AnimationProvider>
			</ConfigProvider>
		</>
	);
};

export default Home;
