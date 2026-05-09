import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const artificTrialBold = localFont({
  src: "../public/brand/artifictrial-bold.otf",
  variable: "--font-artifictrial-bold",
});

const artificTrialLight = localFont({
  src: "../public/brand/artifictrial-light.otf",
  variable: "--font-artifictrial-light",
});

export const metadata: Metadata = {
  title: "Borgier — Be Rare.",
  description:
    "Premium streetwear & activewear for those who dare to be different. Shop the Borgier collection.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${artificTrialBold.variable} ${artificTrialLight.variable}`}
      >
        {children}
      </body>
    </html>
  );
}