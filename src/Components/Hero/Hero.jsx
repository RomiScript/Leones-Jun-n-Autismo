import './Hero.css'
import Icon from '../../assets/images/Icon.png'


function Hero() {
  return (
    <div className='hero container'>
      <div className="hero-text">
        <h1>Club de Leones Junín-Autismo</h1>
        <p>Incluyendo, sirviendo, creciendo.</p>
       <a 
  className="btn" 
  href="https://link.mercadopago.com.ar/juninautismo" 
  target="_blank" 
  rel="noopener noreferrer"
>
  Donar <img src={Icon} alt="" />
</a>
      </div>
    </div>
  )
}

export default Hero
