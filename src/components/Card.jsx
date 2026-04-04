import "./card.css";

const Card = ( { año, materias, estadosGlobales, onEstadoChange } ) => {

    const verificarDisponibilidad = (materia) => {
        const regOk = (materia.regularizadas || []).every( cod => estadosGlobales[cod] === 'firmada' || estadosGlobales[cod] === 'aprobada' );
        const aprOk = (materia.aprobadas || []).every( cod => estadosGlobales[cod] === 'aprobada' );
        return regOk && aprOk;
    }

    return (
        <div className="card">
            <h3>Año: {año}°</h3>
            <div className="materias-list">
                {materias.map((materia) => {
                    const disponible = verificarDisponibilidad(materia);
                    const estadoActual = estadosGlobales[materia.código] || "";

                    return (
                        <div key={materia.código} className={`materia ${!disponible ? 'bloqueada' : ''}`}>
                            <p>{materia.nombre} {!disponible && <span>(No disponible)</span>}</p>
                            
                            <select
                                className={`select ${estadoActual}`}
                                disabled={!disponible} // <--- Evita que elijan si no pueden
                                onChange={(e) => onEstadoChange(materia.código, e.target.value)} 
                                value={estadoActual}
                            >
                                <option value="">Disponible</option>
                                <option value="aprobada">Aprobada</option>
                                <option value="firmada">Firmada</option>
                                <option value="cursando">Cursando</option>
                            </select>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Card;