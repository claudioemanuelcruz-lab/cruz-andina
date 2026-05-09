export default function App() {
  return (
    <main style={main}>
      <nav style={navbar}>
        <div style={logoBox}>
          <img src="/logo.png" alt="Cruz Andina" style={logo} />
        </div>

        <div style={navLinks}>
          <a style={navLink} href="#inicio">Inicio</a>
          <a style={navLink} href="#historia">Historia</a>
          <a style={navLink} href="#porque">Por qué elegirnos</a>
          <a style={navLink} href="#servicios">Servicios</a>
          <a style={navLink} href="#contacto">Contacto</a>
          <a
            style={whatsappTop}
            href="https://wa.me/543874441133"
            target="_blank"
            rel="noreferrer"
          >
            WhatsApp
          </a>
        </div>
      </nav>

      <section id="inicio" style={hero}>
        <div style={heroContent}>
          <h1 style={title}>Cruz Andina</h1>
          <h2 style={subtitle}>Conexión minera</h2>

          <p style={description}>
            Vehículos 4x4 para minería, logística operativa, transporte de
            personal y guía escolta en la puna salteña.
          </p>

          <div style={buttons}>
            <a
              style={primaryButton}
              href="https://wa.me/543874441133?text=Hola,%20quiero%20información%20sobre%20los%20servicios%20de%20Cruz%20Andina."
              target="_blank"
              rel="noreferrer"
            >
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
            <img
              src="/dueno.jpg"
              alt="Familia fundadora de Cruz Andina"
              style={historyImage}
            />
          </div>

          <div>
            <h3 style={historyTitle}>Raíces puneñas, visión minera</h3>

            <p style={historyText}>
              Cruz Andina nace en el corazón de San Antonio de los Cobres,
              dentro de una familia humilde de la puna salteña, formada con
              esfuerzo, sacrificio y sueños de crecimiento.
            </p>

            <p style={historyText}>
              Lo que comenzó como una visión familiar impulsada por el trabajo y
              la necesidad de salir adelante, hoy se transforma en una empresa
              comprometida con la minería, el sustento familiar y la excelencia
              operacional.
            </p>

            <p style={historyText}>
              Conocemos cada ruta, cada altura y cada desafío de trabajar en la
              puna, porque somos parte de ella.
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

        <div style={grid}>
          <div style={card}>
            <h3 style={cardTitle}>Conocimiento de la puna</h3>
            <p style={cardText}>
              Conocemos las rutas, alturas y desafíos reales de operar en San
              Antonio de los Cobres y la puna salteña.
            </p>
          </div>

          <div style={card}>
            <h3 style={cardTitle}>Compromiso familiar</h3>
            <p style={cardText}>
              Somos una empresa nacida desde el esfuerzo, el trabajo y la
              responsabilidad de una familia puneña.
            </p>
          </div>

          <div style={card}>
            <h3 style={cardTitle}>Seguridad operacional</h3>
            <p style={cardText}>
              Seguimiento satelital, comunicación radial y acompañamiento
              operativo para cada servicio.
            </p>
          </div>

          <div style={card}>
            <h3 style={cardTitle}>Crecimiento minero</h3>
            <p style={cardText}>
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
            <h3 style={cardTitle}>Logística de cargas livianas</h3>
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
        rel="noreferrer"
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
  fontFamily: "'Rajdhani', sans-serif",
};

const navbar = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  height: "85px",
  padding: "0 35px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  background: "rgba(0,0,0,0.55)",
  backdropFilter: "blur(12px)",
  borderBottom: "1px solid rgba(255,255,255,0.12)",
  zIndex: 1000,
};

const logoBox = {
  display: "flex",
  alignItems: "center",
};

const logo = {
  height: "78px",
  objectFit: "contain",
};

const navLinks = {
  display: "flex",
  gap: "22px",
  alignItems: "center",
};

const navLink = {
  color: "white",
  textDecoration: "none",
  fontWeight: "700",
  fontSize: "18px",
};

