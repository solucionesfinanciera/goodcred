import Link from 'next/link';

export default function Gracias() {
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
              '70px',
          }}
        >
          ✅
        </div>

        <h1
          style={{
            marginTop:
              '20px',
          }}
        >
          Consulta enviada
        </h1>

        <p
          style={{
            color:
              '#6b7280',

            lineHeight:
              '1.8',

            margin:
              '20px 0',
          }}
        >
          Recibimos tu mensaje.
          Nos vamos a contactar
          lo antes posible.
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