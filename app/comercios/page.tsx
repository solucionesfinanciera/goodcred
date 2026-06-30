export default function ComerciosPage() {
  return (
    <main
      style={{
        maxWidth: "900px",
        margin: "50px auto",
        padding: "20px",
      }}
    >
      <h1
        style={{
          fontSize: "42px",
          marginBottom: "20px",
        }}
      >
        Comercios Adheridos
      </h1>

      <p
        style={{
          marginBottom: "30px",
        }}
      >
        Trabajamos con empresas y comercios de todo el país brindando
        soluciones financieras rápidas y seguras.
      </p>

      <div
        style={{
          display: "grid",
          gap: "20px",
        }}
      >
        <div
          style={{
            padding: "20px",
            border: "1px solid #e5e7eb",
            borderRadius: "10px",
          }}
        >
          <h3>Financiación de IVA</h3>
          <p>Opciones ágiles para cumplir con obligaciones fiscales.</p>
        </div>

        <div
          style={{
            padding: "20px",
            border: "1px solid #e5e7eb",
            borderRadius: "10px",
          }}
        >
          <h3>Capital de Trabajo</h3>
          <p>Liquidez inmediata para potenciar tu negocio.</p>
        </div>

        <div
          style={{
            padding: "20px",
            border: "1px solid #e5e7eb",
            borderRadius: "10px",
          }}
        >
          <h3>Descuento de Cheques</h3>
          <p>Anticipá el cobro de tus cheques de forma simple.</p>
        </div>

        <div
          style={{
            padding: "20px",
            border: "1px solid #e5e7eb",
            borderRadius: "10px",
          }}
        >
          <h3>eCheqs</h3>
          <p>Operaciones digitales rápidas, seguras y transparentes.</p>
        </div>
      </div>
    </main>
  );
}