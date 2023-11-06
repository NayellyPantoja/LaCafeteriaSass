
const Footer = () => {
  return (
    <footer className="footer">
        <div className="contenedor contenido-footer bg-white">
            <div className="footer-box ubicacion">
                <h3>Ubicación</h3>
                <p>Nicolas Copérnico 5990</p>
                <p>Guadalajara, Jalisco</p>
            </div>
            <div className="footer-box reservacion">
                <h3>Reservación</h3>
                <p>Tel. 3850-9102</p>
                <a href="tel:+38509102">Llamar</a>
            </div>
            <div className="footer-box horario">
                <h3>Horario</h3>
                <p>Lun-Jue: 11:00 - 22:00</p>
                <p>Vie-Sab: 09:00 - 24:00</p>
                <p>Domingo: Cerrado</p>
            </div>
        </div>
        <p className="copyright">Todos los derechos reservados. La Cafetería</p>
        
    </footer>
  )
}

export default Footer