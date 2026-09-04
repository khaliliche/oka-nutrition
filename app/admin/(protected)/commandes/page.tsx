import { getCurrentRole } from '@/lib/auth';
import CommandesClient from '@/components/admin/CommandesClient';

export default async function CommandesPage() {
  const role = await getCurrentRole();
  return <CommandesClient role={role} />;
}