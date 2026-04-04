import Card from "./Card";
import "./cards.css";

const Cards = ( { plan, estadosGlobales, onEstadoChange } ) => {

    const años = Array.from({ length: plan.duracion }, (_, i) => i + 1);

    return (
        <div className="cards-container">
            {años.map((año) => (
                <Card key={año} año={año}
                    materias = {plan.materias.filter((materia) => materia.nivel === año)}
                    estadosGlobales={estadosGlobales} 
                    onEstadoChange={onEstadoChange}
                />
            ))}
        </div>
    )
}

export default Cards;