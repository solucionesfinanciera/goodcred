import fs from 'fs';
import path from 'path';

const archivo = path.join(
  process.cwd(),
  'consultas.json'
);

export async function GET() {
  try {
    if (
      !fs.existsSync(
        archivo
      )
    ) {
      return new Response(
        '',
        {
          status: 404,
        }
      );
    }

    const consultas =
      JSON.parse(
        fs.readFileSync(
          archivo,
          'utf8'
        )
      );

    const headers = [
      'Fecha',
      'Estado',
      'Nombre',
      'Email',
      'Telefono',
      'MontoCheque',
      'FechaPago',
      'Dias',
      'Interes',
      'Resultado'
    ];

    const filas =
      consultas.map(
        (
          c: any
        ) => [
          c.fecha,
          c.estado,
          c.nombre,
          c.email,
          c.telefono,
          c.montoCheque,
          c.fechaPago,
          c.dias,
          c.interesAplicado,
          c.resultadoCalculado
        ].join(',')
      );

    const csv = [
      headers.join(','),
      ...filas
    ].join('\n');

    return new Response(
      csv,
      {
        headers: {
          'Content-Type':
            'text/csv',

          'Content-Disposition':
            'attachment; filename=consultas.csv',
        },
      }
    );

  } catch (
    error
  ) {
    console.error(
      error
    );

    return new Response(
      '',
      {
        status: 500,
      }
    );
  }
}