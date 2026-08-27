'use client';

import React, { createContext, useContext, useState } from 'react';

export type Offer = {
  id: string;
  title: string;
  price: number;
  badge: string;
  description: string;
  image: string;
};

type OrderContextType = {
  isOpen: boolean;
  selectedOffer: Offer | null;
  openModal: (offer?: Offer) => void;
  closeModal: () => void;
};

const OrderContext = createContext<OrderContextType | undefined>(undefined);

export const OrderProvider = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOffer, setSelectedOffer] = useState<Offer | null>(null);

  const openModal = (offer?: Offer) => {
    if (offer) setSelectedOffer(offer);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setSelectedOffer(null);
  };

  return (
    <OrderContext.Provider value={{ isOpen, selectedOffer, openModal, closeModal }}>
      {children}
    </OrderContext.Provider>
  );
};

export const useOrder = () => {
  const context = useContext(OrderContext);
  if (!context) {
    throw new Error('useOrder must be used within an OrderProvider');
  }
  return context;
};