function Contactos() {
  return (
    <section id="contactos">
      <div className="page-header naranja">CONTÁCTANOS</div>

      <div className="contacto-bar">
        <div className="contacto-item">
          <span className="icono">📞</span>
          <div>
            <h4>NÚMEROS DE CONTACTO</h4>
            <p><strong>EMERGENCIAS</strong></p>
            <p>65807734</p>
            <p>65612888</p>
            <p><strong>OFICINAS CENTRAL</strong></p>
            <p>62-27430</p>
            <p>62-27431</p>
            <p>69810988 - 69810985</p>
            <p>69810981 - 69810982</p>
          </div>
        </div>

        <div className="contacto-item">
          <span className="icono">📍</span>
          <div>
            <h4>DIRECCIÓN CENTRAL</h4>
            <p>Calle Bustillos N° 128</p>
            <h4>DIRECCIÓN TÉCNICA</h4>
            <p>Av. Antofagasta s/N</p>
            <h4>CORREO ELECTRÓNICO</h4>
            <p>aapos@aapos.com.bo</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contactos;