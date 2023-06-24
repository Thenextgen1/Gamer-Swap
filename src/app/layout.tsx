import { Footer, Header } from "./components";
import "./globals.css";
import { Outfit } from "next/font/google";

const outfit = Outfit({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={outfit.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
