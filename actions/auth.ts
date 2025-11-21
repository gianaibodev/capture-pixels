'use server';

import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export async function login(formData: FormData) {
  const password = formData.get('password');
  const validPassword = process.env.ADMIN_PASSWORD || 'admin123';

  if (password === validPassword) {
    (await cookies()).set('admin_session', 'true', { httpOnly: true, path: '/', maxAge: 60 * 60 * 24 });
    redirect('/admin');
  } else {
    return { error: 'Invalid password' };
  }
}

export async function logout() {
  (await cookies()).delete('admin_session');
  redirect('/admin/login');
}

