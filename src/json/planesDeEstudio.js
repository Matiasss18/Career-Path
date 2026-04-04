const planes = {
  ingSistemas: {
    "nombre": "Ingeniería en Sistemas",
    "area": "Informática",
    "universidad": "Universidad de Tecnológica Nacional",
    "duracion": 5,
    "materias": [
      {
        "nombre": "Análisis Matemático I",
        "nivel": 1,
        "código": "AM1"
      },
      {
        "nombre": "Sistemas y Procesos de Negocios",
        "nivel": 1,
        "código": "SyPN"
      },
      {
        "nombre": "Lógica y Estructuras Discretas",
        "nivel": 1,
        "código": "LyED"
      },
      {
        "nombre": "Arquitectura de Computadoras",
        "nivel": 1,
        "código": "AdC"
      },
      {
        "nombre": "Álgebra y Geometría Analítica",
        "nivel": 1,
        "código": "AGA"
      },
      {
        "nombre": "Algoritmos y Estructuras de Datos",
        "nivel": 1,
        "código": "AyED"
      },
      {
        "nombre": "Física I",
        "nivel": 1,
        "código": "F1"
      },
      {
        "nombre": "Ingeniería y Sociedad",
        "nivel": 1,
        "código": "IngSoc"
      },
      {
        "nombre": "Análisis Matemático II",
        "nivel": 2,
        "código": "AM2",
        "regularizadas": ["AM1", "AGA"]
      },
      {
        "nombre": "Análisis de Sistemas de Información",
        "nivel": 2,
        "código": "ASI",
        "regularizadas": ["SyPN", "AyED"]
      },
      {
        "nombre": "Sintaxis y Semántica de Lenguajes",
        "nivel": 2,
        "código": "SySL",
        "regularizadas": ["LyED", "AyED"]
      },
      {
        "nombre": "Paradigmas de Programación",
        "nivel": 2,
        "código": "PdP",
        "regularizadas": ["LyED", "AyED"]
      },
      {
        "nombre": "Física II",
        "nivel": 2,
        "código": "F2",
        "regularizadas": ["F1", "AM1"]
      },
      {
        "nombre": "Inglés I",
        "nivel": 2,
        "código": "IT1"
      },
      {
        "nombre": "Sistemas Operativos",
        "nivel": 2,
        "código": "SSOO",
        "regularizadas": ["AdC"]
      },
      {
        "nombre": "Probabilidad y Estadística",
        "nivel": 2,
        "código": "PyE",
        "regularizadas": ["AM1", "AGA"]
      },
      {
        "nombre": "Diseño de Sistemas de Información",
        "nivel": 3,
        "código": "DSI",
        "regularizadas": ["ASI", "PdP"],
        "aprobadas": ["IT1", "AyED", "SyPN"]
      },
      {
        "nombre": "Inglés II",
        "nivel": 3,
        "código": "IT2",
        "regularizadas": ["IT1"]
      },
      {
        "nombre": "Economía",
        "nivel": 3,
        "código": "ECO",
        "aprobadas": ["AM1", "AGA"]
      },
      {
        "nombre": "Desarrollo de Software",
        "nivel": 3,
        "código": "DdS",
        "regularizadas": ["ASI", "PdP"],
        "aprobadas": ["LyED", "AyED"]
      },
      {
        "nombre": "Base de Datos",
        "nivel": 3,
        "código": "BD",
        "regularizadas": ["ASI", "SySL"],
        "aprobadas": ["LyED", "AyED"]
      },
      {
        "nombre": "Seminario Integrador",
        "nivel": 3,
        "código": "SI",
        "regularizadas": ["ASI"],
        "aprobadas": ["SyPN", "AyED", "SySL", "PdP"]
      },
      {
        "nombre": "Comunicación de Datos",
        "nivel": 3,
        "código": "CD",
        "aprobadas": ["AdC", "F1"],
      },
      {
        "nombre": "Redes de Datos",
        "nivel": 3,
        "código": "RD",
        "regularizadas": ["CD", "SSOO"],
      },
      {
        "nombre": "Administración de Sistemas de Información",
        "nivel": 4,
        "código": "AdmSI",
        "regularizadas": ["DSI", "ECO"],
        "aprobadas": ["ASI"]
      },
      {
        "nombre": "Análisis Numérico",
        "nivel": 4,
        "código": "AN",
        "regularizadas": ["AM2"],
        "aprobadas": ["AM1", "AGA"]
      },
      {
        "nombre": "Ingeniería y Calidad de Software",
        "nivel": 4,
        "código": "IyCS",
        "regularizadas": ["DdS", "DSI", "BD"],
        "aprobadas": ["SySL", "PdP"]
      },
      {
        "nombre": "Simulación",
        "nivel": 4,
        "código": "Sim",
        "regularizadas": ["PyE"],
        "aprobadas": ["AM2"]
      },
      {
        "nombre": "Legislación",
        "nivel": 4,
        "código": "Leg",
        "regularizadas": ["IngSoc"],
      },
      {
        "nombre": "Investigación Operativa",
        "nivel": 4,
        "código": "IO",
        "regularizadas": ["AN", "PyE"],
      },
      {
        "nombre": "Tecnologías para la Automatización",
        "nivel": 4,
        "código": "TpA",
        "regularizadas": ["F2", "AN"],
        "aprobadas": ["AM2"]
      },
      {
        "nombre": "Ciencia de Datos",
        "nivel": 4,
        "código": "CdD",
        "regularizadas": ["Sim"],
        "aprobadas": ["PyE", "BD"]
      },
      {
        "nombre": "Proyecto Final",
        "nivel": 5,
        "código": "PF",
        "regularizadas": ["IyCS", "RD", "AdmSI"],
        "aprobadas": ["IT2", "DdS", "DSI"]
      },
      {
        "nombre": "Inteligencia Artificial",
        "nivel": 5,
        "código": "IA",
        "regularizadas": ["Sim"],
        "aprobadas": ["AN", "PyE"]
      },
      {
        "nombre": "Gestión Gerencial",
        "nivel": 5,
        "código": "GC",
        "regularizadas": ["AdmSI", "Leg"],
        "aprobadas": ["ECO"]
      },
      {
        "nombre": "Sistemas de Gestión",
        "nivel": 5,
        "código": "SG",
        "regularizadas": ["ECO", "IO"],
        "aprobadas": ["DSI"]
      },
      {
        "nombre": "Seguridad en los Sistemas de Información",
        "nivel": 5,
        "código": "SSI",
        "regularizadas": ["AdmSI", "RD"],
        "aprobadas": ["CD", "DdS"]
      },
      {
        "nombre": "Práctica Profesional Supervisada",
        "nivel": 5,
        "código": "PPS",
        "regularizadas": ["IyCS", "RD", "AdmSI"],
        "aprobadas": ["IT2", "DdS", "DSI"]
      }
    ]
  },
  ingNaval:{
    "nombre": "Ingeniería Naval",
    "area": "Naval",
    "universidad": "Universidad de Tecnológica Nacional",
    "duracion": 6,
    "materias": [
      {
        "nombre": "Introducción a la Ingeniería Naval",
        "nivel": 1,
        "código": "IIN"
      },
      {
        "nombre": "Análisis Matemático I",
        "nivel": 1,
        "código": "AM1"
      },
      {
        "nombre": "Física I",
        "nivel": 1,
        "código": "F1"
      },
      {
        "nombre": "Inglés I",
        "nivel": 1,
        "código": "IT1"
      },
      {
        "nombre": "Sistemas de Representación",
        "nivel": 1,
        "código": "SSRR"
      },
      {
        "nombre": "Química General",
        "nivel": 1,
        "código": "QG"
      },
      {
        "nombre": "Fundamentos de Informática",
        "nivel": 1,
        "código": "FI"
      },
      {
        "nombre": "Dibujo Naval",
        "nivel": 2,
        "código": "DN",
        "regularizadas": ["IIN", "SSRR"]
      },
      {
        "nombre": "Física II",
        "nivel": 2,
        "código": "F2",
        "regularizadas": ["AM1", "AGA", "F1"]
      },
      {
        "nombre": "Análisis Matemático II",
        "nivel": 2,
        "código": "AM2",
        "regularizadas": ["AM1", "AGA"]
      },
      {
        "nombre": "Ingeniería y Sociedad",
        "nivel": 2,
        "código": "IngSoc"
      },
      {
        "nombre": "Probabilidad y Estadística",
        "nivel": 2,
        "código": "PyE",
        "regularizadas": ["AM1", "AGA"]
      },
      {
        "nombre": "Física III",
        "nivel": 2,
        "código": "F3",
        "regularizadas": ["AM1", "F1"]
      },
      {
        "nombre": "Análisis Estructural I",
        "nivel": 2,
        "código": "AE1",
        "regularizadas": ["AM1", "F1", "AGA"]
      },
      {
        "nombre": "Legislación",
        "nivel": 2,
        "código": "Leg"
      },
      {
        "nombre": "Teoría del Buque I",
        "nivel": 3,
        "código": "TB1",
        "regularizadas": ["AM2", "PyE", "DN"],
        "aprobadas": ["AM1", "IIN"]
      },
      {
        "nombre": "Termodinámica",
        "nivel": 3,
        "código": "Term",
        "regularizadas": ["AM2", "F2"]
      },
      {
        "nombre": "Mecánica Racional",
        "nivel": 3,
        "código": "MR",
        "regularizadas": ["AM2"],
        "aprobadas": ["F1"]
      },
      {
        "nombre": "Electrotecnia y Máquinas Eléctricas",
        "nivel": 3,
        "código": "EME",
        "regularizadas": ["AM2"],
        "aprobadas": ["AGA", "AM1"]
      },
      {
        "nombre": "Matemática Aplicada a la Ingeniería",
        "nivel": 3,
        "código": "MAI",
        "regularizadas": ["AM2"],
        "aprobadas": ["AM1", "AGA"]
      },
      {
        "nombre": "Mecánica de Fluidos",
        "nivel": 3,
        "código": "MdF",
        "regularizadas": ["F1", "AM2"],
        "aprobadas": ["AM1"]
      },
      {
        "nombre": "Análisis Estructural II",
        "nivel": 3,
        "código": "AE2",
        "regularizadas": ["AM2", "AE1"],
        "aprobadas": ["AGA", "F1"]
      },
      {
        "nombre": "Teoría del Buque II",
        "nivel": 4,
        "código": "TB2",
        "regularizadas": ["IT1", "TB1", "MAI", "MdF"],
        "aprobadas": ["AM2", "DN"]
      },
      {
        "nombre": "Alistamiento de Buques",
        "nivel": 4,
        "código": "AB",
        "regularizadas": ["AE2", "Term", "MdF"],
        "aprobadas": ["DN"]
      },
      {
        "nombre": "Máquinas Alternativas y Turbomáquinas",
        "nivel": 4,
        "código": "MAT",
        "regularizadas": ["Term", "MR"]
      },
      {
        "nombre": "Construcción Naval",
        "nivel": 4,
        "código": "CN",
        "regularizadas": ["AE2", "TB1"],
        "aprobadas": ["DN"]
      },
      {
        "nombre": "Análisis Estructural III",
        "nivel": 4,
        "código": "AE3",
        "regularizadas": ["AE2", "MAI"],
        "aprobadas": ["AE1"]
      },
      {
        "nombre": "Materiales Navales",
        "nivel": 4,
        "código": "MN",
        "regularizadas": ["AE2"],
        "aprobadas": ["QG"]
      },
      {
        "nombre": "Inglés II",
        "nivel": 4,
        "código": "IT2",
        "regularizadas": ["IT1"],
      },
      {
        "nombre": "Actividad Naviera",
        "nivel": 4,
        "código": "AN",
        "regularizadas": ["Leg"],
      },
      {
        "nombre": "Proyecto de Buques",
        "nivel": 5,
        "código": "PB",
        "regularizadas": ["TB2", "AB", "CN", "IT2"],
        "aprobadas": ["IT1", "TB1"]
      },
      {
        "nombre": "Plantas Eléctricas Navales",
        "nivel": 5,
        "código": "PEN",
        "aprobadas": ["EME"]
      },
      {
        "nombre": "Plantas Propulsoras Navales",
        "nivel": 5,
        "código": "PPN",
        "regularizadas": ["AB", "MAT"],
        "aprobadas": ["Term"]
      },
      {
        "nombre": "Cálculo de Estructuras de Buques",
        "nivel": 5,
        "código": "CEB",
        "regularizadas": ["AE3", "MN", "CN"],
        "aprobadas": ["MAI", "AE2"]
      },
      {
        "nombre": "Organización Industrial",
        "nivel": 5,
        "código": "OI",
        "regularizadas": ["CN"],
      },
      {
        "nombre": "Mecánica Aplicada a las Máquinas",
        "nivel": 5,
        "código": "MAM",
        "regularizadas": ["AB", "AE3", "MN"],
        "aprobadas": ["MR"]
      },
      {
        "nombre": "Soldadura",
        "nivel": 5,
        "código": "Sold",
        "regularizadas": ["MN"],
        "aprobadas": ["MAI"]
      },
      {
        "nombre": "Análisis por Elementos Finitos",
        "nivel": 5,
        "código": "AEF",
        "regularizadas": ["AE3"],
        "aprobadas": ["MAI"]
      },
      {
        "nombre": "Proyecto Final",
        "nivel": 6,
        "código": "PF",
        "regularizadas": ["PB", "PEN", "PPN", "CEB", "OI", "MAM", "Sold", "AEF"],
        "aprobadas": ["TB2", "AB", "MAT", "CN", "AE3", "MN", "IT2", "AN"]
      },
      {
        "nombre": "Seguridad, Higiene e Ingeniería Ambiental",
        "nivel": 6,
        "código": "SHIA",
        "regularizadas": ["OI"],
      },
      {
        "nombre": "Embarcaciones Veloces",
        "nivel": 6,
        "código": "EV",
        "regularizadas": ["PB"],
      },
      {
        "nombre": "Procedimientos de Astilleros",
        "nivel": 6,
        "código": "PA",
        "regularizadas": ["PB", "CN", "OI"],
      },
      {
        "nombre": "Práctica Profesional Supervisada",
        "nivel": 6,
        "código": "PPS",
        "regularizadas": ["PB", "PEN", "PPN", "CEB", "OI", "MAM", "Sold", "AEF"],
        "aprobadas": ["TB2", "AB", "MAT", "CN", "AE3", "MN", "IT2", "AN"]
      },
    ]

  }
};

export default planes;