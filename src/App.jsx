import { useState, useRef, useEffect } from 'react'
import './App.css'
import Header from './components/Header'
import InfoCarrera from './components/InfoCarrera'
import Cards from './components/Cards'
import Stats from './components/Stats'
import SelectorCarrera from './components/SelectorCarrera'
import planes from './json/planesDeEstudio'

function App() {

  const [planKey, setPlanKey] = useState(() => {
    return localStorage.getItem("planSeleccionado") || "ingSistemas";
  });

  const planActual = planes[planKey];

  const [estadosGlobales, setEstadosGlobales] = useState(() => {
    const guardado = localStorage.getItem(
      `estadosMaterias_${localStorage.getItem("planSeleccionado") || "ingSistemas"}`
    );
    return guardado ? JSON.parse(guardado) : {};
  });

  useEffect(() => {
    localStorage.setItem("planSeleccionado", planKey);
  }, [planKey]);

  useEffect(() => {
    const guardado = localStorage.getItem(`estadosMaterias_${planKey}`);
    setEstadosGlobales(guardado ? JSON.parse(guardado) : {});
  }, [planKey]);

  useEffect(() => {
    localStorage.setItem(
      `estadosMaterias_${planKey}`,
      JSON.stringify(estadosGlobales)
    );
  }, [estadosGlobales, planKey]);

  const actualizarEstadoMateria = (codigo, nuevoEstado) => {
    setEstadosGlobales(prev => ({
      ...prev,
      [codigo]: nuevoEstado
    }));
  };

  const contarEstados = (estados, materias) => {
    const contador = {
      aprobada: 0,
      firmada: 0,
      cursando: 0,
      faltantes: 0
    };

    materias.forEach(materia => {
      const estado = estados[materia.código];
      if (estado === "aprobada") contador.aprobada++;
      else if (estado === "firmada") contador.firmada++;
      else if (estado === "cursando") contador.cursando++;
      else contador.faltantes++;
    });

    return contador;
  };

  const conteo = contarEstados(estadosGlobales, planActual.materias);

  const statsRef = useRef(null);

  const scrollToStats = () => {
    statsRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <Header />

      <SelectorCarrera 
        planKey={planKey} 
        setPlanKey={setPlanKey} 
        planes={planes}
      />

      <InfoCarrera 
        carrera={planActual} 
        onStatsClick={scrollToStats} 
      />

      <Cards 
        plan={planActual} 
        estadosGlobales={estadosGlobales} 
        onEstadoChange={actualizarEstadoMateria} 
      />

      <Stats 
        ref={statsRef} 
        stats={conteo} 
        plan={planActual} 
        estadosGlobales={estadosGlobales} 
      />
    </>
  )
}

export default App;