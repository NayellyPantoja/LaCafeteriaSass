import "../../styles/app.css";

import galeria1 from "../../assets/img/galeria/galeria_01.jpg"
import galeria2 from "../../assets/img/galeria/galeria_02.jpg"
import galeria3 from "../../assets/img/galeria/galeria_03.jpg"
import galeria4 from "../../assets/img/galeria/galeria_04.jpg"
import galeria5 from "../../assets/img/galeria/galeria_05.jpg"
import galeria6 from "../../assets/img/galeria/galeria_06.jpg"
import galeria7 from "../../assets/img/galeria/galeria_07.jpg"
import galeria8 from "../../assets/img/galeria/galeria_08.jpg"
import galeria9 from "../../assets/img/galeria/galeria_09.jpg"
import galeria10 from "../../assets/img/galeria/galeria_10.jpg"



const GaleriaImagenes = () => {
    const imagenes = [ 
        {
            id: 1, 
            img: galeria1
        },
        {
            id: 2, 
            img: galeria2
        },
        {
            id: 3, 
            img: galeria3
        },
        {
            id: 4, 
            img: galeria4
        },
        {
            id: 5, 
            img: galeria5
        },
        {
            id: 6, 
            img: galeria6
        },
        {
            id: 7, 
            img: galeria7
        },
        {
            id: 8, 
            img: galeria8
        },
        {
            id: 9, 
            img: galeria9
        },
        {
            id: 10, 
            img: galeria10
        }
    ]
  return (
    <section className="experiencia">
            <h2><span>Vive la</span> experiencia </h2>

            <div className="galeria">
                {imagenes.map(({id, img}) => (
                    <div key={id} className="imagen">
                        <img  src={img} alt="galeria" />
                    </div>
                    
                ))}
                    

            </div>
        </section>
  )
}

export default GaleriaImagenes