import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import { Navbar, RegisterModal } from "./components";
import ToasterProvider from "./providers/ToasterProvider";
import "./globals.css";

const nunito = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Airbnb",
  description: "Airbnb clone",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={nunito.className}>
        <ToasterProvider />
        <RegisterModal />
        <Navbar />
      </body>
    </html>
  );
}
