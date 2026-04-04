import { Chart as ChartJS, Tooltip, Legend, ArcElement } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import "./stats.css";
import Card2 from "./Card2";

ChartJS.register(Tooltip, Legend, ArcElement);

const Stats = ({ ref, stats, plan, estadosGlobales }) => {

    const estados = ["aprobada", "firmada", "cursando", "faltante"];

    const nombresEstados = {
        aprobada: "Aprobadas",
        firmada: "Firmadas",
        cursando: "Cursando",
        faltante: "Faltantes"
    };

    const totalMaterias = plan.materias.length;
    const porcentaje = Math.round((stats.aprobada / totalMaterias) * 100);

    const agruparMaterias = (estadoBuscado) => {
        return plan.materias.filter(materia => {
            const estado = estadosGlobales[materia.código];

            if (estadoBuscado === "faltante") {
                return !estado; // no tiene estado asignado
            }

            return estado === estadoBuscado;
        });
    };

    const data = {
        labels: ["Aprobadas", "Firmadas", "Cursando", "Faltantes"],
        datasets: [
            {
                data: [
                    stats.aprobada,
                    stats.firmada,
                    stats.cursando,
                    stats.faltantes
                ],
                backgroundColor: [
                    '#4caf50', // Aprobadas - Verde
                    '#ff9800', // Firmadas - Amarillo
                    '#2196f3', // Cursando - Azul
                    '#721c24'  // Faltantes - Rojo
                ],
                hoverOffset: 4
            }
        ]
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: "bottom"
            }
        }
    };

    return (
        <div ref={ref} className="stats-container">
            <h2>Progreso de la Carrera</h2>
            <div className="barra-progreso-container">
                <p>Estás en el {porcentaje}% de la carrera</p>
                
                <div className="barra-progreso">
                    <div className="barra-progreso-fill" style={{ width: `${porcentaje}%` }}></div>
                </div>
            </div>
            <div className='contenido-estadistico'>
                <div className="materias-container">
                    {estados.map((estado) => (
                        <Card2 
                            key={estado}
                            titulo={nombresEstados[estado]}
                            materias={agruparMaterias(estado)}
                            estado={estado}
                        />
                    ))}
                </div>
                <div className="grafico-container">
                    <Pie data={data} options={options} />
                </div>
            </div>
        </div>
    )
}

export default Stats;