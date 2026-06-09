// src/app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import Topbar from "@/components/Topbar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Licensed Tampa Electricians | Open 24/7 | Keentel Electrical Contractor",
  description: "Top-rated residential, commercial & industrial electrical services in Tampa, FL. 24/7 emergency support. Licensed & insured.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
        />
      </head>
      <body>
        <Topbar />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}