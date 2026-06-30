'use client';

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/5491150381076?text=Hola,%20quiero%20consultar%20por%20el%20descuento%20de%20un%20cheque."
      target="_blank"
      rel="noopener noreferrer"
      style={{
        position: 'fixed',
        right: '25px',
        bottom: '25px',
        zIndex: 9999,
        textDecoration: 'none',
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '14px',
          background: '#25D366',
          color: '#fff',
          padding: '14px 18px',
          borderRadius: '60px',
          boxShadow: '0 10px 30px rgba(0,0,0,.25)',
          transition: '.25s',
          animation: 'pulse 2s infinite',
        }}
      >
        <div
          style={{
            width: '48px',
            height: '48px',
            borderRadius: '50%',
            background: '#fff',
            color: '#25D366',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: '28px',
            fontWeight: 'bold',
          }}
        >
          ☎
        </div>

        <div>
          <div
            style={{
              fontWeight: 700,
              fontSize: '17px',
            }}
          >
            WhatsApp
          </div>

          <div
            style={{
              fontSize: '13px',
              opacity: .95,
            }}
          >
            ¿Necesitás ayuda?
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes pulse {
          0% {
            transform: scale(1);
          }

          50% {
            transform: scale(1.05);
          }

          100% {
            transform: scale(1);
          }
        }
      `}</style>
    </a>
  );
}