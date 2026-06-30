import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const body = await request.json();

  if (
    body.usuario === 'admin' &&
    body.password === '1234'
  ) {
    const res = NextResponse.json({
      ok: true,
    });

    res.cookies.set(
      'admin',
      'ok',
      {
        httpOnly: true,
      }
    );

    return res;
  }

  return NextResponse.json(
    {
      error: 'incorrecto',
    },
    {
      status: 401,
    }
  );
}