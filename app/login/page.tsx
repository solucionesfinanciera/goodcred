'use client';

import { useState } from 'react';

export default function Login() {
  const [usuario, setUsuario] = useState('');
  const [password, setPassword] = useState('');
  const [mensaje, setMensaje] = useState('');

  async function entrar() {
    setMensaje('Procesando...');

    try {
      const res = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          usuario,
          password,
        }),
      });

      if (res.ok) {
        setMensaje('Login correcto');

        window.location.href =
          '/admin-panel';
      } else {
        setMensaje(
          'Usuario o contraseña incorrectos'
        );
      }
    } catch {
      setMensaje(
        'Error de conexión'
      );
    }
  }

  return (
    <main
      style={{
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div
        style={{
          width: '400px',
          display: 'flex',
          flexDirection: 'column',
          gap: '15px',
        }}
      >
        <h1>Panel FINANZAS SURE</h1>

        <input
          placeholder="Usuario"
          value={usuario}
          onChange={(e) =>
            setUsuario(e.target.value)
          }
        />

        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) =>
            setPassword(e.target.value)
          }
        />

        <button onClick={entrar}>
          Ingresar
        </button>

        <p>{mensaje}</p>
      </div>
    </main>
  );
}