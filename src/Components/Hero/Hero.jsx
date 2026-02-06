import React, { useState, useEffect } from 'react';
import './Hero.css';
import Icon from '../../assets/images/icon2.png';
import Logo from '../../assets/images/logo.png';
import Junin from '../../assets/images/junin.png';
import Infinito from '../../assets/images/infinito.png';

function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // ⏰ Countdown timer state (agregamos seconds)
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  // ⏰ Countdown timer logic
  useEffect(() => {
    // 📅 FECHA DEL EVENTO: 2 de abril de 2026 a las 9 AM
    const targetDate = new Date('2026-04-02T09:00:00');

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      if (distance < 0) {
        clearInterval(timer);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000); // ✨ NUEVO

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className='hero'>
      <div className="hero-text">
        <img src={Infinito} alt="Logo Infinito" className='hero-logo' />
        <img  className='hero-logo' src={Logo} alt="" />
        <img className='hero-logo' src={Junin} alt="Logo Autismo en Movimiento" />
        
        {/* ⏰ COUNTDOWN TIMER con segundos */}
        <div className="countdown">
          <div className="countdown-item">
            <span className="countdown-number">{timeLeft.days}</span>
            <span className="countdown-label">Días</span>
          </div>
          <div className="countdown-separator">:</div>
          <div className="countdown-item">
            <span className="countdown-number">{timeLeft.hours}</span>
            <span className="countdown-label">Horas</span>
          </div>
          <div className="countdown-separator">:</div>
          <div className="countdown-item">
            <span className="countdown-number">{timeLeft.minutes}</span>
            <span className="countdown-label">Min</span>
          </div>
          <div className="countdown-separator">:</div>
          <div className="countdown-item">
            <span className="countdown-number">{timeLeft.seconds}</span>
            <span className="countdown-label">Seg</span>
          </div>
        </div>
        
        <h2><em>Club de Leones Junín-Autismo presenta:</em></h2>
        <h1>Autismo en movimiento</h1>
        
        <p>La segunda edición de la carrera inclusiva está llegando. Preparate para correr, caminar, trotar o desplazarte en este evento de inclusión en comunidad</p>
        <button 
          className="btn" 
          onClick={() => setIsModalOpen(true)}
        >
          ¡Quiero participar! <img src={Icon} alt="Icono" />
        </button>
      </div>

      {/* Modal de inscripción (sin cambios) */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <h2 className='text-option'>Selecciona tu opción de inscripción</h2>
            <div className="registration-options">
              {/* Opción Estándar */}
              <div className="option">
                <h3>Estándar Adultos</h3>
                <h4 className='text-option'>Incluye: 
                  <ul className='kit-list'>
                    <li>Dorsal 🔢</li>
                    <li>Vaso oficial de la carrera 🥤</li>
                    <li>Medalla de finalización 🥇</li>
                    <li>Snack 🍫</li>
                    <li>Folletos informativos y stickers 📄</li>
                  </ul>
                </h4>
                <p className="price">Precio: $10000</p>
                <a href="https://forms.gle/GJ3TCPVGsQAn7nWq9" className="option-btn" target='_blank' rel="noopener noreferrer">Inscribirse</a>
              </div>

              {/* Opción Estándar Kids */}
              <div className="option">
                <h3>Estándar Kids</h3>
                 <h4 className='text-option'>Incluye: 
                  <ul className='kit-list'>
                    <li>Dorsal 🔢</li>
                    <li>Vaso oficial de la carrera 🥤</li>
                    <li>Medalla de finalización 🥇</li>
                    <li>Snack 🍫</li>
                    <li>Folletos informativos y stickers 📄</li>
                  </ul>
                </h4>
                <p className="price">Precio: $5000</p>
                <a href="https://forms.gle/TWumTmGdDuJne4RR7" className="option-btn" target='_blank' >Inscribirse</a>
              </div>

              {/* Opción Premium */}
              <div className="option">
                <h3>Premium</h3>
                <h4 className='text-option'>Incluye: 
                  <ul className='kit-list'>
                    <li>Musculosa oficial de la carrera 🎽</li>
                    <li>Dorsal 🔢</li>
                    <li>Vaso oficial de la carrera 🥤</li>
                    <li>Medalla de finalización 🥇</li>
                    <li>Snack 🍫</li>
                    <li>Folletos informativos y stickers 📄</li>
                  </ul>
                </h4>
                <p className="price">Precio: $20000</p>
                <a href="https://forms.gle/FSt5TnKePqiVRqg89" className="option-btn" target='_blank' >Inscribirse</a>
              </div>
            </div>
            <p className='text-option'>Avisaremos en breve dónde y cuándo podés retirar tu kit. Si no sos de Junín, te lo entregamos el día de la carrera</p>
            <button className="close-btn" onClick={closeModal}>Cerrar</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Hero;