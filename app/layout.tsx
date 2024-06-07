import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Escencia Net",
  description: "Desarrollado por Be Unique Corp",
};

export default function RootLayout({
  children,
  auth,
  landing,
}: Readonly<{
  children: React.ReactNode;
  auth: React.ReactNode;
  landing: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={inter.className} suppressHydrationWarning={true}>
        {children},
        {auth},
        {landing}
      </body>
    </html>
  );
}
