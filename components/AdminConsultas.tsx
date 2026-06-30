'use client';

import { useMemo, useState } from 'react';

type Consulta = {
  nombre: string;
  email: string;
  telefono: string;
  mensaje: string;
  fecha: string;
  estado?: string;
};

export default function AdminConsultas({
  consultas,
}: {
  consultas: Consulta[];
}) {
  const [lista, setLista] = useState(
    consultas.map((item) => ({
      ...item,
      estado:
        item.estado ||
        'Nueva',
    }))
  );

  const [busqueda, setBusqueda] =
    useState('');

  const [estado, setEstado] =
    useState('Todas');

  async function actualizarEstado(
    fecha: string,
    nuevoEstado: string
  ) {
    const copia =
      lista.map(
        (item) =>
          item.fecha ===
          fecha
            ? {
                ...item,
                estado:
                  nuevoEstado,
              }
            : item
      );

    setLista(copia);

    await fetch(
      '/api/actualizar-estado',
      {
        method: 'POST',

        headers: {
          'Content-Type':
            'application/json',
        },

        body:
          JSON.stringify(
            {
              fecha,
              estado:
                nuevoEstado,
            }
          ),
      }
    );
  }

  async function eliminar(
    fecha: string
  ) {
    const confirmar =
      window.confirm(
        '¿Eliminar consulta?'
      );

    if (!confirmar)
      return;

    setLista(
      lista.filter(
        (
          item
        ) =>
          item.fecha !==
          fecha
      )
    );

    await fetch(
      '/api/eliminar-consulta',
      {
        method: 'POST',

        headers: {
          'Content-Type':
            'application/json',
        },

        body:
          JSON.stringify(
            {
              fecha,
            }
          ),
      }
    );
  }

  const filtradas =
    useMemo(() => {
      return lista.filter(
        (item) => {
          const texto =
            busqueda.toLowerCase();

          const okTexto =
            item.nombre
              ?.toLowerCase()
              .includes(
                texto
              ) ||
            item.email
              ?.toLowerCase()
              .includes(
                texto
              );

          const okEstado =
            estado ===
            'Todas'
              ? true
              : item.estado ===
                estado;

          return (
            okTexto &&
            okEstado
          );
        }
      );
    }, [
      lista,
      busqueda,
      estado,
    ]);

  return (
    <>
      <div
        style={{
          display: 'grid',
          gap: '15px',
          marginBottom:
            '30px',
        }}
      >
        <input
          placeholder="Buscar..."
          value={busqueda}
          onChange={(e) =>
            setBusqueda(
              e.target.value
            )
          }
          style={field}
        />

        <select
          value={estado}
          onChange={(e) =>
            setEstado(
              e.target.value
            )
          }
          style={field}
        >
          <option>
            Todas
          </option>

          <option>
            Nueva
          </option>

          <option>
            En proceso
          </option>

          <option>
            Cerrada
          </option>
        </select>
      </div>

      <div
        style={{
          display:
            'grid',
          gap:
            '20px',
        }}
      >
        {[...filtradas]
          .reverse()
          .map(
            (
              item
            ) => (
              <div
                key={
                  item.fecha
                }
                style={{
                  padding:
                    '24px',
                  border:
                    '1px solid #e5e7eb',
                  borderRadius:
                    '12px',
                }}
              >
                <h3>
                  {
                    item.nombre
                  }
                </h3>

                <p>
                  📧{' '}
                  {
                    item.email
                  }
                </p>

                <p>
                  📱{' '}
                  {
                    item.telefono
                  }
                </p>

                <p>
                  💬{' '}
                  {
                    item.mensaje
                  }
                </p>

                <select
                  value={
                    item.estado
                  }
                  onChange={(
                    e
                  ) =>
                    actualizarEstado(
                      item.fecha,
                      e.target
                        .value
                    )
                  }
                  style={{
                    ...field,
                    marginTop:
                      '15px',
                  }}
                >
                  <option>
                    Nueva
                  </option>

                  <option>
                    En proceso
                  </option>

                  <option>
                    Cerrada
                  </option>
                </select>

                <button
                  onClick={() =>
                    eliminar(
                      item.fecha
                    )
                  }
                  style={{
                    marginTop:
                      '15px',
                    width:
                      '100%',
                    background:
                      '#991b1b',
                    color:
                      'white',
                    border:
                      'none',
                    padding:
                      '12px',
                    borderRadius:
                      '10px',
                    cursor:
                      'pointer',
                  }}
                >
                  Eliminar
                </button>

                <p
                  style={{
                    marginTop:
                      '14px',
                    color:
                      '#6b7280',
                  }}
                >
                  {new Date(
                    item.fecha
                  ).toLocaleString()}
                </p>
              </div>
            )
          )}
      </div>
    </>
  );
}

const field = {
  width: '100%',
  padding: '14px',
  border:
    '1px solid #d1d5db',
  borderRadius:
    '10px',
};