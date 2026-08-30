import { cookies } from 'next/headers';

export const SESSION_COOKIE = 'admin_session';

export type Role = 'worker' | 'boss';

export function buildSessionValue(role: Role): string {
  const secret = process.env.ADMIN_SESSION_SECRET || '';
  return `${role}:${secret}`;
}

export function parseSessionValue(value: string | undefined): Role | null {
  if (!value) return null;
  const secret = process.env.ADMIN_SESSION_SECRET || '';
  const [role, providedSecret] = value.split(':');
  if (providedSecret !== secret) return null;
  if (role === 'worker' || role === 'boss') return role;
  return null;
}

export async function getCurrentRole(): Promise<Role | null> {
  const cookieStore = await cookies();
  const value = cookieStore.get(SESSION_COOKIE)?.value;
  return parseSessionValue(value);
}