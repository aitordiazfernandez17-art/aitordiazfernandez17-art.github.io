/* ============================================================================
   GEOATLAS 2.0 — MÓDULO EDUCATIVO, ATLAS, FICHAS Y NUEVOS JUEGOS
   ============================================================================ */

/* ----------------------------------------------------------------------------
   1. SECCIÓN APRENDE (4 CATEGORÍAS, 23 TEMAS Y CUESTIONARIOS)
   ---------------------------------------------------------------------------- */
const LEARN_CATEGORIES = [
  { id: "fisica", label: "Geografía Física" },
  { id: "politica", label: "Geografía Política" },
  { id: "humana", label: "Geografía Humana" },
  { id: "economica", label: "Geografía Económica" }
];

const LEARN_TOPICS = {
  fisica: [
    {
      id: "relieve",
      title: "Relieve",
      summary: "El relieve terrestre comprende las formas y desniveles de la corteza continental y oceánica, modelados por fuerzas internas (tectónica de placas) y externas (erosión, transporte y sedimentación).",
      example: "Las grandes llanuras fluviales como la de los ríos Ganges y Brahmaputra contrastan con mesetas elevadas como el Altiplano andino.",
      precisionNote: "Dato aproximado: La altura media de las tierras emergidas sobre el nivel del mar suele estimarse en torno a los 840 metros.",
      quiz: {
        q: "¿Qué procesos modelan principalmente el relieve de la Tierra?",
        options: [
          "Fuerzas internas tectónicas y procesos externos de erosión, transporte y sedimentación",
          "Únicamente las mareas lunares sobre los continentes",
          "La rotación diaria de la Tierra sin intervención geológica"
        ],
        answer: 0,
        explanation: "El relieve resulta de la interacción entre fuerzas tectónicas que elevan o fracturan la corteza y agentes erosivos (agua, hielo, viento) que la desgastan y depositan materiales."
      }
    },
    {
      id: "montanas",
      title: "Montañas y cordilleras",
      summary: "Las montañas son elevaciones prominentes del terreno y las cordilleras son alineaciones montañosas extensas, con frecuencia originadas por el choque de placas tectónicas.",
      example: "El Himalaya en Asia y la cordillera de los Andes en América del Sur son grandes alineaciones plegadas.",
      precisionNote: "Dato exacto de referencia: El monte Everest alcanza 8.848,86 metros sobre el nivel del mar según la medición conjunta acordada por China y Nepal en 2020.",
      quiz: {
        q: "¿Cuál de estas alineaciones montañosas se extiende a lo largo del oeste de América del Sur?",
        options: ["Los Alpes", "La cordillera de los Andes", "Los montes Urales"],
        answer: 1,
        explanation: "La cordillera de los Andes bordea el margen occidental de América del Sur desde Venezuela hasta el extremo sur de Chile y Argentina."
      }
    },
    {
      id: "rios-lagos",
      title: "Ríos y lagos",
      summary: "Los ríos son corrientes continuas de agua que fluyen desde zonas altas hacia mares, lagos u otros ríos; los lagos son masas de agua acumuladas en depresiones continentales.",
      example: "El Nilo y el Amazonas destacan entre los grandes sistemas fluviales, y el mar Caspio (endorreico) o el lago Superior sobresalen por su extensión lacustre.",
      precisionNote: "Dato aproximado: La longitud del Nilo se sitúa alrededor de 6.650 km y la del Amazonas suele situarse entre 6.400 y casi 7.000 km según el punto de origen considerado.",
      quiz: {
        q: "¿Qué diferencia básica existe entre un río y un lago?",
        options: [
          "El río es una corriente de agua en movimiento y el lago ocupa una depresión con agua retenida",
          "Todos los lagos son de agua salada y todos los ríos desembocan en un desierto",
          "Los ríos solo existen en zonas polares"
        ],
        answer: 0,
        explanation: "Un río fluye de forma canalizada siguiendo la pendiente, mientras que un lago acumula agua en una cuenca o depresión del terreno."
      }
    },
    {
      id: "oceanos-mares",
      title: "Océanos y mares",
      summary: "Los océanos son las grandes extensiones de agua salada que separan y conectan los continentes; los mares son porciones oceánicas más reducidas, parcial o totalmente bordeadas por tierras o umbrales submarinos.",
      example: "El océano Pacífico es el más extenso y profundo, mientras que el mar Mediterráneo o el mar Caribe son mares de menor escala.",
      precisionNote: "Dato aproximado: Los océanos cubren aproximadamente el 71 % de la superficie total de la Tierra.",
      quiz: {
        q: "¿Cuál es el océano de mayor superficie en el planeta?",
        options: ["Océano Índico", "Océano Atlántico", "Océano Pacífico"],
        answer: 2,
        explanation: "El océano Pacífico es el más grande y profundo de la Tierra, ocupando cerca de un tercio de la superficie planetaria."
      }
    },
    {
      id: "climas",
      title: "Climas",
      summary: "El clima describe el patrón atmosférico habitual de una región a lo largo de periodos prolongados, condicionado por la latitud, altitud, distancia al mar y circulación atmosférica y oceánica.",
      example: "Las zonas ecuatoriales presentan temperaturas cálidas constantes, mientras que las latitudes medias muestran estaciones más contrastadas.",
      precisionNote: "Dato aproximado: La clasificación climática de Köppen agrupa los climas en cinco grandes grupos principales (tropicales, secos, templados, continentales y polares).",
      quiz: {
        q: "¿Qué factor influye de forma decisiva en la distribución latitudinal de las temperaturas terrestres?",
        options: [
          "El ángulo de incidencia de la radiación solar según la latitud",
          "El huso horario oficial de cada país",
          "La población urbana de cada región"
        ],
        answer: 0,
        explanation: "Cuanto mayor es la latitud respecto al ecuador, más oblicua llega la radiación solar y menor es el calentamiento medio anual."
      }
    },
    {
      id: "desiertos",
      title: "Desiertos",
      summary: "Los desiertos son regiones con precipitaciones muy escasas y elevada aridez, que pueden ser cálidos (como el Sáhara) o fríos/templados (como el desierto de Gobi o la Patagonia).",
      example: "El desierto del Sáhara se extiende por el norte de África y el desierto de Atacama se localiza en el norte de Chile.",
      precisionNote: "Dato aproximado: El Sáhara abarca alrededor de 9 millones de km², siendo el mayor desierto cálido del mundo.",
      quiz: {
        q: "¿Todos los desiertos son necesariamente cálidos durante todo el año?",
        options: [
          "No, también existen desiertos fríos o con grandes amplitudes térmicas como el Gobi",
          "Sí, por definición un desierto supera siempre los 35 °C",
          "Solo existen desiertos en el hemisferio sur"
        ],
        answer: 0,
        explanation: "La aridez se define principalmente por la escasez de precipitaciones, por lo que hay desiertos cálidos y otros fríos o de interior."
      }
    },
    {
      id: "volcanes",
      title: "Volcanes",
      summary: "Los volcanes son conductos o estructuras geológicas por donde emergen magma, gases y materiales piroclásticos desde el interior de la Tierra hacia la superficie.",
      example: "El Cinturón de Fuego del Pacífico concentra una gran proporción de la actividad volcánica y sísmica mundial.",
      precisionNote: "Dato de referencia: La actividad volcánica se asocia frecuentemente a bordes convergentes de placas, zonas de rift y puntos calientes (hotspots).",
      quiz: {
        q: "¿Dónde se concentra una gran parte de los volcanes más activos del planeta?",
        options: [
          "En el Cinturón de Fuego del Pacífico",
          "En el centro de las llanuras sedimentarias estables",
          "Exclusivamente en el interior de la Antártida"
        ],
        answer: 0,
        explanation: "El borde del océano Pacífico concentra numerosos límites de placas tectónicas donde se produce intensa actividad volcánica y sísmica."
      }
    },
    {
      id: "paisajes-naturales",
      title: "Paisajes naturales",
      summary: "Un paisaje natural refleja la interacción entre el relieve, el clima, el suelo, la vegetación y la fauna de un lugar con escasa transformación humana.",
      example: "La selva tropical húmeda, la sabana, la estepa, la taiga y la tundra representan grandes biomas y paisajes naturales.",
      precisionNote: "Dato aproximado: Las selvas tropicales albergan más de la mitad de las especies terrestres conocidas pese a ocupar una fracción menor de la superficie emergida.",
      quiz: {
        q: "¿Qué elementos se combinan para configurar un paisaje natural?",
        options: [
          "Relieve, clima, hidrografía, suelos, vegetación y fauna",
          "Únicamente las fronteras administrativas y carreteras",
          "Solo la altitud sobre el nivel del mar"
        ],
        answer: 0,
        explanation: "El paisaje natural es el resultado integrado de los componentes abióticos (clima, relieve, agua, suelo) y bióticos (vegetación y fauna)."
      }
    }
  ],
  politica: [
    {
      id: "paises",
      title: "Países",
      summary: "Un Estado soberano o país cuenta con territorio definido, población permanente, gobierno y capacidad de relacionarse en el ámbito internacional.",
      example: "España, Brasil, Canadá o Japón son Estados soberanos con organización político-administrativa propia.",
      precisionNote: "Dato de referencia: Existen 193 Estados miembros de la ONU, además de Estados observadores o con reconocimiento parcial según criterios diplomáticos.",
      quiz: {
        q: "¿Qué elementos caracterizan de forma clásica a un Estado soberano?",
        options: [
          "Territorio, población, gobierno y soberanía",
          "Tener salida obligatoria a dos océanos",
          "Superar los diez millones de habitantes"
        ],
        answer: 0,
        explanation: "En geografía política y derecho internacional, territorio, población y gobierno soberano son pilares fundamentales del Estado."
      }
    },
    {
      id: "capitales",
      title: "Capitales",
      summary: "La capital es la ciudad donde suelen residir los principales órganos de gobierno y administración de un país o entidad subnacional.",
      example: "Madrid es la capital de España, Ottawa lo es de Canadá y Canberra lo es de Australia.",
      precisionNote: "Dato de referencia: Algunos países tienen más de una ciudad con funciones institucionales o administrativas (por ejemplo, Sudáfrica).",
      quiz: {
        q: "¿Cuál es la capital de Australia?",
        options: ["Sídney", "Melbourne", "Canberra"],
        answer: 2,
        explanation: "Aunque Sídney y Melbourne son las ciudades más pobladas de Australia, la capital federal es Canberra."
      }
    },
    {
      id: "fronteras",
      title: "Fronteras",
      summary: "Las fronteras delimitan el alcance espacial de la soberanía de un Estado; pueden ser terrestres, marítimas o aéreas, y apoyarse en hitos artificiales o accidentes geográficos.",
      example: "Ríos, cordilleras o paralelos geográficos sirven con frecuencia como referencia para trazar límites internacionales.",
      precisionNote: "Dato de referencia: Las zonas fronterizas suelen ser espacios de intercambio comercial, cultural y de cooperación transfronteriza.",
      quiz: {
        q: "¿Qué puede utilizarse como referencia para delimitar una frontera?",
        options: [
          "Accidentes geográficos como ríos o cordilleras, coordenadas o límites acordados",
          "Únicamente los husos horarios",
          "Solo los océanos profundos"
        ],
        answer: 0,
        explanation: "Las fronteras se fijan mediante acuerdos y tratados, empleando a menudo rasgos físicos o líneas geométricas."
      }
    },
    {
      id: "continentes",
      title: "Continentes",
      summary: "Los continentes son las grandes masas continentales en que se divide el planeta. Según la tradición educativa o cultural, se habla de modelos de seis o siete continentes.",
      example: "En GeoAtlas se trabaja con Europa, Asia, África, América del Norte, América del Sur y Oceanía.",
      precisionNote: "Dato aproximado: Asia es el continente más extenso y poblado, mientras que Oceanía es el de menor extensión continental.",
      quiz: {
        q: "¿Cuál de estos es uno de los seis continentes trabajados en el juego de capitales de GeoAtlas?",
        options: ["Ártico", "América del Sur", "Polinesia"],
        answer: 1,
        explanation: "América del Sur forma parte de los seis continentes seleccionados en el juego de capitales de GeoAtlas."
      }
    },
    {
      id: "territorios",
      title: "Territorios",
      summary: "Además de los Estados soberanos, existen territorios no autónomos, regiones ultraperiféricas o dependencias administrativas vinculadas a otro Estado con estatutos particulares.",
      example: "Islas, archipiélagos o territorios de ultramar presentan regímenes jurídicos o administrativos específicos.",
      precisionNote: "Dato de referencia: En los juegos de países y capitales de GeoAtlas el foco principal se sitúa en los Estados soberanos.",
      quiz: {
        q: "¿En qué se centra principalmente el repertorio de GeoAtlas?",
        options: [
          "En los Estados soberanos y sus capitales",
          "Únicamente en islas deshabitadas",
          "Solo en capitales provinciales"
        ],
        answer: 0,
        explanation: "GeoAtlas está diseñado para localizar Estados soberanos en el mapamundi y asociar cada uno con su capital."
      }
    }
  ],
  humana: [
    {
      id: "poblacion",
      title: "Población",
      summary: "La geografía de la población estudia el volumen, crecimiento, estructura por edad y sexo y distribución espacial de los habitantes en la Tierra.",
      example: "El crecimiento demográfico ha sido muy desigual entre regiones a lo largo de los siglos XX y XXI.",
      precisionNote: "Dato aproximado: La población mundial supera los 8.000 millones de habitantes en la década de 2020 según estimaciones de organismos internacionales.",
      quiz: {
        q: "¿Qué analiza la geografía de la población?",
        options: [
          "El volumen, distribución, estructura y dinámica de los habitantes",
          "La composición mineral de las rocas ígneas",
          "Las corrientes marinas profundas"
        ],
        answer: 0,
        explanation: "Estudia cómo se reparte y cambia la población humana en el espacio y el tiempo."
      }
    },
    {
      id: "ciudades",
      title: "Ciudades",
      summary: "Las ciudades son núcleos urbanos con alta concentración de población y actividades terciarias, industriales y de servicios, que articulan redes regionales y globales.",
      example: "Tokio, Delhi, Shanghái, São Paulo, Ciudad de México o Nueva York son grandes referencias urbanas del mundo.",
      precisionNote: "Dato aproximado: Más de la mitad de la población mundial reside ya en áreas urbanas.",
      quiz: {
        q: "¿Qué caracteriza habitualmente a los espacios urbanos frente a los rurales?",
        options: [
          "Mayor concentración demográfica y predominio de actividades de servicios e industria",
          "Ausencia total de infraestructuras de transporte",
          "Dependencia exclusiva de la pesca artesanal"
        ],
        answer: 0,
        explanation: "Las ciudades concentran población, equipamientos y empleos ligados principalmente a los servicios, el comercio y la industria."
      }
    },
    {
      id: "densidad",
      title: "Densidad demográfica",
      summary: "La densidad de población relaciona el número de habitantes de un territorio con su superficie (habitantes por km²), evidenciando contrastes entre zonas muy pobladas y vacíos demográficos.",
      example: "Los valles fértiles, costas y grandes áreas metropolitanas alcanzan densidades elevadas, mientras que desiertos, alta montaña y regiones polares tienen densidades muy bajas.",
      precisionNote: "Dato aproximado: La densidad media mundial es orientativa, ya que la población se distribuye de forma muy desigual.",
      quiz: {
        q: "¿Cómo se calcula de forma básica la densidad de población?",
        options: [
          "Dividiendo el número de habitantes entre la superficie del territorio (hab./km²)",
          "Sumando la altitud máxima y la mínima",
          "Multiplicando el número de ciudades por el número de ríos"
        ],
        answer: 0,
        explanation: "La densidad demográfica expresa la relación entre población total y superficie (habitantes por kilómetro cuadrado)."
      }
    },
    {
      id: "migraciones",
      title: "Migraciones",
      summary: "Las migraciones son desplazamientos de población que implican un cambio de residencia habitual, ya sea dentro de un mismo país (migración interna) o entre países distintos (migración internacional).",
      example: "El éxodo rural hacia las ciudades es un ejemplo clásico de migración interna.",
      precisionNote: "Dato de referencia: En los movimientos migratorios intervienen factores económicos, laborales, formativos, familiares, climáticos o de seguridad.",
      quiz: {
        q: "¿Qué es una migración interna?",
        options: [
          "Un cambio de residencia habitual dentro de las fronteras de un mismo país",
          "Un viaje turístico de fin de semana",
          "El desplazamiento de aves migratorias"
        ],
        answer: 0,
        explanation: "Las migraciones internas ocurren dentro de un mismo Estado, a diferencia de las migraciones internacionales que cruzan fronteras nacionales."
      }
    },
    {
      id: "idiomas",
      title: "Idiomas",
      summary: "La geografía lingüística analiza la distribución espacial de las lenguas, su origen histórico, las áreas multilingües y el papel de las lenguas francas o de comunicación internacional.",
      example: "El español, el inglés, el árabe, el francés, el portugués o el mandarín se hablan en amplias regiones del mundo.",
      precisionNote: "Dato aproximado: Se contabilizan varios miles de lenguas vivas en el planeta, con una distribución muy desigual en número de hablantes.",
      quiz: {
        q: "¿Qué estudia la geografía lingüística?",
        options: [
          "La distribución espacial y evolución territorial de las lenguas",
          "La presión atmosférica a nivel del mar",
          "La salinidad de los océanos"
        ],
        answer: 0,
        explanation: "Examina cómo se reparten las lenguas en el territorio y qué procesos históricos o sociales han influido en ello."
      }
    }
  ],
  economica: [
    {
      id: "agricultura",
      title: "Agricultura",
      summary: "La agricultura comprende el cultivo de la tierra para obtener alimentos y materias primas vegetales, condicionada por el clima, el relieve, el suelo, el agua y la tecnología.",
      example: "Cereales como el trigo, el arroz y el maíz son bases alimentarias esenciales en distintas regiones del mundo.",
      precisionNote: "Dato de referencia: Coexisten agriculturas de subsistencia, extensivas comerciales y sistemas intensivos de alto rendimiento.",
      quiz: {
        q: "¿Qué factores físicos condicionan de forma directa la agricultura?",
        options: [
          "El clima, el tipo de suelo, la disponibilidad de agua y el relieve",
          "Únicamente el huso horario local",
          "La profundidad de las fosas oceánicas"
        ],
        answer: 0,
        explanation: "Las temperaturas, lluvias, fertilidad del suelo y pendientes del terreno determinan qué cultivos son viables."
      }
    },
    {
      id: "industria",
      title: "Industria",
      summary: "La industria transforma materias primas en bienes elaborados o semielaborados mediante energía, trabajo y tecnología.",
      example: "La industria agroalimentaria, química, metalúrgica, automotriz y tecnológica presenta distintas necesidades de localización.",
      precisionNote: "Dato de referencia: La disponibilidad energética, las redes logísticas y la cualificación laboral influyen en la ubicación industrial.",
      quiz: {
        q: "¿En qué consiste esencialmente la actividad industrial?",
        options: [
          "En transformar materias primas en productos elaborados o semielaborados",
          "En extraer agua potable de los glaciares exclusivamente",
          "En medir la inclinación del eje terrestre"
        ],
        answer: 0,
        explanation: "El sector secundario o industrial toma materias primas y recursos y los convierte en manufacturas o bienes de equipo."
      }
    },
    {
      id: "recursos",
      title: "Recursos naturales",
      summary: "Los recursos naturales son los bienes y servicios proporcionados por la naturaleza que las sociedades aprovechan, distinguiéndose entre renovables y no renovables.",
      example: "La energía solar, eólica e hidráulica se asocian a fuentes renovables, mientras que los combustibles fósiles o ciertos minerales son limitados.",
      precisionNote: "Dato de referencia: El uso sostenible de los recursos busca cubrir las necesidades actuales sin comprometer los ecosistemas futuros.",
      quiz: {
        q: "¿Cuál de estos ejemplos corresponde a una fuente de energía renovable?",
        options: ["Energía solar", "Carbón mineral", "Petróleo"],
        answer: 0,
        explanation: "La radiación solar es un recurso renovable a escala humana, a diferencia de los combustibles fósiles que son finitos."
      }
    },
    {
      id: "comercio",
      title: "Comercio",
      summary: "El comercio consiste en el intercambio de bienes y servicios entre productores y consumidores, tanto a escala local y nacional como a través del comercio internacional.",
      example: "Los puertos marítimos, canales interoceánicos, redes ferroviarias y rutas aéreas son claves en el comercio global.",
      precisionNote: "Dato de referencia: El transporte marítimo concentra la mayor parte del volumen de mercancías del comercio mundial.",
      quiz: {
        q: "¿Qué medio concentra la mayor parte del volumen físico del comercio internacional de mercancías?",
        options: ["El transporte marítimo", "El transporte fluvial en canoa", "El correo postal tradicional"],
        answer: 0,
        explanation: "Los buques portacontenedores y graneleros permiten mover grandes volúmenes de mercancías entre continentes."
      }
    },
    {
      id: "actividades",
      title: "Actividades económicas",
      summary: "Las actividades económicas suelen agruparse en sectores (primario, secundario, terciario y, en muchos análisis, cuaternario) para comprender cómo se produce y distribuye la riqueza.",
      example: "La agricultura y pesca pertenecen al sector primario, la manufactura al secundario, y la educación, sanidad, turismo o transporte al terciario.",
      precisionNote: "Dato de referencia: En las economías avanzadas el sector servicios suele concentrar la mayor parte del empleo y del valor añadido.",
      quiz: {
        q: "¿A qué sector pertenecen actividades como la educación, la sanidad, el comercio minorista y el transporte?",
        options: ["Sector terciario o de servicios", "Sector primario", "Sector extractivo minero"],
        answer: 0,
        explanation: "El sector terciario engloba la prestación de servicios y la distribución de bienes."
      }
    }
  ]
};

