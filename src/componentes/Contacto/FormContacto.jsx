import { useState } from "react";
import Swal from "sweetalert2";

const FormContacto = () => {
  const [reserva, setReserva] = useState({
    nombre: "",
    email: "",
    personas: "",
    hora: "",
    fecha: "",
  });

  const validarNombre = () => {
    if (reserva.nombre.trim() === "") {
      Swal.fire("Por favor ingrese su nombre", "", "warning");
      return false;
    }
    if (!/^[a-zA-Z]+$/.test(reserva.nombre)) {
      Swal.fire("El nombre solo debe contener letras", "", "warning");
      return false;
    }
    return true;
  };

  const validarEmail = () => {
    if (reserva.email === "") {
      Swal.fire("Por favor ingrese su correo electrónico", "", "warning");
      return false;
    }
    if (!/\.com$/i.test(reserva.email)) {
      Swal.fire("Debe ingresar un email válido", "", "warning");
      return false;
    }
    return true;
  };

  const validarPersonas = () => {
    if (reserva.personas === "") {
      Swal.fire(
        "Por favor ingrese el número de personas de su reserva",
        "",
        "warning"
      );
      return false;
    }
    return true;
  };

  const validarHora = () => {
    const horaElegida = reserva.hora.split(":");
    const horas = parseInt(horaElegida[0], 10);

    if (reserva.hora === "") {
      Swal.fire(
        "Por favor ingrese la hora a la que desea realizar la reserva",
        "",
        "warning"
      );
      return false;
    }
    if (horas < 9 || horas > 17) {
      Swal.fire(
        "Atendemos de 9:00 a.m. a 6:00 p.m.",
        "Por favor selecciona otra hora para tu reserva",
        "warning"
      );
      return false;
    }
    return true;
  };

  const validarFechas = () => {
    if (reserva.fecha === "") {
      Swal.fire("Ingrese una fecha", "", "warning");
      return false;
    }
    return true;
  };

  const validaciones = (e) => {
    e.preventDefault();
    if (
      validarNombre() &&
      validarEmail() &&
      validarPersonas() &&
      validarHora() &&
      validarFechas()
    ) {
      Swal.fire(
        "¡Reserva agendada con éxito!",
        "Esperamos verte pronto en nuestra cafetería.",
        "success"
      );

      setReserva({
        nombre: "",
        email: "",
        personas: "",
        hora: "",
        fecha: "",
      });
    }
  };

  console.log(reserva);

  return (
    <main className="contenedor contenido-principal">
      <h2>
        <span>Reserva tu</span>Mesa
      </h2>

      <div className="contenido-contacto">
        <form className="formulario">
          <div className="campo">
            <label htmlFor="nombre">Nombre:</label>
            <input
              type="text"
              id="nombre"
              placeholder="Tu Nombre"
              value={reserva.nombre}
              onChange={(e) =>
                setReserva({ ...reserva, nombre: e.target.value })
              }
            />
          </div>
          <div className="campo">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              placeholder="Tu Email"
              value={reserva.email}
              onChange={(e) =>
                setReserva({ ...reserva, email: e.target.value })
              }
            />
          </div>
          <div className="campo">
            <label htmlFor="personas">Número de Personas:</label>
            <select
              value={reserva.personas}
              onChange={(e) =>
                setReserva({ ...reserva, personas: e.target.value })
              }
            >
              <option value="" disabled selected>
                -- Seleccione --
              </option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="mas">+4</option>
            </select>
          </div>

          <div className="campo">
            <label htmlFor="hora">Hora:</label>
            <input
              type="time"
              id="hora"
              min="09:00"
              max="18:00"
              value={reserva.hora}
              onChange={(e) => setReserva({ ...reserva, hora: e.target.value })}
            />
          </div>

          <div className="campo">
            <label htmlFor="fecha">Fecha:</label>
            <input
              type="date"
              id="fecha"
              value={reserva.fecha}
              onChange={(e) =>
                setReserva({ ...reserva, fecha: e.target.value })
              }
            />
          </div>
          <div className="campo">
            <input onClick={validaciones} type="submit" value="Enviar" />
          </div>
        </form>
      </div>
    </main>
  );
};

export default FormContacto;
