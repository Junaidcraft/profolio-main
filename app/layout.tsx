import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import { ThemeProvider } from "./provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Junaid Arshad",
  description:
    "Are you looking to elevate your business or personal brand with a sleek and effective online presence? I specialize in creating modern, minimalistic websites that not only enhance your digital footprint but also significantly boost your chances of driving sales and generating revenue.Why Choose My Services? Professional Design: I craft visually appealing websites that reflect your brand's identity and values.User-Centric Approach: Ensuring an intuitive and seamless user experience to keep visitors engaged.Responsive Layout: Websites optimized for all devices, providing a consistent experience across desktops, tablets, and mobiles.SEO-Friendly: Implementing best practices to improve your search engine rankings and organic traffic.Fast Loading Times: Efficient coding and optimization for quicker page load times, enhancing user satisfaction.Secure and Reliable: Utilizing the latest security measures to protect your data and ensure website reliability.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="" sizes="any" />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
