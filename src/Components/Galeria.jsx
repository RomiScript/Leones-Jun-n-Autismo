import React, { useState, useEffect } from "react";
import "./Galeria.css";

// 1. Configuración de Cloudinary
const CLOUD_NAME = "dwaabef0v"; 
const BASE_URL = `https://res.cloudinary.com/${CLOUD_NAME}/image/upload`;

const total = 231; // Actualizado a tus nuevas 231 fotos
const fotos = Array.from({ length: total }, (_, i) => {
  const num = String(i + 1).padStart(4, "0");
  // Como están en la raíz y con nombre limpio:
  return `20260402-${num}`; 
});

const Galeria = () => {
  const [indice, setIndice] = useState(null);

  const abrir = (i) => setIndice(i);
  const cerrar = () => setIndice(null);
  const anterior = () => setIndice((prev) => (prev - 1 + total) % total);
  const siguiente = () => setIndice((prev) => (prev + 1) % total);

  useEffect(() => {
    const handleKey = (e) => {
      if (indice === null) return;
      if (e.key === "ArrowRight") siguiente();
      if (e.key === "ArrowLeft") anterior();
      if (e.key === "Escape") cerrar();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [indice]);

  return (
    <div className="galeria-container">
      <h1 className="galeria-titulo">Galería Autismo en Movimiento Segunda Edición</h1>

      <div className="galeria-grid">
        {fotos.map((foto, i) => (
          <img
            key={i}
            // w_400 y q_auto para que la grilla cargue instantáneo
            src={`${BASE_URL}/w_400,c_scale,q_auto,f_auto/${foto}.jpg`}
            alt={`evento ${i + 1}`}
            onClick={() => abrir(i)}
            loading="lazy"
          />
        ))}
      </div>

      {indice !== null && (
        <div className="lightbox" onClick={cerrar}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            {/* Foto en alta resolución para el Lightbox */}
            <img 
              src={`${BASE_URL}/q_auto,f_auto/${fotos[indice]}.jpg`} 
              alt={`evento ${indice + 1}`} 
            />
            
            <div className="lightbox-acciones">
              <button className="btn-flecha" onClick={anterior}>← Anterior</button>
              
              <a 
                href={`${BASE_URL}/fl_attachment/${fotos[indice]}.jpg`} 
                download={`autismo-movimiento-${indice + 1}.jpg`}
                className="btn-descargar"
              >
                ⬇ Descargar
              </a>
              
              <button className="btn-cerrar" onClick={cerrar}>✕ Cerrar</button>
              <button className="btn-flecha" onClick={siguiente}>Siguiente →</button>
            </div>
            <span className="lightbox-contador">{indice + 1} / {total}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Galeria;
