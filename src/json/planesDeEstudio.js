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

  },
  ingCivil: {
    "nombre": "Ingeniería Civil",
    "area": "Civil",
    "universidad": "Universidad Tecnológica Nacional",
    "duracion": 6,
    "materias": [
      { 
        "nombre": "Física I",
        "nivel": 1,
        "código": "F1"
      },
      { 
        "nombre": "Álgebra y Geometría Analítica",
        "nivel": 1,
        "código": "AGA"
      },
      { 
        "nombre": "Análisis Matemático I",
        "nivel": 1,
        "código": "AM1"
      },
      { "nombre": "Ingeniería y Sociedad",
        "nivel": 1,
        "código": "IngSoc"
      },
      { 
        "nombre": "Química General",
        "nivel": 1,
        "código": "QG"
      },
      { 
        "nombre": "Ingeniería Civil I",
        "nivel": 1,
        "código": "IC1"
      },
      { 
        "nombre": "Sistemas de Representación",
        "nivel": 1,
        "código": "SSRR"
      },
      { 
        "nombre": "Fundamentos de Informática",
        "nivel": 1,
        "código": "FI"
      },
      {
        "nombre": "Análisis Matemático II",
        "nivel": 2,
        "código": "AM2",
        "regularizadas": ["AM1", "AGA"]
      },
      {
        "nombre": "Inglés I",
        "nivel": 2,
        "código": "IT1",
        "regularizadas": ["IngSoc"]
      },
      {
        "nombre": "Probabilidad y Estadística",
        "nivel": 2,
        "código": "PyE",
        "regularizadas": ["AM1", "AGA"]
      },
      {
        "nombre": "Física II",
        "nivel": 2,
        "código": "F2",
        "regularizadas": ["AM1", "F1"]
      },
      {
        "nombre": "Inglés II",
        "nivel": 2,
        "código": "IT2",
        "regularizadas": ["IT1"],
        "Aprobadas": ["IngSoc", "IC1"]
      },
      {
        "nombre": "Ingeniería Civil II",
        "nivel": 2,
        "código": "IC2",
        "regularizadas": ["IngSoc", "IC1", "SSRR", "FI"]
      },
      {
        "nombre": "Tecnología de los Materiales",
        "nivel": 2,
        "código": "TM",
        "regularizadas": ["SSRR", "QG", "F1", "AM1"]
      },
      {
        "nombre": "Estabilidad",
        "nivel": 2,
        "código": "Est",
        "regularizadas": ["AGA", "SSRR", "FI", "F1", "AM1"]
      },

      {
        "nombre": "Instalaciones Eléctricas Acústicas",
        "nivel": 3,
        "código": "IEA",
        "regularizadas": ["IC2", "TM", "F2"],
        "aprobadas": ["AGA", "SSRR", "IC1", "QG", "AM1", "F1"]
      },
      {
        "nombre": "Tecnología de la Construcción",
        "nivel": 3,
        "código": "TC",
        "regularizadas": ["Est", "IC2", "TM", "IT1"],
        "aprobadas": ["IC1", "SSRR", "AM1", "AGA", "F1", "QG", "FI"]
      },
      {
        "nombre": "Tecnología del Hormigón",
        "nivel": 3,
        "código": "TH",
        "regularizadas": ["TM", "PyE", "IT1"],
        "aprobadas": ["AM1", "AGA", "QG", "F1"]
      },
      {
        "nombre": "Hidráulica General y Aplicada",
        "nivel": 3,
        "código": "HGA",
        "regularizadas": ["AM2", "Est", "IC2", "PyE", "F2"],
        "aprobadas": ["AM1", "F1", "SSRR", "FI", "AGA"]
      },
      {
        "nombre": "Geotopografía",
        "nivel": 3,
        "código": "Ggrafía",
        "regularizadas": ["AM2", "IC2", "PyE", "F2"],
        "aprobadas": ["IC1", "QG", "SSRR", "AM1", "AGA", "F1"]
      },
      {
        "nombre": "Instalaciones Termomecánicas",
        "nivel": 3,
        "código": "ITme",
        "regularizadas": ["IC2", "TM", "F2"],
        "aprobadas": ["AGA", "SSRR", "IC1", "QG", "AM1", "F1"]
      },
      {
        "nombre": "Resistencia de Materiales",
        "nivel": 3,
        "código": "RM",
        "regularizadas": ["Est"],
        "aprobadas": ["AM1", "AGA", "F1", "FI"]
      },
      {
        "nombre": "Ingeniería Legal",
        "nivel": 3,
        "código": "IL",
        "regularizadas": ["AM2", "IC2", "PyE", "IT1"],
        "aprobadas": ["AGA", "IngSoc", "IC1", "FI", "AM1"]
      },
      {
        "nombre": "Economía",
        "nivel": 3,
        "código": "ECO",
        "regularizadas": ["IC2", "PyE", "IT1"],
        "aprobadas": ["AM1", "AGA", "IngSoc", "IC1", "FI"]
      },

      {
        "nombre": "Diseño Arquitectónico, Planeamiento y Urbanismo",
        "nivel": 4,
        "código": "DAPU",
        "regularizadas": ["TC", "Ggrafía", "IEA", "ITme", "ECO", "IT2"],
        "aprobadas": ["Est", "IC2", "IT1", "TM"]
      },
      {
        "nombre": "Geotecnia",
        "nivel": 4,
        "código": "Gtecnia",
        "regularizadas": ["RM", "TH", "TC", "Ggrafía", "HGA"],
        "aprobadas": ["AM2", "Est", "IC2", "TM", "F2", "PyE"]
      },
      {
        "nombre": "Cálculo Avanzado",
        "nivel": 4,
        "código": "CA",
        "regularizadas": ["AM2", "Est", "TM", "PyE"],
        "aprobadas": ["AM1", "AGA", "SSRR", "F1", "FI"]
      },
      {
        "nombre": "Instalaciones Sanitarias y de Gas",
        "nivel": 4,
        "código": "ISG",
        "regularizadas": ["TC", "Ggrafía", "HGA", "ECO"],
        "aprobadas": ["SSRR", "QG", "F1", "FI", "TM"]
      },
      {
        "nombre": "Análisis Estructural I",
        "nivel": 4,
        "código": "AE1",
        "regularizadas": ["RM", "TH"],
        "aprobadas": ["AM2", "Est", "IC2", "PyE"]
      },
      {
        "nombre": "Estructuras de Hormigón",
        "nivel": 4,
        "código": "EH",
        "regularizadas": ["RM", "TH", "TC", "Ggrafía", "IT2"],
        "aprobadas": ["AM2", "Est", "IC2", "TM", "F2", "PyE"]
      },
      {
        "nombre": "Hidrología y Obras Hidráulicas",
        "nivel": 4,
        "código": "HOH",
        "regularizadas": ["RM", "TC", "Ggrafía", "HGA", "ECO", "IT2"],
        "aprobadas": ["AM2", "Est", "IC2", "TM", "F2", "PyE"]
      },
      {
        "nombre": "Vías de Comunicación I",
        "nivel": 4,
        "código": "VC1",
        "regularizadas": ["TH", "TC", "Ggrafía"],
        "aprobadas": ["AM2", "Est", "IC2", "TM", "PyE", "IT1"]
      },

      {
        "nombre": "Organización y Conducción de Obras",
        "nivel": 5,
        "código": "OCO",
        "regularizadas": ["Gtecnia", "ISG", "DAPU", "EH", "HOH"],
        "aprobadas": ["TH", "TC", "Ggrafía", "HGA", "IEA", "ITme", "ECO", "IT2"]
      },
      {
        "nombre": "Construcciones Metálicas y de Madera",
        "nivel": 5,
        "código": "CMM",
        "regularizadas": ["CA", "AE1"],
        "aprobadas": ["RM", "TH", "TC", "Ggrafía"]
      },
      {
        "nombre": "Ingeniería Sanitaria",
        "nivel": 5,
        "código": "IS",
        "regularizadas": ["Gtecnia", "ISG", "HOH"],
        "aprobadas": ["TH", "TC", "Ggrafía", "HGA", "IT2"]
      },
      {
        "nombre": "Cimentaciones",
        "nivel": 5,
        "código": "Cim",
        "regularizadas": ["CA", "Gtecnia", "AE1", "EH", "HOH"],
        "aprobadas": ["RM", "TH", "TC", "Ggrafía", "HGA"]
      },
      {
        "nombre": "Análisis Estructural II",
        "nivel": 5,
        "código": "AE2",
        "regularizadas": ["CA", "Gtecnia", "AE1", "EH", "HOH"],
        "aprobadas": ["RM", "TH", "TC", "Ggrafía", "IT2"]
      },
      {
        "nombre": "Gestión Ambiental y Desarrollo Sustentable",
        "nivel": 5,
        "código": "GADS",
        "regularizadas": ["Gtecnia", "DAPU", "HOH", "IL"],
        "aprobadas": ["HGA", "ECO", "IT2"]
      },
      {
        "nombre": "Vías de Comunicación II",
        "nivel": 5,
        "código": "VC2",
        "regularizadas": ["Gtecnia", "EH", "HOH", "IL", "VC1"],
        "aprobadas": ["RM", "TH", "TC", "Ggrafía", "HGA", "ECO"]
      },

      {
        "nombre": "Proyecto Final",
        "nivel": 6,
        "código": "PF",
        "regularizadas": ["Gtecnia", "ISG", "DAPU", "AE1", "EH", "HOH", "IL"],
        "aprobadas": ["IT1", "RM", "TH", "TC", "Ggrafía", "HGA", "IEA", "ITme", "ECO", "IT2"]
      },
      {
        "nombre": "Práctica Profesional Supervisada",
        "nivel": 6,
        "código": "PPS",
        "regularizadas": ["Gtecnia", "ISG", "DAPU", "AE1", "EH", "HOH", "IL"],
        "aprobadas": ["IT1", "RM", "TH", "TC", "Ggrafía", "HGA", "IEA", "ITme", "ECO", "IT2"]
      }
    ]
  },
  ingElectrica: {
    "nombre": "Ingeniería en Energía Eléctrica",
    "area": "Eléctrica",
    "universidad": "Universidad Tecnológica Nacional",
    "duracion": 5,
    "materias": [
      { "nombre": "Integración Eléctrica I", "nivel": 1, "código": "Int1" },
      { "nombre": "Física I", "nivel": 1, "código": "F1" },
      { "nombre": "Álgebra y Geometría Analítica", "nivel": 1, "código": "AGA" },
      { "nombre": "Análisis Matemático I", "nivel": 1, "código": "AM1" },
      { "nombre": "Ingeniería y Sociedad", "nivel": 1, "código": "IngSoc" },
      { "nombre": "Sistemas de Representación", "nivel": 1, "código": "SSRR" },
      { "nombre": "Química General", "nivel": 1, "código": "QG" },
      { "nombre": "Fundamentos de Informática", "nivel": 1, "código": "FI" },
      {
        "nombre": "Análisis Matemático II",
        "nivel": 2,
        "código": "AM2",
        "regularizadas": ["AM1", "AGA"]
      },
      {
        "nombre": "Probabilidad y Estadística",
        "nivel": 2,
        "código": "PyE",
        "regularizadas": ["AM1", "AGA"]
      },
      {
        "nombre": "Integración Eléctrica II",
        "nivel": 2,
        "código": "Int2",
        "aprobadas": ["AM1", "F1", "Int1"]
      },
      {
        "nombre": "Estabilidad",
        "nivel": 2,
        "código": "Est",
        "regularizadas": ["AM1", "AGA", "F1"]
      },
      {
        "nombre": "Mecánica Técnica",
        "nivel": 2,
        "código": "MT",
        "regularizadas": ["AM1", "F1"]
      },
      {
        "nombre": "Física II",
        "nivel": 2,
        "código": "F2",
        "regularizadas": ["AM1", "F1"]
      },
      {
        "nombre": "Cálculo Numérico",
        "nivel": 2,
        "código": "CN",
        "regularizadas": ["AM1", "AGA", "F1", "FI"]
      },
      {
        "nombre": "Electrotecnia I",
        "nivel": 2,
        "código": "Etecnia1",
        "regularizadas": ["AGA", "F1", "AM1"]
      },
      {
        "nombre": "Inglés I",
        "nivel": 2,
        "código": "IT1"
      },

      {
        "nombre": "Máquinas Eléctricas I",
        "nivel": 3,
        "código": "ME1",
        "regularizadas": ["F2", "Etecnia1", "AM2", "CN"],
        "aprobadas": ["AM1", "F1"]
      },
      {
        "nombre": "Física III",
        "nivel": 3,
        "código": "F3",
        "regularizadas": ["F2", "AM2"],
        "aprobadas": ["AGA", "F1", "AM1"]
      },
      {
        "nombre": "Termodinámica",
        "nivel": 3,
        "código": "Termo",
        "regularizadas": ["AM2", "F2"],
        "aprobadas": ["AM1", "F1", "AGA"]
      },
      {
        "nombre": "Tecnología y Ensayos de Materiales Eléctricos",
        "nivel": 3,
        "código": "TEME",
        "regularizadas": ["QG", "F2"],
        "aprobadas": ["AM1", "F1"]
      },
      {
        "nombre": "Instrumentos y Mediciones Eléctricas",
        "nivel": 3,
        "código": "IME",
        "regularizadas": ["PyE", "Etecnia1"],
        "aprobadas": ["AM1", "AGA", "F1"]
      },
      {
        "nombre": "Teoría de los Campos",
        "nivel": 3,
        "código": "TC",
        "regularizadas": ["F2", "AM2"],
        "aprobadas": ["AM1", "AGA", "F1"]
      },
      {
        "nombre": "Taller Interdisciplinario",
        "nivel": 3,
        "código": "TI",
        "regularizadas": ["F2", "Etecnia1", "AM2", "CN"],
        "aprobadas": ["AM1", "F1"]
      },
      {
        "nombre": "Electrotecnia II",
        "nivel": 3,
        "código": "Etecnia2",
        "regularizadas": ["F2", "Etecnia1", "AM2"],
        "aprobadas": ["AM1", "AGA", "F1"]
      },
      {
        "nombre": "Fundamentos para Análisis de Señales",
        "nivel": 3,
        "código": "FAS",
        "regularizadas": ["AM2", "CN"],
        "aprobadas": ["AGA", "AM1"]
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
        "aprobadas": ["IngSoc"]
      },

      {
        "nombre": "Instalaciones Eléctricas y Luminotecnia",
        "nivel": 4,
        "código": "IEL",
        "regularizadas": ["TEME", "ME1", "Etecnia2"],
        "aprobadas": ["QG", "F2", "Etecnia1", "Int2", "AM2", "IT1"]
      },
      {
        "nombre": "Electrónica I",
        "nivel": 4,
        "código": "E1",
        "regularizadas": ["Etecnia1"],
        "aprobadas": ["AM1", "F1"]
      },
      {
        "nombre": "Control Automático",
        "nivel": 4,
        "código": "CA",
        "regularizadas": ["Etecnia2", "FAS"],
        "aprobadas": ["AM2", "Etecnia1"]
      },
      {
        "nombre": "Seguridad, Riesgo Eléctrico y Medio Ambiente",
        "nivel": 4,
        "código": "SREMA",
        "regularizadas": ["QG", "Etecnia1", "TEME", "TC"],
        "aprobadas": ["AM1", "AGA", "F1", "F2", "AM2"]
      },
      {
        "nombre": "Máquinas Eléctricas II",
        "nivel": 4,
        "código": "ME2",
        "regularizadas": ["TEME", "IME", "TC", "ME1", "Etecnia2"],
        "aprobadas": ["QG", "F2", "PyE", "Etecnia1", "IT2", "AM2"]
      },
      {
        "nombre": "Máquinas Térmicas, Hidráulicas y de Fluidos",
        "nivel": 4,
        "código": "MTHF",
        "regularizadas": ["Est", "MT", "Termo"],
        "aprobadas": ["F2", "AM2"]
      },
      {
        "nombre": "Legislación",
        "nivel": 4,
        "código": "Leg",
        "regularizadas": ["IngSoc"]
      },

      {
        "nombre": "Sistemas de Potencia",
        "nivel": 5,
        "código": "SP",
        "regularizadas": ["ME2", "CA"],
        "aprobadas": ["TEME", "ME1", "Etecnia2", "TI"]
      },
      {
        "nombre": "Accionamiento y Controles Eléctricos",
        "nivel": 5,
        "código": "ACE",
        "regularizadas": ["E1", "CA", "ME2"],
        "aprobadas": ["Etecnia1", "TEME", "Etecnia2", "FAS", "TI"]
      },
      {
        "nombre": "Generación, Transmisión y Distribución de la Energía Eléctrica",
        "nivel": 5,
        "código": "GTDEE",
        "regularizadas": ["F3", "ME2", "MTHF"],
        "aprobadas": ["Est", "MT", "ME1", "TEME", "Etecnia2", "Termo"]
      },
      {
        "nombre": "Electrónica II",
        "nivel": 5,
        "código": "E2",
        "regularizadas": ["Etecnia2", "E1"],
        "aprobadas": ["Etecnia1", "TI"]
      },
      {
        "nombre": "Organización y Administración de las Empresas",
        "nivel": 5,
        "código": "OAE",
        "regularizadas": ["Leg", "ECO"],
        "aprobadas": ["TI"]
      },
      {
        "nombre": "Proyecto Final",
        "nivel": 5,
        "código": "PF",
        "regularizadas": ["ECO", "ME2", "IEL", "CA"],
        "aprobadas": ["TEME", "IME", "ME1", "Etecnia2", "FAS", "TI", "IT2"]
      },
      {
        "nombre": "Práctica Profesional Supervisada",
        "nivel": 5,
        "código": "PPS",
        "regularizadas": ["ECO", "ME2", "IEL", "CA"],
        "aprobadas": ["TEME", "IME", "ME1", "Etecnia2", "FAS", "TI", "IT2"]
      }
    ]
  }
};

export default planes;