import Link from 'next/link';

export default function NotFound() {
  return (
    <main
      style={{
        minHeight:
          '80vh',

        display:
          'flex',

        alignItems:
          'center',

        justifyContent:
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
              '120px',

            fontWeight:
              'bold',

            color:
              '#991b1b',
          }}
        >
          404
        </div>

        <h1
          style={{
            marginBottom:
              '20px',
          }}
        >
          Página no encontrada
        </h1>

        <p
          style={{
            color:
              '#6b7280',

            marginBottom:
              '30px',

            lineHeight:
              '1.8',
          }}
        >
          La página que buscás no existe
          o fue movida.
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
              '16px 24px',

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