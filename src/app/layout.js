import { Josefin_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ToastContainer } from "react-toastify";

const josefin = Josefin_Sans({
  subsets: ["latin"],
});



export const metadata = {
  title: "Wonderlust",
  description: "Wonderlust is a modern travel and destination booking platform where users can explore, add, manage, and discover amazing travel destinations worldwide.",
  keywords: [
    "Wonderlust",
    "travel booking website",
    "destination booking",
    "travel platform",
    "tour management",
    "travel destinations",
    "vacation planner",
    "travel app",
    "Next.js travel website",
    "travel management system",
    "tour booking platform",
    "Bangladesh travel website",
  ]
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${josefin.className} h-full antialiased`}
    >
      <body suppressHydrationWarning className="min-h-full flex flex-col">
        <Navbar></Navbar>
        <main className="flex-1">
          {children}
        </main>
        <Footer></Footer>
        <ToastContainer />
      </body>
    </html>
  );
}
