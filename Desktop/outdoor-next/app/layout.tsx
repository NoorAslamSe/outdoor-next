import type { Metadata } from "next";
import { Montserrat, Noto_Sans } from "next/font/google"; // 1. Import Montserrat
import "./globals.css";

// 2. Configure Montserrat with weights you need (especially 700)
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-montserrat",
});
const notoSans = Noto_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-noto-sans",
});

export const metadata: Metadata = {
  title: "Outdoor Adventure",
  description: "Explore the colourful world",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* 3. Apply Montserrat to the whole website */}
      <body className={`${montserrat.className} ${notoSans.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}