import type { Metadata } from "next";
import { Outfit, Playfair_Display, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Jacques Twizeyimana | Senior Frontend Engineer",
  description:
    "Senior Frontend Engineer based in Kigali, Rwanda. Building performant, accessible web experiences with React, Next.js, and TypeScript.",
  keywords: [
    "Frontend Developer",
    "React",
    "Next.js",
    "TypeScript",
    "Kigali",
    "Rwanda",
  ],
  openGraph: {
    title: "Jacques Twizeyimana | Senior Frontend Engineer",
    description:
      "Senior Frontend Engineer based in Kigali, Rwanda. Building performant, accessible web experiences.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${outfit.variable} ${playfair.variable} ${jetbrains.variable} antialiased noise-bg`}
      >
        {children}
      </body>
    </html>
  );
}
