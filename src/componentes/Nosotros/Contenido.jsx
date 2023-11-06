import nosotrosSlidebar from "../../assets/img/nosotros/nosotros_sidebar.jpg";

const Contenido = () => {
  return (
    <main className="contenedor contenido-principal">
      <h2>
        <span>Conoce más</span> sobre nosotros
      </h2>

      <div className="contenido-nosotros">
        <div className="imagen">
          <picture>
            <img
              loading="lazy"
              decoding="async"
              src={nosotrosSlidebar}
              style={{width: 450, height: 350}}
            />
          </picture>
        </div>

        <div className="texto">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos
            ducimus, quos quo, laudantium temporibus ratione odit officia labore
            incidunt vitae repellat beatae corrupti nam. Quis dolor possimus
            illum unde! Excepturi?
          </p>

          <blockquote>Excelente Sabor!</blockquote>

          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos
            ducimus, quos quo, laudantium temporibus ratione odit officia labore
            incidunt vitae repellat beatae corrupti nam. Quis dolor possimus
            illum unde! Excepturi?
          </p>
        </div>
      </div>
    </main>
  );
};

export default Contenido;
