export default function App() {
  return (
    <>
      <style>{`
        * {
          box-sizing: border-box;
        }

        html, body, #root {
          margin: 0;
          width: 100%;
          max-width: 100%;
          overflow-x: hidden;
          background: #050505;
        }

        body {
          font-family: 'Rajdhani', Arial, sans-serif;
        }

        .main {
          width: 100%;
          min-height: 100vh;
          background: #050505;
          color: white;
          overflow-x: hidden;
        }

        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          min-height: 85px;
          padding: 10px 35px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: rgba(0,0,0,0.65);
          backdrop-filter: blur(12px);
          border-bottom: 1px solid rgba(255,255,255,0.12);
          z-index: 1000;
        }

        .logo {
          height: 72px;
          width: auto;
          object-fit: contain;
          border-radius: 12px;
        
         }

        .nav-links {
          display: flex;
          gap: 22px;
          align-items: center;
        }

        .nav-links a {
          color: white;
          text-decoration: none;
          font-weight: 700;
          font-size: 18px;
        }

        .whatsapp-top,
        .whatsapp-float {
          background: #25D366;
          color: #000 !important;
          text-decoration: none;
          padding: 12px 20px;
          border-radius: 12px;
          font-weight: 900;
          font-size: 19px;
        }

        .hero {
          width: 100%;
          min-height: 100vh;
          background-image: linear-gradient(rgba(0,0,0,.15), rgba(0,0,0,.45)), url('/fondo.jpg');
          background-size: cover;
          background-position: center;
          display: flex;
          align-items: center;
          padding: 120px 50px 50px;
        }

        .hero-content {
          width: 100%;
          max-width: 760px;
        }

        .title {
          font-family: 'Oswald', Arial, sans-serif;
          font-size: 92px;
          text-transform: uppercase;
          letter-spacing: 4px;
          margin: 0;
          color: white;
          line-height: 95px;
          text-shadow: 0px 5px 25px rgba(0,0,0,0.95);
        }

        .subtitle {
          font-family: 'Oswald', Arial, sans-serif;
          font-size: 46px;
          text-transform: uppercase;
          letter-spacing: 2px;
          color: #00cfff;
          margin: 10px 0 30px;
          text-shadow: 0px 4px 18px rgba(0,0,0,0.9);
        }

        .description {
          font-size: 26px;
          line-height: 40px;
          color: #f5f5f5;
          text-shadow: 0px 3px 12px rgba(0,0,0,1);
        }

        .buttons {
          margin-top: 35px;
          display: flex;
          gap: 18px;
          flex-wrap: wrap;
        }

        .primary-button,
        .secondary-button {
          padding: 16px 34px;
          border-radius: 12px;
          font-weight: 900;
          font-size: 20px;
          text-decoration: none;
        }

        .primary-button {
          background: #00cfff;
          color: #000;
        }

        .secondary-button {
          border: 2px solid #00cfff;
          background: rgba(0,0,0,0.20);
          color: #00cfff;
        }

        section {
          width: 100%;
          padding: 110px 40px;
          background-image: linear-gradient(rgba(0,0,0,.60), rgba(0,0,0,.85)), url('/fondo.jpg');
          background-size: cover;
          background-position: center;
        }

        .section-title {
          font-family: 'Oswald', Arial, sans-serif;
          font-size: 52px;
          letter-spacing: 2px;
          color: #00cfff;
          text-align: center;
          margin-bottom: 50px;
          text-transform: uppercase;
        }

        .history-card {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 360px 1fr;
          gap: 40px;
          align-items: center;
          background: rgba(0,0,0,0.32);
          padding: 40px;
          border-radius: 30px;
          border: 1px solid rgba(255,255,255,0.15);
          backdrop-filter: blur(6px);
        }

        .history-image {
          width: 100%;
          height: 430px;
          object-fit: cover;
          border-radius: 24px;
          display: block;
        }

        .history-title {
          font-family: 'Oswald', Arial, sans-serif;
          font-size: 36px;
          color: #00cfff;
        }

        .history-text {
          font-size: 21px;
          line-height: 34px;
          color: #f1f1f1;
        }

        .history-strong {
          font-size: 23px;
          line-height: 36px;
          font-weight: 900;
        }

        .grid {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 25px;
        }

        .card {
          background: rgba(0,0,0,0.28);
          padding: 35px;
          border-radius: 24px;
          border: 1px solid rgba(255,255,255,0.15);
          backdrop-filter: blur(5px);
        }

        .card h3 {
          font-family: 'Oswald', Arial, sans-serif;
          color: #00cfff;
          font-size: 29px;
        }

        .card p {
          font-size: 20px;
          line-height: 32px;
        }

        .contact-box {
          font-size: 26px;
          line-height: 55px;
          text-align: center;
        }

        .whatsapp-float {
          position: fixed;
          right: 25px;
          bottom: 25px;
          border-radius: 999px;
          z-index: 1001;
        }

        @media (max-width: 768px) {
          .navbar {
            position: relative;
            min-height: auto;
            padding: 12px 14px;
            flex-direction: column;
            gap: 12px;
          }

          .logo {
            height: 58px;
          }

          .nav-links {
            width: 100%;
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 12px;
          }

          .nav-links a {
            font-size: 15px;
          }

          .whatsapp-top {
            width: 100%;
            text-align: center;
            font-size: 16px;
          }

          .hero {
            min-height: auto;
            padding: 60px 20px 70px;
            text-align: center;
            background-position: center;
          }

          .title {
            font-size: 54px;
            line-height: 58px;
            letter-spacing: 2px;
          }

          .subtitle {
            font-size: 30px;
          }

          .description {
            font-size: 20px;
            line-height: 32px;
          }

          .buttons {
            justify-content: center;
          }

          .primary-button,
          .secondary-button {
            width: 100%;
            text-align: center;
            font-size: 18px;
          }

          section {
            padding: 70px 18px;
          }

          .section-title {
            font-size: 34px;
          }

          .history-card {
            display: flex;
            flex-direction: column;
            padding: 22px;
            gap: 25px;
            text-align: center;
          }

          .history-image {
            height: auto;
            max-height: 380px;
          }

          .history-title {
            font-size: 30px;
          }

          .history-text,
          .history-strong {
            font-size: 18px;
            line-height: 30px;
          }

          .grid {
            grid-template-columns: 1fr;
          }

          .contact-box {
            font-size: 20px;
            line-height: 38px;
          }

          .whatsapp-float {
            right: 16px;
            bottom: 16px;
            font-size: 15px;
          }
        }
          @media (max-width: 768px) {
  .navbar {
    position: relative !important;
    width: 100% !important;
    padding: 12px 16px !important;
    flex-direction: row !important;
    justify-content: space-between !important;
    align-items: center !important;
  }

  .logo {
    width: auto !important;
    height: auto !important;
    font-size: 24px !important;
    border: none !important;
    color: #00cfff !important;
    font-weight: 900 !important;
  }

  .nav-links a:not(.whatsapp-top) {
    display: none !important;
  }

  .nav-links {
    width: auto !important;
    display: flex !important;
  }

  .whatsapp-top {
    width: auto !important;
    padding: 10px 16px !important;
    font-size: 15px !important;
    border-radius: 12px !important;
  }

  .hero {
    padding-top: 40px !important;
  }

  .title {
    font-size: 48px !important;
    line-height: 52px !important;
  }

  .subtitle {
    font-size: 30px !important;
  }

  .description {
    font-size: 18px !important;
    line-height: 30px !important;
  }
}
      `}</style>

      <main className="main">
        <nav className="navbar">
          <img src="/logo.png" alt="Cruz Andina" className="logo" />
          <div className="nav-links">
            <a href="#inicio">Inicio</a>
            <a href="#historia">Historia</a>
            <a href="#porque">Por qué elegirnos</a>
            <a href="#servicios">Servicios</a>
            <a href="#contacto">Contacto</a>
            <a className="whatsapp-top" href="https://wa.me/543874441133" target="_blank" rel="noreferrer">
              WhatsApp
            </a>
          </div>
        </nav>

        <section id="inicio" className="hero">
          <div className="hero-content">
            <h1 className="title">Cruz Andina</h1>
            <h2 className="subtitle">Conexión minera</h2>
            <p className="description">
              Vehículos 4x4 para minería, logística operativa, transporte de personal y guía escolta en la puna salteña.
            </p>

            <div className="buttons">
              <a className="primary-button" href="https://wa.me/543874441133?text=Hola,%20quiero%20información%20sobre%20los%20servicios%20de%20Cruz%20Andina." target="_blank" rel="noreferrer">
                Contactar
              </a>
              <a className="secondary-button" href="#servicios">
                Ver servicios
              </a>
            </div>
          </div>
        </section>

        <section id="historia">
          <h2 className="section-title">Nuestra Historia</h2>

          <div className="history-card">
            <img src="/dueno.jpg" alt="Familia fundadora de Cruz Andina" className="history-image" />

            <div>
              <h3 className="history-title">Raíces puneñas, visión minera</h3>
              <p className="history-text">
                Cruz Andina nace en el corazón de San Antonio de los Cobres, dentro de una familia humilde de la puna salteña, formada con esfuerzo, sacrificio y sueños de crecimiento.
              </p>
              <p className="history-text">
                Lo que comenzó como una visión familiar impulsada por el trabajo y la necesidad de salir adelante, hoy se transforma en una empresa comprometida con la minería, el sustento familiar y la excelencia operacional.
              </p>
              <p className="history-text">
                Conocemos cada ruta, cada altura y cada desafío de trabajar en la puna, porque somos parte de ella.
              </p>
              <p className="history-strong">
                Más que un servicio, representamos el esfuerzo de una familia puneña que apuesta al crecimiento, al trabajo digno y al futuro de nuestra tierra.
              </p>
            </div>
          </div>
        </section>

        <section id="porque">
          <h2 className="section-title">¿Por qué elegir Cruz Andina?</h2>

          <div className="grid">
            <div className="card"><h3>Conocimiento de la puna</h3><p>Conocemos las rutas, alturas y desafíos reales de operar en San Antonio de los Cobres y la puna salteña.</p></div>
            <div className="card"><h3>Compromiso familiar</h3><p>Somos una empresa nacida desde el esfuerzo, el trabajo y la responsabilidad de una familia puneña.</p></div>
            <div className="card"><h3>Seguridad operacional</h3><p>Seguimiento satelital, comunicación radial y acompañamiento operativo para cada servicio.</p></div>
            <div className="card"><h3>Crecimiento minero</h3><p>Acompañamos el desarrollo minero de la región con compromiso, visión y mejora constante.</p></div>
          </div>
        </section>

        <section id="servicios">
          <h2 className="section-title">Nuestros Servicios</h2>

          <div className="grid">
            <div className="card"><h3>Logística de cargas livianas</h3><p>Traslado de cargas y apoyo operativo para proyectos mineros.</p></div>
            <div className="card"><h3>Transporte de personal</h3><p>Seguimiento satelital, Starlink y comunicación radial UHF/VHF.</p></div>
            <div className="card"><h3>Guía escolta</h3><p>Seguridad y acompañamiento operativo en rutas complejas.</p></div>
            <div className="card"><h3>Alquiler 4x4</h3><p>Nissan XE equipado para minería y operaciones de altura.</p></div>
          </div>
        </section>

        <section id="contacto">
          <h2 className="section-title">Contacto</h2>

          <div className="contact-box">
            <p>📞 3874441133 - 3875753306</p>
            <p>✉️ lcruzandina@gmail.com</p>
            <p>📍 San Antonio de los Cobres - Salta</p>
          </div>
        </section>

        <a className="whatsapp-float" href="https://wa.me/543874441133?text=Hola,%20quiero%20información%20sobre%20los%20servicios%20de%20Cruz%20Andina." target="_blank" rel="noreferrer">
          WhatsApp
        </a>
      </main>
    </>
  );
}