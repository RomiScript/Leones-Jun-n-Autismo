import './Hero.css'
import Icon from '../../assets/images/Icon.png'

function Hero() {
  return (
    <div className='hero container'>
      <div className="hero-text">
        <h1>Club de Leones Junín-Autismo</h1>
        <p>Incluyendo, sirviendo, creciendo.</p>
        <button className='btn'>Donar <img src={Icon} alt="" /></button>
      </div>
    </div>
  )
}

export default Hero