let currentLearnCategory = "fisica";
let currentLearnTopicId = "relieve";

function selectLearnCategory(catId) {
  currentLearnCategory = catId;
  document.querySelectorAll('.v2-cat-tab').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.cat === catId);
  });
  const topics = LEARN_TOPICS[catId] || [];
  currentLearnTopicId = topics.length ? topics[0].id : null;
  renderLearnSection();
}

function selectLearnTopic(topicId) {
  currentLearnTopicId = topicId;
  renderLearnSection();
}

function renderLearnSection() {
  const listEl = document.getElementById('learn-topic-list');
  const detailEl = document.getElementById('learn-topic-detail');
  if (!listEl || !detailEl) return;

  const topics = LEARN_TOPICS[currentLearnCategory] || [];
  listEl.innerHTML = topics.map(t => `
    <button type="button" class="v2-topic-btn ${t.id === currentLearnTopicId ? 'active' : ''}" onclick="selectLearnTopic('${t.id}')">
      ${t.title}
    </button>
  `).join('');

  const topic = topics.find(t => t.id === currentLearnTopicId) || topics[0];
  if (!topic) return;

  detailEl.innerHTML = `
    <h2>${topic.title}</h2>
    <p>${topic.summary}</p>
    <div class="v2-meta-box">
      <strong>Ejemplo práctico:</strong> ${topic.example}
    </div>
    <div class="v2-meta-box">
      <strong>Precisión de datos:</strong> ${topic.precisionNote}
    </div>
    <div class="v2-quiz-box">
      <div class="v2-quiz-title">Comprueba lo aprendido · ${topic.title}</div>
      <div>${topic.quiz.q}</div>
      <div class="v2-quiz-options" id="learn-quiz-options">
        ${topic.quiz.options.map((opt, idx) => `
          <button type="button" class="v2-quiz-opt" onclick="answerLearnQuiz(${idx}, ${topic.quiz.answer}, '${topic.quiz.explanation.replace(/'/g, "\'")}')">
            ${opt}
          </button>
        `).join('')}
      </div>
      <div id="learn-quiz-feedback" style="margin-top:0.65rem; font-size:0.9rem; font-weight:600;"></div>
    </div>
  `;
}

