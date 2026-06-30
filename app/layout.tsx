import Footer from './components/Footer';
import Navbar from './components/Navbar';
import './globals.css';
import Link from 'next/link';
import { headers } from 'next/headers';
import WhatsAppButton from './components/WhatsAppButton';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'GoodCred | Descuento de Cheques de Pago Diferido',

  description:
    'Calculá online el descuento de tu cheque de pago diferido. Recibí una propuesta rápida, segura y sin compromiso.',

  keywords: [
    'descuento de cheques',
    'cheques de pago diferido',
    'eCheq',
    'GoodCred',
    'financiación empresas',
    'descuento de cheques argentina',
  ],

  authors: [
    {
      name: 'GoodCred',
    },
  ],

  robots: {
    index: true,
    follow: true,
  },
};
export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const h = await headers();

  const ruta =
    h.get(
      'x-next-pathname'
    ) || '';

  const esAdmin =
    ruta.startsWith(
      '/admin-panel'
    ) ||
    ruta.startsWith(
      '/login'
    );

  return (
    <html
      lang="es"
      data-scroll-behavior="smooth"
    >
      <body
        style={{
          margin: 0,
          background: '#F8FAFC',
          fontFamily: 'Arial',
        }}
      >
        {!esAdmin && <Navbar />}
      
        {children}

        {!esAdmin && <Footer />}

{!esAdmin && <WhatsAppButton />}

</body>
    </html>
  );
}