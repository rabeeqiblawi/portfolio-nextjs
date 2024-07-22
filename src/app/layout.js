import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navigation/navbar/Navbar";
import Sidebar from "@/components/navigation/sidebar/Sidebar";
import Footer from "@/components/footer/Footer";
import ScrollToTopArrow from "@/components/scrollToTop/ScrollToTopArrow";
import { config as websiteInformation } from '@/config'

const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: websiteInformation.content.brand,
//   description: websiteInformation.content.metaDescription,
//   icon: websiteInformation.content.logo,
// };

export const metadata = {
  title: "test test",
  description: "test 2 test 2",
  icon: websiteInformation.content.logo,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <Sidebar />
        {children}
        <ScrollToTopArrow/>
        <Footer />
      </body>
    </html>
  );
}
