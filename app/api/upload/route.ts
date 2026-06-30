import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function POST(
  request: Request
) {
  try {
    const formData =
      await request.formData();

    const archivo =
      formData.get(
        'archivo'
      ) as File;

    if (!archivo) {
      return NextResponse.json(
        {
          ok: false,
          error:
            'Archivo no recibido',
        },
        {
          status: 400,
        }
      );
    }

    const bytes =
      await archivo.arrayBuffer();

    const buffer =
      Buffer.from(
        bytes
      );

    const extension =
      archivo.name
        .split('.')
        .pop() || 'jpg';

    const nombreArchivo =
      `${Date.now()}.${extension}`;

    const carpetaUploads =
      path.join(
        process.cwd(),
        'public',
        'uploads'
      );

    if (
      !fs.existsSync(
        carpetaUploads
      )
    ) {
      fs.mkdirSync(
        carpetaUploads,
        {
          recursive:
            true,
        }
      );
    }

    const rutaArchivo =
      path.join(
        carpetaUploads,
        nombreArchivo
      );

    fs.writeFileSync(
      rutaArchivo,
      buffer
    );

    return NextResponse.json({
      ok: true,
      ruta: `/uploads/${nombreArchivo}`,
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