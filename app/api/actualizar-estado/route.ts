import fs from 'fs';
import path from 'path';

const archivo = path.join(
  process.cwd(),
  'consultas.json'
);

export async function POST(
  req: Request
) {
  try {
    const {
      id,
      estado,
    } =
      await req.json();

    if (
      !fs.existsSync(
        archivo
      )
    ) {
      return Response.json(
        {
          ok: false,
        },
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

    const nuevas =
      consultas.map(
        (
          item: any
        ) =>
          item.id === id
            ? {
                ...item,
                estado,
              }
            : item
      );

    fs.writeFileSync(
      archivo,
      JSON.stringify(
        nuevas,
        null,
        2
      )
    );

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