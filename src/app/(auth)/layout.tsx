import type { Metadata } from "next";
import { Inter } from "next/font/google";
import '../global.css'
import { ThemeProvider } from "next-themes";
import SideBarContainer from "@/containers/SideBarContainer/SideBarContainer";
import SummaryCards from "@/components/ui/summarycard";
import NavBar from "@/containers/Navbar/navbar";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class">
        <div className="flex flex-col gap-10">
  <div>
    <NavBar />
    <div className="flex">
      <SideBarContainer />
      <div className="flex flex-col gap-5">
        <SummaryCards />
        <div className="px-36">
        {children}
        </div>
      </div>
    </div>
  </div>
</div>

        </ThemeProvider>
      </body>
    </html>
  );
}