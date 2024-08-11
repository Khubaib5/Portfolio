import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import { ThemeProvider } from "./components/theme-provider";
// import Head from "next/head";
import BotpressWebchat from "./head";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "MKW Softwares",
  description:
    "A Software agency providing services for Web development, App development, and AI Automations like chatbots",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <BotpressWebchat />
        <ThemeProvider defaultTheme="dark" attribute="class">
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
