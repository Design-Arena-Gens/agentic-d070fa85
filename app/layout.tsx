import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Le Cercle Scale - Mastermind pour dirigeants d'ambulance",
  description: "Mastermind fermé pour dirigeants d'ambulance qui veulent passer de l'artisanat à l'entreprise digitalisée & pilotée par la data",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className="antialiased">{children}</body>
    </html>
  );
}
