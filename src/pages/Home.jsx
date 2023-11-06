import ConoceMas from "../componentes/Home/ConoceMas";
import Footer from "../componentes/Footer";
import Header from "../componentes/Header";
import Testimonial from "../componentes/Home/Testimonial";
import "../styles/app.css";
import MenuDetalle from "../componentes/Home/MenuDetalle";
import GaleriaImagenes from "../componentes/Home/GaleriaImagenes";

const Home = () => {
  return (
    <>
      <Header />
      <main className="contenedor contenido-principal text-center">
        <ConoceMas />
        <GaleriaImagenes />
      </main>
      <MenuDetalle />
      <Testimonial />
      <Footer />
    </>
  );
};

export default Home;
