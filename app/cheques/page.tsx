'use client';

import { useState } from 'react';

export default function ChequesPage() {
  const [loading, setLoading] =
    useState(false);

  async function enviar(
    e: React.FormEvent<HTMLFormElement>
  ) {
    e.preventDefault();

    setLoading(true);

    try {
      const form =
        new FormData(
          e.currentTarget
        );

      let imagenCheque =
        '';

      const archivo =
        form.get(
          'cheque'
        ) as File;

      if (
        archivo &&
        archivo.size > 0
      ) {
        const uploadForm =
          new FormData();

        uploadForm.append(
          'archivo',
          archivo
        );

        const uploadRes =
          await fetch(
            '/api/upload',
            {
              method:
                'POST',
              body:
                uploadForm,
            }
          );

        const uploadData =
          await uploadRes.json();

        if (
          uploadData.ok
        ) {
          imagenCheque =
            uploadData.ruta;
        }
      }

      const res =
        await fetch(
          '/api/contacto',
          {
            method:
              'POST',

            headers: {
              'Content-Type':
                'application/json',
            },

            body:
              JSON.stringify({
                origen:
                  'cheques',

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

                imagenCheque,
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
        'Error de conexión'
      );
    }

    setLoading(false);
  }

  return (
    <main
      style={{
        maxWidth:
          '800px',
        margin:
          '60px auto',
        padding:
          '20px',
      }}
    >
      <h1>
        Consulta de cheques
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
          placeholder="Nombre"
          required
        />

        <input
          name="email"
          type="email"
          placeholder="Email"
          required
        />

        <input
          name="telefono"
          placeholder="Teléfono"
        />

        <textarea
          name="mensaje"
          placeholder="Detalle del cheque"
          rows={6}
          required
        />

        <div>
          <label>
            Imagen del cheque
          </label>

          <input
            type="file"
            name="cheque"
            accept="image/*"
          />
        </div>

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
            padding:
              '16px',
            border:
              'none',
            borderRadius:
              '10px',
          }}
        >
          {loading
            ? 'Enviando...'
            : 'Enviar consulta'}
        </button>
      </form>
    </main>
  );
}