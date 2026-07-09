import { supabase } from "@/lib/supabase";
import { NextResponse } from "next/server";
import { Resend } from "resend";

// ==========================
// OBTENER CONSULTAS (PANEL)
// ==========================

export async function GET() {
  try {
    const { data, error } = await supabase
      .from("consultas")
      .select("*")
      .order("id", { ascending: false });

    if (error) {
      console.error(error);
      return NextResponse.json([]);
    }

    const consultas = (data || []).map((c: any) => ({
      id: c.id,
      fecha: c.fecha,
      estado: c.estado,
      origen: c.origen,

      nombre: c.nombre,
      email: c.correo_electronico,
      telefono: c.telefono,
      empresa: c.empresa,
      mensaje: c.mensaje,

      montoCheque: c.monto_cheque,
      fechaPago: c.fecha_pago,
      dias: c.dia,
      interesAplicado: c.intereses_aplicado,
      resultadoCalculado: c.resultado_calculado,

      imagenCheque: c.imagen_cheque || "",
    }));

    return NextResponse.json(consultas);
  } catch (error) {
    console.error(error);
    return NextResponse.json([]);
  }
}

// ==========================
// NUEVA CONSULTA
// ==========================

export async function POST(request: Request) {
  const resend = new Resend(process.env.RESEND_API_KEY!);

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
      imagenCheque,
    } = body;
console.log("BODY RECIBIDO:", body);

    const { error: dbError } = await supabase
      .from("consultas")
      .insert([
          {
  origen: origen || "Web",
  estado: "pendiente",

  nombre,
  email,
  telefono,
  empresa,
  mensaje,

  monto_cheque: montoCheque,
  fecha_pago: fechaPago,
  dias,
  interes_aplicado: interesAplicado,
  resultado_calculado: resultadoCalculado,

  imagen_cheque: imagenCheque || null,
},
      ]);

   if (dbError) {
  console.error("=================================");
  console.error(dbError);
  console.error("=================================");

  throw dbError;
}

    const { data, error } = await resend.emails.send({
  from: "FINANZAS SURE <onboarding@resend.dev>",
  to: "finanzassure@gmail.com",
  subject: "Nueva consulta desde FINANZAS SURE",
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

console.log("RESEND DATA:", data);
console.log("RESEND ERROR:", error);

if (error) {
  throw error;
}

    return NextResponse.json({
      ok: true,
    });
  } catch (error: any) {
  console.error("============== ERROR API CONTACTO ==============");
  console.error(error);
  console.error("================================================");

  return NextResponse.json(
    {
      ok: false,
      error: error?.message || String(error),
    },
    {
      status: 500,
    }
  );
}
}