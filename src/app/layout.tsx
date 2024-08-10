import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import CustomProviders from "@/components/CustomProviders";
import CustomHeader from "@/components/CustomHeader";
import CustomFooter from "@/components/CustomFooter";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Trusted Car Rental Center",
  description:
    "Trusted car rentals with affordable rates and excellent customer service.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CustomProviders>
          <CustomHeader />
          {children}
          <CustomFooter />
        </CustomProviders>
      </body>
    </html>
  );
}
