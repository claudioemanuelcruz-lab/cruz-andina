import { useState } from "react";

export default function App() {
  const [pagina, setPagina] = useState("inicio");

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
          font-family: 'Rajdhani', Arial, sans-serif;
        }

        .main {
          min-height: 100vh;
          color: white;
          background: #050505;
        }

        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          height: 85px;
          padding: 0 35px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: rgba(0,0,0,0.60);
          backdrop-filter: blur(12px);
          border-bottom: 1px solid rgba(255,255,255,0.12);
          z-index: 1000;
        }

        .logo {
          width: 70px;
          height: 70px;
          object-fit: contain;
          border-radius: 50%;
        }

        .nav-links {
          display: flex;
          align-items: center;
          gap: 22px;
        }

        .nav-links button {
          background: none;
          border: none;
          color: white;
          font-weight: 800;
          font-size: 18px;
          cursor: pointer;
          font-family: inherit;
        }

        .nav-links button:hover,
        .nav-links button.active {
          color: #00cfff;
        }

        .whatsapp-top {
          background: #25D366;
          color: #000;
          text-decoration: none;
          padding: 12px 20px;
          border-radius: 12px;
          font-weight: 900;
          font-size: 19px;
        }

        .page {
          min-height: 100vh;
          padding: 135px 50px 60px;
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          display: flex;
          align-items: center;
        }

        .inicio {
          background-image: linear-gradient(rgba(0,0,0,.15), rgba(0,0,0,.45)), url('/fondo.jpg');
        }

        .historia {
          background-image: linear-gradient(rgba(0,0,0,.58), rgba(0,0,0,.88)), url('/dueno.jpg');
        }

        .porque {
          background-image: linear-gradient(rgba(0,0,0,.58), rgba(0,0,0,.88)), url('/porque.jpg');
        }

        .servicios {
          background-image: linear-gradient(rgba(0,0,0,.58), rgba(0,0,0,.88)), url('/servicios.jpg');
        }

        .contacto {
          background-image: linear-gradient(rgba(0,0,0,.65), rgba(0,0,0,.90)), url('/contacto.jpg');
        }

        .content {
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
        }

        .hero-content {
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
          background: rgba(0,0,0,0.25);
          color: #00cfff;
        }

        .section-title {
          font-family: 'Oswald', Arial, sans-serif;
          font-size: 52px;
          color: #00cfff;
          text-align: center;
          margin-bottom: 40px;
          text-transform: uppercase;
        }

        .box {
          background: rgba(0,0,0,0.48);
          padding: 38px;
          border-radius: 28px;
          border: 1px solid rgba(255,255,255,0.16);
          backdrop-filter: blur(8px);
        }

        .history-layout {
          display: grid;
          grid-template-columns: 360px 1fr;
          gap: 40px;
          align-items: center;
        }

        .history-img {
          width: 100%;
          height: 430px;
          object-fit: cover;
          border-radius: 24px;
        }

        .box h3 {
          font-family: 'Oswald', Arial, sans-serif;
          font-size: 34px;
          color: #00cfff;
        }

        .box p {
          font-size: 21px;
          line-height: 34px;
        }

        .strong {
          font-weight: 900;
          font-size: 23px !important;
        }

        .grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 25px;
        }

        .card {
          background: rgba(0,0,0,0.55);
          padding: 30px;
          border-radius: 24px;
          border: 1px solid rgba(255,255,255,0.15);
          backdrop-filter: blur(6px);
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
          background: #25D366;
          color: #000;
          padding: 16px 22px;
          border-radius: 999px;
          font-weight: 900;
          text-decoration: none;
          z-index: 1001;
        }

        @media (max-width: 768px) {
          .navbar {
            height: 70px;
            padding: 8px 14px;
            overflow: hidden;
          }

          .logo {
            width: 58px;
            height: 58px;
          }

          .nav-links button {
            display: none;
          }

          .whatsapp-top {
            padding: 10px 16px;
            font-size: 15px;
          }

          .page {
            padding: 95px 18px 70px;
            text-align: center;
            align-items: flex-start;
            min-height: 100vh;
          }

          .title {
            font-size: 52px;
            line-height: 56px;
            letter-spacing: 2px;
          }

          .subtitle {
            font-size: 30px;
          }

          .description {
            font-size: 19px;
            line-height: 31px;
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

          .section-title {
            font-size: 34px;
          }

          .box {
            padding: 22px;
          }

          .history-layout {
            display: flex;
            flex-direction: column;
          }

          .history-img {
            height: auto;
            max-height: 360px;
          }

          .box h3 {
            font-size: 28px;
          }

          .box p,
          .strong {
            font-size: 18px !important;
            line-height: 30px;
          }

          .grid {
            grid-template-columns: 1fr;
          }

          .contact-box {
            font-size: 19px;
            line-height: 36px;
          }

          .whatsapp-float {
            right: 16px;
            bottom: 16px;
            font-size: 15px;
          }
        }
      `}</style>

      <main className="main">
        <nav className="navbar">
          <img src="/logo.png" alt="Cruz Andina" className="logo" />

          <div className="nav-links">
            <button className={pagina === "inicio" ? "active" : ""} onClick={() => setPagina("inicio")}>Inicio</button>
            <button className={pagina === "historia" ? "active" : ""} onClick={() => setPagina("historia")}>Historia</button>
            <button className={pagina === "porque" ? "active" : ""} onClick={() => setPagina("porque")}>Por qué elegirnos</button>
            <button className={pagina === "servicios" ? "active" : ""} onClick={() => setPagina("servicios")}>Servicios</button>
            <button className={pagina === "contacto" ? "active" : ""} onClick={() => setPagina("contacto")}>Contacto</button>

            <a className="whatsapp-top" href="https://wa.me/543874441133" target="_blank" rel="noreferrer">
              WhatsApp
            </a>
          </div>
        </nav>

        {pagina === "inicio" && (
          <section className="page inicio">
            <div className="content hero-content">
              <h1 className="title">Cruz Andina</h1>
              <h2 className="subtitle">Conexión minera</h2>
              <p className="description">
                Vehículos 4x4 para minería, logística operativa, transporte de personal y guía escolta en la puna salteña.
              </p>

              <div className="buttons">
                <a className="primary-button" href="https://wa.me/543874441133?text=Hola,%20quiero%20información%20sobre%20los%20servicios%20de%20Cruz%20Andina." target="_blank" rel="noreferrer">
                  Contactar
                </a>
                <button className="secondary-button" onClick={() => setPagina("servicios")}>
                  Ver servicios
                </button>
              </div>
            </div>
          </section>
        )}

        {pagina === "historia" && (
          <section className="page historia">
            <div className="content">
              <h2 className="section-title">Nuestra Historia</h2>

              <div className="box history-layout">
                <img src="/dueno.jpg" alt="Familia fundadora de Cruz Andina" className="history-img" />

                <div>
                  <h3>Raíces puneñas, visión minera</h3>
                  <p>
                    Cruz Andina nace en el corazón de San Antonio de los Cobres, dentro de una familia humilde de la puna salteña, formada con esfuerzo, sacrificio y sueños de crecimiento.
                  </p>
                  <p>
                    Lo que comenzó como una visión familiar impulsada por el trabajo y la necesidad de salir adelante, hoy se transforma en una empresa comprometida con la minería, el sustento familiar y la excelencia operacional.
                  </p>
                  <p>
                    Conocemos cada ruta, cada altura y cada desafío de trabajar en la puna, porque somos parte de ella.
                  </p>
                  <p className="strong">
                    Más que un servicio, representamos el esfuerzo de una familia puneña que apuesta al crecimiento, al trabajo digno y al futuro de nuestra tierra.
                  </p>
                </div>
              </div>
            </div>
          </section>
        )}

        {pagina === "porque" && (
          <section className="page porque">
            <div className="content">
              <h2 className="section-title">¿Por qué elegir Cruz Andina?</h2>

              <div className="grid">
                <div className="card"><h3>Conocimiento de la puna</h3><p>Conocemos las rutas, alturas y desafíos reales de operar en San Antonio de los Cobres y la puna salteña.</p></div>
                <div className="card"><h3>Compromiso familiar</h3><p>Somos una empresa nacida desde el esfuerzo, el trabajo y la responsabilidad de una familia puneña.</p></div>
                <div className="card"><h3>Seguridad operacional</h3><p>Seguimiento satelital, comunicación radial y acompañamiento operativo para cada servicio.</p></div>
                <div className="card"><h3>Crecimiento minero</h3><p>Acompañamos el desarrollo minero de la región con compromiso, visión y mejora constante.</p></div>
              </div>
            </div>
          </section>
        )}

        {pagina === "servicios" && (
          <section className="page servicios">
            <div className="content">
              <h2 className="section-title">Nuestros Servicios</h2>

              <div className="grid">
                <div className="card"><h3>Logística de cargas livianas</h3><p>Traslado de cargas y apoyo operativo para proyectos mineros.</p></div>
                <div className="card"><h3>Transporte de personal</h3><p>Seguimiento satelital, Starlink y comunicación radial UHF/VHF.</p></div>
                <div className="card"><h3>Guía escolta</h3><p>Seguridad y acompañamiento operativo en rutas complejas.</p></div>
                <div className="card"><h3>Alquiler 4x4</h3><p>Nissan XE equipado para minería y operaciones de altura.</p></div>
              </div>
            </div>
          </section>
        )}

        {pagina === "contacto" && (
          <section className="page contacto">
            <div className="content">
              <h2 className="section-title">Contacto</h2>

              <div className="box contact-box">
                <p>📞 3874441133 - 3875753306</p>
                <p>✉️ lcruzandina@gmail.com</p>
                <p>📍 San Antonio de los Cobres - Salta</p>
              </div>
            </div>
          </section>
        )}

        <a className="whatsapp-float" href="https://wa.me/543874441133?text=Hola,%20quiero%20información%20sobre%20los%20servicios%20de%20Cruz%20Andina." target="_blank" rel="noreferrer">
          WhatsApp
        </a>
      </main>
    </>
  );
}