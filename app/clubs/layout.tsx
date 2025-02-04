import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "../globals.css";
import Header from "@/components/Header";

const outfit = Outfit({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "CCSG Club Events",
  description: "Discover and participate in upcoming internal events by the Curtin Colombo Student Guild.",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/ccsg.png",
  },
  openGraph: {
    title: "CCSG Events",
    description: "Stay updated on upcoming internal CCSG events and exclusive student activities.",
    url: "https://ccsgevents.lk",
    siteName: "CCSG Events",
    images: [
      {
        url: "/ccsg.png",
        width: 1200,
        height: 630,
        alt: "CCSG Events Banner",
      },
    ],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "CCSG Events",
    description: "Stay updated on upcoming CCSG events and exclusive student activities.",
    images: ["/ccsg.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${outfit.variable} font-outfit antialiased`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
