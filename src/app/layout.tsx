import type { Metadata } from "next";
import Loader from "./loader";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "Top Up Games",
  description: "Top Up Games",
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="id">
      <body className="text-white font-['Poppins'] flex flex-col items-center min-h-screen">
        <header className="sticky top-0 z-50 bg-[#282828] w-full">
          <Header />
        </header>
        <main className="w-full flex-grow flex flex-col justify-center">
          <Loader>{children}</Loader>
        </main>
        <footer className="bg-[#282828] mt-auto w-full">
          <Footer />
        </footer>
      </body>
    </html>
  );
};

export default RootLayout;
