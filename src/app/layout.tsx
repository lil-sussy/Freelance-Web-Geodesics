import type { Metadata } from 'next';
import { cookies } from 'next/headers';
import { Inter } from 'next/font/google';
import { NextUIProvider } from '@nextui-org/react';
import { ConfigProvider, Button } from 'antd';
import './globals.scss';
import * as fs from 'fs';
import path from 'path';
import { markdownToJson } from './ContentGeneration'; // Ensure the path is correct

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

interface RootLayoutProps {
	children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
	const cookieStore = cookies();
	const locale = cookieStore.get("locale")?.value || "en";

	// Define the paths for the markdown and json files for both languages
	const markdownFilePathEN = path.resolve("./WebsiteContentEN.md");
	const jsonFilePathEN = path.resolve("./content_en.json");
	const markdownFilePathFR = path.resolve("./WebsiteContentFR.md");
	const jsonFilePathFR = path.resolve("./content_fr.json");

	// Check and generate English JSON file if it doesn't exist
	if (!fs.existsSync(jsonFilePathEN)) {
		const markdownContentEN = fs.readFileSync(markdownFilePathEN, "utf8");
		const jsonContentEN = markdownToJson(markdownContentEN);
		fs.writeFileSync(jsonFilePathEN, jsonContentEN, "utf8");
	}

	// Check and generate French JSON file if it doesn't exist
	if (!fs.existsSync(jsonFilePathFR)) {
		const markdownContentFR = fs.readFileSync(markdownFilePathFR, "utf8");
		const jsonContentFR = markdownToJson(markdownContentFR);
		fs.writeFileSync(jsonFilePathFR, jsonContentFR, "utf8");
	}

	// Determine the JSON file to use based on the locale
	const jsonFilePath = locale === "fr" ? jsonFilePathFR : jsonFilePathEN;

	// Load the appropriate JSON content
	const jsonData = JSON.parse(fs.readFileSync(jsonFilePath, "utf8"));

	const darkMode = true;

	return (
		<html lang={locale}>
			<body className={inter.className}>
				<NextUIProvider>{children}</NextUIProvider>
			</body>
		</html>
	);
}