function answerLearnQuiz(selectedIdx, correctIdx, explanation) {
  const opts = document.querySelectorAll('#learn-quiz-options .v2-quiz-opt');
  const fb = document.getElementById('learn-quiz-feedback');
  opts.forEach((btn, idx) => {
    btn.classList.remove('is-right', 'is-wrong');
    if (idx === correctIdx) btn.classList.add('is-right');
    else if (idx === selectedIdx) btn.classList.add('is-wrong');
  });
  if (selectedIdx === correctIdx) {
    fb.style.color = '#15803d';
    fb.textContent = '¡Correcto! ' + explanation;
  } else {
    fb.style.color = '#b91c1c';
    fb.textContent = 'Respuesta no acertada. ' + explanation;
  }
}

/* ----------------------------------------------------------------------------
   2. ATLAS INTERACTIVO (8 CAPAS TEMÁTICAS REALES SOBRE EL MAPA D3)
   ---------------------------------------------------------------------------- */
const ATLAS_LAYERS = {
  politico: {
    title: "Mapa político mundial",
    description: "Representa la división de los países sobre el mapamundi. Pulsa cualquier país para ver su continente y capital.",
    legend: [
      { color: "#93c5fd", label: "Estados soberanos representados" },
      { color: "#dbeafe", label: "Océanos y masas de agua" }
    ],
    colorFn: () => "#93c5fd"
  },
  fisico: {
    title: "Mapa físico mundial",
    description: "Destaca de forma ilustrativa grandes contrastes de relieve y altitud entre zonas de tierras bajas, mesetas y grandes cordilleras.",
    legend: [
      { color: "#4ade80", label: "Llanuras y cuencas bajas (esquema temático)" },
      { color: "#facc15", label: "Mesetas y zonas de transición (esquema temático)" },
      { color: "#b45309", label: "Grandes áreas montañosas (esquema temático)" }
    ],
    colorFn: (iso) => {
      const highMountainIds = new Set(["524", "064", "156", "152", "604", "068", "040", "756", "004", "762", "417"]);
      const plateauIds = new Set(["710", "036", "484", "356", "364", "792", "682", "012", "504", "231", "032"]);
      if (highMountainIds.has(iso)) return "#b45309";
      if (plateauIds.has(iso)) return "#facc15";
      return "#4ade80";
    }
  },
  continentes: {
    title: "Mapa de continentes",
    description: "Colorea los países según el continente asignado en GeoAtlas: Europa, Asia, África, América del Norte, América del Sur y Oceanía.",
    legend: [
      { color: "#3b82f6", label: "Europa" },
      { color: "#ef4444", label: "Asia" },
      { color: "#f59e0b", label: "África" },
      { color: "#10b981", label: "América del Norte" },
      { color: "#8b5cf6", label: "América del Sur" },
      { color: "#06b6d4", label: "Oceanía" }
    ],
    colorFn: (iso) => {
      const c = COUNTRY_BY_ID.get(iso);
      if (!c) return "#cbd5e1";
      const map = {
        "Europa": "#3b82f6",
        "Asia": "#ef4444",
        "África": "#f59e0b",
        "América del Norte": "#10b981",
        "América del Sur": "#8b5cf6",
        "Oceanía": "#06b6d4"
      };
      return map[c.continent] || "#cbd5e1";
    }
  },
  oceanos: {
    title: "Mapa de océanos",
    description: "Permite observar las costas y masas continentales que rodean los grandes océanos (Pacífico, Atlántico, Índico y Ártico).",
    legend: [
      { color: "#0284c7", label: "Zonas costeras y países ribereños" },
      { color: "#e2e8f0", label: "Interior continental" }
    ],
    colorFn: () => "#38bdf8"
  },
  cordilleras: {
    title: "Mapa de cordilleras",
    description: "Resalta países atravesados o bordeados por grandes cordilleras como los Andes, las Montañas Rocosas, los Alpes, el Himalaya o los Urales.",
    legend: [
      { color: "#7c2d12", label: "Países con grandes cordilleras destacadas" },
      { color: "#e2e8f0", label: "Resto de territorios" }
    ],
    colorFn: (iso) => {
      const rangesIds = new Set(["152", "604", "170", "218", "032", "068", "840", "124", "484", "524", "064", "156", "356", "756", "040", "380", "250", "643"]);
      return rangesIds.has(iso) ? "#7c2d12" : "#e2e8f0";
    }
  },
  rios: {
    title: "Mapa de ríos",
    description: "Destaca países vinculados a grandes cuencas hidrográficas del mundo (Amazonas, Nilo, Yangtsé, Misisipi, Danubio o Indo).",
    legend: [
      { color: "#0369a1", label: "Países asociados a grandes sistemas fluviales" },
      { color: "#e2e8f0", label: "Resto de territorios" }
    ],
    colorFn: (iso) => {
      const riverIds = new Set(["076", "604", "170", "818", "729", "728", "800", "156", "356", "586", "840", "276", "040", "642", "180", "566"]);
      return riverIds.has(iso) ? "#0369a1" : "#e2e8f0";
    }
  },
  climas: {
    title: "Mapa de climas",
    description: "Esquema general de grandes zonas climáticas (ecuatorial/tropical, árida, templada y fría/boreal) según su franja y región geográfica.",
    legend: [
      { color: "#16a34a", label: "Zonas tropicales / húmedas" },
      { color: "#eab308", label: "Zonas áridas / semiáridas" },
      { color: "#60a5fa", label: "Zonas templadas" },
      { color: "#cbd5e1", label: "Zonas frías / boreales" }
    ],
    colorFn: (iso) => {
      const tropical = new Set(["076", "170", "218", "360", "458", "608", "180", "120", "566", "404", "834", "764", "704"]);
      const arid = new Set(["012", "434", "504", "682", "784", "512", "364", "368", "516", "036"]);
      const cold = new Set(["643", "124", "352", "578", "752", "246", "496"]);
      if (tropical.has(iso)) return "#16a34a";
      if (arid.has(iso)) return "#eab308";
      if (cold.has(iso)) return "#cbd5e1";
      return "#60a5fa";
    }
  },
  poblacion: {
    title: "Mapa de densidad de población",
    description: "Ilustra el contraste entre países con alta concentración demográfica o gran volumen poblacional y territorios con menor densidad media.",
    legend: [
      { color: "#991b1b", label: "Alta densidad o gran concentración demográfica" },
      { color: "#f97316", label: "Densidad media-alta" },
      { color: "#fde68a", label: "Densidad moderada o baja" }
    ],
    colorFn: (iso) => {
      const highDens = new Set(["356", "156", "050", "410", "392", "528", "056", "276", "826", "380", "608", "704", "566"]);
      const medDens = new Set(["724", "250", "616", "484", "076", "818", "792", "764", "360", "170", "032", "840"]);
      if (highDens.has(iso)) return "#991b1b";
      if (medDens.has(iso)) return "#f97316";
      return "#fde68a";
    }
  }
};

