import Link from 'next/link';

export default function Hero() {
  return (
    <section
      style={{
        textAlign: 'center',
        padding: '80px 0',
      }}
    >
      <h1
        style={{
          fontSize: '56px',
          marginBottom: '20px',
          color: '#991b1b',
        }}
      >
        GoodCred
      </h1>

      <p
        style={{
          fontSize: '22px',
          color: '#4b5563',
          maxWidth: '700px',
          margin: '0 auto 40px',
        }}
      >
        Soluciones financieras para empresas y comercios de todo el país.
      </p>

      <Link
        href="/contacto"
        style={{
          display: 'inline-block',
          background: '#991b1b',
          color: 'white',
          padding: '14px 28px',
          borderRadius: '10px',
          textDecoration: 'none',
          fontWeight: 'bold',
        }}
      >
        Solicitar asesoramiento
      </Link>
    </section>
  );
}