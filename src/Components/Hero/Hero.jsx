import React, { useState, useEffect } from 'react';
import './Hero.css';
import Icon from '../../assets/images/icon2.png';
import Logo from '../../assets/images/logo.png';
import Junin from '../../assets/images/junin.png';
import Infinito from '../../assets/images/infinito.png';

export default function Hero() {

  const [isModalOpen, setIsModalOpen] = useState(false);
<<<<<<< HEAD

  const targetDate = new Date('2026-04-02T09:00:00'); // <-- CAMBIÁ FECHA / HORA DEL EVENTO

  const [timeLeft, setTimeLeft] = useState(getTimeRemaining());

  function getTimeRemaining() {
    const now = new Date();
    const difference = targetDate - now;

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60)
    };
  }

=======
  
  //contador 
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  //logica
>>>>>>> dc665048b8c17bd6e505b4809529d369aca16f6f
  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(getTimeRemaining());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const closeModal = () => setIsModalOpen(false);

  return (
<<<<<<< HEAD
    <div className='hero'>

      {/* LOGOS */}
      <div className="hero-logos">
        <img src={Infinito} alt="Logo Infinito" className='hero-logo' />
        <img src={Logo} alt="Club de Leones Junín" className='hero-logo' />
        <img src={Junin} alt="Junín Lugar de Oportunidades" className='hero-logo' />
      </div>

      {/* CONTENIDO */}
      <div className="hero-content">

        <h2 className="hero-pretitle">
          <em>Club de Leones Junín-Autismo presenta:</em>
        </h2>

        <h1 className="hero-title">
          Autismo en movimiento
        </h1>

        <p className="hero-description">
          La segunda edición de la carrera inclusiva está llegando. Preparate para correr, caminar, trotar o desplazarte en este evento de inclusión en comunidad.
        </p>

        <button
          className="btn hero-cta"
=======
    <div className='hero container'>
      <div className="hero-text">
        <img className='hero-logo' src={Logo} alt="Logo Autismo en Movimiento" />
        
        {/* segundos */}
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
        
        <h2>Club de Leones Junín-Autismo presenta:</h2>
        <h1>Autismo en movimiento</h1>
        <h3>🏃🏽‍♀️‍➡️🚶🏽‍➡️👨🏽‍🦽‍➡️</h3>
        <p>La segunda edición de la carrera inclusiva está llegando. Preparate para correr, caminar, trotar o desplazarte en este evento de inclusión en comunidad</p>
        <button 
          className="btn" 
>>>>>>> dc665048b8c17bd6e505b4809529d369aca16f6f
          onClick={() => setIsModalOpen(true)}
        >
          ¡Quiero participar! <img src={Icon} alt="Icono" />
        </button>

        {/* COUNTDOWN */}
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
      </div>

      {/* MODAL */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>

            <h2 className='text-option'>Selecciona tu opción de inscripción</h2>

            <div className="registration-options">

              {/* ESTÁNDAR ADULTOS */}
              <div className="option">
                <h3>Estándar Adultos</h3>
                <h4 className='text-option'>Incluye:</h4>
                <ul className='kit-list'>
                  <li>Dorsal 🔢</li>
                  <li>Vaso oficial 🥤</li>
                  <li>Medalla 🥇</li>
                  <li>Snack 🍫</li>
                  <li>Folletos y stickers 📄</li>
                </ul>
                <p className="price">Precio: $10000</p>
                <a href="https://forms.gle/GJ3TCPVGsQAn7nWq9" className="option-btn" target='_blank' rel="noopener noreferrer">
                  Inscribirse
                </a>
              </div>

              {/* ESTÁNDAR KIDS */}
              <div className="option">
                <h3>Estándar Kids</h3>
                <h4 className='text-option'>Incluye:</h4>
                <ul className='kit-list'>
                  <li>Dorsal 🔢</li>
                  <li>Vaso oficial 🥤</li>
                  <li>Medalla 🥇</li>
                  <li>Snack 🍫</li>
                  <li>Folletos y stickers 📄</li>
                </ul>
                <p className="price">Precio: $5000</p>
                <a href="https://forms.gle/TWumTmGdDuJne4RR7" className="option-btn" target='_blank' rel="noopener noreferrer">
                  Inscribirse
                </a>
              </div>

              {/* PREMIUM */}
              <div className="option">
                <h3>Premium</h3>
                <h4 className='text-option'>Incluye:</h4>
                <ul className='kit-list'>
                  <li>Musculosa oficial 🎽</li>
                  <li>Dorsal 🔢</li>
                  <li>Vaso oficial 🥤</li>
                  <li>Medalla 🥇</li>
                  <li>Snack 🍫</li>
                  <li>Folletos y stickers 📄</li>
                </ul>
                <p className="price">Precio: $20000</p>
                <a href="https://forms.gle/FSt5TnKePqiVRqg89" className="option-btn" target='_blank' rel="noopener noreferrer">
                  Inscribirse
                </a>
              </div>

            </div>

            <p className='text-option'>
              Avisaremos en breve dónde y cuándo podés retirar tu kit. Si no sos de Junín, te lo entregamos el día de la carrera.
            </p>

            <button className="close-btn" onClick={closeModal}>
              Cerrar
            </button>

          </div>
        </div>
      )}

    </div>
  );
}