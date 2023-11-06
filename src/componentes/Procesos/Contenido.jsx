import imgProceso1 from "../../assets/img/proceso/proceso_1.jpg"
import imgProceso2 from "../../assets/img/proceso/proceso_2.jpg"
import imgProceso3 from "../../assets/img/proceso/proceso_3.jpg"
import imgProceso4 from "../../assets/img/proceso/proceso_4.jpg"
import imgProceso5 from "../../assets/img/proceso/proceso_5.jpg"

const Contenido = () => {
    const procesos = [
        {
            id: 1,
            nombre: "Granos de Café",
            descripcion: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos perferendis aspernatur possimus esse aliquid, similique labore numquam quasi repellat dolor quibusdam ipsum eius tempore fugiat fuga accusantium, voluptas neque commodi.",
            img: imgProceso1
        },
        {
            id: 2,
            nombre: "Tostar el café",
            descripcion: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos perferendis aspernatur possimus esse aliquid, similique labore numquam quasi repellat dolor quibusdam ipsum eius tempore fugiat fuga accusantium, voluptas neque commodi.",
            img: imgProceso2
        },
        {
            id: 3,
            nombre: "Empacar el Café",
            descripcion: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos perferendis aspernatur possimus esse aliquid, similique labore numquam quasi repellat dolor quibusdam ipsum eius tempore fugiat fuga accusantium, voluptas neque commodi.",
            img: imgProceso3
        },
        {
            id: 4,
            nombre: "Moler granos de café",
            descripcion: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos perferendis aspernatur possimus esse aliquid, similique labore numquam quasi repellat dolor quibusdam ipsum eius tempore fugiat fuga accusantium, voluptas neque commodi.",
            img: imgProceso4
        },
        {
            id: 5,
            nombre: "Disfrutar una taza",
            descripcion: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos perferendis aspernatur possimus esse aliquid, similique labore numquam quasi repellat dolor quibusdam ipsum eius tempore fugiat fuga accusantium, voluptas neque commodi.",
            img: imgProceso5
        },
    ]

  return (
    <main className="contenedor contenido-principal">
            {procesos.map(({id, nombre, descripcion, img}) => (
                <div className="proceso-cafe" key={id}>
                    <div className="imagen">
                        <img src={img} alt="imagen proceso"/>
                    </div>
                    <div className="texto">
                    <h3>{nombre}</h3>
                    <p>{descripcion}</p>
            </div>
                </div>
            ))}
    </main>
  )
}

export default Contenido