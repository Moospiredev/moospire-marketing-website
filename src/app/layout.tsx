import type { Metadata } from "next";
// import { GoogleAnalytics } from "@next/third-parties/google";
import { golosText, metaSEO } from "@/app/_utils";
import "./globals.scss";

export const metadata: Metadata = {
  ...metaSEO,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={golosText.className}>{children}</body>
      {/* <GoogleAnalytics gaId="G-RWXJQ1SDB9" /> */}
    </html>
  );
}
