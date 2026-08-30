import { NextRequest, NextResponse } from 'next/server';
import { buildSessionValue, SESSION_COOKIE, Role } from '@/lib/auth';

export async function POST(req: NextRequest) {
  const { role, password } = (await req.json()) as { role: Role; password: string };

  if (role !== 'worker' && role !== 'boss') {
    return NextResponse.json({ ok: false, error: 'Invalid role' }, { status: 400 });
  }

  const expectedPassword =
    role === 'worker' ? process.env.WORKER_PASSWORD : process.env.BOSS_PASSWORD;

  if (!password || password !== expectedPassword) {
    return NextResponse.json({ ok: false, error: 'Wrong password' }, { status: 401 });
  }

  const response = NextResponse.json({ ok: true });
  response.cookies.set(SESSION_COOKIE, buildSessionValue(role), {
    httpOnly: true,
    secure: true,
    sameSite: 'lax',
    path: '/',
    maxAge: 60 * 60 * 24 * 30, // 30 days
  });

  return response;
}