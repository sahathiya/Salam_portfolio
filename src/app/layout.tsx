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
  title: "Abdu Salam",
  description: "DIGITAL MARKETING EXECUTIVE",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
     <head>
       <title>
        Best Digital Marketing & SEO Expert in Malappuram | Manjeri | Kerala{" "}
      </title>

      <meta
        name="description"
        content="Boost your business with the best Digital Marketing & SEO expert in Malappuram, Manjeri, Kerala. Grow online visibility, drive leads, and achieve success with proven strategies."
      />
      <meta
        name="robots"
        content="index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large"
      />
     </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
