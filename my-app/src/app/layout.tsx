import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// Components
import Sidebar from "./components/Sidebar/page";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portifolio 2.0",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br" className={inter.className}>
      <body className="grid md:grid-cols-desktop grid-cols-mobile min-h-screen bg-neutral-950">
        <div>
          <Sidebar />
        </div>
        <main>{children}</main>
      </body>
    </html>
  );
}