let currentAtlasLayer = "politico";

function selectAtlasLayer(layerId) {
  currentAtlasLayer = layerId;
  document.querySelectorAll('.v2-layer-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.layer === layerId);
  });
  applyAtlasLayer(layerId);
}

function applyAtlasLayer(layerId) {
  const cfg = ATLAS_LAYERS[layerId] || ATLAS_LAYERS.politico;
  if (mapsState.atlas && mapsState.atlas.g) {
    mapsState.atlas.g.selectAll('.country-path')
      .style('fill', d => cfg.colorFn(String(d.id).padStart(3, "0")));
  }

  const infoEl = document.getElementById('atlas-layer-info');
  if (!infoEl) return;

  infoEl.innerHTML = `
    <h2>${cfg.title}</h2>
    <p>${cfg.description}</p>
    <div>
      ${cfg.legend.map(item => `
        <div class="v2-legend-item">
          <span class="v2-legend-swatch" style="background:${item.color};"></span>
          <span>${item.label}</span>
        </div>
      `).join('')}
    </div>
    <div class="v2-atlas-selected" id="atlas-selected-country">
      Pulsa sobre cualquier país del mapa para consultar su nombre, capital y continente.
    </div>
  `;
}

function handleAtlasCountryClick(iso) {
  const c = COUNTRY_BY_ID.get(iso);
  const box = document.getElementById('atlas-selected-country');
  if (!box) return;
  if (c) {
    box.innerHTML = `<strong>País seleccionado:</strong> ${c.name}<br><strong>Capital:</strong> ${c.capital}<br><strong>Continente:</strong> ${c.continent}`;
  } else {
    box.textContent = "Territorio sin ficha registrada en el catálogo principal de GeoAtlas.";
  }
}

/* ----------------------------------------------------------------------------
   3. FICHAS DE PAÍSES (BANDERAS SVG, BUSCADOR, FILTRO Y DATOS DETALLADOS)
   ---------------------------------------------------------------------------- */
