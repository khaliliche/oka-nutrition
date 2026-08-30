'use client';

import Link from 'next/link';
import Image from 'next/image';
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
    <aside style={{ backgroundColor: '#0E1C4D' }} className="w-56 flex flex-col shrink-0 min-h-screen">
      <div className="p-5 border-b border-white/10 flex flex-col items-center">
        <Image
          src="/images/logo-new.png"
          alt="OKA Nutrition"
          width={80}
          height={80}
          className="h-14 w-auto object-contain"
        />
        <p className="text-xs text-blue-light/70 mt-2 capitalize">Connecté : {role}</p>
      </div>

      <nav className="flex-1 p-3 space-y-1">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`block px-3 py-2.5 rounded-lg text-sm font-medium transition ${
              pathname === link.href
                ? 'bg-white text-blue-dark'
                : 'text-white/80 hover:bg-white/10'
            }`}
          >
            {link.label}
          </Link>
        ))}
      </nav>

      <div className="p-3 border-t border-white/10">
        <button
          onClick={handleLogout}
          className="w-full text-sm font-medium text-red-300 hover:bg-white/10 rounded-lg px-3 py-2.5 transition"
        >
          Déconnexion
        </button>
      </div>
    </aside>
  );
}