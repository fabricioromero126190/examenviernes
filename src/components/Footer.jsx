import './Footer.css'

function Footer() {
  return (
    <footer>
      <div className="footer-topbar"></div>
      <div className="footer-content">
        <h3>AAPOS POTOSI</h3>
        <p>Horarios de atención: Lunes a viernes de 8:00 a 12:00 y de 14:00 a 18:00</p>
        <p>Correo electrónico: <a href="mailto:aapos@aapos.com.bo">aapos@aapos.com.bo</a></p>
        <p className="fb"><span className="fb-icon">f</span> AAPOSOFICIAL</p>
        <p className="copy">© 2026 aapospotosi.sitio.serviciostigobusiness.com</p>
      </div>
    </footer>
  )
}

export default Footer;
