import Navbar from './Components/Navbar/navbar';
import Hero from './Components/Hero/Hero';
import Login from './Components/Login/Login';

function App() {
  return (
    <div>
      <Navbar />

      {/* Inicio */}
      <section id="inicio">
        <Hero />
      </section>

       <section id="area-reservada" className="section">
        <Login />
      </section>

      {/* Nosotros */}
      <section id="nosotros" className="section">
        <h2>Nosotros</h2>
        <p>
          Somos el primer Club de Leones especializado en autismo, trabajando para la inclusión y el apoyo a las familias.
        </p>
      </section>

      {/* Actividades */}
      <section id="actividades" className="section">
        <h2>Actividades</h2>
        <p>
          Organizamos eventos, talleres y charlas para promover la conciencia y el apoyo en la comunidad.
        </p>
      </section>

      {/* Proyectos */}
      <section id="proyectos" className="section">
        <h2>Proyectos</h2>
        <p>
          Actualmente impulsamos “Autismo en Movimiento” y otras iniciativas inclusivas.
        </p>
      </section>

      {/* Área reservada */}
      <section id="area-reservada" className="section">
        <h2>Área reservada</h2>
        <p>
          Acceso exclusivo para miembros del club.
        </p>
      </section>

      {/* Contacto */}
      <section id="contacto" className="section">
        <h2>Contacto</h2>
        <p>Email: contacto@clubdeleonesjunin.com</p>
      </section>

      
     
    </div>
  );
}

export default App;
