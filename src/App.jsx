export default function App() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#050505",
        color: "white",
        fontFamily: "Arial",
      }}
    >
      {/* HERO */}
      <section
        style={{
          minHeight: "100vh",
          backgroundImage:
            "linear-gradient(rgba(0,0,0,.05), rgba(0,0,0,.25)), url('/fondo.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "40px",
        }}
      >
        <div
          style={{
            maxWidth: "900px",
            width: "100%",
            padding: "50px",
            textAlign: "center",
          }}
        >
          <h1
            style={{
              fontSize: "90px",
              marginBottom: "10px",
              fontWeight: "900",
              color: "#00cfff",
              lineHeight: "90px",
              textShadow: "0px 4px 25px rgba(0,0,0,0.9)",
            }}
          >
            Cruz Andina
          </h1>

          <h2
            style={{
              fontSize: "42px",
              marginBottom: "35px",
              color: "white",
              fontWeight: "700",
              textShadow: "0px 4px 20px rgba(0,0,0,0.9)",
            }}
          >
            Conexión minera
          </h2>

          <p
            style={{
              fontSize: "24px",
              lineHeight: "44px",
              color: "#f5f5f5",
              maxWidth: "900px",
              margin: "0 auto",
              textShadow: "0px 3px 12px rgba(0,0,0,1)",
            }}
          >
            Vehículos 4x4 para minería, logística operativa,
            transporte de personal y guía escolta
            en la puna salteña.
          </p>

          <div
            style={{
              marginTop: "50px",
              display: "flex",
              justifyContent: "center",
              gap: "20px",
              flexWrap: "wrap",
            }}
          >
            <button
              style={{
                padding: "18px 42px",
                borderRadius: "14px",
                border: "none",
                background: "#00cfff",
                color: "#000",
                fontWeight: "bold",
                cursor: "pointer",
                fontSize: "18px",
                boxShadow: "0px 0px 20px rgba(0,207,255,0.5)",
              }}
            >
              Contactar
            </button>

            <button
              style={{
                padding: "18px 42px",
                borderRadius: "14px",
                border: "2px solid #00cfff",
                background: "rgba(0,0,0,0.10)",
                color: "#00cfff",
                fontWeight: "bold",
                cursor: "pointer",
                fontSize: "18px",
                backdropFilter: "blur(2px)",
              }}
            >
              Ver servicios
            </button>
          </div>
        </div>
      </section>

      {/* SERVICIOS */}
      <section
        style={{
          padding: "90px 40px",
          backgroundImage:
            "linear-gradient(rgba(0,0,0,.45), rgba(0,0,0,.75)), url('/fondo.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <h2
          style={{
            fontSize: "46px",
            marginBottom: "50px",
            color: "#00cfff",
            textAlign: "center",
            textShadow: "0px 0px 20px rgba(0,207,255,0.4)",
          }}
        >
          Nuestros Servicios
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
            gap: "25px",
          }}
        >
          <div style={card}>
            <h3 style={cardTitle}>
              Logística de cargas ligeras
            </h3>

            <p style={cardText}>
              Traslado de cargas y apoyo operativo
              para proyectos mineros.
            </p>
          </div>

          <div style={card}>
            <h3 style={cardTitle}>
              Transporte de personal
            </h3>

            <p style={cardText}>
              Seguimiento satelital, Starlink
              y comunicación radial UHF/VHF.
            </p>
          </div>

          <div style={card}>
            <h3 style={cardTitle}>
              Guía escolta
            </h3>

            <p style={cardText}>
              Seguridad y acompañamiento operativo
              en rutas complejas.
            </p>
          </div>

          <div style={card}>
            <h3 style={cardTitle}>
              Alquiler 4x4
            </h3>

            <p style={cardText}>
              Nissan XE equipado para minería
              y operaciones de altura.
            </p>
          </div>
        </div>
      </section>

      {/* CONTACTO */}
      <section
        style={{
          padding: "90px 40px",
          backgroundImage:
            "linear-gradient(rgba(0,0,0,.60), rgba(0,0,0,.85)), url('/fondo.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <h2
          style={{
            fontSize: "46px",
            marginBottom: "40px",
            color: "#00cfff",
            textAlign: "center",
            textShadow: "0px 0px 20px rgba(0,207,255,0.4)",
          }}
        >
          Contacto
        </h2>

        <div
          style={{
            fontSize: "24px",
            lineHeight: "55px",
            textAlign: "center",
            color: "#f1f1f1",
            textShadow: "0px 2px 10px rgba(0,0,0,1)",
          }}
        >
          <p>📞 3874441133 - 3875753306</p>
          <p>✉️ lcruzandina@gmail.com</p>
          <p>📍 San Antonio de los Cobres - Salta</p>
        </div>
      </section>
    </main>
  );
}

const card = {
  background: "rgba(0,0,0,0.20)",
  padding: "35px",
  borderRadius: "24px",
  border: "1px solid rgba(255,255,255,0.15)",
  color: "white",
  backdropFilter: "blur(4px)",
  WebkitBackdropFilter: "blur(4px)",
  boxShadow: "0px 8px 32px rgba(0,0,0,0.35)",
};

const cardTitle = {
  color: "#00cfff",
  fontSize: "26px",
  marginBottom: "18px",
  textShadow: "0px 0px 12px rgba(0,207,255,0.3)",
};

const cardText = {
  color: "#f1f1f1",
  fontSize: "18px",
  lineHeight: "32px",
  textShadow: "0px 2px 8px rgba(0,0,0,0.8)",
};