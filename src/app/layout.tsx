import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./global.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"
  ),

  title: {
    default: "Guillaume Legros | Business × Code",
    template: "%s | Guillaume Legros",
  },

  description:
    "Portfolio of Guillaume Legros — a hybrid profile combining business development, e-commerce, digital marketing and web development.",

  keywords: [
    "Guillaume Legros",
    "Next.js",
    "React",
    "TypeScript",
    "E-commerce",
    "Marketplace",
    "Business Development",
    "Web Developer",
    "Digital Marketing",
  ],

  authors: [
    {
      name: "Guillaume Legros",
    },
  ],

  creator: "Guillaume Legros",

  openGraph: {
    siteName: "Guillaume Legros Portfolio",
    type: "website",

    images: [
      {
        url: "/opengraph-image.png", // ou url: "/icon.png" et suppr width et height
        width: 1200,
        height: 630,
        alt: "Guillaume Legros — Business × Code",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    images: ["/opengraph-image.png"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      id="top"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
