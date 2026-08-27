export default function WhatsAppButton() {
  const phone = "212661972751";

  const message = encodeURIComponent(
    "Bonjour OKA Nutrition, je souhaite avoir plus d'informations sur DHT Control."
  );

  return (
    <a
      href={`https://wa.me/${phone}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contacter OKA Nutrition sur WhatsApp"
      className="fixed bottom-5 right-5 md:bottom-7 md:right-7 z-40 w-14 h-14 md:w-16 md:h-16 rounded-full bg-[#25D366] text-white shadow-xl flex items-center justify-center hover:scale-105 transition-transform"
    >
      <svg
        viewBox="0 0 24 24"
        className="w-7 h-7 md:w-8 md:h-8 fill-current"
        aria-hidden="true"
      >
        <path d="M20.52 3.48A11.82 11.82 0 0 0 12.08 0C5.53 0 .2 5.33.2 11.88c0 2.09.55 4.13 1.59 5.93L.1 24l6.34-1.66a11.9 11.9 0 0 0 5.64 1.43h.01c6.55 0 11.88-5.33 11.88-11.88 0-3.17-1.23-6.15-3.45-8.41ZM12.09 21.7h-.01a9.82 9.82 0 0 1-5.01-1.37l-.36-.21-3.76.99 1-3.67-.23-.38a9.82 9.82 0 0 1-1.5-5.18c0-5.4 4.4-9.8 9.81-9.8 2.62 0 5.08 1.02 6.93 2.87a9.74 9.74 0 0 1 2.87 6.94c0 5.41-4.4 9.81-9.74 9.81Zm5.38-7.35c-.29-.15-1.71-.84-1.98-.94-.27-.1-.46-.15-.65.15-.19.29-.75.94-.92 1.13-.17.19-.34.22-.63.07-.29-.15-1.23-.45-2.34-1.44-.86-.77-1.44-1.71-1.61-2-.17-.29-.02-.45.13-.6.13-.13.29-.34.44-.51.15-.17.19-.29.29-.48.1-.19.05-.36-.02-.51-.07-.15-.65-1.57-.89-2.15-.23-.56-.47-.48-.65-.49h-.55c-.19 0-.5.07-.77.36-.27.29-1.01.99-1.01 2.41s1.04 2.8 1.18 2.99c.15.19 2.05 3.13 4.96 4.39.69.3 1.23.48 1.65.61.69.22 1.32.19 1.82.12.56-.08 1.71-.7 1.95-1.38.24-.68.24-1.26.17-1.38-.07-.12-.27-.19-.56-.34Z" />
      </svg>
    </a>
  );
}
