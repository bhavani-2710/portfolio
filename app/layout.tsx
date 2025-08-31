import type { Metadata } from "next";
import { Outfit, Ovo } from "next/font/google";
import "./globals.css";
import { DarkModeProvider } from "./components/context/DarkModeContext";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-outfit",
});

const ovo = Ovo({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-ovo",
});

export const metadata: Metadata = {
  title: "Portfolio",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth dark">
      <body
        className={`${outfit.variable} ${ovo.variable} antialiased leading-8 overflow-x-hidden dark:bg-[#11001f] dark:text-white`}
      >
        <DarkModeProvider>{children}</DarkModeProvider>
      </body>
    </html>
  );
}
