import { useState } from 'react'
import './InicioInforma.css'

function InicioInforma() {
const slides = [
  '/img/img1.jpg',
  '/img/img2.jpg',
  '/img/img3.jpg',
  '/img/img4.jpg',
  '/img/img5.jpg',
  '/img/img6.jpg',
  '/img/img7.jpg',
  '/img/img8.jpg',
  '/img/img9.jpg',
  '/img/img10.jpg',   // ← corregido
]
  const [current, setCurrent] = useState(0)

  const moveSlide = (direction) => {
    setCurrent((prev) => (prev + direction + slides.length) % slides.length)
  }

  return (
    <>
      {/* ===================== BLOQUE 1: LIMPIEZA LAGUNAS ===================== */}
      <section className="block">
        <h1>💧 AAPOS INFORMA 💧</h1>
        <h2>🧹 ACCIÓN COMUNAL DE LIMPIEZA LAGUNAS DEL KARI KARI</h2>
        <p className="lead">
          👐 De la mano de todos los trabajadores de AAPOS POTOSÍ, se realizó la tarea de limpieza
          y mantenimiento de nuestras lagunas de la cuenca del Kari Kari.
        </p>

        <div className="row">
          <div className="carousel">
            <button className="arrow" onClick={() => moveSlide(-1)}>&#10094;</button>
            <div className="slide-frame">
              <img src={slides[current]} alt="Acción comunal de limpieza" />
              <div className="slide-badge">
                <div className="logo-mark">AAPOS</div>
                <div className="badge-text">
                  <strong>Administración Autónoma para Obras Sanitarias</strong>
                  <span>AAPOS POTOSÍ</span>
                  <span>Acción comunal de Limpieza. Lagunas del Kari Kari</span>
                </div>
              </div>
            </div>
            <button className="arrow" onClick={() => moveSlide(1)}>&#10095;</button>
          </div>

          <div className="videos-col">
            <VideoPlaceholder time="0:00 / 1:27" />
            <VideoPlaceholder time="0:00 / 0:59" small />
          </div>
        </div>
      </section>

      {/* ===================== BLOQUE 2: CONEXIONES CLANDESTINAS ===================== */}
      <section className="block">
        <h2>💧 AAPOS POTOSÍ 💧</h2>
        <p>
          Te recuerda. Las conexiones clandestinas son un delito que perjudica a todos, contaminan
          el agua potable y no permiten que más familias accedan al servicio.
        </p>
        <p>Si conoces algún vecino con conexión ilegal o Clandestino ¡denuncia! 💧</p>

        <div className="grid-3">
          <VideoPlaceholder time="0:00 / 0:46" />
          <div className="video-placeholder aaps-logo-video">
            <div className="aaps-drops">
              <span className="drop red"></span>
              <span className="drop yellow"></span>
              <span className="drop green"></span>
              <span className="drop flag">🇧🇴</span>
            </div>
            <div className="aaps-title">A A P S</div>
            <div className="aaps-subtitle">
              Autoridad de Fiscalización y Control Social
              <br />
              de Agua Potable y Saneamiento Básico
            </div>
          </div>
          <VideoPlaceholder time="0:00 / 0:59" />
        </div>
      </section>

      {/* ===================== BLOQUE 3: CISTERNAS ===================== */}
      <section className="block">
        <h2>💧 AAPOS INFORMA 💧</h2>
        <p className="subtitle">Distribución de agua mediante cisternas</p>
        <p className="subtitle">Estamos trabajando día a día para brindar un mejor servicio</p>

        <div className="grid-3">
          <VideoPlaceholder time="0:00 / 1:33" />
          <VideoPlaceholder time="0:00 / 2:36" />
          <VideoPlaceholder time="0:00 / 1:09" />
        </div>
      </section>

      {/* ===================== BLOQUE 4: TRASVASE LAGUNA JUCHUY CHALUMA ===================== */}
      <section className="block">
        <h2>💧 AAPOS INFORMA 💧</h2>
        <p>
          Se puso en funcionamiento el proyecto provisional de aducción de trasvase de la Laguna
          Juchuy Chaluma – Lacachaca.
        </p>
        <p>
          Más de 20 mil usuarios de agua potable de la zona alta de la ciudad de Potosí serán
          beneficiados, dicho proyecto es financiado por el Gobierno Autónomo Departamental de
          Potosí, con más de un millón y medio de bolivianos.
        </p>
        <p>
          ✅ Cuida y ahorra nuestro recurso, a continuación te damos unos consejos para el ahorro
          del agua potable 🔁
        </p>
        <p className="reminder">💧 <strong>RECUERDA</strong> cada gota cuenta, estamos en sequía. 💧</p>

        <VideoPlaceholder time="0:00 / 0:45" single />
      </section>

      {/* ===================== BLOQUE 5: TANQUES ESTACIONARIOS ===================== */}
      <section className="block">
        <h2>💧 AAPOS INFORMA 💧</h2>
        <p><strong>¡Seguimos trabajando!</strong></p>
        <p>
          Se realiza la entrega de tanques estacionarios de 5.000 Litros al municipio de Potosí,
          mismos que beneficiarán a las zonas más afectadas por la sequía.
        </p>
        <p>Estamos trabajando día a día para brindar un mejor servicio.</p>
      </section>
    </>
  )
}

function VideoPlaceholder({ time, small, single }) {
  const className = `video-placeholder ${small ? 'small' : ''} ${single ? 'single' : ''}`
  return (
    <div className={className}>
      <div className="water-caustics"></div>
      <span className="video-watermark">
        AAPOS
        <br />
        <small>Administración Autónoma<br />Para Obras Sanitarias</small>
      </span>
      <div className="video-controls">
        <button className="play-btn">&#9658;</button>
        <span className="time">{time}</span>
        <div className="progress"><div className="progress-bar"></div></div>
        <span className="ctrl-icon">&#128266;</span>
        <span className="ctrl-icon">&#9974;</span>
        <span className="ctrl-icon">&#8942;</span>
      </div>
    </div>
  )
}

export default InicioInforma