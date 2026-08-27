import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { OrderProvider } from '@/context/OrderContext';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'OKA Nutrition – Solution naturelle contre la chute de cheveux',
  description: 'Découvrez OKA Nutrition, le complément alimentaire 100% naturel pour retrouver une chevelure forte et en pleine santé. Livraison gratuite au Maroc.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className={inter.className}>
        <OrderProvider>{children}</OrderProvider>
      </body>
    </html>
  );
}