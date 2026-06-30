'use client';

import styles from './page.module.css';
import { useEffect, useRef, useState } from 'react';

export default function Home() {
  const [monto, setMonto] = useState('');
  const [fechaPago, setFechaPago] = useState('');
  const [interes, setInteres] = useState(5);
  const inputArchivoRef = useRef<HTMLInputElement>(null);

  const [mostrarFormulario, setMostrarFormulario] =
    useState(false);

  const [loading, setLoading] =
    useState(false);

  const [nombre, setNombre] =
    useState('');

  const [email, setEmail] =
    useState('');

  const [telefono, setTelefono] =
    useState('');

  const [empresa, setEmpresa] =
    useState('');

  const [mensaje, setMensaje] =
    useState('');

  const [imagenCheque, setImagenCheque] =
    useState('');


  useEffect(() => {
    cargarInteres();
  }, []);

  async function cargarInteres() {
    try {
      const res =
        await fetch('/api/config', {
          cache: 'no-store',
        });

      const data =
        await res.json();

      setInteres(
        Number(data.interes)
      );
    } catch {
      setInteres(5);
    }
  }

  function calcularDias() {
    if (!fechaPago) return 0;

    const hoy =
      new Date();

    const vencimiento =
      new Date(fechaPago);

    const diferencia =
      vencimiento.getTime() -
      hoy.getTime();

    return Math.max(
      0,
      Math.ceil(
        diferencia /
        (1000 * 60 * 60 * 24)
      )
    );
  }

  function calcularResultado() {
    const valor =
      Number(monto || 0);

    const dias =
      calcularDias();

    if (!valor || !dias)
      return 0;

    const descuento =
      valor *
      (interes / 100) *
      (dias / 30);

    return Math.round(
      valor - descuento
    );
  }

  async function enviar() {
    if (!nombre.trim()) {
  alert('Ingresá tu nombre y apellido.');
  return;
}

if (!email.trim()) {
  alert('Ingresá un email.');
  return;
}

if (!email.includes('@')) {
  alert('Ingresá un email válido.');
  return;
}

if (!telefono.trim()) {
  alert('Ingresá un teléfono.');
  return;
}

if (!empresa.trim()) {
  alert('Ingresá el CUIT del librador.');
  return;
}

if (!imagenCheque) {
  alert('Adjuntá una foto del cheque.');
  return;
}

if (Number(monto) <= 0) {
  alert('Ingresá un monto válido.');
  return;
}

if (!fechaPago) {
  alert('Seleccioná la fecha de pago.');
  return;
}
    if (!nombre.trim()) {
  alert('Ingresá tu nombre y apellido.');
  return;
}

if (!email.trim()) {
  alert('Ingresá tu email.');
  return;
}

if (!telefono.trim()) {
  alert('Ingresá tu teléfono.');
  return;
}

if (!empresa.trim()) {
  alert('Ingresá el CUIT del librador.');
  return;
}

if (!imagenCheque) {
  alert('Adjuntá una foto del cheque.');
  return;
}
    try {
      setLoading(true);

      const res =
        await fetch(
          '/api/contacto',
          {
            method: 'POST',

            headers: {
              'Content-Type':
                'application/json',
            },

            body: JSON.stringify({
              origen: 'calculadora',

              nombre,
              email,
              telefono,
              empresa,
              mensaje,

              imagenCheque,

              montoCheque: Number(monto),

              fechaPago,

              dias: calcularDias(),

              interesAplicado: interes,

              resultadoCalculado: calcularResultado(),
            }),
          }
        );

      const data =
        await res.json();

      if (
        !res.ok ||
        !data.ok
      ) {
        throw new Error();
      }

      window.location.href =
        '/gracias';
    } catch {
      alert(
        'Error al enviar la consulta'
      );
    }

    setLoading(false);
  }

  return (
    <main>
      <section className={styles.hero}>
        <div
          style={{
            maxWidth: '1200px',
            width: '100%',
            margin: '0 auto',
            textAlign: 'center',
          }}
        >
          <h1 className={styles.heroTitulo}>
  Descuento de cheques de pago diferido
</h1>

<p className={styles.heroTexto}>
  Calculá en segundos cuánto recibirías por tu cheque y recibí una propuesta sin compromiso.
</p>
<p
  style={{
    marginTop: '18px',
    fontSize: '18px',
    color: '#4B5563',
    maxWidth: '700px',
    marginInline: 'auto',
    lineHeight: 1.7,
  }}
>
  Trabajamos con empresas, comercios y profesionales que necesitan
  liquidez rápida mediante el descuento de cheques de pago diferido.
</p>
<div className={styles.heroBadges}>
  <span>✓ Respuesta rápida</span>
  <span>✓ Operaciones seguras</span>
  <span>✓ Atención personalizada</span>
</div>
<div
  style={{
    marginTop: '28px',
    display: 'flex',
    justifyContent: 'center',
    gap: '40px',
    flexWrap: 'wrap',
    color: '#374151',
    fontWeight: 600,
    fontSize: '15px',
  }}
>
  <span>🏦 Empresas de todo el país</span>

  <span>⚡ Respuesta en el día</span>

  <span>🔒 Información confidencial</span>
</div>

          <div className={`${styles.calculadoraBox} ${styles.card}`}>
            <div
              style={{
                textAlign: 'center',
                marginBottom: '35px',
              }}
            >
              <h2
                style={{
                  fontSize: '34px',
                  fontWeight: 700,
                  color: '#166534',
                  marginBottom: '12px',
                }}
              >
                💰 Calculadora de descuento de cheques
              </h2>

              <p
                style={{
                  color: '#6B7280',
                  fontSize: '18px',
                  marginBottom: '12px',
                }}
              >
                Conocé cuánto dinero podrías recibir hoy mismo.
              </p>

              <div
                style={{
                  display: 'inline-block',
                  background: '#DCFCE7',
                  color: '#166534',
                  padding: '8px 18px',
                  borderRadius: '999px',
                  fontWeight: 700,
                }}
              >
                Tasa vigente: {interes}% mensual
              </div>
            </div>

            <div className={styles.filaCalculadora}>
              <div className={styles.campoCalculadora}>
                <input
                  className={styles.inputCalculadora}
                  type="number"
                  placeholder="Monto del cheque"
                  value={monto}
                  onChange={(e) =>
                    setMonto(e.target.value)
                  }
                />
              </div>

              <div className={styles.campoCalculadora}>
                <label className={styles.labelCalculadora}>
                  Fecha de pago del cheque
                </label>

                <input
                  className={styles.inputCalculadora}
                  type="date"
                  value={fechaPago}
                  onChange={(e) =>
                    setFechaPago(e.target.value)
                  }
                />
              </div>
            </div>

            <div className={styles.resultado}>


              <h3 className={styles.tituloResultado}>
                Dinero estimado
              </h3>
              {calcularResultado() > 0 && (
  <div className={styles.resumenOperacion}>
    <p>
      <strong>Monto del cheque:</strong> $
      {Number(monto).toLocaleString('es-AR')}
    </p>

    <p>
      <strong>Días hasta el vencimiento:</strong> {calcularDias()}
    </p>

    <p>
      <strong>Tasa aplicada:</strong> {interes}% mensual
    </p>
  </div>
)}

              <div className={styles.montoResultado}>
                $
                {calcularResultado().toLocaleString(
                  'es-AR'
                )}
              </div>

              {!mostrarFormulario &&
                calcularResultado() >
                0 && (
                  <button
                    className={styles.botonContinuar}
                    onClick={() =>
                      setMostrarFormulario(true)
                    }
                  >
                    Continuar operación
                  </button>
                )}
            </div>

            {mostrarFormulario && (
              <div
                style={{
                  marginTop: '60px',
                  textAlign: 'left',
                  background: '#FFFFFF',
                  borderRadius: '24px',
                  padding: '45px',
                  boxShadow: '0 15px 40px rgba(0,0,0,.08)',
                  border: '1px solid #E5E7EB',
                }}
              >
                <div className={styles.tituloFormulario}>
                  <div className={styles.iconoFormulario}>
                    📋
                  </div>

                  <div>
                    <h2>Datos de contacto</h2>

                    <p>
                      Completá tus datos para recibir una propuesta.
                    </p>
                  </div>
                </div>

                <div className={styles.grupoCampos}>
                  <input
                    className={styles.input}
                    placeholder="Nombre y apellido"
                    value={nombre}
                    onChange={(e) =>
                      setNombre(e.target.value)
                    }
                  />

                  <input
                    className={styles.input}
                    placeholder="Email"
                    type="email"
                    value={email}
                    onChange={(e) =>
                      setEmail(
                        e.target.value
                      )
                    }
                  />

                  <input
                    className={styles.input}
                    placeholder="Teléfono"
                    value={telefono}
                    onChange={(e) =>
                      setTelefono(
                        e.target.value
                      )
                    }
                  />

                  <input
                    className={styles.input}
                    placeholder="CUIT del librador"
                    value={empresa}
                    onChange={(e) =>
                      setEmpresa(
                        e.target.value
                      )
                    }
                  />
                  <div className={styles.campoArchivo}>
                    <label className={styles.labelArchivo}>
                      📸 Foto del cheque
                    </label>

                    <input
                      className={styles.inputArchivo}
                      type="file"
                      accept="image/*"
                      onChange={(e) => {
                        const archivo = e.target.files?.[0];

                        if (!archivo) return;

                        const reader = new FileReader();

                        reader.onloadend = () => {
                          setImagenCheque(String(reader.result));
                        };

                        reader.readAsDataURL(archivo);
                      }}
                    />

                    {imagenCheque && (
                      <>
                        <img
                          src={imagenCheque}
                          alt="Vista previa del cheque"
                          style={{
                            marginTop: '16px',
                            width: '100%',
                            maxHeight: '250px',
                            objectFit: 'contain',
                            borderRadius: '12px',
                            border: '1px solid #E5E7EB',
                          }}
                        />

                        <button
                          type="button"
                          onClick={() => setImagenCheque('')}
                          style={{
                            marginTop: '12px',
                            padding: '10px 16px',
                            background: '#ef4444',
                            color: '#fff',
                            border: 'none',
                            borderRadius: '8px',
                            cursor: 'pointer',
                            fontWeight: 600,
                          }}
                        >
                          🗑️ Eliminar foto
                        </button>
                      </>
                    )}
                  </div>
                  <textarea
                    className={styles.textarea}
                    rows={5}
                    placeholder="Observaciones"
                    value={mensaje}
                    onChange={(e) =>
                      setMensaje(
                        e.target.value
                      )
                    }
                  />

                  <button
                    className={styles.botonEnviar}
                    onClick={enviar}
                    disabled={loading}
                  >
                    {loading
                      ? 'Enviando...'
                      : 'Enviar consulta'}
                  </button>
                </div>
              </div>
                        )}
          </div>

        </div>

      </section>

<section
  style={{
    background: '#FFFFFF',
    padding: '60px 20px',
    borderTop: '1px solid #E5E7EB',
    borderBottom: '1px solid #E5E7EB',
  }}
>
  <div
    style={{
      maxWidth: '1200px',
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(220px,1fr))',
      gap: '30px',
      textAlign: 'center',
    }}
  >
    <div>
      <h2
        style={{
          color: '#166534',
          fontSize: '42px',
          marginBottom: '10px',
        }}
      >
        ⚡
      </h2>

      <h3>Respuesta rápida</h3>

      <p>Analizamos tu solicitud durante el día hábil.</p>
    </div>

    <div>
      <h2
        style={{
          color: '#166534',
          fontSize: '42px',
          marginBottom: '10px',
        }}
      >
        🔒
      </h2>

      <h3>Operación segura</h3>

      <p>Tus datos se mantienen protegidos y confidenciales.</p>
    </div>

    <div>
      <h2
        style={{
          color: '#166534',
          fontSize: '42px',
          marginBottom: '10px',
        }}
      >
        🤝
      </h2>

      <h3>Atención personalizada</h3>

      <p>Te acompaña una persona durante todo el proceso.</p>
    </div>
  </div>
</section>

<section className={styles.beneficios}>
        <h2>¿Por qué elegir GoodCred?</h2>

        <p>
          Más rápido, más simple y con atención personalizada.
        </p>

        <div className={styles.gridBeneficios}>
          <div className={styles.itemBeneficio}>
            <div className={styles.iconoBeneficio}>⚡</div>

            <h3>Respuesta rápida</h3>

            <p>
              Analizamos tu cheque y te enviamos una propuesta en el menor tiempo posible.
            </p>
          </div>

          <div className={styles.itemBeneficio}>
            <div className={styles.iconoBeneficio}>💰</div>

            <h3>Tasas competitivas</h3>

            <p>
              Trabajamos con condiciones transparentes y acordes al mercado.
            </p>
          </div>

          <div className={styles.itemBeneficio}>
            <div className={styles.iconoBeneficio}>🔒</div>

            <h3>Operaciones seguras</h3>

            <p>
              Toda la información se procesa de forma confidencial y segura.
            </p>
          </div>

          <div className={styles.itemBeneficio}>
            <div className={styles.iconoBeneficio}>🤝</div>

            <h3>Atención personalizada</h3>

            <p>
              Te acompañamos durante todo el proceso hasta concretar la operación.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.comoFunciona}>
        <h2>¿Cómo funciona?</h2>

        <p>
          Obtener una propuesta es simple y rápido.
        </p>

        <div className={styles.pasos}>
          <div className={styles.paso}>
            <div className={styles.numeroPaso}>1</div>

            <h3>Calculá</h3>

            <p>
              Ingresá el monto y la fecha de pago del cheque.
            </p>
          </div>

          <div className={styles.paso}>
            <div className={styles.numeroPaso}>2</div>

            <h3>Completá tus datos</h3>

            <p>
              Adjuntá la foto del cheque y enviá la consulta.
            </p>
          </div>

          <div className={styles.paso}>
            <div className={styles.numeroPaso}>3</div>

            <h3>Recibí una propuesta</h3>

            <p>
              Nuestro equipo analizará la operación y se pondrá en contacto con vos.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.faq}>
        <h2>Preguntas frecuentes</h2>

        <p>
          Respondemos las consultas más habituales.
        </p>

        <div className={styles.faqItem}>
          <h3>¿Qué tipo de cheques aceptan?</h3>

          <p>
            Trabajamos con cheques de pago diferido emitidos por empresas y comercios, sujetos a evaluación.
          </p>
        </div>

        <div className={styles.faqItem}>
          <h3>¿Cuánto demora el análisis?</h3>

          <p>
            Generalmente respondemos las consultas durante el mismo día hábil.
          </p>
        </div>

        <div className={styles.faqItem}>
          <h3>¿Cómo recibo el dinero?</h3>

          <p>
            Una vez aprobada la operación, realizamos la acreditación mediante transferencia bancaria.
          </p>
        </div>

        <div className={styles.faqItem}>
          <h3>¿Tiene costo hacer una consulta?</h3>

          <p>
            No. La consulta y el cálculo son totalmente gratuitos y sin compromiso.
          </p>
        </div>
      </section>

      <section className={styles.estadisticas}>
        <div className={styles.gridEstadisticas}>
          <div className={styles.cardEstadistica}>
            <div className={styles.numero}>24 hs</div>

            <div className={styles.textoNumero}>
              Tiempo estimado de respuesta
            </div>
          </div>

          <div className={styles.cardEstadistica}>
            <div className={styles.numero}>100%</div>

            <div className={styles.textoNumero}>
              Atención personalizada
            </div>
          </div>

          <div className={styles.cardEstadistica}>
            <div className={styles.numero}>✓</div>

            <div className={styles.textoNumero}>
              Operaciones seguras
            </div>
          </div>

          <div className={styles.cardEstadistica}>
            <div className={styles.numero}>ARS</div>

            <div className={styles.textoNumero}>
              Acreditación por transferencia bancaria
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}