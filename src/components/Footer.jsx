import { FaFacebookF } from "react-icons/fa";

function Footer() {
  return (
    <footer>

      <div>

        <h2>AAPOS POTOSI</h2>

        <p>
          Horarios de atención:
          Lunes a viernes de 8:00 a 12:00
          y de 14:00 a 18:00
        </p>

        <p>
          Correo electrónico:
          aapos@aapos.com.bo
        </p>

        <div className="facebook">
          <FaFacebookF />
          <span>AAPOSOFICIAL</span>
        </div>

      </div>

      <div className="copy">
        ©2022  aapospotosi.sitio.serviciostigobusiness.com
      </div>

    </footer>
  );
}

export default Footer;