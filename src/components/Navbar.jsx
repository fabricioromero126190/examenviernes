import React from "react";
import "../styles/Navbar.css";

const NAV_ITEMS = [
  { label: "Inicio", href: "/" },
  { label: "Sobre nosotros", href: "/sobre-nosotros" },
  { label: "Servicios", href: "/servicios" },
  { label: "Contactos", href: "/contactos" },
];

export default function Navbar({ activeLabel = "Sobre nosotros" }) {
  return (
    <header className="navbar">
      <nav className="navbar__inner">
        {NAV_ITEMS.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className={
              "navbar__link" +
              (item.label === activeLabel ? " navbar__link--active" : "")
            }
          >
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
