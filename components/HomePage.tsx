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
      <main className="flex flex-col">
        <div className="order-1">
          <Hero />
        </div>
        <div className="order-2 lg:order-3">
          <Benefits />
        </div>
        <div className="order-3 lg:order-2">
          <ProductOffers />
        </div>
        <div className="order-4">
          <Formula />
        </div>
        <div className="order-5">
          <Offers />
        </div>
        <div className="order-6">
          <Results />
        </div>
        <div className="order-7">
          <Reviews />
        </div>
        <div className="order-8">
          <FAQ />
        </div>
        <div className="order-9">
          <FinalCTA />
        </div>
      </main>
      <Footer />
      <OrderModal />
      <WhatsAppButton />
    </>
  );
}