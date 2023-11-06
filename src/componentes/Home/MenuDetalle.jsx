import "../../styles/app.css";


const MenuDetalle = () => {

    const menuCafe = [
        {
            id: 1,
            name: 'Café Latte',
            description: 'Café Espresso con leche caliente evaporada.' ,
            precio: '$25'
        },
        {
            id: 2,
            name: 'Café Mocha',
            description: 'Espresso con crema batida.' ,
            precio: '$30'
        },
        {
            id: 3,
            name: 'Café Americano' ,
            description: 'Café Negro.' ,
            precio: '$30'
        },
        {
            id: 4,
            name: 'Café Americano' ,
            description: 'Espresso con una capa suave de espuma.' ,
            precio: '$25'
        },
        {
            id: 5,
            name: 'Capuccino',
            description: 'Espresso con una capa suave de espuma.',
            precio:'$29'
        },
        {
            id: 6,
            name: 'Mocha Frio Quemado',
            description: 'Espresso, hielo, con azucar quemada y mantequilla.',
            precio:'$35'
        },
        {
            id: 7,
            name: 'Latte con Caramelo',
            description: 'Espresso, leche y caramelo.',
            precio:'$39'
        }
    ]

    const menuComida = [
        {
            id: 1,
            name: 'Baguette de Pollo',
            description: 'Delicioso Baguette con pollo a la plancha.' ,
            precio: '$45'
        },
        {
            id: 2,
            name: 'Baguette Pollo y Queso',
            description: 'Baguette combinado con Pollo y Queso Manchego.' ,
            precio: '$50'
        },
        {
            id: 3,
            name: 'Baguette con Tocino' ,
            description: 'Baguette con especias y verduras, además de tocino.' ,
            precio: '$50'
        },
        {
            id: 4,
            name: 'Baguette de Jamón' ,
            description: 'Delicioso Baguette con Jamón y Especias.' ,
            precio: '$65'
        },
        {
            id: 5,
            name: 'Baguette con Jamón, Queso y Tocino',
            description: 'Espresso con una capa suave de espuma.',
            precio:'$69'
        },
        {
            id: 6,
            name: 'Sandwich de Pollo',
            description: 'Delicioso sandwich con Pollo y especies.',
            precio:'$65'
        },
        {
            id: 7,
            name: 'Sandwich de Jamón y queso',
            description: 'Queso Amarillo con Jamón y Queso.',
            precio:'$59'
        }
    ]
  return (
    <section className="nuestro-menu">
        <h2 className="heading-blanco"><span>Nuestro delicioso</span>Menú</h2>

        <div className="contenedor grid-menu">
            <section className="menu cafe">
                <h3>Café</h3>
                <ul>

                    {menuCafe.map(({id, name, description, precio}) => (
                        <li key={id}>
                            <p>{name} <span>{description}</span></p>
                            <p className="precio">{precio}</p>
                        </li>
                    ))}
                </ul>

            </section>

            <section className="menu comida">
                <h3>Comida</h3>

                <ul>
                    {menuComida.map(({id, name, description, precio}) => (
                        <li key={id}>
                            <p>{name}<span>{description}</span></p>
                            <p className="precio">{precio}</p>
                        </li>
                    ))}
                </ul>
            </section>
        </div>
    </section>
  )
}

export default MenuDetalle