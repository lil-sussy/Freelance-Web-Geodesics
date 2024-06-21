import type { Metadata } from 'next';
import { cookies } from 'next/headers';
import { Inter } from 'next/font/google';
import { NextUIProvider } from '@nextui-org/react';
import { ConfigProvider, Button } from 'antd';
import './globals.scss';
import Head from 'next/head';


const inter = Inter({ subsets: ['latin'] });

interface RootLayoutProps {
	children: React.ReactNode;
}

// import { Poppins, Space_Mono, Outfit, Hedvig_Letters_Sans } from "next/font/google";
import { Poppins, Space_Mono, Stretch_Pro, Outfit, Hedvig_Letters_Sans } from "./fonts";

// const poppins = Poppins({ weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], subsets: ["latin"], display: "swap", variable: "--font-poppins" });
// const spaceMono = Space_Mono({ weight: ["400", "700"], subsets: ["latin"], display: "swap" });
// const outfit = Outfit({ weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], subsets: ["latin"], display: "swap" });
// const hedvigLettersSans = Hedvig_Letters_Sans({ weight: ["400"], subsets: ["latin"], display: "swap" });


export async function generateMetadata(): Promise<Metadata> {
	return {
		title: "AI Developer freelance @ Web Geodesics",
		description: "Explore the innovative AI Prompt engineering and machine learning projects by Regojo Yan. Specializing in AI agents, prompt engineering, and exceptional user experience (UX), these projects showcase cutting-edge solutions in data science and NLP.",
		icons: {
			icon: "/thumbnail.png",
			apple: "/thumbnail.png",
		},
		openGraph: {
			title: "Regojo Yan's AI Prompt and Machine Learning Portfolio",
			description: "Explore innovative AI and machine learning projects by Regojo Yan. Specializing in AI agents, prompt engineering, and exceptional UX, these projects showcase cutting-edge solutions.",
			url: "https://web-geodesics.com",
			images: [
				{
					url: "/embedThumbnail.png",
					width: 800,
					height: 600,
					alt: "Portfolio Thumbnail",
				},
			],
		},
	};
}


export default function RootLayout({ children }: RootLayoutProps) {
	const cookieStore = cookies();
	const locale = cookieStore.get("locale")?.value || "en";
  const darkMode = true;

	return (
		<html lang={locale}>
			<Head>
				<meta http-equiv="Content-Security-Policy" content="default-src 'self'; font-src 'self' https://fonts.googleapis.com https://fonts.gstatic.com;" />
				{/* <link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" />
				<link href="https://fonts.googleapis.com/css2?family=Space+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet" />
				<link href="https://fonts.cdnfonts.com/css/bdo-grotesk" rel="stylesheet" />
				<link href="https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&display=swap" rel="stylesheet" />
				<link href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&display=swap" rel="stylesheet" />
				<link href="https://fonts.cdnfonts.com/css/cooper-hewitt" rel="stylesheet" />
				<link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" /> */}
			</Head>
			<body className={`${Poppins.variable} ${Space_Mono.variable} ${Outfit.variable} ${Hedvig_Letters_Sans.variable} ${Stretch_Pro.variable}`}>
				<NextUIProvider>{children}</NextUIProvider>
			</body>
		</html>
	);
}
