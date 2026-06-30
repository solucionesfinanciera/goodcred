'use client';

import { useRouter } from 'next/navigation';

export default function LogoutButton() {
  const router =
    useRouter();

  function salir() {
    localStorage.removeItem(
      'admin'
    );

    router.push(
      '/login'
    );
  }

  return (
    <button
      onClick={
        salir
      }
      style={{
        background:
          '#991b1b',
        color:
          'white',
        border:
          'none',
        padding:
          '14px 18px',
        borderRadius:
          '10px',
        cursor:
          'pointer',
      }}
    >
      Salir
    </button>
  );
}