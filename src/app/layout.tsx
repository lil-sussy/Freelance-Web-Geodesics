import type { Metadata } from 'next';
import { cookies } from 'next/headers';
import { Inter } from 'next/font/google';
import { NextUIProvider } from '@nextui-org/react';
import { ConfigProvider, Button } from 'antd';
import './globals.scss';
import Head from 'next/head';


const inter = Inter({ subsets: ['latin'] });

export const metadata = {
	title: "AI Developer freelance @ Web Geodesics",
	description: "Explore the innovative AI Prompt engineering and machine learning projects by Regojo Yan. Specializing in AI agents, prompt engineering, and exceptional user experience (UX), these projects showcase cutting-edge solutions in data science and NLP.",
};

interface RootLayoutProps {
	children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
	const cookieStore = cookies();
	const locale = cookieStore.get("locale")?.value || "en";
  const darkMode = true;

	return (
		<html lang={locale}>
			<Head>
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<meta name="description" content={metadata.description} />
				<link rel="icon" href="/favicon.ico" />
				<link rel="apple-touch-icon" href="./images/embedThumbnail.png" />
				<link rel="manifest" href="/manifest.json" />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Space+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet"/>
        <link href="https://fonts.cdnfonts.com/css/bdo-grotesk" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&display=swap" rel="stylesheet"/>
        <link href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&display=swap" rel="stylesheet"/>
        <link href="https://fonts.cdnfonts.com/css/cooper-hewitt" rel="stylesheet"/>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet"/>
                
                

				<meta property="og:title" content="Regojo Yan's AI Prompt and Machine Learning Portfolio" />
				<meta property="og:description" content="Discover AI-powered solutions and innovative projects by Regojo Yan. From AI agents to prompt engineering, see how cutting-edge technologies are applied to enhance user experience and drive innovation." />
				<meta property="og:image" content="./images/embedThumbnail.png" />
				<meta property="og:url" content="https://web-geodesics.com" />

				<meta name="twitter:title" content="Regojo Yan's AI Prompt and Machine Learning Portfolio" />
				<meta name="twitter:description" content="Explore innovative AI and machine learning projects by Regojo Yan. Specializing in AI agents, prompt engineering, and exceptional UX, these projects showcase cutting-edge solutions." />
				<meta name="twitter:image" content="./images/embedThumbnail.png" />
				<meta name="twitter:url" content="https://web-geodesics.com" />
				<title>{metadata.title}</title>
			</Head>
			<body className={inter.className}>
				<NextUIProvider>{children}</NextUIProvider>
			</body>
		</html>
	);
}
