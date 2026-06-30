import nodemailer from 'nodemailer';

export async function enviarEmail(
  data: {
    nombre: string;
    email: string;
    telefono: string;
    mensaje: string;
  }
) {
  const transporter =
    nodemailer.createTransport({
      service: 'gmail',

      auth: {
        user:
          process.env
            .EMAIL_USER,

        pass:
          process.env
            .EMAIL_PASS,
      },
    });

  await transporter.sendMail({
    from:
      process.env
        .EMAIL_USER,

    to:
      process.env
        .EMAIL_DESTINO,

    subject:
      'Nueva consulta GoodCred',

    html: `
      <h2>Nueva consulta</h2>

      <p><b>Nombre:</b> ${data.nombre}</p>

      <p><b>Email:</b> ${data.email}</p>

      <p><b>Teléfono:</b> ${data.telefono}</p>

      <p><b>Mensaje:</b></p>

      <p>${data.mensaje}</p>
    `,
  });
}