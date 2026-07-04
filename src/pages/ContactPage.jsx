import Navbar from "../components/Navbar";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

function ContactPage() {
  return (
    <div className="App">

      <Navbar />

      <main className="contenido">
        <Contact />
      </main>

      <Footer />

    </div>
  );
}

export default ContactPage;