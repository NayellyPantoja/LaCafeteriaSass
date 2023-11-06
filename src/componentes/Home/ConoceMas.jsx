import cafe from '../../assets/img/home/icono_cafe.svg'
import postre from '../../assets/img/home/icono_postre.svg'
import te from '../../assets/img/home/icono_te.svg'
import "../../styles/app.css";

const ConoceMas = () => {
    const imagenes = [
        {
            id: 1,
            img: cafe,
            descripcion: "Café"
        },
        {
            id: 2,
            img: postre,
            descripcion: "Postres"
        },
        {
            id: 3,
            img: te,
            descripcion: "Té"
        }
    ]
  return (
    <>
      <section className="conoce">
        <h2>
          <span>Conoce más</span> sobre nosotros{" "}
        </h2>

        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab, tenetur,
          perferendis ipsa tempora soluta sunt hic consectetur blanditiis at
          unde, assumenda labore doloribus neque obcaecati vero odit aut
          adipisci ex! Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Blanditiis ipsa, rem optio consectetur nemo sunt ut placeat. In
          aperiam distinctio atque eveniet culpa! Similique, magnam? Cumque
          voluptatibus atque inventore dolor.
        </p>
      </section>

      <section className="iconos">
        <ul className="listado-iconos">
          {imagenes.map(({id, img, descripcion}) => (
            <li key={id}>
                <img src={img} alt="icono café"/>
                <p>{descripcion}</p>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};

export default ConoceMas;
