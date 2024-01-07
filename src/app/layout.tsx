import type { Metadata } from "next";
import { Pixelify_Sans } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/app/components/Navbar/Navbar";
import { Footer } from "@/app/components/Footer/Footer";

const inter = Pixelify_Sans({ weight: "400", subsets: ["latin-ext"] });

export const metadata: Metadata = {
  title: `Dash's Me`,
  description: `Welcome to the web's wonderland~`,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="flex min-h-screen flex-col items-center justify-between">
          <Navbar></Navbar>
          <div className="pt-16">{children}</div>
          <Footer></Footer>
        </main>
      </body>
    </html>
  );
}
