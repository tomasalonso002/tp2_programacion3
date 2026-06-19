import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import { FavoriteProvider } from "@/app/context/FavoriteContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "PS Game Store",
  description: "Tienda de videojuegos de PlayStation",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="min-h-screen flex flex-col">
        <FavoriteProvider>
          <Navbar />
          <main className="flex-grow container mx-auto p-6">
            {children}
          </main>
          <Footer />
        </FavoriteProvider>
      </body>
    </html>
  );
}
