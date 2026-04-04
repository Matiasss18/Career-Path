import './infoCarrera.css';

const InfoCarrera = ({ onStatsClick, carrera }) => {
  if (!carrera) {
    return <div>Cargando información de la carrera...</div>;
  }
  return (
    <div className="info-carrera-container">
        <div className="info-carrera">
          <h1>{carrera.nombre}</h1>
          <p>Área: {carrera.area}</p>
          <p>Universidad: {carrera.universidad}</p>
          <p>Duración: {carrera.duracion} años</p>
        </div>
        <button onClick={onStatsClick}>Ver Progreso</button>
      </div>
  );
};
export default InfoCarrera;