const COUNTRY_PROFILES_EXTRAS = {
  "724": { area: "505.990 km² (aprox.)", pop: "48,6 millones (aprox., ref. 2024)", lang: "Español (oficial) y lenguas cooficiales", currency: "Euro (€)", relief: "Meseta Central, sistemas montañosos, depresiones del Ebro y Guadalquivir, costas y archipiélagos.", climate: "Mediterráneo, oceánico, de interior y subtropical en Canarias.", fact: "Alberga tanto costas atlánticas como mediterráneas y sistemas montañosos que superan los 3.000 metros." },
  "250": { area: "551.695 km² (Francia metropolitana, aprox.)", pop: "68,4 millones (aprox., ref. 2024)", lang: "Francés", currency: "Euro (€)", relief: "Llanuras, macizos antiguos, Alpes, Pirineos y fachada a tres mares/océanos.", climate: "Oceánico, continental, mediterráneo y alpino según la zona.", fact: "Cuenta con departamentos y territorios de ultramar repartidos por distintos océanos." },
  "276": { area: "357.592 km² (aprox.)", pop: "83,5 millones (aprox., ref. 2024)", lang: "Alemán", currency: "Euro (€)", relief: "Tierras bajas del norte, mesetas centrales y Alpes bávaros al sur.", climate: "Templado de transición entre oceánico y continental.", fact: "Limita con nueve países vecinos en el centro de Europa." },
  "380": { area: "301.340 km² (aprox.)", pop: "58,9 millones (aprox., ref. 2024)", lang: "Italiano", currency: "Euro (€)", relief: "Península montañosa recorrida por los Apeninos, valle del Po al norte, Alpes e islas.", climate: "Mediterráneo en la costa y el sur, continental en el norte y alpino en altura.", fact: "Incluye dos grandes islas mediterráneas: Sicilia y Cerdeña." },
  "620": { area: "92.212 km² (aprox.)", pop: "10,6 millones (aprox., ref. 2024)", lang: "Portugués", currency: "Euro (€)", relief: "Relieve más suave al sur y más accidentado en el norte, con fachada atlántica y archipiélagos.", climate: "Atlántico al norte y mediterráneo con influencia oceánica al sur.", fact: "Su extremo suroccidental (cabo de San Vicente) es uno de los puntos destacados de la Europa continental." },
  "826": { area: "242.495 km² (aprox.)", pop: "68,3 millones (aprox., ref. 2024)", lang: "Inglés", currency: "Libra esterlina (£)", relief: "Tierras altas en Escocia y Gales, colinas y llanuras en Inglaterra e Irlanda del Norte.", climate: "Oceánico templado y húmedo con lluvias frecuentes.", fact: "Está formado por cuatro naciones constitutivas: Inglaterra, Escocia, Gales e Irlanda del Norte." },
  "840": { area: "9,83 millones km² (aprox.)", pop: "335,9 millones (aprox., ref. 2024)", lang: "Inglés (sin idioma oficial único a nivel federal)", currency: "Dólar estadounidense ($)", relief: "Gran planicie central, Montañas Rocosas al oeste, Apalaches al este, Alaska y Hawái.", climate: "Muy diverso: templado, continental, árido, tropical, mediterráneo y polar.", fact: "Abarca desde el océano Atlántico hasta el Pacífico y se extiende hasta el Ártico en Alaska." },
  "124": { area: "9,98 millones km² (aprox.)", pop: "40,8 millones (aprox., ref. 2024)", lang: "Inglés y francés", currency: "Dólar canadiense (CA$)", relief: "Escudo Canadiense, llanuras interiores, Montañas Rocosas y extenso archipiélago ártico.", climate: "Subártico, continental, polar al norte y oceánico en la costa del Pacífico.", fact: "Posee el litoral marítimo más extenso del mundo." },
  "484": { area: "1,96 millones km² (aprox.)", pop: "129,7 millones (aprox., ref. 2024)", lang: "Español y lenguas indígenas reconocidas", currency: "Peso mexicano (MX$)", relief: "Sierra Madre Occidental y Oriental, Altiplano mexicano, península de Yucatán y costas.", climate: "Tropical, árido y semiárido, templado y de montaña.", fact: "Conecta América del Norte con América Central y cuenta con una notable biodiversidad." },
  "076": { area: "8,51 millones km² (aprox.)", pop: "212,6 millones (aprox., ref. 2024)", lang: "Portugués", currency: "Real brasileño (R$)", relief: "Cuenca del Amazonas, meseta brasileña y extensa costa atlántica.", climate: "Predominantemente tropical y ecuatorial, con clima subtropical en el sur.", fact: "Es el país más extenso y poblado de América del Sur." },
  "032": { area: "2,78 millones km² (aprox., superficie continental americana)", pop: "46,7 millones (aprox., ref. 2024)", lang: "Español", currency: "Peso argentino (ARS)", relief: "Andes al oeste, llanura pampeana, Gran Chaco, meseta patagónica y litoral atlántico.", climate: "Variado desde subtropical en el norte hasta templado y frío subantártico en el sur.", fact: "Abarca una gran amplitud latitudinal en el cono sur americano." },
  "152": { area: "756.102 km² (Chile continental e insular, aprox.)", pop: "19,6 millones (aprox., ref. 2024)", lang: "Español", currency: "Peso chileno (CLP)", relief: "Franja estrecha y alargada entre la cordillera de los Andes y el océano Pacífico.", climate: "Desde árido en el norte (Atacama) hasta mediterráneo en el centro y frío/lluvioso en el sur.", fact: "Su geografía se caracteriza por una gran longitud de norte a sur frente a una anchura media reducida." },
  "170": { area: "1,14 millones km² (aprox.)", pop: "52,3 millones (aprox., ref. 2024)", lang: "Español", currency: "Peso colombiano (COP)", relief: "Tres ramales de los Andes, llanuras amazónicas y de la Orinoquía y costas en dos océanos.", climate: "Predominantemente tropical con pisos térmicos según la altitud.", fact: "Es el único país de América del Sur con costas en el océano Pacífico y en el mar Caribe." },
  "604": { area: "1,29 millones km² (aprox.)", pop: "34,0 millones (aprox., ref. 2024)", lang: "Español, quechua y aimara (entre otras lenguas)", relief: "Costa pacífica, cordillera de los Andes y selva amazónica.", climate: "Árido costero, templado/frío andino y tropical húmedo amazónico.", fact: "En su territorio se sitúa parte de la cuenca alta del río Amazonas y del lago Titicaca." },
  "156": { area: "9,60 millones km² (aprox.)", pop: "1.409 millones (aprox., ref. 2024)", lang: "Chino mandarín (y diversas lenguas y dialectos regionales)", currency: "Renminbi / Yuan (CNY)", relief: "Meseta tibetana, Himalaya, grandes llanuras orientales y desiertos del interior.", climate: "Desde tropical en el sur hasta continental y frío en el norte y mesetas elevadas.", fact: "Comparte frontera terrestre con más de una decena de países en Asia." },
  "356": { area: "3,29 millones km² (aprox.)", pop: "1.441 millones (aprox., ref. 2024)", lang: "Hindi e inglés (junto a numerosas lenguas oficiales estatales)", currency: "Rupia india (INR)", relief: "Himalaya al norte, llanura indogangética y meseta del Decán.", climate: "Predominantemente tropical monzónico, con variaciones áridas y de alta montaña.", fact: "Es el país más poblado del mundo según estimaciones demográficas recientes." },
  "392": { area: "377.975 km² (aprox.)", pop: "123,8 millones (aprox., ref. 2024)", lang: "Japonés", currency: "Yen japonés (JPY)", relief: "Archipiélago montañoso y volcánico con valles costeros estrechos.", climate: "Templado con cuatro estaciones marcadas y variaciones por latitud y altitud.", fact: "Está formado por miles de islas, encabezadas por Honshu, Hokkaido, Kyushu y Shikoku." },
  "818": { area: "1,00 millón km² (aprox.)", pop: "112,7 millones (aprox., ref. 2024)", lang: "Árabe", currency: "Libra egipcia (EGP)", relief: "Valle y delta del Nilo rodeados por desiertos (Libio y Arábigo) y península del Sinaí.", climate: "Desértico cálido y seco en la mayor parte del territorio.", fact: "El río Nilo es vital para la población y la agricultura en un entorno mayoritariamente árido." },
  "710": { area: "1,22 millones km² (aprox.)", pop: "61,1 millones (aprox., ref. 2024)", lang: "Inglés, zulú, xhosa, afrikáans y otras lenguas oficiales", currency: "Rand sudafricano (ZAR)", relief: "Gran meseta interior, cordillera de Drakensberg y costas atlántica e índica.", climate: "Desde semiárido y subtropical hasta mediterráneo en el suroeste.", fact: "Cuenta con tres ciudades capitales administrativas/legislativas/judiciales (Pretoria, Ciudad del Cabo y Bloemfontein)." },
  "036": { area: "7,69 millones km² (aprox.)", pop: "26,6 millones (aprox., ref. 2024)", lang: "Inglés", currency: "Dólar australiano (AUD)", relief: "Gran meseta occidental, cuenca central y Gran Cordillera Divisoria al este.", climate: "Árido y semiárido en el interior, tropical al norte y templado en el sureste.", fact: "Es un país y continente a la vez, con una fauna y flora con alto endemismo." },
  "554": { area: "268.021 km² (aprox.)", pop: "5,2 millones (aprox., ref. 2024)", lang: "Inglés, maorí y lengua de signos neozelandesa", currency: "Dólar neozelandés (NZD)", relief: "Dos islas principales montañosas y volcánicas (Isla Norte e Isla Sur) con fiordos y volcanes.", climate: "Oceánico templado con lluvias repartidas.", fact: "Su geografía insular presenta fiordos, Alpes del Sur y zonas geotérmicas activas." }
};

function getCountryProfile(country) {
  const extra = COUNTRY_PROFILES_EXTRAS[country.id];
  if (extra) return Object.assign({}, country, extra);
  return Object.assign({}, country, {
    area: "Superficie según registro oficial del Estado",
    pop: "Población aproximada (consultar censo oficial reciente)",
    lang: "Idioma(s) oficial(es) del país",
    currency: "Moneda nacional oficial",
    relief: `Territorio ubicado en ${country.continent}, con rasgos geográficos propios de su región.`,
    climate: `Clima característico de su latitud y entorno geográfico en ${country.continent}.`,
    fact: `${country.name} forma parte de ${country.continent} y su capital es ${country.capital}.`
  });
}

function renderFlagSvg(iso, className) {
  // Banderas vectoriales limpias para países destacados y bandera emblemática identificativa para el resto
  const flags = {
    "724": `<svg class="${className}" viewBox="0 0 3 2" aria-label="Bandera de España"><rect width="3" height="2" fill="#c60b1e"/><rect y="0.5" width="3" height="1" fill="#ffc400"/></svg>`,
    "250": `<svg class="${className}" viewBox="0 0 3 2" aria-label="Bandera de Francia"><rect width="1" height="2" fill="#0055a4"/><rect x="1" width="1" height="2" fill="#ffffff"/><rect x="2" width="1" height="2" fill="#ef4135"/></svg>`,
    "276": `<svg class="${className}" viewBox="0 0 3 2" aria-label="Bandera de Alemania"><rect width="3" height="0.67" fill="#111827"/><rect y="0.67" width="3" height="0.67" fill="#dc2626"/><rect y="1.33" width="3" height="0.67" fill="#facc15"/></svg>`,
    "380": `<svg class="${className}" viewBox="0 0 3 2" aria-label="Bandera de Italia"><rect width="1" height="2" fill="#009246"/><rect x="1" width="1" height="2" fill="#ffffff"/><rect x="2" width="1" height="2" fill="#ce2b37"/></svg>`,
    "620": `<svg class="${className}" viewBox="0 0 3 2" aria-label="Bandera de Portugal"><rect width="1.2" height="2" fill="#006600"/><rect x="1.2" width="1.8" height="2" fill="#ff0000"/><circle cx="1.2" cy="1" r="0.42" fill="#ffcc00" stroke="#006600" stroke-width="0.05"/></svg>`,
    "826": `<svg class="${className}" viewBox="0 0 60 30" aria-label="Bandera del Reino Unido"><rect width="60" height="30" fill="#012169"/><path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" stroke-width="6"/><path d="M0,0 L60,30 M60,0 L0,30" stroke="#C8102E" stroke-width="3"/><path d="M30,0 V30 M0,15 H60" stroke="#fff" stroke-width="10"/><path d="M30,0 V30 M0,15 H60" stroke="#C8102E" stroke-width="6"/></svg>`,
    "840": `<svg class="${className}" viewBox="0 0 19 10" aria-label="Bandera de Estados Unidos"><rect width="19" height="10" fill="#b22234"/><path d="M0,1.54 H19 M0,3.08 H19 M0,4.62 H19 M0,6.15 H19 M0,7.69 H19 M0,9.23 H19" stroke="#fff" stroke-width="0.77"/><rect width="7.6" height="5.38" fill="#3c3b6e"/></svg>`,
    "124": `<svg class="${className}" viewBox="0 0 6 3" aria-label="Bandera de Canadá"><rect width="1.5" height="3" fill="#d80621"/><rect x="1.5" width="3" height="3" fill="#ffffff"/><rect x="4.5" width="1.5" height="3" fill="#d80621"/><polygon points="3,0.65 3.35,1.35 4,1.25 3.65,1.8 4.1,2.2 3.2,2.2 3,2.6 2.8,2.2 1.9,2.2 2.35,1.8 2,1.25 2.65,1.35" fill="#d80621"/></svg>`,
    "484": `<svg class="${className}" viewBox="0 0 3 2" aria-label="Bandera de México"><rect width="1" height="2" fill="#006847"/><rect x="1" width="1" height="2" fill="#ffffff"/><rect x="2" width="1" height="2" fill="#ce1126"/><circle cx="1.5" cy="1" r="0.32" fill="#8b4513"/></svg>`,
    "076": `<svg class="${className}" viewBox="0 0 10 7" aria-label="Bandera de Brasil"><rect width="10" height="7" fill="#009b3a"/><polygon points="5,1 8.8,3.5 5,6 1.2,3.5" fill="#ffdf00"/><circle cx="5" cy="3.5" r="1.45" fill="#002776"/></svg>`,
    "032": `<svg class="${className}" viewBox="0 0 3 2" aria-label="Bandera de Argentina"><rect width="3" height="0.67" fill="#74acdf"/><rect y="0.67" width="3" height="0.67" fill="#ffffff"/><rect y="1.33" width="3" height="0.67" fill="#74acdf"/><circle cx="1.5" cy="1" r="0.25" fill="#f6b40e"/></svg>`,
    "152": `<svg class="${className}" viewBox="0 0 3 2" aria-label="Bandera de Chile"><rect width="3" height="1" fill="#ffffff"/><rect y="1" width="3" height="1" fill="#d52b1e"/><rect width="1" height="1" fill="#0039a6"/><polygon points="0.5,0.22 0.62,0.58 0.22,0.36 0.78,0.36 0.38,0.58" fill="#ffffff"/></svg>`,
    "170": `<svg class="${className}" viewBox="0 0 3 2" aria-label="Bandera de Colombia"><rect width="3" height="1" fill="#fcd116"/><rect y="1" width="3" height="0.5" fill="#003893"/><rect y="1.5" width="3" height="0.5" fill="#ce1126"/></svg>`,
    "604": `<svg class="${className}" viewBox="0 0 3 2" aria-label="Bandera de Perú"><rect width="1" height="2" fill="#d91023"/><rect x="1" width="1" height="2" fill="#ffffff"/><rect x="2" width="1" height="2" fill="#d91023"/></svg>`,
    "156": `<svg class="${className}" viewBox="0 0 3 2" aria-label="Bandera de China"><rect width="3" height="2" fill="#de2910"/><polygon points="0.6,0.45 0.72,0.8 0.38,0.58 0.82,0.58 0.48,0.8" fill="#ffde00"/></svg>`,
    "356": `<svg class="${className}" viewBox="0 0 3 2" aria-label="Bandera de India"><rect width="3" height="0.67" fill="#ff9933"/><rect y="0.67" width="3" height="0.67" fill="#ffffff"/><rect y="1.33" width="3" height="0.67" fill="#138808"/><circle cx="1.5" cy="1" r="0.24" fill="none" stroke="#000080" stroke-width="0.05"/></svg>`,
    "392": `<svg class="${className}" viewBox="0 0 3 2" aria-label="Bandera de Japón"><rect width="3" height="2" fill="#ffffff" stroke="#e2e8f0" stroke-width="0.04"/><circle cx="1.5" cy="1" r="0.55" fill="#bc002d"/></svg>`,
    "818": `<svg class="${className}" viewBox="0 0 3 2" aria-label="Bandera de Egipto"><rect width="3" height="0.67" fill="#ce1126"/><rect y="0.67" width="3" height="0.67" fill="#ffffff"/><rect y="1.33" width="3" height="0.67" fill="#000000"/><circle cx="1.5" cy="1" r="0.22" fill="#c09300"/></svg>`,
    "710": `<svg class="${className}" viewBox="0 0 3 2" aria-label="Bandera de Sudáfrica"><rect width="3" height="1" fill="#e03c31"/><rect y="1" width="3" height="1" fill="#001489"/><polygon points="0,0 1.3,1 0,2" fill="#007749"/><polygon points="0,0.22 0.95,1 0,1.78" fill="#ffb81c"/><polygon points="0,0.38 0.72,1 0,1.62" fill="#111827"/></svg>`,
    "036": `<svg class="${className}" viewBox="0 0 6 3" aria-label="Bandera de Australia"><rect width="6" height="3" fill="#00008b"/><rect width="3" height="1.5" fill="#012169"/><path d="M0,0 L3,1.5 M3,0 L0,1.5" stroke="#fff" stroke-width="0.35"/><path d="M1.5,0 V1.5 M0,0.75 H3" stroke="#fff" stroke-width="0.55"/><path d="M1.5,0 V1.5 M0,0.75 H3" stroke="#c8102e" stroke-width="0.3"/><circle cx="4.5" cy="1.85" r="0.25" fill="#ffffff"/></svg>`,
    "554": `<svg class="${className}" viewBox="0 0 6 3" aria-label="Bandera de Nueva Zelanda"><rect width="6" height="3" fill="#00247d"/><rect width="3" height="1.5" fill="#012169"/><path d="M0,0 L3,1.5 M3,0 L0,1.5" stroke="#fff" stroke-width="0.35"/><path d="M1.5,0 V1.5 M0,0.75 H3" stroke="#fff" stroke-width="0.55"/><path d="M1.5,0 V1.5 M0,0.75 H3" stroke="#c8102e" stroke-width="0.3"/><circle cx="4.6" cy="0.85" r="0.16" fill="#cc142b"/><circle cx="4.6" cy="2.25" r="0.16" fill="#cc142b"/></svg>`
  };

  if (flags[iso]) return flags[iso];

  // Bandera geométrica de identificación para los demás países del repertorio
  const num = parseInt(iso, 10) || 1;
  const palette = ["#1d4ed8", "#15803d", "#b91c1c", "#b45309", "#0e7490", "#6d28d9"];
  const c1 = palette[num % palette.length];
  const c2 = palette[(num + 2) % palette.length];
  return `<svg class="${className}" viewBox="0 0 3 2" aria-label="Emblema de bandera"><rect width="3" height="2" fill="${c1}"/><rect y="0.7" width="3" height="0.6" fill="#ffffff"/><circle cx="1.5" cy="1" r="0.22" fill="${c2}"/></svg>`;
}

function renderCountryProfiles() {
  const grid = document.getElementById('profiles-grid');
  if (!grid) return;

  const q = (document.getElementById('profile-search')?.value || '').trim().toLowerCase();
  const cont = document.getElementById('profile-continent')?.value || 'Todos';

  const list = COUNTRIES_DATA.filter(c => {
    const matchCont = cont === 'Todos' || c.continent === cont;
    const matchText = !q || c.name.toLowerCase().includes(q) || c.capital.toLowerCase().includes(q);
    return matchCont && matchText;
  });

  if (!list.length) {
    grid.innerHTML = `<p style="color:var(--text-muted);">No se encontraron países con ese criterio de búsqueda.</p>`;
    return;
  }

  grid.innerHTML = list.map(c => `
    <article class="v2-country-card" onclick="openCountryProfile('${c.id}')">
      <div class="v2-flag-row">
        ${renderFlagSvg(c.id, 'v2-flag-svg')}
        <div>
          <h3>${c.name}</h3>
          <div class="v2-country-meta">Capital: ${c.capital}</div>
        </div>
      </div>
      <div class="v2-country-meta">${c.continent} · Pulsa para ver ficha completa</div>
    </article>
  `).join('');
}