const whatsappTop = {
  background: "#25D366",
  color: "#000",
  textDecoration: "none",
  padding: "12px 20px",
  borderRadius: "12px",
  fontWeight: "900",
  fontSize: "19px",
};

const hero = {
  minHeight: "100vh",
  backgroundImage:
    "linear-gradient(rgba(0,0,0,.15), rgba(0,0,0,.45)), url('/fondo.jpg')",
  backgroundSize: "cover",
  backgroundPosition: "center",
  display: "flex",
  alignItems: "center",
  padding: "120px 50px 50px",
};

const heroContent = {
  maxWidth: "760px",
};

const title = {
  fontFamily: "'Oswald', sans-serif",
  fontSize: "92px",
  textTransform: "uppercase",
  letterSpacing: "4px",
  margin: 0,
  color: "white",
  lineHeight: "95px",
  textShadow: "0px 5px 25px rgba(0,0,0,0.95)",
};

const subtitle = {
  fontFamily: "'Oswald', sans-serif",
  fontSize: "46px",
  textTransform: "uppercase",
  letterSpacing: "2px",
  color: "#00cfff",
  margin: "10px 0 30px",
  textShadow: "0px 4px 18px rgba(0,0,0,0.9)",
};

const description = {
  fontSize: "26px",
  lineHeight: "40px",
  color: "#f5f5f5",
  textShadow: "0px 3px 12px rgba(0,0,0,1)",
};

const buttons = {
  marginTop: "35px",
  display: "flex",
  gap: "18px",
  flexWrap: "wrap",
};

const primaryButton = {
  padding: "16px 34px",
  borderRadius: "12px",
  background: "#00cfff",
  color: "#000",
  fontWeight: "900",
  fontSize: "20px",
  textDecoration: "none",
};

const secondaryButton = {
  padding: "16px 34px",
  borderRadius: "12px",
  border: "2px solid #00cfff",
  background: "rgba(0,0,0,0.20)",
  color: "#00cfff",
  fontWeight: "900",
  fontSize: "20px",
  textDecoration: "none",
};

const history = {
  padding: "110px 40px",
  backgroundImage:
    "linear-gradient(rgba(0,0,0,.60), rgba(0,0,0,.85)), url('/fondo.jpg')",
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
  background: "rgba(0,0,0,0.32)",
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
};

const historyTitle = {
  fontFamily: "'Oswald', sans-serif",
  fontSize: "36px",
  color: "#00cfff",
};

const historyText = {
  fontSize: "21px",
  lineHeight: "34px",
  color: "#f1f1f1",
};

const historyStrong = {
  fontSize: "23px",
  lineHeight: "36px",
  fontWeight: "900",
};

const whySection = {
  padding: "110px 40px",
  backgroundImage:
    "linear-gradient(rgba(0,0,0,.55), rgba(0,0,0,.82)), url('/fondo.jpg')",
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundAttachment: "fixed",
};

const services = whySection;

const contact = {
  padding: "110px 40px",
  backgroundImage:
    "linear-gradient(rgba(0,0,0,.65), rgba(0,0,0,.90)), url('/fondo.jpg')",
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundAttachment: "fixed",
};

const sectionTitle = {
  fontFamily: "'Oswald', sans-serif",
  fontSize: "52px",
  letterSpacing: "2px",
  color: "#00cfff",
  textAlign: "center",
  marginBottom: "50px",
  textTransform: "uppercase",
};

const grid = {
  maxWidth: "1200px",
  margin: "0 auto",
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
  gap: "25px",
};

const card = {
  background: "rgba(0,0,0,0.28)",
  padding: "35px",
  borderRadius: "24px",
  border: "1px solid rgba(255,255,255,0.15)",
  backdropFilter: "blur(5px)",
};

const cardTitle = {
  fontFamily: "'Oswald', sans-serif",
  color: "#00cfff",
  fontSize: "29px",
};

const cardText = {
  fontSize: "20px",
  lineHeight: "32px",
};

const contactBox = {
  fontSize: "26px",
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
};