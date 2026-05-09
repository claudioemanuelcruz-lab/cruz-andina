export default function App() {
  return (
    <main style={main}>
      <nav style={navbar}>
        <div style={brand}>Cruz Andina</div>

        <div style={navLinks}>
          <a style={navLink} href="#inicio">Inicio</a>
          <a style={navLink} href="#historia">Historia</a>
          <a style={navLink} href="#porque">Por qué elegirnos</a>
          <a style={navLink} href="#servicios">Servicios</a>
          <a style={navLink} href="#contacto">Contacto</a>
          <a style={whatsappTop} href="https://wa.me/543874441133" target="_blank">
            WhatsApp
          </a>
        </div>
      </nav>

      <section id="inicio" style={hero}>
        <div style={heroContent}>
          <h1 style={title}>Cruz Andina</h1>
          <h2 style={subtitle}>Conexión minera</h2>

          <p style={description}>
            Vehículos 4x4 para minería, logística operativa,
            transporte de personal y guía escolta en la puna salteña.
          </p>

          <div style={buttons}>
            <a style={primaryButton} href="https://wa.me/543874441133" target="_blank">
              Contactar
            </a>

            <a style={secondaryButton} href="#servicios">
              Ver servicios
            </a>
          </div>
        </div>
      </section>

      <section id="historia" style={history}>
        <h2 style={sectionTitle}>Nuestra Historia</h2>

        <div style={historyCard}>
          <div style={historyImageBox}>
            <img src="/dueno.jpg" alt="Dueño de Cruz Andina" style={historyImage} />
          </div>

          <div style={historyTextBox}>
            <h3 style={historyTitle}>Raíces puneñas, visión minera</h3>

            <p style={historyText}>
              Cruz Andina nace en el corazón de San Antonio de los Cobres,
              dentro de una familia humilde de la puna salteña, formada con
              esfuerzo, sacrificio y sueños de crecimiento.
            </p>

            <p style={historyText}>
              Lo que comenzó como una visión familiar impulsada por el trabajo
              y la necesidad de salir adelante, hoy se transforma en una empresa
              comprometida con la minería, el sustento familiar y la excelencia
              operacional.
            </p>

            <p style={historyText}>
              Conocemos cada ruta, cada altura y cada desafío de trabajar en la
              puna, porque somos parte de ella.
            </p>

            <p style={historyText}>
              En Cruz Andina creemos en el valor de la palabra, la
              responsabilidad y el compromiso con cada operación, acompañando
              proyectos mineros y logísticos con dedicación, seguridad y orgullo
              por nuestras raíces.
            </p>

            <p style={historyStrong}>
              Más que un servicio, representamos el esfuerzo de una familia
              puneña que apuesta al crecimiento, al trabajo digno y al futuro de
              nuestra tierra.
            </p>
          </div>
        </div>
      </section>

      <section id="porque" style={whySection}>
        <h2 style={sectionTitle}>¿Por qué elegir Cruz Andina?</h2>

        <div style={whyGrid}>
          <div style={whyCard}>
            <div style={whyIcon}>🏔️</div>
            <h3 style={whyTitle}>Conocimiento de la puna</h3>
            <p style={whyText}>
              Conocemos las rutas, alturas y desafíos reales de operar en San
              Antonio de los Cobres y la puna salteña.
            </p>
          </div>

          <div style={whyCard}>
            <div style={whyIcon}>🤝</div>
            <h3 style={whyTitle}>Compromiso familiar</h3>
            <p style={whyText}>
              Somos una empresa nacida desde el esfuerzo, el trabajo y la
              responsabilidad de una familia puneña.
            </p>
          </div>

          <div style={whyCard}>
            <div style={whyIcon}>🛰️</div>
            <h3 style={whyTitle}>Seguridad operacional</h3>
            <p style={whyText}>
              Seguimiento satelital, comunicación radial y acompañamiento
              operativo para cada servicio.
            </p>
          </div>

          <div style={whyCard}>
            <div style={whyIcon}>⛏️</div>
            <h3 style={whyTitle}>Crecimiento junto a la minería</h3>
            <p style={whyText}>
              Acompañamos el desarrollo minero de la región con compromiso,
              visión y mejora constante.
            </p>
          </div>
        </div>
      </section>

      <section id="servicios" style={services}>
        <h2 style={sectionTitle}>Nuestros Servicios</h2>

        <div style={grid}>
          <div style={card}>
            <h3 style={cardTitle}>Logística de cargas ligeras</h3>
            <p style={cardText}>
              Traslado de cargas y apoyo operativo para proyectos mineros.
            </p>
          </div>

          <div style={card}>
            <h3 style={cardTitle}>Transporte de personal</h3>
            <p style={cardText}>
              Seguimiento satelital, Starlink y comunicación radial UHF/VHF.
            </p>
          </div>

          <div style={card}>
            <h3 style={cardTitle}>Guía escolta</h3>
            <p style={cardText}>
              Seguridad y acompañamiento operativo en rutas complejas.
            </p>
          </div>

          <div style={card}>
            <h3 style={cardTitle}>Alquiler 4x4</h3>
            <p style={cardText}>
              Nissan XE equipado para minería y operaciones de altura.
            </p>
          </div>
        </div>
      </section>

      <section id="contacto" style={contact}>
        <h2 style={sectionTitle}>Contacto</h2>

        <div style={contactBox}>
          <p>📞 3874441133 - 3875753306</p>
          <p>✉️ lcruzandina@gmail.com</p>
          <p>📍 San Antonio de los Cobres - Salta</p>
        </div>
      </section>

      <a
        style={whatsappFloat}
        href="https://wa.me/543874441133?text=Hola,%20quiero%20información%20sobre%20los%20servicios%20de%20Cruz%20Andina."
        target="_blank"
      >
        WhatsApp
      </a>
    </main>
  );
}