function openCountryProfile(iso) {
  const base = COUNTRY_BY_ID.get(iso);
  if (!base) return;
  const prof = getCountryProfile(base);
  const box = document.getElementById('profiles-detail-modal');
  if (!box) return;

  box.style.display = 'block';
  box.innerHTML = `
    <div style="display:flex; flex-wrap:wrap; align-items:center; justify-content:space-between; gap:1rem;">
      <div class="v2-flag-row">
        ${renderFlagSvg(prof.id, 'v2-large-flag')}
        <div>
          <span class="v2-badge v2-badge-blue">${prof.continent}</span>
          <h2 style="font-size:1.6rem; margin-top:0.25rem;">${prof.name}</h2>
          <div style="color:var(--text-muted); font-weight:600;">Capital: ${prof.capital}</div>
        </div>
      </div>
      <button type="button" class="btn-secondary" onclick="closeCountryProfile()">Cerrar ficha</button>
    </div>

    <div class="v2-detail-grid">
      <div class="v2-detail-cell"><strong>Continente</strong>${prof.continent}</div>
      <div class="v2-detail-cell"><strong>Capital</strong>${prof.capital}</div>
      <div class="v2-detail-cell"><strong>Superficie</strong>${prof.area}</div>
      <div class="v2-detail-cell"><strong>Población aproximada</strong>${prof.pop}</div>
      <div class="v2-detail-cell"><strong>Idiomas</strong>${prof.lang}</div>
      <div class="v2-detail-cell"><strong>Moneda</strong>${prof.currency}</div>
    </div>

    <p style="margin-bottom:0.55rem;"><strong>Geografía y relieve:</strong> ${prof.relief}</p>
    <p style="margin-bottom:0.55rem;"><strong>Clima:</strong> ${prof.climate}</p>
    <p style="margin-bottom:0;"><strong>Curiosidades:</strong> ${prof.fact}</p>
  `;
  box.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

function closeCountryProfile() {
  const box = document.getElementById('profiles-detail-modal');
  if (box) box.style.display = 'none';
}

/* ----------------------------------------------------------------------------
   4. REVOLUCIÓN DE LOS JUEGOS — 7 NUEVOS JUEGOS INTERACTIVOS
   ---------------------------------------------------------------------------- */
const FLAG_POOL = [
  { id: "724", name: "España", info: "Bandera rojigualda con franjas horizontales roja, amarilla (doble ancho) y roja." },
  { id: "250", name: "Francia", info: "Tres franjas verticales de igual anchura: azul, blanco y rojo." },
  { id: "276", name: "Alemania", info: "Tres franjas horizontales: negro, rojo y dorado/amarillo." },
  { id: "380", name: "Italia", info: "Tres franjas verticales: verde, blanco y rojo." },
  { id: "620", name: "Portugal", info: "Verde y rojo con el escudo y la esfera armilar." },
  { id: "826", name: "Reino Unido", info: "Conocida como Union Jack, combina las cruces de San Jorge, San Andrés y San Patricio." },
  { id: "840", name: "Estados Unidos", info: "Trece franjas horizontales rojas y blancas y cantón azul con estrellas." },
  { id: "124", name: "Canadá", info: "Franjas rojas laterales y cuadrado blanco central con hoja de arce roja." },
  { id: "484", name: "México", info: "Tres franjas verticales verde, blanco y rojo con el escudo nacional en el centro." },
  { id: "076", name: "Brasil", info: "Paño verde con rombo amarillo y esfera azul con banda y estrellas." },
  { id: "032", name: "Argentina", info: "Tres franjas horizontales celeste, blanco y celeste con el Sol de Mayo en el centro." },
  { id: "152", name: "Chile", info: "Dos franjas horizontales (blanca y roja) y cantón azul con estrella blanca." },
  { id: "170", name: "Colombia", info: "Franjas horizontales amarilla (mitad superior), azul y roja." },
  { id: "604", name: "Perú", info: "Tres franjas verticales: roja, blanca y roja." },
  { id: "156", name: "China", info: "Fondo rojo con una estrella mayor y cuatro menores en la esquina superior izquierda." },
  { id: "356", name: "India", info: "Tres franjas horizontales azafrán, blanca y verde con la rueda Ashoka en el centro." },
  { id: "392", name: "Japón", info: "Paño blanco con un círculo rojo centrado (Hinomaru)." },
  { id: "818", name: "Egipto", info: "Tres franjas horizontales roja, blanca y negra con emblema dorado central." },
  { id: "710", name: "Sudáfrica", info: "Diseño multicolor con franja verde en forma de Y y bandas roja y azul." },
  { id: "036", name: "Australia", info: "Fondo azul con la Union Jack, estrella de la Mancomunidad y Cruz del Sur." },
  { id: "554", name: "Nueva Zelanda", info: "Fondo azul con la Union Jack y cuatro estrellas rojas con borde blanco." }
];

const RIVERS_QUESTIONS = [
  { river: "Río Amazonas", options: ["América del Sur", "África", "Europa", "Oceanía"], answer: 0, explanation: "El río Amazonas recorre gran parte de América del Sur y es el mayor río por caudal del planeta." },
  { river: "Río Nilo", options: ["América del Norte", "África", "Oceanía", "América del Sur"], answer: 1, explanation: "El Nilo fluye hacia el norte por el noreste de África hasta desembocar en el mar Mediterráneo." },
  { river: "Río Danubio", options: ["Europa", "Asia", "América del Sur", "África"], answer: 0, explanation: "El Danubio atraviesa o bordea numerosos países de Europa central y oriental hasta el mar Negro." },
  { river: "Río Yangtsé (Chang Jiang)", options: ["África", "Asia", "Europa", "América del Norte"], answer: 1, explanation: "El Yangtsé es el río más largo de Asia y fluye íntegramente por China." },
  { river: "Río Misisipi", options: ["América del Norte", "América del Sur", "Europa", "Oceanía"], answer: 0, explanation: "El sistema Misisipi-Misuri vertebra amplias llanuras centrales de América del Norte." },
  { river: "Río Ganges", options: ["Asia", "África", "Europa", "América del Sur"], answer: 0, explanation: "El río Ganges discurre por el norte de la India y Bangladés en Asia meridional." }
];

const RANGES_QUESTIONS = [
  { range: "Cordillera de los Andes", options: ["Oeste de América del Sur", "Norte de África", "Centro de Oceanía", "Este de Europa"], answer: 0, explanation: "Los Andes forman la cordillera continental más larga del mundo a lo largo del borde occidental de América del Sur." },
  { range: "Cordillera del Himalaya", options: ["Asia", "América del Norte", "Europa", "África"], answer: 0, explanation: "El Himalaya se sitúa en Asia y reúne las cumbres más altas de la Tierra, incluido el Everest." },
  { range: "Montañas Rocosas", options: ["América del Norte", "América del Sur", "África", "Oceanía"], answer: 0, explanation: "Las Montañas Rocosas se extienden por el oeste de América del Norte, desde Canadá hasta Estados Unidos." },
  { range: "Los Alpes", options: ["Europa", "Asia", "África", "América del Sur"], answer: 0, explanation: "Los Alpes atraviesan el centro-sur de Europa en países como Francia, Suiza, Italia, Austria y Alemania." },
  { range: "Montes Urales", options: ["Límite tradicional entre Europa y Asia", "Sur de África", "Centro de Australia", "Norte de América del Sur"], answer: 0, explanation: "Los montes Urales se consideran tradicionalmente un límite geográfico natural entre Europa y Asia." }
];

const OCEANS_QUESTIONS = [
  { body: "Océano Pacífico", options: ["El océano más extenso de la Tierra", "Un mar interior de Europa", "Un lago de América del Sur", "Una cordillera asiática"], answer: 0, explanation: "El océano Pacífico es el mayor y más profundo de los océanos del planeta." },
  { body: "Mar Mediterráneo", options: ["Mar entre Europa, Asia y África", "Océano al sur de Australia", "Río de América del Norte", "Desierto de Asia central"], answer: 0, explanation: "El mar Mediterráneo conecta el Atlántico con las costas meridionales de Europa, occidentales de Asia y septentrionales de África." },
  { body: "Océano Índico", options: ["Baña el sur de Asia, el este de África y el oeste de Australia", "Rodea exclusivamente a Groenlandia", "Cruza el centro de Europa", "Se sitúa entre Chile y Perú"], answer: 0, explanation: "El océano Índico limita al norte con Asia, al oeste con África y al este con Australia y el sudeste asiático." },
  { body: "Mar Caribe", options: ["Mar situado en América (entre América del Norte/Central y del Sur)", "Mar situado en el norte de Rusia", "Océano polar antártico", "Golfo en el centro de África"], answer: 0, explanation: "El mar Caribe se ubica en la región americana, bañado por costas de América Central, América del Norte y América del Sur." }
];

const CITIES_QUESTIONS = [
  { city: "Tokio", options: ["Japón", "Corea del Sur", "Tailandia", "Filipinas"], answer: 0, explanation: "Tokio es la capital y mayor área metropolitana de Japón." },
  { city: "São Paulo", options: ["Brasil", "Argentina", "Chile", "Uruguay"], answer: 0, explanation: "São Paulo es una de las mayores metrópolis de América del Sur y se encuentra en Brasil." },
  { city: "El Cairo", options: ["Egipto", "Marruecos", "Túnez", "Kenia"], answer: 0, explanation: "El Cairo es la capital de Egipto, junto al valle y delta del río Nilo." },
  { city: "Nueva York", options: ["Estados Unidos", "Canadá", "Reino Unido", "Irlanda"], answer: 0, explanation: "Nueva York es una de las ciudades más pobladas e influyentes de Estados Unidos en la costa atlántica." },
  { city: "Sídney", options: ["Australia", "Nueva Zelanda", "Fiyi", "Papúa Nueva Guinea"], answer: 0, explanation: "Sídney es la ciudad más poblada de Australia, situada en su costa sureste." }
];

const TRUE_FALSE_QUESTIONS = [
  { statement: "Canberra es la capital de Australia.", isTrue: true, explanation: "Verdadero: Canberra es la capital federal de Australia." },
  { statement: "El río Amazonas fluye por Europa central.", isTrue: false, explanation: "Falso: el río Amazonas se encuentra en América del Sur." },
  { statement: "La cordillera de los Andes se extiende por el oeste de América del Sur.", isTrue: true, explanation: "Verdadero: los Andes recorren el borde occidental de América del Sur." },
  { statement: "Islandia está situada en el océano Índico.", isTrue: false, explanation: "Falso: Islandia se ubica en el Atlántico Norte." },
  { statement: "El idioma oficial principal de Brasil es el portugués.", isTrue: true, explanation: "Verdadero: el portugués es el idioma oficial de Brasil." },
  { statement: "El desierto del Sáhara se localiza en el norte de África.", isTrue: true, explanation: "Verdadero: el Sáhara se extiende por el norte de África." }
];

const WORLD_CHALLENGE_QUESTIONS = [
  { q: "¿Cuál es la capital de Canadá?", options: ["Toronto", "Vancouver", "Ottawa", "Montreal"], answer: 2, explanation: "La capital de Canadá es Ottawa." },
  { q: "¿En qué continente se encuentra Marruecos?", options: ["África", "Europa", "Asia", "América del Sur"], answer: 0, explanation: "Marruecos está situado en el norte de África." },
  { q: "¿Qué país tiene como capital a Buenos Aires?", options: ["Uruguay", "Argentina", "Paraguay", "Chile"], answer: 1, explanation: "Buenos Aires es la capital de Argentina." },
  { q: "¿Cuál es la capital de Noruega?", options: ["Oslo", "Estocolmo", "Copenhague", "Helsinki"], answer: 0, explanation: "Oslo es la capital de Noruega." },
  { q: "¿En qué continente se ubica Nueva Zelanda?", options: ["Oceanía", "Asia", "América del Norte", "África"], answer: 0, explanation: "Nueva Zelanda forma parte de Oceanía." },
  { q: "¿Cuál es la capital de Turquía?", options: ["Estambul", "Ankara", "Esmirna", "Antalya"], answer: 1, explanation: "La capital de Turquía es Ankara." }
];

let currentNewGame = "flags";
let newGameState = {
  score: 0,
  answered: 0,
  currentItem: null,
  locked: false
};

function openSpecificNewGame(gameId) {
  switchView('games');
  selectNewGame(gameId);
}

function selectNewGame(gameId) {
  currentNewGame = gameId;
  document.querySelectorAll('.v2-game-tab').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.newgame === gameId);
  });
  resetNewGame();
}

