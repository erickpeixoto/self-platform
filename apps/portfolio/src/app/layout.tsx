"use client";
import "../../styles/global.css";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="container px-6 mt-4 bg-darkgray md:mx-auto mx-center">
          <Navbar />

          {children}

          <Footer />
        </div>
      </body>
    </html>
  );
}
