const box = {
  padding: '30px',
  border: '1px solid #e5e7eb',
  borderRadius: '12px',
};

export default function Testimonios() {
  return (
    <section
      style={{
        marginTop: '90px',
        marginBottom: '80px',
      }}
    >
      <h2
        style={{
          textAlign: 'center',
          fontSize: '38px',
          marginBottom: '40px',
        }}
      >
        Lo que dicen nuestros clientes
      </h2>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns:
            'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '20px',
        }}
      >
        <div className="card" style={box}>
          <p>“Excelente atención y rapidez.”</p>
        </div>

        <div className="card" style={box}>
          <p>“Muy buena experiencia.”</p>
        </div>

        <div className="card" style={box}>
          <p>“Volveríamos a trabajar juntos.”</p>
        </div>
      </div>
    </section>
  );
}