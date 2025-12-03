import Navbar from './Components/Navbar/navbar';
import Hero from './Components/Hero/Hero';
//import Login from './Components/Login/Login';
import Nosotros from './assets/images/viamonte.jpg';
import Actividades from './assets/images/actividades.jpg'
import Carrera from './assets/images/aem.jpg'
import ContactForm  from './Components/ContactForm';
import IgIcon from './assets/images/ig-icon.avif'
import FbIcon from './assets/images/facebook-icon.png'

function App() {
  return (
    <div>
      <Navbar />

      {/* Inicio */}
      <section id="inicio">
        <Hero />
      </section>

    //

      {/* Nosotros */}
      <section id="nosotros" className="section">
        <h2 className='us-text'>Nosotros</h2>
        <p className='us-text-p'>
         Somos un club especializado en autismo, parte de Lions International, la organización de ayuda más grande del mundo. Acercamos nuestro mensaje a la sociedad, soñamos con una sociedad accesible.

          <img className='us-img'  src={Nosotros} alt="" width="100%" height="500px" />

        </p>
      </section>

      {/* Actividades */}
      <section id="actividades" className="actividades">
        <h2>Actividades</h2>
        <p className='text-actividades'>
          Organizamos eventos, talleres y charlas para promover la conciencia y el apoyo en la comunidad. Podés contactarnos para recibir una charla en tu ciudad, institución o empresa. Nuestros aportes, experiencias y servicio son 100% gratuitos.
          <img  className='actividades-img' src={Actividades} alt="" />
        </p>
      </section>

      {/* Proyectos */}
      <section id="proyectos" className="section">
        <h2 className='proyectos-text'>Proyectos</h2>
        <p className='proyectos-text-p'>
          Actualmente impulsamos “Autismo en Movimiento”, una carrera inclusiva que en su primera edición reunió a más de de 1200 personas corriendo, caminando, apoyando un evento que quedó para siempre en el corazón de Junín. Cada 4 de abril repetiremos esta experiencia única.

            <a 
            className="btn-2" 
             
            target="_blank" 
            href='https://photos.app.goo.gl/C33xSPdHHhiVVJTF9'
            rel="noopener noreferrer"
          >
            Ver galería
          </a>
          <img src={Carrera} alt=""  className='proyectos-img'/>
        </p>
      </section>

 

      {/* Contacto */}
     <section id="contacto" className="section">
  <h2>Contacto</h2>
  <p>Ya sea que quieras conocernos, charlar, ser parte de nuestro Club o agendar una charla en tu ciudad, barrio, institución o evento, estamos acá. ¡Esperamos saber de vos pronto!</p>
  <ContactForm />
</section>




<section>
  <footer className="footer">
    <h2>También podés contactarnos por acá:</h2>
  <p className='contact-text'>📧 Email: juninautismo@gmail.com</p>
  <p className='contact-text'>📱 Teléfono: +54 236 4629006</p>
  <a href="https://www.instagram.com/leonesjuninautismo/?hl=en">
  <p  className='icon-p'><img className='icon-socials' src={IgIcon} alt="logo-instagram"  width="20px"    />@leonesjuninautismo</p>
  </a>

  <a href="https://www.facebook.com/p/Club-de-Leones-Jun%C3%ADn-Autismo-61573146022450/" target='./blank'>
  <p><img src={FbIcon} alt="facebook-icon" width="25px" /> Club de Leones Junín Autismo</p>
  </a>
</footer>

</section>
     
    </div>
  );
}

export default App;
