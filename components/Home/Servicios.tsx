import Link from 'next/link';

const servicios = [
  {
    titulo: 'Cheques',
    texto: 'Financiamiento y descuento de cheques.',
    ruta: '/cheques',
  },
  {
    titulo: 'Comercios',
    texto: 'Soluciones para potenciar ventas.',
    ruta: '/comercios',
  },
  {
    titulo: 'Contacto',
    texto: 'Hablá con un asesor de FINANZAS SURE.',
    ruta: '/contacto',
  },
];

export default function Servicios() {
  return (
    <section
      style={{
        display: 'grid',
        gridTemplateColumns:
          'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '20px',
      }}
    >
      {servicios.map((item) => (
        <Link
          key={item.titulo}
          href={item.ruta}
          style={{
            textDecoration: 'none',
            color: 'inherit',
          }}
        >
          <div
            className="card"
            style={{
              padding: '30px',
              border: '1px solid #e5e7eb',
              borderRadius: '12px',
            }}
          >
            <h2>{item.titulo}</h2>

            <p style={{ marginTop: '10px' }}>
              {item.texto}
            </p>
          </div>
        </Link>
      ))}
    </section>
  );
}