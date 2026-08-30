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

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <AdminSidebar role={role} />
      <main className="flex-1 p-6 md:p-10">{children}</main>
    </div>
  );
}