import { redirect } from 'next/navigation';
import { getCurrentRole } from '@/lib/auth';
import AdminSidebar from '@/components/admin/AdminSidebar';

export default async function ProtectedAdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const role = await getCurrentRole();

  if (!role) {
    redirect('/admin/worker');
  }

  const bannerTitle = role === 'worker' ? 'Confirmation Dashboard' : 'Boss View';

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <AdminSidebar role={role} />
      <main className="flex-1">
        <div style={{ backgroundColor: '#0E1C4D' }} className="px-6 md:px-10 py-5">
          <h1 className="text-white text-xl md:text-2xl font-bold">{bannerTitle}</h1>
        </div>
        <div className="p-6 md:p-10">{children}</div>
      </main>
    </div>
  );
}