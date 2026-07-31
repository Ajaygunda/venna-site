import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Venna | Heritage Bangalore Dosa Cafe in Hyderabad",
  description:
    "Venna brings the golden, buttery, crispy dosas and aromatic filter coffee of heritage Bangalore to Puppalguda, Hyderabad. Authentic South Indian tiffins, chutneys, and filter kaapi.",
  keywords: [
    "Venna",
    "Bangalore dosa",
    "Benne dosa",
    "South Indian cafe Hyderabad",
    "filter coffee",
    "Puppalguda",
    "Alkapur Township",
  ],
  openGraph: {
    title: "Venna | Heritage Bangalore Dosa Cafe",
    description:
      "Golden, buttery, crispy Bangalore-style dosas and aromatic filter coffee in Puppalguda, Hyderabad.",
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
