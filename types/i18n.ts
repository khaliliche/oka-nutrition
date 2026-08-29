export type Locale = 'fr' | 'ar';

export type Dictionary = {
  meta: { title: string; description: string };
  header: {
    tabs: { dhtControl: string; formule: string; avis: string; faq: string };
    commander: string;
  };
  promoBar: { text: string };
  hero: {
    rating: string;
    chooseCure: string;
    seeFormula: string;
    commander: string;
    shipping: string;
    payment: string;
    packs: {
      offre2: { title: string; badge: string; description: string };
      offre1: { title: string; badge: string; description: string };
    };
        desktop: {
      headline1: string;
      headline2: string;
      description: string;
      originalPrice: string;
      oneMonthLabel: string;
      threeMonthLabel: string;
    };
  };
  benefits: {
    heading: string;
    items: { label: string; desc: string }[];
  };
  formula: {
    heading: string;
    headingHighlight: string;
     mobileSubtitle: string;
    lead: string;
    body: string;
    tags: string;
    ingredients: string;
  };
  offers: {
    ratingBadge: string;
    limitedOffer: string;
    heading1: string;
    price: string;
    badge: string;
    ctaMain: string;
    ctaOutline: string;
  };
  productOffers: {
    heading: string;
    offre2: { title: string; badge: string; description: string };
    offre1: { title: string; badge: string; description: string };
    cta: string;
  };
  results: {
    heading: string;
    before: string;
    after: string;
    caption: string;
    efficacyLabel: string;
    testimonial: { text: string; name: string };
    stats: { label: string; value: string }[];
  };
  reviews: {
    heading: string;
    ratingBadge: string;
    items: { name: string; text: string }[];
  };
  faq: {
    heading: string;
    items: { q: string; a: string }[];
  };
  finalCta: {
    heading: string;
    price: string;
    body: string;
    cta: string;
  };
  footer: {
    description: string;
    usefulLinks: string;
    offresLink: string;
    avisLink: string;
    faqLink: string;
    followUs: string;
    instagram: string;
    copyright: string;
  };
  orderModal: {
    chooseOffer: string;
    deliveryInfo: string;
    offre1: { title: string; badge: string; description: string };
    offre2: { title: string; badge: string; description: string };
    commander: string;
    fullName: string;
    fullNamePlaceholder: string;
    phone: string;
    phonePlaceholder: string;
    city: string;
    cityPlaceholder: string;
    address: string;
    addressPlaceholder: string;
    back: string;
    confirmWhatsapp: string;
    selectPrompt: string;
    whatsappMessage: (title: string, description: string, price: number, name: string, phone: string, city: string, address: string) => string;
  };
  whatsappButton: { message: string };
};