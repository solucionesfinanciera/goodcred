import Link from 'next/link';

export default function Mantenimiento() {
  return (
    <main
      style={{
        minHeight:
          '70vh',

        display:
          'flex',

        justifyContent:
          'center',

        alignItems:
          'center',

        padding:
          '40px',
      }}
    >
      <div
        style={{
          textAlign:
            'center',

          maxWidth:
            '700px',
        }}
      >
        <div
          style={{
            fontSize:
              '72px',
          }}
        >
          🛠️
        </div>

        <h1>
          Sitio en mantenimiento
        </h1>

        <p
          style={{
            color:
              '#6b7280',

            margin:
              '20px 0',
          }}
        >
          Estamos realizando
          mejoras para volver
          pronto.
        </p>

        <Link
          href="/"
          style={{
            display:
              'inline-block',

            background:
              '#991b1b',

            color:
              'white',

            padding:
              '14px 24px',

            borderRadius:
              '12px',

            textDecoration:
              'none',
          }}
        >
          Volver al inicio
        </Link>
      </div>
    </main>
  );
}