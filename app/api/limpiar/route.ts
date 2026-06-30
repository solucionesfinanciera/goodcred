import fs from 'fs';
import path from 'path';

const archivo = path.join(
  process.cwd(),
  'consultas.json'
);

export async function POST() {
  try {
    if (
      fs.existsSync(
        archivo
      )
    ) {
      fs.writeFileSync(
        archivo,
        '[]'
      );
    }

    return Response.json({
      ok: true,
    });

  } catch (
    error
  ) {
    console.error(
      error
    );

    return Response.json(
      {
        ok: false,
      },
      {
        status: 500,
      }
    );
  }
}