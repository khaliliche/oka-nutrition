import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import { OrderModalProvider } from "./components/OrderModalContext";

export const metadata: Metadata = {
  title: "OKA Nutrition — DHT Control",
  description: "DHT Control par OKA Nutrition.",
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="fr">
      <body>
        <OrderModalProvider>
          {children}
        </OrderModalProvider>
      </body>
    </html>
  );
}
