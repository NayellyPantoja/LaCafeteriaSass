import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Nosotros from "../pages/Nosotros";
import Procesos from "../pages/Procesos";
import Galeria from "../pages/Galeria";
import Contacto from "../pages/Contacto";
import Menu from "../pages/Menu";

const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/procesos" element={<Procesos />} />
        <Route path="/menu" element={<Menu/>} />
        <Route path="/galeria" element={<Galeria />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
    </>
  );
};

export default AppRouter;
