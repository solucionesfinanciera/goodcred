const box = {
  padding: '30px',
  border: '1px solid #e5e7eb',
  borderRadius: '12px',
};

export default function Beneficios() {
  return (
    <section
      style={{
        marginTop: '90px',
        textAlign: 'center',
      }}
    >
      <h2
        style={{
          fontSize: '38px',
          marginBottom: '40px',
        }}
      >
        ¿Por qué elegir FINANZAS SURE?
      </h2>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns:
            'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '20px',
        }}
      >
        <div className="card" style={box}>
          <h3>Respuesta rápida</h3>
          <p>Procesos ágiles para ayudarte.</p>
        </div>

        <div className="card" style={box}>
          <h3>Atención personalizada</h3>
          <p>Un asesor acompaña cada operación.</p>
        </div>

        <div className="card" style={box}>
          <h3>Cobertura nacional</h3>
          <p>Atención para todo el país.</p>
        </div>
      </div>
    </section>
  );
}