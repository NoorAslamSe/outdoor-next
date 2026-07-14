import type { Metadata } from "next";
import { Montserrat } from "next/font/google"; // 1. Import Montserrat
import "./globals.css";

// 2. Configure Montserrat with weights you need (especially 700)
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-montserrat",
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
      <body className={`${montserrat.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}