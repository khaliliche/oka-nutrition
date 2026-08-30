'use client';

import { useEffect, useState } from 'react';

type StockItem = {
  id: number;
  product_name: string;
  quantity: number;
};

export default function StockPage() {
  const [stock, setStock] = useState<StockItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [savingId, setSavingId] = useState<number | null>(null);

  const fetchStock = async () => {
    setLoading(true);
    const res = await fetch('/api/stock');
    const data = await res.json();
    if (data.ok) setStock(data.stock);
    setLoading(false);
  };

  useEffect(() => {
    fetchStock();
  }, []);

  const handleChange = (id: number, value: number) => {
    setStock((prev) => prev.map((item) => (item.id === id ? { ...item, quantity: value } : item)));
  };

  const handleSave = async (id: number, quantity: number) => {
    setSavingId(id);
    await fetch('/api/stock', {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id, quantity }),
    });
    setSavingId(null);
  };

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-800">Stock</h1>
      <p className="text-sm text-gray-500 mt-1">
        Mets à jour manuellement les quantités disponibles.
      </p>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 mt-5 max-w-xl">
        {loading && <p className="p-5 text-gray-400 text-sm">Chargement...</p>}

        {!loading &&
          stock.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between gap-4 p-5 border-b border-gray-100 last:border-b-0"
            >
              <div>
                <p className="font-medium text-gray-800">{item.product_name}</p>
                <p className="text-xs text-gray-400">Quantité en stock</p>
              </div>

              <div className="flex items-center gap-2">
                <input
                  type="number"
                  min={0}
                  value={item.quantity}
                  onChange={(e) => handleChange(item.id, Number(e.target.value))}
                  className="w-24 border border-gray-300 rounded-lg px-3 py-2 text-sm text-center focus:outline-none focus:border-blue-500"
                />
                <button
                  onClick={() => handleSave(item.id, item.quantity)}
                  disabled={savingId === item.id}
                  className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-lg px-4 py-2 transition disabled:opacity-50"
                >
                  {savingId === item.id ? '...' : 'Enregistrer'}
                </button>
              </div>
            </div>
          ))}

        {!loading && stock.length === 0 && (
          <p className="p-5 text-gray-400 text-sm">Aucun produit en stock.</p>
        )}
      </div>
    </div>
  );
}