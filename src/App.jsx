import NavBar from './components/NavBar.jsx'
import Inicio from './pages/Inicio.jsx'
import SobreNosotros from './pages/SobreNosotros.jsx'
import Servicios from './pages/Servicios.jsx'
import Contactos from './pages/Contactos.jsx'
import './App.css'

function App() {
  return (
    <>
      <NavBar />
      <Inicio />
      <SobreNosotros />
      <Servicios />
      <Contactos />
    </>
  )
}

export default App