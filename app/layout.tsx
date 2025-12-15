import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jose Lawrence - Senior SQL Database Administrator",
  description: "Senior SQL Server DBA with 18+ years' experience delivering high-availability database solutions across financial services and fintech sectors.",
  keywords: ["SQL DBA", "Database Administrator", "SQL Server", "Azure SQL", "Performance Tuning", "High Availability"],
  authors: [{ name: "Jose Lawrence" }],
  openGraph: {
    title: "Jose Lawrence - Senior SQL Database Administrator",
    description: "Senior SQL Server DBA with 18+ years' experience in Azure SQL, enterprise migrations, and mission-critical databases.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
