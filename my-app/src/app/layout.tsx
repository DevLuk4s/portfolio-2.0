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
    <html lang="pt-br">
      <body className={inter.className}>
        <div className="grid grid-cols-app min-h-screen bg-neutral-950">
          <Sidebar />
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}