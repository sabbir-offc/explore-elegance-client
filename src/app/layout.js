import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "ExploreElegance",
  description: "ExploreElegance is a travel booking site.",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
