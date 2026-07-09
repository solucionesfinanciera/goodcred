import Link from 'next/link';

export default function Footer() {
  return (
    <footer
      style={{
        marginTop:
          '80px',

        background:
          '#111827',

        color:
          'white',

        padding:
          '60px 30px',
      }}
    >
      <div
        style={{
          maxWidth:
            '1200px',

          margin:
            '0 auto',

          display:
            'grid',

          gridTemplateColumns:
            'repeat(auto-fit,minmax(240px,1fr))',

          gap:
            '40px',
        }}
      >
        <div>
          <h2>
            FINANZAS SURE
          </h2>

          <p
            style={{
              color:
                '#d1d5db',

              lineHeight:
                '1.8',
            }}
          >
            Soluciones financieras
            para empresas y
            comercios.
          </p>
        </div>

        <div>
          <h3>
            Navegación
          </h3>

          <div
            style={{
              display:
                'flex',

              flexDirection:
                'column',

              gap:
                '12px',
            }}
          >
            <Link href="/">
              Inicio
            </Link>

            <Link href="/comercios">
              Comercios
            </Link>

            <Link href="/contacto">
              Contacto
            </Link>
          </div>
        </div>

        <div>
          <h3>
            Legal
          </h3>

          <div
            style={{
              display:
                'flex',

              flexDirection:
                'column',

              gap:
                '12px',
            }}
          >
            <Link href="/privacy">
              Privacidad
            </Link>

            <Link href="/terminos">
              Términos
            </Link>

            <Link href="/legal">
              Aviso legal
            </Link>
          </div>
        </div>

        <div>
          <h3>
            Contacto
          </h3>

          <p>
            contacto@FINANZAS SURE.com
          </p>

          <p>
            +54 11 0000 0000
          </p>
        </div>
      </div>

      <div
        style={{
          marginTop:
            '50px',

          borderTop:
            '1px solid #374151',

          paddingTop:
            '20px',

          textAlign:
            'center',

          color:
            '#9ca3af',
        }}
      >
        © 2026 FINANZAS SURE
      </div>
    </footer>
  );
}