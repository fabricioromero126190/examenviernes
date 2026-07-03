import hero1 from '../assets/hero1.jpg'
import hero2 from '../assets/hero2.png'
import hero3 from '../assets/hero3.jpg'
import mascota from '../assets/mascota.png'
import gerente from '../assets/gerente.jpg'
import sindicato from '../assets/sindicato.jpg'
import trabajo1 from '../assets/trabajo1.jpg'
import trabajo2 from '../assets/trabajo2.jpg'

function Inicio() {
  return (
    <section id="inicio">
      <div className="hero-grid">
        <img src={hero1} alt="Edificio AAPOS" />
        <img src={hero2} alt="Logo AAPOS" />
        <img src={hero3} alt="Edificio principal AAPOS" />
      </div>

      <div className="info-bar">
        <p>
          La Administración Autónoma para Obras Sanitarias AAPOS-POTOSÍ es responsable
          de brindar los servicios de abastecimiento de agua potable y alcantarillado
          sanitario a la ciudad de Potosí
        </p>
        <img src={mascota} alt="Mascota AAPOS" />
      </div>

      <div className="equipo">
        <h2>NUESTRO EQUIPO</h2>

        <div className="equipo-item">
          <img src={gerente} alt="Gerente General" />
          <div>
            <h3>Gerente General Ing. Carlos Chumacero Pacheco</h3>
            <p>
              Es la máxima autoridad ejecutiva, la cual está encargada de cumplir las
              resoluciones y determinaciones, siendo responsable de la administración de la
              empresa, en lo que corresponde a sus funciones y atribuciones establecidas en
              el estatuto orgánico manual de funciones y demás normas conexas.
            </p>
          </div>
        </div>

        <div className="equipo-item reverse">
          <img src={sindicato} alt="Sede del sindicato" />
          <div>
            <h3>Sede del sindicato de Trabajadores de la empresa</h3>
            <p>
              Toda una organización a disposición de la sociedad, cumpliendo las
              funciones que sean asignadas a cada área de trabajo y mejorando día a día
              por el bien de la empresa
            </p>
          </div>
        </div>
      </div>

      <div className="razones">
        <h2>¡RAZONES PRINCIPALES PARA ELEGIRNOS!</h2>

        <div className="razones-grid">
          <div className="razon-item">
            <img src={trabajo1} alt="Calidad" />
            <h3>CALIDAD</h3>
            <p>
              Con la transparencia en inspecciones necesarias para el buen
              uso del agua potable.
            </p>
          </div>

          <div className="razon-item">
            <h3>TRABAJO PROFESIONAL</h3>
            <p>
              Su objetivo es apoyar el fortalecimiento e incremento de la cobertura
              de los servicios de agua potable, alcantarillado y saneamiento que
              prestan los organismos operativos, de los municipios, a través de las
              entidades.
            </p>
            <img src={trabajo2} alt="Trabajo profesional" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Inicio;