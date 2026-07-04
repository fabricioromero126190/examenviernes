import {
  FaPhoneAlt,
  FaMapMarkerAlt
} from "react-icons/fa";

function Contact() {
  return (
    <>
      <div className="titulo">
        <h1>CONTACTANOS</h1>
      </div>

      <section className="contacto">

        <div className="icono">
          <FaPhoneAlt />
        </div>

        <div className="numeros">

          <h2>NÚMEROS DE CONTACTO</h2>

          <h3>EMERGENCIAS</h3>

          <p>69607734</p>
          <p>69612868</p>

          <h3>OFICINAS ODECO</h3>

          <p>62-27430</p>
          <p>62-27431</p>
          <p>69610566 - 69610585</p>
          <p>69610581 - 69610592</p>

        </div>

        <div className="icono">
          <FaMapMarkerAlt />
        </div>

        <div className="direccion">

          <h2>DIRECCIÓN CENTRAL</h2>

          <p>Calle Bustillos N°1251</p>

          <h2>DIRECCIÓN TÉCNICA</h2>

          <p>Av. Antofagasta s/N</p>

          <h3>CORREO ELECTRÓNICO</h3>

          <a href="/">aapospotosi.com</a>

        </div>

      </section>
    </>
  );
}

export default Contact;