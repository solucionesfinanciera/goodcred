export default function Status() {
  const ahora =
    new Date()
      .toLocaleString(
        'es-AR'
      );

  return (
    <main
      style={{
        maxWidth:
          '900px',

        margin:
          '60px auto',

        padding:
          '20px',
      }}
    >
      <h1>
        Estado del sistema
      </h1>

      <div
        style={{
          marginTop:
            '30px',

          display:
            'grid',

          gap:
            '20px',
        }}
      >
        <div
          style={{
            border:
              '1px solid #ddd',

            padding:
              '20px',

            borderRadius:
              '12px',
          }}
        >
          <h2>
            Sitio web
          </h2>

          <p>
            ✅ Operativo
          </p>
        </div>

        <div
          style={{
            border:
              '1px solid #ddd',

            padding:
              '20px',

            borderRadius:
              '12px',
          }}
        >
          <h2>
            API
          </h2>

          <p>
            ✅ Disponible
          </p>
        </div>

        <div
          style={{
            border:
              '1px solid #ddd',

            padding:
              '20px',

            borderRadius:
              '12px',
          }}
        >
          <h2>
            Última verificación
          </h2>

          <p>
            {ahora}
          </p>
        </div>
      </div>
    </main>
  );
}