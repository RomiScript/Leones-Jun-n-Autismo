import './navbar.css';
import logo1 from '../../assets/images/logo1.png';

function Navbar() {
  return (
    <nav className='container'>
      <img src={logo1} alt="Logo Club de Leones Junín-Autismo" width='250' />
      <ul>
        <li><a href="#inicio">Inicio</a></li>
        <li><a href="#nosotros">Nosotros</a></li>
        <li><a href="#actividades">Actividades</a></li>
        <li><a href="#proyectos">Proyectos</a></li>
        <li><a href="#area-reservada">Área reservada</a></li>
        <li><a href="#contacto" className='btn'>Contacto</a></li>
      </ul>
    </nav>
    
  );
}

export default Navbar;
