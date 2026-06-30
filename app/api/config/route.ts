import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const archivo = path.join(
  process.cwd(),
  'config.json'
);

function leer() {
  if (!fs.existsSync(archivo)) {
    fs.writeFileSync(
      archivo,
      JSON.stringify(
        {
          interes: 5,
        },
        null,
        2
      )
    );
  }

  return JSON.parse(
    fs.readFileSync(
      archivo,
      'utf8'
    )
  );
}

export async function GET() {
  return NextResponse.json(
    leer()
  );
}

export async function POST(
  request: Request
) {
  const body =
    await request.json();

  fs.writeFileSync(
    archivo,
    JSON.stringify(
      {
        interes:
          Number(
            body.interes
          ),
      },
      null,
      2
    )
  );

  return NextResponse.json({
    ok: true,
  });
}