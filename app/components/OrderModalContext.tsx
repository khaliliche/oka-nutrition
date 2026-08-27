"use client";

import {
  createContext,
  useContext,
  useState,
  type ReactNode,
} from "react";

type OfferId = "1mois" | "3mois";

type OrderModalContextType = {
  isOpen: boolean;
  selectedOffer: OfferId;
  setSelectedOffer: (offer: OfferId) => void;
  open: (offerId?: OfferId) => void;
  close: () => void;
};

const OrderModalContext =
  createContext<OrderModalContextType | null>(null);

export function OrderModalProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOffer, setSelectedOffer] =
    useState<OfferId>("3mois");

  const open = (offerId?: OfferId) => {
    if (offerId) {
      setSelectedOffer(offerId);
    }

    setIsOpen(true);
  };

  const close = () => {
    setIsOpen(false);
  };

  return (
    <OrderModalContext.Provider
      value={{
        isOpen,
        selectedOffer,
        setSelectedOffer,
        open,
        close,
      }}
    >
      {children}
    </OrderModalContext.Provider>
  );
}

export function useOrderModal() {
  const context = useContext(OrderModalContext);

  if (!context) {
    throw new Error(
      "useOrderModal must be used inside OrderModalProvider"
    );
  }

  return context;
}
