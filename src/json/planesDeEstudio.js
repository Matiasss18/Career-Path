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
      }
    ]

  }
};

export default planes;