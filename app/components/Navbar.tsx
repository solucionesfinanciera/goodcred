'use client';

import Link from 'next/link';

export default function Navbar() {
  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 999,
        background: '#FFFFFF',
        borderBottom: '1px solid #DCFCE7',
        padding: '18px 60px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <Link
  href="/"
  style={{
    textDecoration: 'none',
    color: '#166534',
    fontWeight: '700',
    fontSize: '30px',
  }}
>
  FINANZAS SURE
</Link>

      <nav
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '16px',
        }}
      >
        <Link
          href="/"
          style={{
            textDecoration: 'none',
            color: '#166534',
            fontWeight: '700',
            padding: '12px 20px',
            borderRadius: '12px',
            background: '#F0FDF4',
            border: '2px solid #BBF7D0',
          }}
        >
          🏠 Inicio
        </Link>

        <Link
          href="/comercios"
          style={{
            textDecoration: 'none',
            color: '#166534',
            fontWeight: '700',
            padding: '12px 20px',
            borderRadius: '12px',
            background: '#F0FDF4',
            border: '2px solid #BBF7D0',
          }}
        >
          🏢 Comercios
        </Link>

        <Link
          href="/status"
          style={{
            textDecoration: 'none',
            color: '#166534',
            fontWeight: '700',
            padding: '12px 20px',
            borderRadius: '12px',
            background: '#F0FDF4',
            border: '2px solid #BBF7D0',
          }}
        >
          ℹ️ Nosotros
        </Link>
      </nav>
    </header>
  );
}