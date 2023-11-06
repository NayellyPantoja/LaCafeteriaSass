import Footer from "../componentes/Footer"
import Header from "../componentes/Header"
import GaleriaImagenes from "../componentes/Home/GaleriaImagenes"


const Galeria = () => {
  return (
    <>
    <Header/>
    <main className="contenedor contenido-principal text-center">
      <GaleriaImagenes/>  
    </main>
    
    <Footer/>
    </>
  )
}

export default Galeria