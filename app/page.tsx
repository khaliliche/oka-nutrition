import PromoBar from "./components/PromoBar";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Benefits from "./components/Benefits";
import Formula from "./components/Formula";
import Offers from "./components/Offers";
import Results from "./components/Results";
import Reviews from "./components/Reviews";
import FAQ from "./components/FAQ";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";

export default function Home() {
  return (
    <>
      <PromoBar />
      <Header />

      <main>
        <Hero />
        <Benefits />
        <Formula />
        <Offers />
        <Results />
        <Reviews />
        <FAQ />
        <FinalCTA />
      </main>

      <Footer />

      <WhatsAppButton />
    </>
  );
}
