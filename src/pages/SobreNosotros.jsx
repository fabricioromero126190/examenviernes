import equipo from '../assets/equipo-agua.jpg'
import mascotaBebe from '../assets/mascota-bebe.png'
import mascotaGrupo from '../assets/mascota-grupo.png'
import valores from '../assets/valores.jpg'

function SobreNosotros() {
  return (
    <section id="sobre-nosotros">
      <div className="page-header">SOBRE NOSOTROS</div>

      <div className="resena">
        <div className="resena-text">
          <h2>"AAPOS"</h2>
          <h3>Administración Autónoma para Obras Sanitarias</h3>
          <h4>RESEÑA HISTÓRICA</h4>
          <h4>Empresa Prestadora de Servicios de Agua Potable y Alcantarillado</h4>

          <p>
            La Administración Autónoma Para Obras Sanitarias (AAPOS) fue creada mediante DS
            10221 el 21 de abril de 1972, sobre la base de DAP (Departamento de Aguas Potables)
            con carácter de empresa descentralizada de la Honorable Gobierno Municipal en obtener
            su naturaleza jurídica de la entidad relacionada, por sede con autonomía de Gestión
            Administrativa y Financiera, con duración indefinida con Patrimonio independiente de
            cuanto a disposiciones legales enmarcadas en el DS 10221 y Dr. (Decreto Ley 17835 de
            fecha diciembre de 1980) y sus normas complementarias que rigen en el estatuto
            orgánico, con resolución Ministerial N° 115 de 30 de mayo de 1972.
          </p>
          <p>
            Entidad sujeta a fiscalización por parte de la CGE, en virtud del art. 18 del DS 10221,
            "La Contraloría General de la República", a través de las oficinas departamental,
            fiscalizará permanentemente el desenvolvimiento económico, administrativo y financiero
            de AAPOS - Potosí.
          </p>
          <p>
            Por otra parte en fecha 21 de febrero de 1997, mediante DS N° 24320 el Poder Ejecutivo
            reglamentó la Ley del Sistema de Regulación Sectorial (SIRESE), AAPOS Autoridad de
            Fiscalización de Agua Potable y Alcantarillado Sanitario, dentro del ámbito de
            competencias, los procedimientos de audiencia pública de infracciones y sanciones, así
            como los recursos administrativos.
          </p>
          <p>
            En fecha 22 de julio de 1997 mediante DS 24710 se aprobó el Reglamento de Organización
            Institucional y de las Concesiones del sector de Agua y el Reglamento de Uso de Bienes
            de dominio público en aguas. Además se determina entre otras que la Superintendencia de
            Aguas, actualmente AAPS es el Organismo con jurisdicción nacional que cumple la función
            de Regulación, que CONSISTE EN CUMPLIR Y HACER CUMPLIR LA Ley de Aguas asegurando la
            correcta aplicación de los Principios, Objetivos y Políticas que forman parte de las
            normas.
          </p>
          <p>
            En fecha 21 de abril de 1985, AAPOS mediante solicitud la Regulación de Concesión, a la
            superintendencia de aguas, instancia por el cual emitió Resolución N° 40/98 en fecha 2
            de octubre de 1998 autorizando a la EPSA-AAPOS (Empresa Prestadora de Servicios de Agua
            Potable y Alcantarillado, de la Administración Autónoma Para Obras Sanitarias), la cual
            se concedió el 15 de noviembre de 2010 con la suscripción y formalización del contrato
            de concesión por 30 años.
          </p>
        </div>

        <img src={equipo} alt="Equipo de trabajo AAPOS" className="resena-img" />
      </div>

      <div className="vision-mision">
        <div className="vm-item">
          <h3>NUESTRA VISIÓN</h3>
          <p>
            Ser una empresa metropolitana y líder a nivel nacional en la prestación del servicio de
            agua potable y saneamiento, que contribuya a mejorar la calidad de vida de los
            habitantes de nuestra ciudad de Potosí.
          </p>
        </div>
        <img src={mascotaBebe} alt="Mascota AAPOS" className="vm-img" />
      </div>

      <div className="vision-mision reverse">
        <img src={mascotaGrupo} alt="Mascotas AAPOS grupo" className="vm-img" />
        <div className="vm-item">
          <h3>NUESTRA MISIÓN</h3>
          <p>
            Proporcionar servicios de agua potable y saneamiento en beneficio de los habitantes de
            la ciudad de Potosí, a través de una gestión eficiente, transparente y sostenible, con
            enfoque social.
          </p>
        </div>
      </div>

      <div className="valores">
        <div className="valores-text">
          <h3>VALORES</h3>
          <p>
            ADMINISTRACIÓN AUTÓNOMA PARA OBRAS SANITARIAS se guía y se identifica con sus clientes
            internos y externos por los siguientes valores empresariales: probidad y vocación de
            servicio, lealtad y obediencia, trabajo en equipo, puntualidad, respeto y disciplina,
            veracidad y transparencia, idoneidad.
          </p>
        </div>
        <img src={valores} alt="Valores AAPOS" className="valores-img" />
      </div>
    </section>
  )
}

export default SobreNosotros