import type { Metadata } from "next";
import { Space_Grotesk, Syne } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
    display: "swap",
    variable: "--font-space-grotesk",
    subsets: ["latin"],
});

const syne = Syne({
    display: "swap",
    variable: "--font-syne",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "sabeeh-ck",
    description: "Personal Potfolio",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html
            lang="en"
            className={`${spaceGrotesk.variable} ${syne.variable} h-full antialiased`}
        >
            <body className="flex min-h-full flex-col">{children}</body>
        </html>
    );
}
