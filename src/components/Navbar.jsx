import "./Navbar.css";

function Navbar() {
  return (
    <header className="navbar">
      <nav>
        <ul className="navbar-menu">
          <li>
            <a href="/">Inicio</a>
          </li>

          <li>
            <a href="/sobre-nosotros">Sobre nosotros</a>
          </li>

          <li>
            <a href="/servicios">Servicios</a>
          </li>

          <li>
            <a href="/contactos" className="activo">
              Contactos
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;