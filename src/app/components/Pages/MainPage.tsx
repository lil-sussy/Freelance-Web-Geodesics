import React, { useEffect, useState, useRef } from "react";
import Header from "../FirstHeader/FirstHeader";
import SecondHeader from "../SecondHeader/SecondHeader";
import ThirdHeader from "../ThirdHeader/ThirdHeader";
import FeaturesSection from "../FeaturesSection/FeaturesSection";
import PortfolioSection from "../PortfolioSection/PortfolioSection";
import HowItWorksSection from "../HowItWorksSection/HowItWorksSection";
import CTASection from "../CTA/CTASection";
import AboutMeSection from "../AboutMeSection/AboutMeSection";
import FaqSection from "../FAQ/FAQSection";

import styles from "../../Page.module.scss";

interface PortfolioProps {
	locale: string;
	scroll: number;
	content: { title: string; content: { type: string; text: string }[] }[];
	switchContact: () => void;
	switchToPortfolio: (scroll: number) => void;
	setContactFormContent: (content: { title: string; placeholder: string; succes: string; error: string }) => void;
}

const MainPage: React.FC<PortfolioProps> = ({ content, locale, scroll, switchContact, setContactFormContent, switchToPortfolio }) => {
	let i = 2;

	return (
		<>
			<div className={styles.content} id="section1">
				<Header content={content[1]} switchToPortfolio={switchToPortfolio} switchContact={switchContact} setContactFormContent={setContactFormContent} />
			</div>
			<div className={styles.content} id="section2">
				<SecondHeader content={content[i]} switchToPortfolio={switchToPortfolio} switchContact={switchContact} setContactFormContent={setContactFormContent} />
			</div>
			<div className={styles.content} id="section3">
				<FeaturesSection content={content[++i]} switchToPortfolio={switchToPortfolio} switchContact={switchContact} setContactFormContent={setContactFormContent} />
			</div>
			<div className={styles.content} id="section4">
				<ThirdHeader content={content[++i]} switchToPortfolio={switchToPortfolio} switchContact={switchContact} setContactFormContent={setContactFormContent} />
			</div>
			<div className={styles.content} id="section5">
				<PortfolioSection content={content[++i]} switchToPortfolio={switchToPortfolio} />
			</div>
			<div className={styles.content} id="section6">
				<HowItWorksSection content={content[++i]} switchToPortfolio={switchToPortfolio} switchContact={switchContact} setContactFormContent={setContactFormContent} />
			</div>
			<div className={styles.content} id="section7">
				<CTASection content={content[++i]} switchContact={switchContact} setContactFormContent={setContactFormContent} />
			</div>
			<div className={styles.content} id="section8">
				<FaqSection content={content[++i]} switchToPortfolio={switchToPortfolio} switchContact={switchContact} setContactFormContent={setContactFormContent} />
			</div>
			<div className={styles.content} id="section9">
				<AboutMeSection content={content[++i]} switchContact={switchContact} setContactFormContent={setContactFormContent} />
			</div>
		</>
	);
};

export default MainPage;