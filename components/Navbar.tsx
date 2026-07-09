import Link from "next/link";
import {
  House,
  Building2,
  Info,
  LogIn,LayoutDashboard,
  BriefcaseBusiness,
  Users,
} from "lucide-react";

export default function Navbar() {
  return (
    <header
      style={{
        borderBottom: "1px solid #e5e7eb",
        background: "#ffffff",
        boxShadow: "0 2px 20px rgba(0,0,0,.05)",
        position: "sticky",
        top: 0,
        zIndex: 100,
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "18px 20px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Link
          href="/"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "14px",
            textDecoration: "none",
          }}
        >
          <img
            src="/images/logo.svg"
            alt="Finanzas Sure"
            style={{
              height: "46px",
            }}
          />

          <span
            style={{
              color: "#0F172A",
              fontSize: "28px",
              fontWeight: 800,
              letterSpacing: "-0.6px",
            }}
          >
            Finanzas Sure
          </span>
        </Link>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "40px",
          }}
        >
          <nav
            style={{
              display: "flex",
              gap: "18px",
            }}
          >
           <Menu
  href="/"
  texto="Inicio"
  icono={<LayoutDashboard size={18} strokeWidth={2.2} />}
/>

<Menu
  href="/comercios"
  texto="Comercios"
  icono={<BriefcaseBusiness size={18} strokeWidth={2.2} />}
/>

<Menu
  href="/contacto"
  texto="Nosotros"
  icono={<Users size={18} strokeWidth={2.2} />}
/>
          </nav>

          <Link
            href="/login"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              background:
                "linear-gradient(135deg,#15803d,#22c55e)",
              color: "#fff",
              padding: "14px 24px",
              borderRadius: "14px",
              textDecoration: "none",
              fontWeight: 700,
              fontSize: "16px",
              boxShadow:
                "0 12px 25px rgba(22,163,74,.18)",
              transition: "all .25s ease",
            }}
          >
            <LogIn size={18} />
            Iniciar sesión
          </Link>
        </div>
      </div>
    </header>
  );
}

function Menu({
  href,
  texto,
  icono,
}: {
  href: string;
  texto: string;
  icono: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      style={{
        display: "flex",
        alignItems: "center",
        gap: "10px",
        padding: "14px 22px",
        borderRadius: "14px",
        textDecoration: "none",
        color: "#334155",
        fontWeight: 700,
        fontSize: "15px",
        background: "#ffffff",
        transition: "all .25s ease",
        position: "relative",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = "#F0FDF4";
        e.currentTarget.style.color = "#15803D";
        e.currentTarget.style.transform = "translateY(-3px)";
        e.currentTarget.style.boxShadow =
          "0 12px 30px rgba(22,163,74,.15)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = "#ffffff";
        e.currentTarget.style.color = "#334155";
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "none";
      }}
    >
      {icono}
      {texto}
    </Link>
  );
}