import './selectorCarrera.css';

const SelectorCarrera = ({ planKey, setPlanKey, planes }) => {
  return (
    <div className="selector-container">
      <label>Elegí tu carrera:</label>

      <select 
        value={planKey} 
        onChange={(e) => setPlanKey(e.target.value)}
      >
        {Object.keys(planes).map(key => (
          <option key={key} value={key}>
            {planes[key].nombre} - {planes[key].universidad}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectorCarrera;