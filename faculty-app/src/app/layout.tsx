import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: 'swap',
});

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ['300', '400', '500', '600', '700'],
  subsets: ["latin"],
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "DIC Faculty Submission",
  description: "Official Faculty Profile Submission Portal",
  icons: {
    icon: '/dic_favicons/favicon.ico',
    shortcut: '/dic_favicons/favicon-16x16.png',
    apple: '/dic_favicons/apple-touch-icon.png',
  },
  manifest: '/dic_favicons/site.webmanifest',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${poppins.variable} ${jetbrainsMono.variable} antialiased bg-[#F5F7F6] text-[#111827]`}
      >
        {children}
      </body>
    </html>
  );
}
