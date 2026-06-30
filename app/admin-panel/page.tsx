'use client';

import { useEffect, useState } from 'react';

export default function AdminPanel() {
  const [consultas, setConsultas] = useState<any[]>([]);
  const [interes, setInteres] = useState(5);
  const [tab, setTab] = useState<'activas' | 'temporal'>('activas');
  const [busqueda, setBusqueda] = useState('');
  const [imagenZoom, setImagenZoom] = useState<string | null>(null);
  const [auth, setAuth] = useState(false);
  const [password, setPassword] = useState('');

  useEffect(() => {
    const savedAuth =
      localStorage.getItem(
        'auth'
      );

    if (
      savedAuth ===
      'true'
    ) {
      setAuth(true);
    }

    ocultarLayout();
    cargar();

    return () => {
      mostrarLayout();
    };
  }, []);

  function ocultarLayout() {
    const header =
      document.querySelector(
        'header'
      );

    const footer =
      document.querySelector(
        'footer'
      );

    if (header)
      (
        header as HTMLElement
      ).style.display =
        'none';

    if (footer)
      (
        footer as HTMLElement
      ).style.display =
        'none';
  }

  function mostrarLayout() {
    const header =
      document.querySelector(
        'header'
      );

    const footer =
      document.querySelector(
        'footer'
      );

    if (header)
      (
        header as HTMLElement
      ).style.display =
        '';

    if (footer)
      (
        footer as HTMLElement
      ).style.display =
        '';
  }

  async function cargar() {
    try {
      const [
        consultasRes,
        configRes,
      ] =
        await Promise.all([
          fetch(
            '/api/contacto'
          ),
          fetch(
            '/api/config'
          ),
        ]);

      setConsultas(
        await consultasRes.json()
      );

      const cfg =
        await configRes.json();

      setInteres(
        Number(
          cfg.interes
        )
      );
    } catch {}
  }

  async function guardar() {
    await fetch(
      '/api/config',
      {
        method:
          'POST',

        headers: {
          'Content-Type':
            'application/json',
        },

        body:
          JSON.stringify({
            interes,
          }),
      }
    );

    alert(
      'Guardado'
    );
  }

  async function eliminar(
    id: number
  ) {
    await fetch(
      '/api/eliminar-consulta',
      {
        method:
          'POST',

        headers: {
          'Content-Type':
            'application/json',
        },

        body:
          JSON.stringify({
            id,
          }),
      }
    );

    cargar();
  }

  async function moverEstado(
    id: number,
    estado: string
  ) {
    await fetch(
      '/api/actualizar-estado',
      {
        method:
          'POST',

        headers: {
          'Content-Type':
            'application/json',
        },

        body:
          JSON.stringify({
            id,
            estado,
          }),
      }
    );

    cargar();
  }

  function exportarCSV() {
    const headers =
      'nombre,email,telefono,estado\n';

    const rows =
      consultas
        .map(
          (c) =>
            `${c.nombre},${c.email},${c.telefono},${c.estado}`
        )
        .join('\n');

    const blob =
      new Blob(
        [
          headers +
            rows,
        ],
        {
          type:
            'text/csv',
        }
      );

    const url =
      window.URL.createObjectURL(
        blob
      );

    const a =
      document.createElement(
        'a'
      );

    a.href = url;

    a.download =
      'consultas.csv';

    a.click();
  }

  const activas = consultas
  .filter(
    (c) => c.estado !== 'temporal'
  )
  .sort((a, b) => {

    if (
      a.estado === 'pendiente' &&
      b.estado !== 'pendiente'
    ) {
      return -1;
    }

    if (
      a.estado !== 'pendiente' &&
      b.estado === 'pendiente'
    ) {
      return 1;
    }

    return b.id - a.id;
  });

  const temporales =
    consultas
      .filter(
        (c) =>
          c.estado ===
          'temporal'
      )
      .slice()
      .reverse();

  const listaBase =
    tab ===
    'activas'
      ? activas
      : temporales;

  const lista =
    listaBase.filter(
      (c) =>
        `${c.nombre} ${c.telefono}`
          .toLowerCase()
          .includes(
            busqueda.toLowerCase()
          )
    );

  const total =
    consultas.length;

  const totalActivas =
    activas.length;

  const totalTemporales =
    temporales.length;
const totalPendientes = consultas.filter(
  (c) => c.estado === 'pendiente'
).length;

const totalCheques = consultas.filter(
  (c) => Number(c.montoCheque) > 0
).length;

const montoTotal = consultas.reduce(
  (acc, c) =>
    acc + Number(c.montoCheque || 0),
  0
);

const montoPromedio =
  totalCheques > 0
    ? Math.round(
        montoTotal /
          totalCheques
      )
    : 0;
  if (!auth) {
    return (
      <div
        style={{
          padding:
            '50px',
          textAlign:
            'center',
        }}
      >
        <h2>
          Login Admin
        </h2>

        <input
          type="password"
          value={
            password
          }
          onChange={(e) =>
            setPassword(
              e.target.value
            )
          }
          placeholder="Contraseña"
          style={{
            padding:
              '10px',
            marginTop:
              '10px',
          }}
        />

        <br />

        <button
          onClick={() => {
            if (
              password.trim() ===
              'admin123'
            ) {
              setAuth(
                true
              );

              localStorage.setItem(
                'auth',
                'true'
              );
            } else {
              alert(
                'Incorrecto'
              );
            }
          }}
          style={{
            marginTop:
              '10px',
            padding:
              '10px',
          }}
        >
          Entrar
        </button>
      </div>
    );
  }

  return (
    <main
      style={{
        minHeight:
          '100vh',
        background:
          '#0f172a',
        padding:
          '50px',
      }}
    >
      <div
        style={{
          maxWidth:
            '1200px',
          margin:
            'auto',
        }}
      >
        <button
          onClick={() => {
            localStorage.removeItem(
              'auth'
            );

            setAuth(
              false
            );
          }}
          style={{
            position:
              'absolute',
            top: 20,
            right: 20,
            padding:
              '10px',
            background:
              'red',
            color:
              'white',
            borderRadius:
              '8px',
          }}
        >
          Salir
        </button>

        <h1
          style={{
            color:
              'white',
            fontSize:
              '40px',
          }}
        >
          Panel de Trabajo
</h1>

<button
  onClick={exportarCSV}
  style={{
    marginTop: '15px',
    padding: '10px 15px',
    borderRadius: '8px',
    cursor: 'pointer',
  }}
>
  Exportar CSV
</button>
        <div
  style={{
    display: 'grid',
    gridTemplateColumns:
      'repeat(auto-fit,minmax(220px,1fr))',
    gap: '15px',
    marginTop: '20px',
  }}
>
  <div style={{ background:'#1e293b', padding:'20px', borderRadius:'12px', color:'white' }}>
    <h3>Total Consultas</h3>
    <h2>{total}</h2>
  </div>

  <div style={{ background:'#16a34a', padding:'20px', borderRadius:'12px', color:'white' }}>
    <h3>Activas</h3>
    <h2>{totalActivas}</h2>
  </div>

  <div style={{ background:'#f59e0b', padding:'20px', borderRadius:'12px', color:'white' }}>
    <h3>Temporales</h3>
    <h2>{totalTemporales}</h2>
  </div>

  <div style={{ background:'#2563eb', padding:'20px', borderRadius:'12px', color:'white' }}>
    <h3>Pendientes</h3>
    <h2>{totalPendientes}</h2>
  </div>
<div style={{ background:'#14b8a6', padding:'20px', borderRadius:'12px', color:'white' }}>
  <h3>Interés Actual</h3>

  <h2>{interes}%</h2>

  <input
    type="number"
    value={interes}
    onChange={(e) =>
      setInteres(Number(e.target.value))
    }
    style={{
      width:'100%',
      padding:'8px',
      borderRadius:'6px',
      border:'none',
      marginTop:'10px'
    }}
  />

  <button
    onClick={guardar}
    style={{
      width:'100%',
      marginTop:'10px',
      padding:'8px',
      borderRadius:'6px',
      border:'none',
      cursor:'pointer'
    }}
  >
    Guardar
  </button>
</div>
  
  <div style={{ background:'#7c3aed', padding:'20px', borderRadius:'12px', color:'white' }}>
    <h3>Cheques</h3>
    <h2>{totalCheques}</h2>
  </div>

  <div style={{ background:'#0891b2', padding:'20px', borderRadius:'12px', color:'white' }}>
    <h3>Monto Total</h3>
    <h2>${montoTotal.toLocaleString('es-AR')}</h2>
  </div>

  <div style={{ background:'#dc2626', padding:'20px', borderRadius:'12px', color:'white' }}>
    <h3>Promedio</h3>
    <h2>${montoPromedio.toLocaleString('es-AR')}</h2>
  </div>
</div>

        <div style={{ marginTop:'20px' }}>
          <input
            type="text"
            placeholder="Buscar..."
            value={busqueda}
            onChange={(e)=>setBusqueda(e.target.value)}
            style={{
              width:'100%',
              padding:'12px',
              borderRadius:'10px'
            }}
          />
        </div>

        <div style={{ marginTop:'20px' }}>
          <button
            onClick={()=>setTab('activas')}
            style={{
              padding:'10px',
              marginRight:'10px'
            }}
          >
            Activas
          </button>

          <button
            onClick={()=>setTab('temporal')}
            style={{
              padding:'10px'
            }}
          >
            Temporales
          </button>
        </div>

       <div style={{ marginTop: '20px' }}>
  {lista.map((c, i) => (
    <div
      key={i}
      style={{
  background:
    c.estado === 'pendiente'
      ? '#7f1d1d'
      : c.estado === 'contactado'
      ? '#1d4ed8'
      : c.estado === 'aprobado'
      ? '#166534'
      : c.estado === 'rechazado'
      ? '#4b5563'
      : '#1e293b',

  color: 'white',
  padding: '20px',
  borderRadius: '12px',
  marginBottom: '15px',
  border:
    c.estado === 'pendiente'
      ? '3px solid #facc15'
      : 'none'
}}
    >
      <h2>{c.nombre}</h2>

      <p>📧 {c.email}</p>
      <button
  onClick={() => {
    navigator.clipboard.writeText(c.email);
    alert('Email copiado');
  }}
  style={{
    marginTop: '6px',
    marginBottom: '10px',
    padding: '6px 12px',
    borderRadius: '6px',
    border: 'none',
    cursor: 'pointer',
  }}
>
  📋 Copiar email
</button>
      <p>📞 {c.telefono}</p>

      {c.telefono && (
        <a
          href={`https://wa.me/54${c.telefono.replace(/\D/g, '')}`}
          target="_blank"
          rel="noreferrer"
        >
          <button>💬 WhatsApp</button>
        </a>
      )}

      <p>🏢 {c.empresa}</p>
      <p>
  📅 <strong>Consulta recibida:</strong>{' '}
  {c.fecha
    ? new Date(c.fecha).toLocaleString('es-AR')
    : '-'}
</p>

<p>
  💰 <strong>Monto del cheque:</strong>{' '}
  ${Number(c.montoCheque || 0).toLocaleString('es-AR')}
</p>

<p>
  🗓️ <strong>Fecha de pago:</strong>{' '}
  {c.fechaPago || '-'}
</p>

<p>
  ⏳ <strong>Días al vencimiento:</strong>{' '}
  {c.dias}
</p>

<p>
  📈 <strong>Interés aplicado:</strong>{' '}
  {c.interesAplicado}%
</p>

<p>
  💵 <strong>Dinero estimado:</strong>{' '}
  ${Number(c.resultadoCalculado || 0).toLocaleString('es-AR')}
</p>

<p>🌐 {c.origen}</p>

<div style={{ marginTop: '12px' }}>
  <strong>Estado:</strong>

  <select
    value={c.estado}
    onChange={(e) =>
      moverEstado(c.id, e.target.value)
    }
    style={{
      marginLeft: '10px',
      padding: '8px',
      borderRadius: '8px',
    }}
  >
    <option value="pendiente">
      Pendiente
    </option>

    <option value="contactado">
      Contactado
    </option>

    <option value="aprobado">
      Aprobado
    </option>

    <option value="rechazado">
      Rechazado
    </option>

    <option value="temporal">
      Temporal
    </option>
  </select>
</div>

<p>💬 {c.mensaje}</p>

      {c.imagenCheque && (
        <div style={{ marginTop: '15px' }}>
          <img
            src={c.imagenCheque || ''}
            alt="Cheque"
            onClick={() => setImagenZoom(c.imagenCheque)}
            style={{
              maxWidth: '400px',
              width: '100%',
              borderRadius: '12px',
              cursor: 'pointer'
            }}
          />
        </div>
      )}

      <div style={{ marginTop: '15px' }}>
        <button onClick={() => eliminar(c.id)}>
          Eliminar
        </button>
      </div>
    </div>
  ))}
</div>

{imagenZoom && (
  <div
    onClick={() => setImagenZoom(null)}
    style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      background: 'rgba(0,0,0,0.8)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 9999
    }}
  >
    <img
      src={imagenZoom || ''}
      alt="Zoom"
      style={{
        maxWidth: '90%',
        maxHeight: '90%',
        borderRadius: '12px'
      }}
    />
  </div>
)}

</div>
</main>
);
}