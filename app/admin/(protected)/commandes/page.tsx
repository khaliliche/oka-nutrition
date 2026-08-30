'use client';

import { useEffect, useState, useMemo } from 'react';
import * as XLSX from 'xlsx';

type Order = {
  id: number;
  name: string;
  phone: string;
  city: string;
  address: string;
  offer_title: string;
  offer_description: string;
  quantity: number;
  total_amount: string;
  status: string;
  created_at: string;
};

const STATUSES = ['Nouvelle', 'Confirmée', 'Expédiée', 'Livrée', 'Annulée'];

export default function CommandesPage() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState('Tous');

  const fetchOrders = async () => {
    setLoading(true);
    const res = await fetch('/api/orders');
    const data = await res.json();
    if (data.ok) setOrders(data.orders);
    setLoading(false);
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  const handleStatusChange = async (id: number, newStatus: string) => {
    setOrders((prev) => prev.map((o) => (o.id === id ? { ...o, status: newStatus } : o)));
    await fetch(`/api/orders/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ status: newStatus }),
    });
  };

  const filteredOrders = useMemo(() => {
    return orders.filter((o) => {
      const matchesSearch =
        search.trim() === '' ||
        o.name.toLowerCase().includes(search.toLowerCase()) ||
        o.phone.includes(search) ||
        o.city.toLowerCase().includes(search.toLowerCase());
      const matchesStatus = statusFilter === 'Tous' || o.status === statusFilter;
      return matchesSearch && matchesStatus;
    });
  }, [orders, search, statusFilter]);

  const handleExport = () => {
    const rows = filteredOrders.map((o) => ({
      Nom: o.name,
      Téléphone: o.phone,
      Ville: o.city,
      Adresse: o.address,
      Offre: o.offer_title,
      Quantité: o.quantity,
      'Montant (DH)': o.total_amount,
      Statut: o.status,
      Date: new Date(o.created_at).toLocaleString('fr-FR'),
    }));

    const worksheet = XLSX.utils.json_to_sheet(rows);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Commandes');
    XLSX.writeFile(workbook, `commandes_${new Date().toISOString().slice(0, 10)}.xlsx`);
  };

  return (
    <div>
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h1 className="text-2xl font-bold text-gray-800">Commandes</h1>
        <button
          onClick={handleExport}
          className="bg-green-600 hover:bg-green-700 text-white text-sm font-semibold rounded-lg px-4 py-2 transition"
        >
          Exporter en Excel
        </button>
      </div>

      <div className="flex flex-wrap gap-3 mt-5">
        <input
          type="text"
          placeholder="Rechercher (nom, téléphone, ville)..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1 min-w-[220px] border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-blue-500"
        />
        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-blue-500"
        >
          <option value="Tous">Tous les statuts</option>
          {STATUSES.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 mt-5 overflow-x-auto">
        <table className="w-full text-sm whitespace-nowrap">
          <thead className="bg-gray-50 text-gray-500 text-left">
            <tr>
              <th className="px-4 py-3">Client</th>
              <th className="px-4 py-3">Téléphone</th>
              <th className="px-4 py-3">Ville</th>
              <th className="px-4 py-3">Adresse</th>
              <th className="px-4 py-3">Offre</th>
              <th className="px-4 py-3">Qté</th>
              <th className="px-4 py-3">Montant</th>
              <th className="px-4 py-3">Date</th>
              <th className="px-4 py-3">Statut</th>
            </tr>
          </thead>
          <tbody>
            {loading && (
              <tr>
                <td colSpan={9} className="px-4 py-6 text-center text-gray-400">
                  Chargement...
                </td>
              </tr>
            )}
            {!loading && filteredOrders.length === 0 && (
              <tr>
                <td colSpan={9} className="px-4 py-6 text-center text-gray-400">
                  Aucune commande trouvée.
                </td>
              </tr>
            )}
            {filteredOrders.map((order) => (
              <tr key={order.id} className="border-t border-gray-100">
                <td className="px-4 py-3 font-medium text-gray-800">{order.name}</td>
                <td className="px-4 py-3">{order.phone}</td>
                <td className="px-4 py-3">{order.city}</td>
                <td className="px-4 py-3 max-w-[200px] truncate" title={order.address}>
                  {order.address}
                </td>
                <td className="px-4 py-3">{order.offer_title}</td>
                <td className="px-4 py-3">{order.quantity}</td>
                <td className="px-4 py-3">{order.total_amount} DH</td>
                <td className="px-4 py-3">
                  {new Date(order.created_at).toLocaleDateString('fr-FR')}
                </td>
                <td className="px-4 py-3">
                  <select
                    value={order.status}
                    onChange={(e) => handleStatusChange(order.id, e.target.value)}
                    className={`text-xs font-semibold rounded-full px-3 py-1.5 border-0 focus:outline-none ${
                      order.status === 'Nouvelle'
                        ? 'bg-blue-100 text-blue-700'
                        : order.status === 'Confirmée'
                        ? 'bg-yellow-100 text-yellow-700'
                        : order.status === 'Expédiée'
                        ? 'bg-purple-100 text-purple-700'
                        : order.status === 'Livrée'
                        ? 'bg-green-100 text-green-700'
                        : 'bg-red-100 text-red-700'
                    }`}
                  >
                    {STATUSES.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}