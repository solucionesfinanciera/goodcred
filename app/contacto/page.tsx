'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function Contacto() {
  const router =
    useRouter();

  const [
    loading,
    setLoading,
  ] =
    useState(
      false
    );

  async function enviar(
    e: React.FormEvent<HTMLFormElement>
  ) {
    e.preventDefault();

    setLoading(
      true
    );

    try {
      const form =
        new FormData(
          e.currentTarget
        );

      const res =
        await fetch(
          '/api/contacto',
          {
            method:
              'POST',

            body:
              JSON.stringify({
                nombre:
                  form.get(
                    'nombre'
                  ),

                email:
                  form.get(
                    'email'
                  ),

                telefono:
                  form.get(
                    'telefono'
                  ),

                mensaje:
                  form.get(
                    'mensaje'
                  ),
              }),

            headers:
              {
                'Content-Type':
                  'application/json',
              },
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

      router.push(
        '/gracias'
      );
    } catch {
      alert(
        'Error al enviar'
      );
    }

    setLoading(
      false
    );
  }

  return (
    <main
      style={{
        maxWidth:
          '700px',

        margin:
          '60px auto',

        padding:
          '20px',
      }}
    >
      <h1>
        Contacto
      </h1>

      <form
        onSubmit={
          enviar
        }
        style={{
          display:
            'flex',

          flexDirection:
            'column',

          gap:
            '16px',
        }}
      >
        <input
          name="nombre"
          required
          placeholder="Nombre"
        />

        <input
          name="email"
          type="email"
          required
          placeholder="Email"
        />

        <input
          name="telefono"
          placeholder="Teléfono"
        />

        <textarea
          name="mensaje"
          required
          rows={6}
          placeholder="Mensaje"
        />

        <button
          type="submit"
          disabled={
            loading
          }
          style={{
            background:
              '#991b1b',

            color:
              'white',

            border:
              'none',

            padding:
              '16px',

            borderRadius:
              '10px',
          }}
        >
          {loading
            ? 'Enviando...'
            : 'Enviar'}
        </button>
      </form>
    </main>
  );
}