const main = {
  minHeight: "100vh",
  background: "#050505",
  color: "white",
  fontFamily: "Arial",
};

const navbar = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  height: "70px",
  padding: "0 40px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  background: "rgba(0,0,0,0.35)",
  backdropFilter: "blur(10px)",
  borderBottom: "1px solid rgba(255,255,255,0.12)",
  zIndex: 1000,
};

const brand = {
  color: "#00cfff",
  fontSize: "26px",
  fontWeight: "900",
};

const navLinks = {
  display: "flex",
  gap: "22px",
  alignItems: "center",
};

const navLink = {
  color: "white",
  textDecoration: "none",
  fontWeight: "bold",
};

const whatsappTop = {
  background: "#25D366",
  color: "#000",
  textDecoration: "none",
  padding: "12px 18px",
  borderRadius: "12px",
  fontWeight: "900",
};

const hero = {
  minHeight: "100vh",
  backgroundImage:
    "linear-gradient(rgba(0,0,0,.05), rgba(0,0,0,.25)), url('/fondo.jpg')",
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "100px 40px 40px",
};

const heroContent = {
  maxWidth: "900px",
  width: "100%",
  padding: "50px",
  textAlign: "center",
};

const title = {
  fontSize: "90px",
  marginBottom: "10px",
  fontWeight: "900",
  color: "#00cfff",
  lineHeight: "90px",
  textShadow: "0px 4px 25px rgba(0,0,0,0.9)",
};

const subtitle = {
  fontSize: "42px",
  marginBottom: "35px",
  color: "white",
  fontWeight: "700",
  textShadow: "0px 4px 20px rgba(0,0,0,0.9)",
};

const description = {
  fontSize: "24px",
  lineHeight: "44px",
  color: "#f5f5f5",
  maxWidth: "900px",
  margin: "0 auto",
  textShadow: "0px 3px 12px rgba(0,0,0,1)",
};

const buttons = {
  marginTop: "50px",
  display: "flex",
  justifyContent: "center",
  gap: "20px",
  flexWrap: "wrap",
};

const primaryButton = {
  padding: "18px 42px",
  borderRadius: "14px",
  border: "none",
  background: "#00cfff",
  color: "#000",
  fontWeight: "bold",
  fontSize: "18px",
  textDecoration: "none",
};

