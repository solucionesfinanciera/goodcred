export default function Nosotros() {
  return (
    <main
      style={{
        maxWidth: "1100px",
        margin: "70px auto",
        padding: "20px",
        color: "#1F2937",
      }}
    >
      <section
        style={{
          textAlign: "center",
          marginBottom: "70px",
        }}
      >
        <h1
          style={{
            fontSize: "52px",
            fontWeight: 800,
            color: "#166534",
            marginBottom: "20px",
          }}
        >
          Sobre Finanzas Sure
        </h1>

        <p
          style={{
            fontSize: "22px",
            color: "#475569",
            maxWidth: "800px",
            margin: "0 auto",
            lineHeight: 1.8,
          }}
        >
          Somos una empresa especializada en brindar soluciones financieras
          ágiles para empresas, comercios y profesionales que necesitan
          liquidez inmediata mediante el descuento de cheques.
        </p>
      </section>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))",
          gap: "30px",
          marginBottom: "60px",
        }}
      >
        <div
          style={{
            padding: "35px",
            border: "1px solid #DCFCE7",
            borderRadius: "18px",
            background: "#F0FDF4",
          }}
        >
          <h2
            style={{
              color: "#166534",
              marginBottom: "15px",
            }}
          >
            Nuestra misión
          </h2>

          <p style={{ lineHeight: 1.8 }}>
            Brindar soluciones financieras rápidas, seguras y transparentes,
            acompañando el crecimiento de nuestros clientes con atención
            personalizada y respuestas ágiles.
          </p>
        </div>

        <div
          style={{
            padding: "35px",
            border: "1px solid #DCFCE7",
            borderRadius: "18px",
            background: "#F0FDF4",
          }}
        >
          <h2
            style={{
              color: "#166534",
              marginBottom: "15px",
            }}
          >
            Nuestra visión
          </h2>

          <p style={{ lineHeight: 1.8 }}>
            Consolidarnos como una empresa referente en el mercado financiero,
            reconocida por la confianza, el profesionalismo y la excelencia en
            cada operación.
          </p>
        </div>
      </div>

      <section
        style={{
          marginBottom: "60px",
        }}
      >
        <h2
          style={{
            fontSize: "36px",
            marginBottom: "25px",
          }}
        >
          ¿Por qué elegirnos?
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
            gap: "20px",
          }}
        >
          {[
            "✔ Atención personalizada",
            "✔ Respuesta rápida",
            "✔ Operaciones seguras",
            "✔ Confidencialidad absoluta",
            "✔ Tasas competitivas",
            "✔ Empresas de todo el país",
          ].map((item) => (
            <div
              key={item}
              style={{
                padding: "20px",
                border: "1px solid #E5E7EB",
                borderRadius: "14px",
                background: "#fff",
                fontWeight: 600,
              }}
            >
              {item}
            </div>
          ))}
        </div>
      </section>

      <section
        style={{
          background: "linear-gradient(135deg,#166534,#22C55E)",
          color: "white",
          borderRadius: "22px",
          padding: "45px",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            fontSize: "38px",
            marginBottom: "20px",
          }}
        >
          Nuestro compromiso
        </h2>

        <p
          style={{
            fontSize: "19px",
            maxWidth: "850px",
            margin: "0 auto",
            lineHeight: 1.9,
          }}
        >
          Trabajamos todos los días para ofrecer una experiencia financiera
          confiable, transparente y eficiente. Nuestro objetivo es convertirnos
          en el aliado estratégico de cada empresa que confía en Finanzas Sure.
        </p>
      </section>
    </main>
  );
}