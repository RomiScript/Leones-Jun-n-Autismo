
import './Hero.css'
import Logo from '../../assets/images/logo.png'
import { Link } from 'react-router-dom';



function Hero() {
  return (
    <div className='hero container'>
      <div className="hero-text">
        <h1>Club de Leones Junín-Autismo</h1>
        <img src={Logo} alt="" width='200'  />
        <h2>Incluyendo, sirviendo, creciendo.</h2>
        <Link to="/galeria" className='btn'>
        Galería Autismo en Movimiento Segunda Edición
        </Link>

        <p>Unimos esfuerzos para mejorar la vida de las personas dentro del espectro autista.</p>
        
      </div>
    </div>
  )
}

export default Hero