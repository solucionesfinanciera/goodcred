'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function AdminProtegido() {
  const router =
    useRouter();

  useEffect(() => {
    const acceso =
      localStorage.getItem(
        'admin'
      );

    if (
      acceso !== 'ok'
    ) {
      router.replace(
        '/login'
      );
    }
  }, [router]);

  return (
    <iframe
      src="/admin-panel"
      style={{
        width: '100%',
        height:
          '100vh',
        border:
          'none',
      }}
    />
  );
}