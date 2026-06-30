import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const archivo = path.join(
  process.cwd(),
  'consultas.json'
);

export async function GET() {
  try {
    if (!fs.existsSync(archivo)) {
      return NextResponse.json([]);
    }

    const consultas = JSON.parse(
      fs.readFileSync(
        archivo,
        'utf8'
      )
    );

    return NextResponse.json(
      consultas
    );
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      [],
      {
        status: 500,
      }
    );
  }
}

export async function POST(
  request: Request
) {
  try {
    const body =
      await request.json();

    let consultas: any[] = [];

    if (
      fs.existsSync(
        archivo
      )
    ) {
      consultas =
        JSON.parse(
          fs.readFileSync(
            archivo,
            'utf8'
          )
        );
    }

    const nuevaConsulta = {
      id:
        Date.now(),

      fecha:
        new Date().toLocaleString(
          'es-AR'
        ),

      estado:
        'pendiente',

      origen:
        body.origen ||
        'web',

      nombre:
        body.nombre ||
        '',

      email:
        body.email ||
        '',

      telefono:
        body.telefono ||
        '',

      empresa:
        body.empresa ||
        '',

      mensaje:
        body.mensaje ||
        '',

      montoCheque:
        Number(
          body.montoCheque || 0
        ),

      fechaPago:
        body.fechaPago ||
        '',

      dias:
        Number(
          body.dias || 0
        ),

      interesAplicado:
        Number(
          body.interesAplicado || 0
        ),

      resultadoCalculado:
        Number(
          body.resultadoCalculado || 0
        ),

      imagenCheque:
        body.imagenCheque ||
        '',
    };

    consultas.unshift(
      nuevaConsulta
    );

    fs.writeFileSync(
      archivo,
      JSON.stringify(
        consultas,
        null,
        2
      )
    );

    return NextResponse.json({
      ok: true,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        ok: false,
      },
      {
        status: 500,
      }
    );
  }
}