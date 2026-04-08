import { useState } from "react";
import "./navbar.css";
import logo1 from "../../assets/images/logo1.png";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const irA = (seccion) => {
    setOpen(false);
    navigate("/");
    setTimeout(() => {
      const el = document.getElementById(seccion);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

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

        <div className="hamburger" onClick={() => setOpen(!open)}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <ul className={open ? "nav-links open" : "nav-links"}>
          <li><button onClick={() => irA("inicio")}>Inicio</button></li>
          <li><button onClick={() => irA("nosotros")}>Nosotros</button></li>
          <li><button onClick={() => irA("actividades")}>Actividades</button></li>
          <li><button onClick={() => irA("proyectos")}>Autismo en Movimiento</button></li>
          <li><button onClick={() => irA("contacto")} className="btn-nav">Contacto</button></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;