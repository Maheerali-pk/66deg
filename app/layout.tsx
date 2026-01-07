import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";
import { Fira_Code } from "next/font/google";

const firaCode = Fira_Code({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-fira-code",
});

export const metadata: Metadata = {
  title: "66degrees",
  description: "66degrees - Your trusted technology partner",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${firaCode.variable} font-sans`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
