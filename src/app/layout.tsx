import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Marty Mitchell",
  description: "Marty's portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="dark h-full" lang="en" style={{ scrollBehavior: "smooth" }}>
      <body className={`${poppins.variable} antialiased bg-background`}>
        <div id="home" className="font-[family-name:var(--font-poppins)] scroll-mt-[102px]">
          <Header />
          <div
            className={`max-w-screen-2xl mx-auto px-6 md:px-12 pt-24 pb-64 mt-[102px] h-full`}
          >
            {children}
          </div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
