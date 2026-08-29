'use client';

import { useOrder } from '@/context/OrderContext';
import { useLocale } from '@/context/LocaleContext';
import Image from 'next/image';
import { useState, useEffect } from 'react';

type Offer = {
  id: string;
  title: string;
  price: number;
  badge: string;
  description: string;
  image: string;
};

type FormData = {
  name: string;
  phone: string;
  city: string;
  address: string;
};

export default function OrderModal() {
  const { isOpen, selectedOffer, closeModal } = useOrder();
  const { dict, locale } = useLocale();
  const suffix = locale === 'ar' ? '-ar' : '';
  const [step, setStep] = useState<'offers' | 'form'>('offers');
  const [chosenOffer, setChosenOffer] = useState<Offer | null>(null);

  useEffect(() => {
    if (isOpen && selectedOffer) {
      setChosenOffer(selectedOffer);
      setStep('form');
    }
  }, [isOpen, selectedOffer]);

  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    city: '',
    address: '',
  });

  const offers: Offer[] = [
    {
      id: 'offre-1',
      title: dict.orderModal.offre1.title,
      price: 199,
      badge: dict.orderModal.offre1.badge,
      description: dict.orderModal.offre1.description,
      image: `/images/offre-1${suffix}.jpg`,
    },
    {
      id: 'offre-2',
      title: dict.orderModal.offre2.title,
      price: 349,
      badge: dict.orderModal.offre2.badge,
      description: dict.orderModal.offre2.description,
      image: `/images/offre-2${suffix}.jpg`,
    },
  ];

  if (!isOpen) return null;

  const handleClose = () => {
    setStep('offers');
    setChosenOffer(null);
    setFormData({ name: '', phone: '', city: '', address: '' });
    closeModal();
  };

  const handleSelectOffer = (offer: Offer) => {
    setChosenOffer(offer);
    setStep('form');
  };

  const handleChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const isFormValid =
    formData.name.trim() &&
    formData.phone.trim() &&
    formData.city.trim() &&
    formData.address.trim();

  const handleSubmit = () => {
    if (!chosenOffer || !isFormValid) return;

    const message = dict.orderModal.whatsappMessage(
      chosenOffer.title,
      chosenOffer.description,
      chosenOffer.price,
      formData.name,
      formData.phone,
      formData.city,
      formData.address
    );

    const url = `https://wa.me/212663822682?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
    handleClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 md:p-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-blue-dark">
            {step === 'offers' ? dict.orderModal.chooseOffer : dict.orderModal.deliveryInfo}
          </h2>
          <button
            onClick={handleClose}
            className="text-gray-400 hover:text-gray-600 text-3xl leading-none"
          >
            ×
          </button>
        </div>

        {step === 'offers' && (
          <div className="space-y-6">
            {offers.map((offer) => (
              <div
                key={offer.id}
                className={`flex flex-col sm:flex-row items-center gap-6 p-4 rounded-2xl border-2 transition-all ${
                  selectedOffer?.id === offer.id
                    ? 'border-blue-bright bg-blue-light'
                    : 'border-gray-100 hover:border-blue-bright/50'
                }`}
              >
                <div className="relative w-32 h-32 flex-shrink-0">
                  <Image
                    src={offer.image}
                    alt={offer.title}
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="flex-1 text-center sm:text-start">
                  <span className="inline-block bg-blue-bright text-white text-xs font-bold px-3 py-1 rounded-full mb-1">
                    {offer.badge}
                  </span>
                  <h3 className="text-xl font-bold text-blue-dark">{offer.title}</h3>
                  <p className="text-gray-600">{offer.description}</p>
                  <p className="text-2xl font-extrabold text-blue-bright mt-1">
                    {offer.price} DH
                  </p>
                </div>
                <button
                  onClick={() => handleSelectOffer(offer)}
                  className="btn-primary text-sm py-2 px-6 whitespace-nowrap"
                >
                  {dict.orderModal.commander}
                </button>
              </div>
            ))}
          </div>
        )}

        {step === 'form' && chosenOffer && (
          <div>
            <div className="flex items-center gap-4 p-4 rounded-2xl bg-blue-light mb-6">
              <div className="relative w-16 h-16 flex-shrink-0">
                <Image src={chosenOffer.image} alt={chosenOffer.title} fill className="object-contain" />
              </div>
              <div>
                <p className="font-bold text-blue-dark">{chosenOffer.title}</p>
                <p className="text-sm text-gray-600">{chosenOffer.description}</p>
                <p className="font-extrabold text-blue-bright">{chosenOffer.price} DH</p>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-blue-dark mb-1">
                  {dict.orderModal.fullName}
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => handleChange('name', e.target.value)}
                  placeholder={dict.orderModal.fullNamePlaceholder}
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-bright"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-blue-dark mb-1">
                  {dict.orderModal.phone}
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleChange('phone', e.target.value)}
                  placeholder={dict.orderModal.phonePlaceholder}
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-bright"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-blue-dark mb-1">
                  {dict.orderModal.city}
                </label>
                <input
                  type="text"
                  value={formData.city}
                  onChange={(e) => handleChange('city', e.target.value)}
                  placeholder={dict.orderModal.cityPlaceholder}
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-bright"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-blue-dark mb-1">
                  {dict.orderModal.address}
                </label>
                <textarea
                  value={formData.address}
                  onChange={(e) => handleChange('address', e.target.value)}
                  placeholder={dict.orderModal.addressPlaceholder}
                  rows={3}
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-bright resize-none"
                />
              </div>
            </div>

            <div className="flex gap-3 mt-6">
              <button
                onClick={() => setStep('offers')}
                className="btn-outline flex-1 py-3"
              >
                {dict.orderModal.back}
              </button>
              <button
                onClick={handleSubmit}
                disabled={!isFormValid}
                className="btn-primary flex-1 py-3 disabled:opacity-40 disabled:cursor-not-allowed"
              >
                {dict.orderModal.confirmWhatsapp}
              </button>
            </div>
          </div>
        )}

        {step === 'offers' && (
          <p className="mt-6 text-center text-sm text-gray-500">
            {dict.orderModal.selectPrompt}
          </p>
        )}
      </div>
    </div>
  );
}