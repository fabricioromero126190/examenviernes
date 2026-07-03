import "./App.css";

function App() {
  return (
    <div className="pagina">
      <header className="header">
        <nav className="menu">
          <a href="#">Inicio</a>
          <a href="#">Sobre nosotros</a>
          <a href="#" className="activo">Servicios</a>
          <a href="#">Contactos</a>
        </nav>
      </header>

      <main>
        <section className="titulo-principal">
          <h1>NUESTROS SERVICIOS</h1>
        </section>

        <section className="requisitos">
          <div className="marca-agua"></div>

          <h2>ODECO</h2>
          <h3>REQUISITOS</h3>

          <div className="bloque">
            <h4>NUEVAS CONEXIONES</h4>
            <h5>DE AGUA POTABLE Y ALCANTARILLADO</h5>

            <ul>
              <li>
                Testimonio de propiedad registrado en Derechos Reales &#40;Folio
                Real&#41;
              </li>
              <li>Cédula de Identidad</li>
              <li>Plano de lote</li>
              <li>Trámite de Alcantarillado</li>
            </ul>
          </div>

          <div className="bloque">
            <h4>CAMBIO DE NOMBRE</h4>

            <ul>
              <li>
                Solicitud de cambio de nombre vía gerencia, adjunte todos los
                documentos requeridos.
              </li>
              <li>
                Testimonio de propiedad registrados en derechos reales &#40;folio
                real&#41;
              </li>
              <li>Cédula de identidad</li>
              <li>Plano de lote</li>
              <li>Última factura de agua</li>
            </ul>
          </div>

          <div className="bloque nota">
            <h4>NOTA</h4>

            <ul>
              <li>
                Presente fotocopias, en caso de que sea necesario, solicite
                originales.
              </li>
              <li>
                La documentación solicitada debe ser entregada en las oficinas
                de ODECO.
              </li>
              <li>Todo trámite realizado debe ser de manera personal.</li>
            </ul>
          </div>
        </section>

        <section className="servicios">
          <div className="servicio texto">
            <p>
              Fortalecer la imagen institucional a través de una reingeniería de
              los procesos internos.
            </p>
          </div>

          <div className="servicio">
            <img src="img/imagen5.jpg" alt="Obras de agua potable" />
            <p>
              Mejorar la calidad de los servicios de agua potable y
              alcantarillado sanitario.
            </p>
          </div>

          <div className="servicio">
            <img src="img/imagen1.jpg" alt="Medición de servicios" />
            <p>
              Aumentar la cobertura de los servicios básicos a las zonas más
              deprimidas del municipio.
            </p>
          </div>

          <div className="servicio">
            <img src="img/imagen2.jpg" alt="Seguridad ciudadana" />
            <p>Siempre velando por la seguridad de los ciudadanos.</p>
          </div>

          <div className="servicio texto">
            <p>
              Promover la universalización de los servicios de agua potable y
              saneamiento en las áreas urbana y rural, en forma concurrente y
              participativa.
            </p>
          </div>

          <div className="servicio">
            <img src="img/imagen3.jpg" alt="Trabajo de alcantarillado" />
            <p>Cumpliendo con la sociedad.</p>
          </div>
        </section>

        <section className="banner-cartoon">
          <img src="/img/aapos-cartoon.svg" alt="" />
        </section>
      </main>

      <footer className="footer">
        <div>
          <h2>AAPOS POTOSI</h2>
          <p>
            Horarios de atención: Lunes a viernes de 8:00 a 12:00 y de 14:00 a
            18:00
          </p>
          <p>Correo electrónico: aapos@aapos.com.bo</p>

          <div className="facebook">
            <span>f</span>
            <small>AAPOSOFICIAL</small>
          </div>
        </div>

        <div className="copy">
          <p>© 2022</p>
          <a href="#">aapospotosi.sitio.serviciostigobusiness.com</a>
        </div>
      </footer>
    </div>
  );
}

export default App;