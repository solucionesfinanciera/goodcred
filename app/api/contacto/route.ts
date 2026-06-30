import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const {
      nombre,
      email,
      telefono,
      empresa,
      mensaje,
      montoCheque,
      fechaPago,
      dias,
      interesAplicado,
      resultadoCalculado,
      origen,
    } = body;

    await resend.emails.send({
      from: "GoodCred <onboarding@resend.dev>",
      to: "finanzassure@gmail.com",
      subject: "Nueva consulta desde GoodCred",
      html: `
        <h2>Nueva consulta recibida</h2>

        <p><strong>Origen:</strong> ${origen || "Web"}</p>
        <p><strong>Nombre:</strong> ${nombre || "-"}</p>
        <p><strong>Email:</strong> ${email || "-"}</p>
        <p><strong>Teléfono:</strong> ${telefono || "-"}</p>
        <p><strong>Empresa:</strong> ${empresa || "-"}</p>

        <hr>

        <p><strong>Monto del cheque:</strong> $${montoCheque || 0}</p>
        <p><strong>Fecha de pago:</strong> ${fechaPago || "-"}</p>
        <p><strong>Días:</strong> ${dias || 0}</p>
        <p><strong>Tasa aplicada:</strong> ${interesAplicado || 0}%</p>
        <p><strong>Resultado:</strong> $${resultadoCalculado || 0}</p>

        <hr>

        <p><strong>Mensaje:</strong></p>
        <p>${mensaje || "-"}</p>
      `,
    });

    return NextResponse.json({
      ok: true,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        ok: false,
        error: "No se pudo enviar el correo",
      },
      {
        status: 500,
      }
    );
  }
}