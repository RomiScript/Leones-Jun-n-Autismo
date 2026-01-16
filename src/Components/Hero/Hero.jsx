import './Hero.css'
import Icon from '../../assets/images/icon2.png'


function Hero() {
  return (
    <div className='hero container'>
      <div className="hero-text">
        <h1>Autismo en movimiento</h1>
        <h1>🏃🏽‍♀️‍➡️🚶🏽‍➡️👨🏽‍🦽‍➡️</h1>
        <p>La segunda edición de la carrera inclusiva está llegando. Preparate para correr, caminar, trotar o desplazarte en este evento de inclusión en comunidad</p>
       <a 
  className="btn" 
  href="https://link.mercadopago.com.ar/juninautismo" 
  target="_blank" 
  rel="noopener noreferrer"
>
  ¡Quiero participar! <img src={Icon} alt="" />
</a>
      </div>
    </div>
  )
}

export default Hero
