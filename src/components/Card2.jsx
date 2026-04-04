import "./card2.css";

const Card2 = ({ titulo, materias, estado }) => {

    return (
        <div className={`card2 ${estado}`}>
            <h3>{titulo}</h3>

            <div className="materias-list">
                {materias.length === 0 ? (
                    <p className="empty">Sin materias</p>
                ) : (
                    materias.map((materia) => (
                        <div key={materia.código} className="materia">
                            <p>{materia.nombre}</p>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default Card2;