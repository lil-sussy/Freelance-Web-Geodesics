import localFont from "next/font/local";

export const Stretch_Pro = localFont({
	src: "../../public/fonts/StretchPro.otf",
	display: "swap",
	variable: "--font-stretch-pro", // Added CSS variable
});
export const Outfit = localFont({
	src: "../../public/fonts/Outfit-VariableFont_wght.ttf",
	display: "swap",
	variable: "--font-outfit", // Added CSS variable
});
export const Hedvig_Letters_Sans = localFont({
	src: "../../public/fonts/HedvigLettersSans-Regular.ttf",
	display: "swap",
	variable: "--font-hedvig-letters-sans", // Added CSS variable
});
export const Space_Mono = localFont({
	src: [
		{
			path: "../../public/fonts/SpaceMono-Regular.ttf",
			weight: "400",
			style: "normal",
		},
		{
			path: "../../public/fonts/SpaceMono-Italic.ttf",
			weight: "400",
			style: "italic",
		},
		{
			path: "../../public/fonts/SpaceMono-Bold.ttf",
			weight: "700",
			style: "normal",
		},
		{
			path: "../../public/fonts/SpaceMono-BoldItalic.ttf",
			weight: "700",
			style: "italic",
		},
	],
	display: "swap",
	variable: "--font-space-mono", // Optional: for use with CSS variables
});

export const Poppins = localFont({
	src: [
		{
			path: "../../public/fonts/Poppins-Black.ttf",
			weight: "900",
			style: "normal",
		},
		{
			path: "../../public/fonts/Poppins-BlackItalic.ttf",
			weight: "900",
			style: "italic",
		},
		{
			path: "../../public/fonts/Poppins-Bold.ttf",
			weight: "700",
			style: "normal",
		},
		{
			path: "../../public/fonts/Poppins-BoldItalic.ttf",
			weight: "700",
			style: "italic",
		},
		{
			path: "../../public/fonts/Poppins-ExtraBold.ttf",
			weight: "800",
			style: "normal",
		},
		{
			path: "../../public/fonts/Poppins-ExtraBoldItalic.ttf",
			weight: "800",
			style: "italic",
		},
		{
			path: "../../public/fonts/Poppins-ExtraLight.ttf",
			weight: "200",
			style: "normal",
		},
		{
			path: "../../public/fonts/Poppins-ExtraLightItalic.ttf",
			weight: "200",
			style: "italic",
		},
		{
			path: "../../public/fonts/Poppins-Italic.ttf",
			weight: "400",
			style: "italic",
		},
		{
			path: "../../public/fonts/Poppins-Light.ttf",
			weight: "300",
			style: "normal",
		},
		{
			path: "../../public/fonts/Poppins-LightItalic.ttf",
			weight: "300",
			style: "italic",
		},
		{
			path: "../../public/fonts/Poppins-Medium.ttf",
			weight: "500",
			style: "normal",
		},
		{
			path: "../../public/fonts/Poppins-MediumItalic.ttf",
			weight: "500",
			style: "italic",
		},
		{
			path: "../../public/fonts/Poppins-Regular.ttf",
			weight: "400",
			style: "normal",
		},
		{
			path: "../../public/fonts/Poppins-SemiBold.ttf",
			weight: "600",
			style: "normal",
		},
		{
			path: "../../public/fonts/Poppins-SemiBoldItalic.ttf",
			weight: "600",
			style: "italic",
		},
		{
			path: "../../public/fonts/Poppins-Thin.ttf",
			weight: "100",
			style: "normal",
		},
		{
			path: "../../public/fonts/Poppins-ThinItalic.ttf",
			weight: "100",
			style: "italic",
		},
	],
	display: "swap",
	variable: "--font-poppins", // Optional: for use with CSS variables
});
