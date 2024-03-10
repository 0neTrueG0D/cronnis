import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const monsterrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Arawn Cronnis",
    description: "Creating the soundtrack for the unsaid and the unforgettable",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="scroll-smooth">
            <body className={monsterrat.className}>{children}</body>
        </html>
    );
}
