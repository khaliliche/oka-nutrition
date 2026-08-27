import { Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-playfair",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-dmsans",
});

export const metadata = {
  title: "DHT Control | OKA Nutrition",
  description: "Complement anti-chute pour homme - OKA Nutrition",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className={`${playfair.variable} ${dmSans.variable} font-body bg-white text-charcoal`}>
        {children}
      </body>
    </html>
  );
}
