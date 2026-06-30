const stats = [
  {
    numero: '+500',
    texto: 'Empresas atendidas',
  },
  {
    numero: '+15.000',
    texto: 'Operaciones realizadas',
  },
  {
    numero: '24 hs',
    texto: 'Tiempo promedio de respuesta',
  },
  {
    numero: 'Todo el país',
    texto: 'Cobertura',
  },
];

export default function Estadisticas() {
  return (
    <section
      style={{
        marginTop: '90px',
        marginBottom: '90px',
      }}
    >
      <div
        style={{
          display: 'grid',
          gridTemplateColumns:
            'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '20px',
        }}
      >
        {stats.map((item) => (
          <div
            key={item.texto}
            className="card"
            style={{
              padding: '40px',
              textAlign: 'center',
              border: '1px solid #e5e7eb',
              borderRadius: '12px',
            }}
          >
            <div
              style={{
                fontSize: '42px',
                color: '#991b1b',
                fontWeight: 'bold',
              }}
            >
              {item.numero}
            </div>

            <div
              style={{
                marginTop: '10px',
                color: '#6b7280',
              }}
            >
              {item.texto}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}