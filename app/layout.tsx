import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "primereact/resources/themes/lara-light-cyan/theme.css";



import 'primereact/resources/primereact.min.css';


const inter = Inter({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "Internet do'kon | Bozor.com",
  description: "Bozor.com",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <link rel="icon" href="https://bozor.com/64x64.ico" sizes="any" />
        {children}
      </body>
    </html>
  );
}
