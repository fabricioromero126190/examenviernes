import trabajo1 from '../assets/servicio1.jpg'
import trabajo2 from '../assets/servicio2.jpg'
import trabajo3 from '../assets/servicio3.jpg'
import trabajo4 from '../assets/servicio4.jpg'

function Servicios() {
  return (
    <section id="servicios">
      <div className="page-header naranja">NUESTROS SERVICIOS</div>

      <div className="odeco">
        <h2>ODECO</h2>
        <h3>REQUISITOS</h3>

        <h4>NUEVAS CONEXIONES DE AGUA POTABLE Y ALCANTARILLADO</h4>
        <ul>
          <li>Testimonio de propiedad registrado en Derechos Reales (Fotocopia)</li>
          <li>Cédula de identidad</li>
          <li>Plano de lote</li>
          <li>Trámite de Alcantarillado</li>
        </ul>

        <h4>CAMBIO DE NOMBRE</h4>
        <ul>
          <li>Solicitud de cambio de nombre vía gerencia, adjuntando los documentos requeridos</li>
          <li>Testimonio de propiedad registrado en Derechos Reales (Fotocopia)</li>
          <li>Cédula de identidad</li>
          <li>Última factura de agua</li>
        </ul>

        <h4>NOTA</h4>
        <ul>
          <li>Presentar fotocopias, en caso de que el trámite requiera solicitar originales.</li>
          <li>La documentación solicitada debe ser entregada en las oficinas de ODECO.</li>
          <li>Todo trámite realizado debe ser de manera personal.</li>
        </ul>
      </div>

      <div className="servicios-grid">
        <div className="servicio-item">
          <p>Fortalecer la imagen institucional a través de una vanguardia de los procesos internos.</p>
        </div>
        <div className="servicio-item">
          <img src={trabajo1} alt="Mejorar calidad" />
          <p>Mejorar la calidad de los servicios de agua potable y alcantarillado sanitario.</p>
        </div>
        <div className="servicio-item">
          <img src={trabajo2} alt="Aumentar cobertura" />
          <p>Aumentar la cobertura de los servicios básicos a las zonas más deprimidas del municipio.</p>
        </div>
        <div className="servicio-item">
          <p>Promover la universalización de los servicios de agua potable y saneamiento en las áreas urbana y rural, en forma concurrente y participativa.</p>
        </div>
        <div className="servicio-item">
          <img src={trabajo3} alt="Seguridad" />
          <p>Siempre velando por la seguridad de los ciudadanos.</p>
        </div>
        <div className="servicio-item">
          <img src={trabajo4} alt="Cumpliendo con la sociedad" />
          <p>Cumpliendo con la sociedad.</p>
        </div>
      </div>
    </section>
  )
}

export default Servicios