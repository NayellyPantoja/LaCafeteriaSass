import imgHome from "../assets/img/header/header_inicio.jpg";
import imgNosotros from "../assets/img/header/header_nosotros.jpg";
import imgContacto from "../assets/img/header/header_contacto.jpg";
import imgGaleria from "../assets/img/header/header_galeria.jpg";
import imgMenu from "../assets/img/header/header_menu.jpg";
import imgProceso from "../assets/img/header/header_proceso.jpg"
import "../styles/app.css";
import logo from "../assets/img/logo.svg";
import { Link, useLocation } from "react-router-dom";
import { routes } from "../router/routes";

const imageMap = {
  "/": imgHome,
  "/nosotros": imgNosotros,
  "/contacto": imgContacto,
  "/galeria": imgGaleria,
  "/menu": imgMenu,
  "/procesos": imgProceso
};

const Header = () => {
  const location = useLocation();
  const backgroundImage = imageMap[location.pathname] || imageMap["/"];

  const headerText = {
    "/": "Disfruta una deliciosa taza de café",
    "/nosotros": "Una nueva experiencia cada día",
    "/procesos": "Los verdaderos expertos del café",
    "/menu": "Disfruta nuestro delicioso menú",
    "/galeria": "Disfruta una deliciosa taza de café",
    "/contacto": "Mejores granos, mejor café"
  };

  return (
    <header className="header header-inicio" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="contenido-header contenedor">
        <div className="barra">
          <Link to="/" className="logo">
            <img src={logo} alt="logo cafeteria" />
          </Link>

          <nav className="nav-principal">
            {routes.map(({ id, path, element }) => (
              <Link
                key={id}
                to={path}
                className={location.pathname === path ? "activo" : ""}>
                {element}
              </Link>
            ))}
          </nav>
        </div>

        <div className="texto-header">
          <h1>{headerText[location.pathname]}</h1>
        </div>
      </div>
    </header>
  );
};

export default Header;