const secondaryButton = {
  padding: "18px 42px",
  borderRadius: "14px",
  border: "2px solid #00cfff",
  background: "rgba(0,0,0,0.10)",
  color: "#00cfff",
  fontWeight: "bold",
  fontSize: "18px",
  textDecoration: "none",
};

const history = {
  padding: "100px 40px",
  backgroundImage:
    "linear-gradient(rgba(0,0,0,.55), rgba(0,0,0,.82)), url('/fondo.jpg')",
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundAttachment: "fixed",
};

const historyCard = {
  maxWidth: "1200px",
  margin: "0 auto",
  display: "grid",
  gridTemplateColumns: "360px 1fr",
  gap: "40px",
  alignItems: "center",
  background: "rgba(0,0,0,0.25)",
  padding: "40px",
  borderRadius: "30px",
  border: "1px solid rgba(255,255,255,0.15)",
  backdropFilter: "blur(6px)",
};

const historyImageBox = {
  width: "100%",
};

const historyImage = {
  width: "100%",
  height: "430px",
  objectFit: "cover",
  borderRadius: "24px",
  border: "1px solid rgba(255,255,255,0.18)",
};

const historyTextBox = {
  color: "white",
};

const historyTitle = {
  fontSize: "34px",
  color: "#00cfff",
  marginBottom: "25px",
};

const historyText = {
  fontSize: "19px",
  lineHeight: "34px",
  color: "#f1f1f1",
};

const historyStrong = {
  fontSize: "21px",
  lineHeight: "36px",
  color: "#ffffff",
  fontWeight: "bold",
  marginTop: "20px",
};

const whySection = {
  padding: "100px 40px",
  backgroundImage:
    "linear-gradient(rgba(0,0,0,.55), rgba(0,0,0,.80)), url('/fondo.jpg')",
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundAttachment: "fixed",
};

const whyGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
  gap: "25px",
};

const whyCard = {
  background: "rgba(0,0,0,0.25)",
  padding: "40px",
  borderRadius: "26px",
  border: "1px solid rgba(255,255,255,0.15)",
  backdropFilter: "blur(6px)",
  textAlign: "center",
  boxShadow: "0px 8px 32px rgba(0,0,0,0.35)",
};

const whyIcon = {
  fontSize: "55px",
  marginBottom: "20px",
};

const whyTitle = {
  color: "#00cfff",
  fontSize: "28px",
  marginBottom: "20px",
};

const whyText = {
  color: "#f1f1f1",
  fontSize: "18px",
  lineHeight: "32px",
};

const services = {
  padding: "100px 40px",
  backgroundImage:
    "linear-gradient(rgba(0,0,0,.45), rgba(0,0,0,.75)), url('/fondo.jpg')",
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundAttachment: "fixed",
};

const sectionTitle = {
  fontSize: "46px",
  marginBottom: "50px",
  color: "#00cfff",
  textAlign: "center",
};

const grid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
  gap: "25px",
};

const card = {
  background: "rgba(0,0,0,0.20)",
  padding: "35px",
  borderRadius: "24px",
  border: "1px solid rgba(255,255,255,0.15)",
  color: "white",
  backdropFilter: "blur(4px)",
  boxShadow: "0px 8px 32px rgba(0,0,0,0.35)",
};

const cardTitle = {
  color: "#00cfff",
  fontSize: "26px",
  marginBottom: "18px",
};

const cardText = {
  color: "#f1f1f1",
  fontSize: "18px",
  lineHeight: "32px",
};

const contact = {
  padding: "100px 40px",
  backgroundImage:
    "linear-gradient(rgba(0,0,0,.60), rgba(0,0,0,.85)), url('/fondo.jpg')",
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundAttachment: "fixed",
};

const contactBox = {
  fontSize: "24px",
  lineHeight: "55px",
  textAlign: "center",
};

const whatsappFloat = {
  position: "fixed",
  right: "25px",
  bottom: "25px",
  background: "#25D366",
  color: "#000",
  padding: "16px 22px",
  borderRadius: "999px",
  fontWeight: "900",
  textDecoration: "none",
  zIndex: 1001,
};g