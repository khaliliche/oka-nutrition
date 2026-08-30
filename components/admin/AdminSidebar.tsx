'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

const links = [
  { href: '/admin/dashboard', label: 'Dashboard' },
  { href: '/admin/commandes', label: 'Commandes' },
  { href: '/admin/clients', label: 'Clients' },
  { href: '/admin/stock', label: 'Stock' },
  { href: '/admin/statistiques', label: 'Statistiques' },
];

export default function AdminSidebar({ role }: { role: 'worker' | 'boss' }) {
  const pathname = usePathname();
  const router = useRouter();

  const handleLogout = async () => {
    await fetch('/api/auth/logout', { method: 'POST' });
    router.push('/admin/worker');
  };

  return (
    <aside className="w-56 bg-white border-r border-gray-200 flex flex-col shrink-0 min-h-screen">
      <div className="p-5 border-b border-gray-100">
        <p className="font-bold text-gray-800">OKA Nutrition</p>
        <p className="text-xs text-gray-500 mt-0.5 capitalize">Connecté : {role}</p>
      </div>

      <nav className="flex-1 p-3 space-y-1">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`block px-3 py-2.5 rounded-lg text-sm font-medium transition ${
              pathname === link.href
                ? 'bg-blue-600 text-white'
                : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            {link.label}
          </Link>
        ))}
      </nav>

      <div className="p-3 border-t border-gray-100">
        <button
          onClick={handleLogout}
          className="w-full text-sm font-medium text-red-600 hover:bg-red-50 rounded-lg px-3 py-2.5 transition"
        >
          Déconnexion
        </button>
      </div>
    </aside>
  );
}