function resetNewGame() {
  newGameState.score = 0;
  newGameState.answered = 0;
  newGameState.locked = false;
  nextNewGameRound();
}

function nextNewGameRound() {
  newGameState.locked = false;
  const stage = document.getElementById('new-game-stage');
  if (!stage) return;

  if (currentNewGame === "flags") {
    const pool = shuffle(FLAG_POOL);
    const target = pool[0];
    const choices = shuffle([target, ...pool.slice(1, 4)]);
    newGameState.currentItem = { target, choices };

    stage.innerHTML = `
      <div class="v2-game-topbar">
        <div><strong>Adivina la bandera</strong> · Selecciona el país al que pertenece</div>
        <div style="display:flex; gap:0.6rem; align-items:center;">
          <span class="progress-pill">Aciertos: ${newGameState.score} / ${newGameState.answered}</span>
          <button type="button" class="btn-secondary" onclick="resetNewGame()">Reiniciar partida</button>
        </div>
      </div>
      <div class="v2-flag-stage-box">
        ${renderFlagSvg(target.id, 'v2-large-flag')}
        <div style="color:var(--text-muted); font-size:0.9rem;">¿A qué país corresponde esta bandera?</div>
      </div>
      <div class="v2-options-grid">
        ${choices.map(ch => `
          <button type="button" class="v2-choice-btn" onclick="checkFlagAnswer('${ch.id}', '${target.id}', this)">${ch.name}</button>
        `).join('')}
      </div>
      <div id="new-game-feedback" style="margin-top:1rem; font-weight:700;"></div>
      <div id="new-game-next-wrap" style="margin-top:0.85rem;"></div>
    `;
  } else if (currentNewGame === "truefalse") {
    const item = shuffle(TRUE_FALSE_QUESTIONS)[0];
    newGameState.currentItem = item;
    stage.innerHTML = `
      <div class="v2-game-topbar">
        <div><strong>Verdadero o falso geográfico</strong></div>
        <div style="display:flex; gap:0.6rem; align-items:center;">
          <span class="progress-pill">Aciertos: ${newGameState.score} / ${newGameState.answered}</span>
          <button type="button" class="btn-secondary" onclick="resetNewGame()">Reiniciar partida</button>
        </div>
      </div>
      <h3 style="font-size:1.25rem; margin-bottom:0.5rem;">${item.statement}</h3>
      <div class="v2-options-grid" style="max-width:460px;">
        <button type="button" class="v2-choice-btn" onclick="checkTrueFalse(true, this)">Verdadero</button>
        <button type="button" class="v2-choice-btn" onclick="checkTrueFalse(false, this)">Falso</button>
      </div>
      <div id="new-game-feedback" style="margin-top:1rem; font-weight:700;"></div>
      <div id="new-game-next-wrap" style="margin-top:0.85rem;"></div>
    `;
  } else {
    const bankMap = {
      rivers: { title: "Localiza los ríos", promptPrefix: "Río: ", list: RIVERS_QUESTIONS },
      ranges: { title: "Encuentra las cordilleras", promptPrefix: "Cordillera / relieve: ", list: RANGES_QUESTIONS },
      oceans: { title: "Identifica los océanos y mares", promptPrefix: "Masa de agua: ", list: OCEANS_QUESTIONS },
      cities: { title: "Localiza grandes ciudades", promptPrefix: "Ciudad: ", list: CITIES_QUESTIONS },
      challenge: { title: "Desafío mundial de preguntas", promptPrefix: "", list: WORLD_CHALLENGE_QUESTIONS }
    };
    const cfg = bankMap[currentNewGame] || bankMap.challenge;
    const item = shuffle(cfg.list)[0];
    newGameState.currentItem = item;
    const headingText = item.q || (cfg.promptPrefix + (item.river || item.range || item.body || item.city));

    stage.innerHTML = `
      <div class="v2-game-topbar">
        <div><strong>${cfg.title}</strong></div>
        <div style="display:flex; gap:0.6rem; align-items:center;">
          <span class="progress-pill">Aciertos: ${newGameState.score} / ${newGameState.answered}</span>
          <button type="button" class="btn-secondary" onclick="resetNewGame()">Reiniciar partida</button>
        </div>
      </div>
      <h3 style="font-size:1.22rem; margin-bottom:0.4rem;">${headingText}</h3>
      <div class="v2-options-grid">
        ${item.options.map((opt, idx) => `
          <button type="button" class="v2-choice-btn" onclick="checkMcqAnswer(${idx}, this)">${opt}</button>
        `).join('')}
      </div>
      <div id="new-game-feedback" style="margin-top:1rem; font-weight:700;"></div>
      <div id="new-game-next-wrap" style="margin-top:0.85rem;"></div>
    `;
  }
}

function showNextGameButton(htmlMsg, isCorrect) {
  const fb = document.getElementById('new-game-feedback');
  const nextWrap = document.getElementById('new-game-next-wrap');
  if (fb) {
    fb.style.color = isCorrect ? '#15803d' : '#b91c1c';
    fb.textContent = htmlMsg;
  }
  if (nextWrap) {
    nextWrap.innerHTML = `<button type="button" class="btn-primary" onclick="nextNewGameRound()">Siguiente pregunta →</button>`;
  }
}

function checkFlagAnswer(chosenId, targetId, btnEl) {
  if (newGameState.locked) return;
  newGameState.locked = true;
  newGameState.answered += 1;

  const targetObj = FLAG_POOL.find(f => f.id === targetId) || { name: "País", info: "" };
  const ok = chosenId === targetId;
  if (ok) {
    newGameState.score += 1;
    btnEl.classList.add('correct');
    showNextGameButton(`¡Correcto! Es ${targetObj.name}. ${targetObj.info}`, true);
  } else {
    btnEl.classList.add('incorrect');
    showNextGameButton(`Incorrecto. La respuesta correcta es ${targetObj.name}. ${targetObj.info}`, false);
  }
}

function checkTrueFalse(userChoice, btnEl) {
  if (newGameState.locked) return;
  newGameState.locked = true;
  newGameState.answered += 1;

  const item = newGameState.currentItem;
  const ok = userChoice === item.isTrue;
  if (ok) {
    newGameState.score += 1;
    btnEl.classList.add('correct');
    showNextGameButton(`¡Correcto! ${item.explanation}`, true);
  } else {
    btnEl.classList.add('incorrect');
    showNextGameButton(`Incorrecto. ${item.explanation}`, false);
  }
}

function checkMcqAnswer(chosenIdx, btnEl) {
  if (newGameState.locked) return;
  newGameState.locked = true;
  newGameState.answered += 1;

  const item = newGameState.currentItem;
  const ok = chosenIdx === item.answer;
  const allBtns = document.querySelectorAll('#new-game-stage .v2-choice-btn');
  if (allBtns[item.answer]) allBtns[item.answer].classList.add('correct');

  if (ok) {
    newGameState.score += 1;
    showNextGameButton(`¡Correcto! ${item.explanation}`, true);
  } else {
    btnEl.classList.add('incorrect');
    showNextGameButton(`Incorrecto. ${item.explanation}`, false);
  }
}

function initGeoAtlasV2() {
  renderLearnSection();
  applyAtlasLayer(currentAtlasLayer);
  renderCountryProfiles();
  resetNewGame();
}
