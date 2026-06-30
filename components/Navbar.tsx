import Link from 'next/link';

export default function Navbar() {
  return (
    <header
      style={{
        borderBottom:
          '1px solid #e5e7eb',
        background:
          'white',
        position:
          'sticky',
        top: 0,
        zIndex: 10,
      }}
    >
      <div
        style={{
          maxWidth:
            '1200px',
          margin:
            '0 auto',
          padding:
            '18px 20px',
          display:
            'flex',
          justifyContent:
            'space-between',
          alignItems:
            'center',
        }}
      >
        <Link
          href="/"
          style={{
            display:
              'flex',
            alignItems:
              'center',
            gap:
              '12px',
            textDecoration:
              'none',
          }}
        >
          <img
            src="/images/logo.svg"
            alt="GoodCred"
            style={{
              height:
                '44px',
            }}
          />

          <span
            style={{
              color:
                '#991b1b',
              fontSize:
                '28px',
              fontWeight:
                'bold',
            }}
          >
            GoodCred
          </span>
        </Link>

        <nav
          style={{
            display:
              'flex',
            gap:
              '24px',
            flexWrap:
              'wrap',
          }}
        >
          <Menu
            href="/"
            texto="Inicio"
          />

         <Menu
            href="/comercios"
            texto="Comercios"
          />

          <Menu
            href="/contacto"
            texto="Contacto"
          />
        </nav>
      </div>
    </header>
  );
}

function Menu({
  href,
  texto,
}: {
  href: string;
  texto: string;
}) {
  return (
    <Link
      href={href}
      style={{
        textDecoration:
          'none',
        color:
          '#374151',
        fontWeight:
          '600',
      }}
    >
      {texto}
    </Link>
  );
}