import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "AI-Gen-Image Tutorial",
    description: "At AI-Gen-Image Tutorial, our mission is to demystify the complexities of generative AI tools and make them accessible to everyone.",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <Head>
            <link rel="icon" href="/my-app/public/computer-icon.png" sizes="16x16" />
            <link rel="icon" href="/my-app/public/computer-icon.png" sizes="32x32" />
            <link rel="icon" href="/my-app/public/computer-icon.png" sizes="64x64" />
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <body className={inter.className}>{children}</body>
        </html>
    );
}