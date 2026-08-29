'use client';

import PromoBar from '@/components/PromoBar';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Benefits from '@/components/Benefits';
import Formula from '@/components/Formula';
import Offers from '@/components/Offers';
import Results from '@/components/Results';
import Reviews from '@/components/Reviews';
import FAQ from '@/components/FAQ';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';
import OrderModal from '@/components/OrderModal';
import WhatsAppButton from '@/components/WhatsAppButton';
import ProductOffers from '@/components/ProductOffers';

export default function HomePage() {
  return (
    <>
      <PromoBar />
      <Header />
      <main>
        <Hero />
        <Benefits />
        <ProductOffers />
        <Formula />
        <Offers />
        <Results />
        <Reviews />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <OrderModal />
      <WhatsAppButton />
    </>
  );
}