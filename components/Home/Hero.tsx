import Link from "next/link";

export default function Hero() {
  return (
    <section
      style={{
        padding: "100px 20px",
        textAlign: "center",
        background:
          "linear-gradient(to bottom, #f8fafc, #ffffff)",
      }}
    >
      <div
        style={{
          maxWidth: "900px",
          margin: "0 auto",
        }}
      >
        <span
          style={{
            display: "inline-block",
            background: "#dcfce7",
            color: "#15803d",
            padding: "8px 18px",
            borderRadius: "999px",
            fontWeight: 700,
            marginBottom: "25px",
          }}
        >
          Descuento de Cheques
        </span>

        <h1
          style={{
            fontSize: "64px",
            lineHeight: "1.1",
            color: "#0f172a",
            fontWeight: 800,
            marginBottom: "25px",
          }}
        >
          Convertimos tu cheque
          <br />
          en efectivo.
        </h1>

        <p
          style={{
            fontSize: "22px",
            color: "#64748b",
            maxWidth: "700px",
            margin: "0 auto 45px",
            lineHeight: "1.7",
          }}
        >
          Descontá cheques de pago diferido de manera rápida,
          segura y transparente para obtener liquidez inmediata.
        </p>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "20px",
            flexWrap: "wrap",
          }}
        >
          <Link
            href="/#calculadora"
            style={{
              background: "#16a34a",
              color: "white",
              padding: "16px 34px",
              borderRadius: "999px",
              textDecoration: "none",
              fontWeight: 700,
              boxShadow:
                "0 10px 25px rgba(22,163,74,.25)",
            }}
          >
            Calcular ahora
          </Link>

          <Link
            href="/contacto"
            style={{
              background: "white",
              color: "#0f172a",
              padding: "16px 34px",
              borderRadius: "999px",
              textDecoration: "none",
              fontWeight: 700,
              border: "1px solid #e2e8f0",
            }}
          >
            Contactar asesor
          </Link>
        </div>
      </div>
    </section>
  );
}