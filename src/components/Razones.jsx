import './Razones.css'

function Razones() {
  return (
    <section className="razones">
      <div className="razones-topbar"></div>

      <h2 className="razones-titulo">¡RAZONES PRINCIPALES PARA ELEGIRNOS!</h2>

      <div className="razones-grid">
        <div className="razones-item razones-item--imagen">
          <img
            src="/img/razon1.jpg"
            alt="Acción comunal de limpieza en la laguna"
          />
        </div>

        <div className="razones-item razones-item--texto">
          <h3>TRABAJO PROFESIONAL</h3>
          <p>
            Su objetivo es apoyar el fortalecimiento e incremento de la
            cobertura de los servicios de agua potable, alcantarillado y
            saneamiento que prestan los organismos operadores, de los
            municipios, a través de las entidades.
          </p>
        </div>

        <div className="razones-item razones-item--texto">
          <h3>CALIDAD</h3>
          <p>
            Con la transparencia eh inspecciones necesarias para el buen uso
            del agua potable.
          </p>
        </div>

        <div className="razones-item razones-item--imagen">
          <img
            src="/img/razon2.jpg"
            alt="Trabajo profesional de instalación de tuberías"
          />
        </div>
      </div>
    </section>
  )
}

export default Razones