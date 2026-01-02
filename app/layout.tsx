import { Bebas_Neue } from "next/font/google";

import "./globals.css";

const bebasNeue = Bebas_Neue({
  weight: "400", // ou 700 se quiser bold
  subsets: ["latin"],
  variable: "--font-bebas",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={`${bebasNeue.variable} antialiased`}>{children}</body>
    </html>
  );
}
