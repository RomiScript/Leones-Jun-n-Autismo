import { useState } from "react";
import "./navbar.css";
import logo1 from "../../assets/images/logo1.png";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-container">
        <a href="https://www.lionsclubs.org/en">
        <img
          src={logo1}
          alt="Logo Club de Leones Junín-Autismo"
          className="nav-logo"
        />
        </a>

        {/* ICONO HAMBURGUESA */}
        <div className="hamburger" onClick={() => setOpen(!open)}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <ul className={open ? "nav-links open" : "nav-links"}>
          <li><a href="#inicio">Inicio</a></li>
          <li><a href="#nosotros">Nosotros</a></li>
          <li><a href="#actividades">Actividades</a></li>
          <li><a href="#proyectos">Proyectos</a></li>
          <li><a href="#contacto" className="btn-nav">Contacto</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;

