import { NextAuthProvider } from "./providers";
import "./globals.css";
import { Outfit } from "next/font/google";
import { Footer, Header } from "./lib/components";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <NextAuthProvider>
          <Header />
          {children}
          <Footer />
        </NextAuthProvider>
      </body>
    </html>
  );
}
