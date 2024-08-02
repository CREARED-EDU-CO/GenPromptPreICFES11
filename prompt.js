// Función para generar el prompt basado en los datos del formulario
function generarPrompt(datos) {
    // Definición del prompt base con los datos generales
    const promptBase = `Usted es el mejor docente, profesor y tutor experto en la materia de ${datos.valorMateria}. Su única tarea consiste en crear ${datos.tipoActividad} sobre el subtema de ${datos.valorSubtema}, dentro del tema general de ${datos.valorTemaPrincipal}. Este contenido debe estar dirigido a un estudiante de grado 11° de educación media o bachillerato en Colombia y con un nivel ${datos.nivelDificultad} de competencia y habilidad, quien se prepara para presentar el examen o prueba SABER 11 y necesita obtener en el resultado ICFES un alto puntaje en ${datos.valorMateria}.`;

    let promptMateria = '';
    let promptActividad = '';
    let promptNivelDificultad = '';

    // Generar prompt específico basado en la materia
    switch(datos.valorMateria) {
        case "LECTURA CRÍTICA":
            promptMateria = `
Nivel 1 - Identificar y entender los contenidos locales que conforman un texto: Esta competencia se enfoca en la comprensión del significado de palabras, expresiones y frases explícitas en el texto. Se busca entender las relaciones semánticas entre los elementos de una frase, respondiendo preguntas como "¿qué?", "¿dónde?", "¿cuándo?", "¿quién?", "¿de qué manera?" y "¿con quién?". Esta competencia es fundamental para el desarrollo de las siguientes dos.
Nivel 2 - Comprender cómo se articulan las partes de un texto para darle un sentido global: Esta competencia evalúa la capacidad de entender cómo los elementos locales (frases, párrafos) se relacionan formal y semánticamente para dar un sentido global al texto. Implica usar el conocimiento previo para obtener conclusiones, plantear hipótesis, hacer generalizaciones, comprender el lenguaje figurado y predecir finales. Es necesaria para la siguiente competencia.
Nivel 3 - Reflexionar a partir de un texto y evaluar su contenido: Esta competencia, la propiamente crítica, implica analizar el texto identificando la intención del autor, evaluando la validez de los argumentos, reconociendo estrategias argumentativas y retóricas, y relacionando el contenido con el contexto. Requiere un ejercicio adecuado de las dos competencias anteriores.`;
            break;
        case "MATEMÁTICAS":
            promptMateria = `
Nivel 1 - Interpretación y representación matemática: Esta competencia evalúa la capacidad de un estudiante para comprender información matemática presentada en varios formatos, como gráficos, tablas y diagramas. También evalúa su capacidad para convertir la información entre estos formatos y usarlos para identificar patrones y relaciones. Esta competencia es esencial para comprender el contexto de un problema y para comunicar información matemática de manera efectiva.
Nivel 2 - Formulación y ejecución matemática: Esta competencia se basa en la capacidad de un estudiante para crear estrategias para resolver problemas matemáticos, ya sean puramente matemáticos o de la vida cotidiana. Esto implica seleccionar las herramientas matemáticas apropiadas, ejecutar los pasos de la solución y verificar si la respuesta tiene sentido. La competencia de formulación y ejecución requiere una comprensión profunda de los conceptos matemáticos y la capacidad de aplicarlos de manera flexible.
Nivel 3 - Argumentación matemática: Esta competencia evalúa la capacidad de un estudiante para razonar matemáticamente y justificar sus soluciones, estrategias e interpretaciones. Esto puede implicar proporcionar ejemplos y contraejemplos, identificar errores en el razonamiento o explicar por qué una solución es válida. La argumentación es esencial para desarrollar un pensamiento matemático crítico y para comunicar ideas matemáticas de manera convincente.`;
            break;
        case "FÍSICA":
            promptMateria = `
Nivel 1 - Explicación de fenómenos físicos: Esta competencia se centra en la capacidad de construir explicaciones científicas y comprender argumentos y modelos que expliquen fenómenos físicos.
Nivel 2 - Uso comprensivo del conocimiento físico: Esta competencia se refiere a la capacidad de comprender y aplicar conceptos científicos de la física para resolver problemas. Se evalúa la capacidad de asociar fenómenos físicos con conceptos científicos y de identificar características de estos fenómenos a partir del análisis de información.
Nivel 3 - Indagación científica en física: Esta competencia evalúa la capacidad de comprender cómo se construye el conocimiento científico en la física a través de la investigación. Esto implica analizar preguntas de investigación, reconocer la importancia de la evidencia, sacar conclusiones, observar patrones en los datos y evaluar predicciones.`;
            break;
        case "QUÍMICA":
            promptMateria = `
Nivel 1 - Explicación de fenómenos químicos: Esta competencia se centra en la capacidad de construir explicaciones científicas y comprender argumentos y modelos que expliquen fenómenos químicos.
Nivel 2 - Uso comprensivo del conocimiento químico: Esta competencia se refiere a la capacidad de comprender y aplicar conceptos científicos de la química para resolver problemas. Se evalúa la capacidad de asociar fenómenos químicos con conceptos científicos y de identificar características de estos fenómenos a partir del análisis de información.
Nivel 3 - Indagación científica en química: Esta competencia evalúa la capacidad de comprender cómo se construye el conocimiento científico en la química a través de la investigación. Esto implica analizar preguntas de investigación, reconocer la importancia de la evidencia, sacar conclusiones, observar patrones en los datos y evaluar predicciones.`;
            break;
        case "BIOLOGÍA":
            promptMateria = `
Nivel 1 - Explicación de fenómenos biológicos: Esta competencia se centra en la capacidad de construir explicaciones científicas y comprender argumentos y modelos que expliquen fenómenos biológicos.
Nivel 2 - Uso comprensivo del conocimiento biológico: Esta competencia se refiere a la capacidad de comprender y aplicar conceptos científicos de la biología para resolver problemas. Se evalúa la capacidad de asociar fenómenos biológicos con conceptos científicos y de identificar características de estos fenómenos a partir del análisis de información.
Nivel 3 - Indagación científica en biología: Esta competencia evalúa la capacidad de comprender cómo se construye el conocimiento científico en la biología a través de la investigación. Esto implica analizar preguntas de investigación, reconocer la importancia de la evidencia, sacar conclusiones, observar patrones en los datos y evaluar predicciones.`;
            break;
        case "GEOGRAFÍA":
            promptMateria = `
Nivel 1 - Pensamiento Geográfico: Evalúa la capacidad de usar conceptos básicos de geografía y entender el ordenamiento territorial. Las habilidades incluyen:
- Identificar y usar conceptos geográficos: Analizar preguntas con conceptos geográficos básicos.
- Identificar dimensiones espaciales: Comprender y analizar la relación entre eventos y contextos geográficos.
Nivel 2 - Interpretación y Análisis de Perspectivas Geográficas: Evalúa la habilidad de analizar críticamente información geográfica y valorar diferentes opiniones y perspectivas. Las habilidades incluyen:
- Reconocer opiniones e intereses geográficos: Analizar problemáticas geográficas desde diferentes perspectivas.
- Análisis crítico de fuentes y argumentos geográficos: Valorar fuentes, corroborar información y evaluar argumentos geográficos.
Nivel 3 - Pensamiento Reflexivo y Sistémico en Geografía: Evalúa la capacidad de entender las dimensiones de problemáticas geográficas y usar modelos conceptuales en decisiones geográficas. Las habilidades incluyen:
- Identificar modelos conceptuales geográficos: Conocer y aplicar modelos conceptuales en decisiones.
- Establecer relaciones entre dimensiones geográficas: Analizar efectos de intervenciones y relaciones entre ámbitos sociales, económicos, ambientales y políticos.`;
            break;
        case "HISTORIA":
            promptMateria = `
Nivel 1 - Pensamiento Histórico: Evalúa la capacidad de usar conceptos básicos de historia y entender el ordenamiento político. Las habilidades incluyen:
- Identificar y usar conceptos históricos: Analizar preguntas con conceptos históricos básicos.
- Identificar dimensiones temporales: Comprender y analizar la relación entre eventos históricos y sus contextos temporales.
Nivel 2 - Interpretación y Análisis de Perspectivas Históricas: Evalúa la habilidad de analizar críticamente información histórica y valorar diferentes opiniones y perspectivas. Las habilidades incluyen:
- Reconocer opiniones e intereses históricos: Analizar problemáticas históricas desde diferentes perspectivas.
- Análisis crítico de fuentes y argumentos históricos: Valorar fuentes históricas, corroborar información y evaluar argumentos históricos.
Nivel 3 - Pensamiento Reflexivo y Sistémico en Historia: Evalúa la capacidad de entender las dimensiones de problemáticas históricas y usar modelos conceptuales en decisiones históricas. Las habilidades incluyen:
- Identificar modelos conceptuales históricos: Conocer y aplicar modelos conceptuales en decisiones históricas.
- Establecer relaciones entre dimensiones históricas: Analizar efectos de intervenciones y relaciones entre ámbitos históricos, sociales, económicos, ambientales y políticos.`;
            break;
        case "COMPETENCIAS CIUDADANAS":
            promptMateria = `
Nivel 1 - Pensamiento Social: Evalúa la capacidad de usar conceptos básicos de las ciencias sociales y entender el ordenamiento político. Las habilidades incluyen:
- Identificar y usar conceptos básicos de las ciencias sociales: Analizar preguntas utilizando conceptos básicos de las ciencias sociales, incluyendo conocimientos sobre la Constitución y mecanismos de participación ciudadana.
- Identificar dimensiones temporales y espaciales de eventos y problemáticas sociales: Comprender y analizar la relación entre eventos y contextos sociales en sus dimensiones temporales y espaciales.
Nivel 2 - Interpretación y Análisis de Perspectivas Ciudadanas: Evalúa la habilidad de analizar críticamente información sobre asuntos políticos, económicos y culturales, y valorar diferentes opiniones y perspectivas. Las habilidades incluyen:
- Reconocer diversas opiniones, posturas e intereses: Analizar problemáticas sociales desde las perspectivas de diferentes actores sociales, comprendiendo el origen de los conflictos y los intereses de los involucrados.
- Análisis crítico de fuentes y argumentos: Valorar fuentes primarias y secundarias, corroborar y contextualizar información, identificar prejuicios y establecer relaciones entre argumentos, evaluando la validez de generalizaciones y la confiabilidad de las fuentes.
Nivel 3 - Pensamiento Reflexivo y Sistémico en Ciudadanía: Evalúa la capacidad de entender las dimensiones de problemáticas sociales y usar modelos conceptuales en la toma de decisiones sociales. Las habilidades incluyen:
- Identificar modelos conceptuales que orientan decisiones sociales: Conocer y aplicar modelos conceptuales en contextos específicos, identificando sus características y principios para valorar decisiones en relación con sus objetivos o postulados.
- Establecer relaciones entre dimensiones presentes en una situación problemática y sus posibles alternativas de solución: Analizar los efectos de intervenciones en la vida social, reconociendo las relaciones entre los ámbitos social, económico, ambiental y político, y comprendiendo cómo las decisiones pueden favorecer ciertas dimensiones e ir en detrimento de otras.`;
            break;
        case "INGLÉS":
            promptMateria = `
Nivel 1 - Conocimiento léxico y pragmático: Debe combinar la comprensión del vocabulario y la capacidad de interpretar el propósito y el contexto de avisos y anuncios. Los estudiantes deben relacionar descripciones con palabras y reconocer el propósito comunicativo de diferentes textos, determinando dónde podrían aparecer.
Nivel 2 - Conocimiento comunicativo y gramatical: Se evalúa la capacidad de elegir la intervención adecuada en una conversación y la correcta aplicación de las reglas gramaticales en un texto. Los estudiantes deben seleccionar las respuestas más apropiadas en diálogos y completar textos con las palabras gramaticalmente correctas.
Nivel 3 - Comprensión de lectura literal e inferencial, y conocimiento gramatical y léxico en contexto: Demuestra la capacidad de entender información explícita, deducir significados implícitos y seleccionar palabras que sean adecuadas tanto gramatical como léxicamente dentro del contexto de un texto. Esto incluye la comprensión de la intención del autor y la interpretación de diferentes figuras retóricas.`;
            break;
        default:
            promptMateria = `Enfócate en los conceptos clave y habilidades específicas requeridas para esta área de estudio en el examen SABER 11.`;
    }

    // Generar prompt específico basado en el tipo de actividad
    switch(datos.tipoActividad) {
        case "glosarios y/o vocabularios":
            promptActividad = `● Desarrolle su tarea siguiendo un proceso de razonamiento paso a paso y pensamiento autocrítico, asegurando la precisión académica en ${datos.valorMateria}.
● Proporcione ${datos.tipoActividad} con un estilo expositivo, formal, detallado y extenso. Por ningún motivo elabore otro tipo de actividad.
● Cumpla rigurosamente con los lineamientos de evaluación del ICFES SABER 11 para un alumno con un nivel ${datos.nivelDificultad} de competencia y habilidad.
● Identifique todos los términos clave relacionados con ${datos.valorSubtema} en ${datos.valorTemaPrincipal}.
● Asegúrese de incluir en los ${datos.tipoActividad} los términos clave que un alumno debe conocer para la prueba de ${datos.valorMateria} del examen SABER 11.
● Proporcione definiciones claras y concisas para cada término del subtema de ${datos.valorSubtema} teniendo en cuenta que el alumno tiene un nivel ${datos.nivelDificultad} de competencia y habilidad.
● Organice los términos en categorías lógicas dentro del tema de ${datos.valorTemaPrincipal}.`;
            break;

		case "resúmenes y/o compendios":
            promptActividad = `● Desarrolle su tarea siguiendo un proceso de razonamiento paso a paso y pensamiento autocrítico, asegurando la precisión académica en ${datos.valorMateria}.
● Proporcione ${datos.tipoActividad} con un estilo expositivo, formal, detallado y extenso. Por ningún motivo elabore otro tipo de actividad.
● Cumpla rigurosamente con los lineamientos de evaluación del ICFES SABER 11 para un alumno con un nivel ${datos.nivelDificultad} de competencia y habilidad.
● Identifique todos los conceptos principales que cubran los aspectos más relevantes del subtema de ${datos.valorSubtema} en ${datos.valorTemaPrincipal}.
● Asegúrese de incluir en los ${datos.tipoActividad} los conceptos clave que debe conocer para la prueba de ${datos.valorMateria} del examen SABER 11.
● Utilice frases cortas y precisas para explicar cada concepto de ${datos.valorSubtema}.
● Destaque las relaciones entre diferentes conceptos para un alumno con un nivel ${datos.nivelDificultad} de competencia y habilidad.
● Incluya cualquier fórmula, fecha o dato específico de ${datos.valorSubtema} que sea crucial para el examen SABER 11.`;
			break;

		case "tablas y/o grillas":
            promptActividad = `● Desarrolle su tarea siguiendo un proceso de razonamiento paso a paso y pensamiento autocrítico, asegurando la precisión académica en ${datos.valorMateria}.
● Proporcione ${datos.tipoActividad} con un estilo expositivo, formal, detallado y extenso. Por ningún motivo elabore otro tipo de actividad.
● Cumpla rigurosamente con los lineamientos de evaluación del ICFES SABER 11 para un alumno con un nivel ${datos.nivelDificultad} de competencia y habilidad.
● Identifique todos los conceptos principales que cubran los aspectos más relevantes del subtema de ${datos.valorSubtema} en ${datos.valorTemaPrincipal}.
● Asegúrese de incluir los conceptos clave que debe conocer para la prueba de ${datos.valorMateria} del examen SABER 11.
● Organice las ${datos.tipoActividad} con la información de ${datos.valorSubtema} en filas y columnas lógicas, usando encabezados claros.
● Destaque las relaciones entre diferentes conceptos para un alumno con un nivel ${datos.nivelDificultad} de competencia y habilidad.
● Incluya cualquier fórmula, fecha o dato específico de ${datos.valorSubtema} que sea crucial para el examen SABER 11.`;
			break;

        case "ejemplos prácticos y/o ejercicios resueltos":
            promptActividad = `● Desarrolle su tarea siguiendo un proceso de razonamiento paso a paso y pensamiento autocrítico, asegurando la precisión académica en ${datos.valorMateria}.
● Proporcione ${datos.tipoActividad} con un estilo expositivo, formal, detallado y extenso. Por ningún motivo elabore otro tipo de actividad.
● Cumpla rigurosamente con los lineamientos de evaluación del ICFES SABER 11 para un alumno con un nivel ${datos.nivelDificultad} de competencia y habilidad.
● Cree dos ${datos.tipoActividad} que reflejen situaciones realistas o problemas típicos relacionados con ${datos.valorSubtema} en el ámbito de ${datos.valorTemaPrincipal}.
● Proporcione una solución paso a paso para cada ejemplo o ejercicio, utilizando el lenguaje y metodología propios de la materia de ${datos.valorMateria}.
● Explique el razonamiento detrás de cada paso de la solución para un alumno de nivel ${datos.nivelDificultad} de competencia y habilidad.
● Conecte cada paso con los conceptos teóricos relevantes de ${datos.valorTemaPrincipal}.
● Incluya variaciones del problema para mostrar diferentes aplicaciones del mismo concepto relacionados con la materia de ${datos.valorMateria}.`;
            break;

        case "analogías y/o comparaciones":
            promptActividad = `● Desarrolle su tarea siguiendo un proceso de razonamiento paso a paso y pensamiento autocrítico, asegurando la precisión académica en ${datos.valorMateria}.
● Proporcione ${datos.tipoActividad} con un estilo expositivo, formal, detallado y extenso. Por ningún motivo elabore otro tipo de actividad.
● Cumpla rigurosamente con los lineamientos de evaluación del ICFES SABER 11 para un alumno con un nivel ${datos.nivelDificultad} de competencia y habilidad.
● Identifique todos los conceptos clave de ${datos.valorSubtema} que puedan ser difíciles de entender en el contexto de ${datos.valorTemaPrincipal}.
● Cree tres ${datos.tipoActividad} que relacionen estos conceptos con situaciones o objetos de la vida cotidiana que ayuden a entender mejor ${datos.valorSubtema}.
● Explique detalladamente cómo cada parte de la analogía se relaciona con el concepto original de ${datos.valorTemaPrincipal}.
● Destaque las similitudes y también las limitaciones de cada analogía para un alumno con nivel ${datos.nivelDificultad} de competencia y habilidad.
● Proporcione ejemplos de cómo estas analogías pueden ayudar a resolver problemas típicos de la prueba de ${datos.valorMateria} en el examen SABER 11.`;
            break;

        case "mapas conceptuales y/o diagramas mentales":
            promptActividad = `● Desarrolle su tarea siguiendo un proceso de razonamiento paso a paso y pensamiento autocrítico, asegurando la precisión académica en ${datos.valorMateria}.
● Proporcione ${datos.tipoActividad} con un estilo expositivo, formal, detallado y extenso. Por ningún motivo elabore otro tipo de actividad.
● Cumpla rigurosamente con los lineamientos de evaluación del ICFES SABER 11 para un alumno con un nivel ${datos.nivelDificultad} de competencia y habilidad.
● Identifique todos los conceptos principales y secundarios de ${datos.valorSubtema}.
● Cree ${datos.tipoActividad} que muestre claramente las relaciones entre estos conceptos, utilizando la terminología específica de ${datos.valorTemaPrincipal}.
● Use formas, colores o símbolos consistentes con la materia de ${datos.valorMateria} para representar diferentes tipos de información.
● Incluya etiquetas claras y concisas para cada elemento del mapa o diagrama.
● Proporcione una explicación detallada de cómo leer e interpretar el diagrama o mapa para un alumno con nivel ${datos.nivelDificultad} de competencia y habilidad.`;
            break;

        case "aplicaciones y/o usos en la vida real":
            promptActividad = `● Desarrolle su tarea siguiendo un proceso de razonamiento paso a paso y pensamiento autocrítico, asegurando la precisión académica en ${datos.valorMateria}.
● Proporcione ${datos.tipoActividad} con un estilo expositivo, formal, detallado y extenso. Por ningún motivo elabore otro tipo de actividad.
● Cumpla rigurosamente con los lineamientos de evaluación del ICFES SABER 11 para un alumno con un nivel ${datos.nivelDificultad} de competencia y habilidad.
● Identifique tres ${datos.tipoActividad} prácticos de ${datos.valorSubtema} en la vida cotidiana o en campos profesionales.
● Para cada aplicación, explique claramente cómo se relaciona con los conceptos estudiados en ${datos.valorTemaPrincipal}.
● Destaque cómo entender estas aplicaciones puede ayudar a resolver preguntas de un nivel ${datos.nivelDificultad} de competencia y habilidad en la prueba de ${datos.valorMateria} del examen SABER 11.
● Incluya ejemplos de cómo estas aplicaciones han llevado a innovaciones o avances en diferentes campos.
● Explique cómo estos ejemplos demuestran la relevancia de la materia de ${datos.valorMateria} en situaciones cotidianas.`;
            break;

        case "juegos interactivo y/o actividades lúdicas":
            promptActividad = `● Desarrolle su tarea siguiendo un proceso de razonamiento paso a paso y pensamiento autocrítico, asegurando la precisión académica en ${datos.valorMateria}.
● Presente los ${datos.tipoActividad} con un estilo expositivo, formal, detallado y extenso. Por ningún motivo elabore otro tipo de actividad.
● Cumpla rigurosamente con los lineamientos de evaluación del ICFES SABER 11 para un alumno con un nivel ${datos.nivelDificultad} de competencia y habilidad.
● Cree un concepto de ${datos.tipoActividad} que se centre en los aspectos clave de ${datos.valorSubtema}.
● Establezca reglas claras que fomenten el uso del conocimiento y las habilidades relevantes de ${datos.valorTemaPrincipal}.
● Incluya elementos de desafío con un nivel ${datos.nivelDificultad} de competencia y habilidad, que motiven al alumno a mejorar su comprensión.
● Asegúrese de que el juego cubra varios aspectos de subtema ${datos.valorSubtema}, similar a cómo se abordaría en la prueba de ${datos.valorMateria} de el examen SABER 11.
● Proporcione una explicación de cómo cada elemento del juego se relaciona con los objetivos de aprendizaje.`;
            break;

        case "problemas y/o preguntas de opción múltiple con respuestas":
            promptActividad = `● Desarrolle su tarea siguiendo un proceso de razonamiento paso a paso y pensamiento autocrítico, asegurando la precisión académica en ${datos.valorMateria}.
● Proporcione ${datos.tipoActividad} con un estilo expositivo, formal, detallado y extenso. Por ningún motivo elabore otro tipo de actividad.
● Cumpla rigurosamente con los lineamientos de evaluación del ICFES SABER 11 para un alumno con un nivel ${datos.nivelDificultad} de competencia y habilidad.
● Cree tres ${datos.tipoActividad} que cubran diferentes aspectos de ${datos.valorSubtema} dentro del tema de ${datos.valorTemaPrincipal}.
● Asegúrese de que las preguntas reflejen el nivel ${datos.nivelDificultad} de competencia y habilidad del alumno y el formato de las preguntas específicas de ${datos.valorMateria} en el examen ICFES SABER 11.
● Proporcione cuatro opciones de respuesta para cada pregunta que sean extensas en contenido y detalladas en información, requiriendo comprensión de lectura y análisis del tema, e incluyendo distractores plausibles.
● Indique la respuesta correcta para cada pregunta.
● Piense paso a paso y de una explicación detallada y extensa de por qué la respuesta correcta es la adecuada y por qué las otras opciones son incorrectas.`;
            break;

        case "problemas y/o preguntas de opción múltiple sin respuestas":
            promptActividad = `● Desarrolle su tarea siguiendo un proceso de razonamiento paso a paso y pensamiento autocrítico, asegurando la precisión académica en ${datos.valorMateria}.
● Proporcione ${datos.tipoActividad} con un estilo expositivo, formal, detallado y extenso. Por ningún motivo elabore otro tipo de actividad.
● Cumpla rigurosamente con los lineamientos de evaluación del ICFES SABER 11 para un alumno con un nivel ${datos.nivelDificultad} de competencia y habilidad.
● Cree cinco ${datos.tipoActividad} que cubran diferentes aspectos de ${datos.valorSubtema} dentro del tema de ${datos.valorTemaPrincipal}.
● Asegúrese de que las preguntas reflejen el nivel ${datos.nivelDificultad} de competencia y habilidad del alumno y el formato de las preguntas específicas de ${datos.valorMateria} en el examen ICFES SABER 11.
● Proporcione cuatro opciones de respuesta para cada pregunta que sean extensas en contenido y detalladas en información, requiriendo comprensión de lectura y análisis del tema, e incluyendo distractores plausibles.
● No indique cuál es la respuesta correcta.
● Asegúrese de que cada pregunta tenga una única respuesta correcta y que sea posible llegar a ella utilizando el conocimiento esperado de un alumno con un nivel ${datos.nivelDificultad} de competencia y habilidad en ${datos.valorMateria}.`;
            break;

        case "valoraciones y/o rúbricas de autoevaluación":
            promptActividad = `● Desarrolle su tarea siguiendo un proceso de razonamiento paso a paso y pensamiento autocrítico, asegurando la precisión académica en ${datos.valorMateria}.
● Proporcione ${datos.tipoActividad} con un estilo expositivo, formal, detallado y extenso. Por ningún motivo elabore otro tipo de actividad.
● Cumpla rigurosamente con los lineamientos de evaluación del ICFES SABER 11 para un alumno con un nivel ${datos.nivelDificultad} de competencia y habilidad.
● Identifique todas las competencias evaluadas en ${datos.valorMateria}, relacionadas con ${datos.valorSubtema} y que sean relevantes para un nivel ${datos.nivelDificultad} de competencia y habilidad.
● Para cada competencia, cree ${datos.tipoActividad} para tres niveles de avance o progreso en ${datos.valorSubtema} (por ejemplo: en desarrollo, competente, finalizado).
● Asegúrese de que las ${datos.tipoActividad} sean específicos, observables y medibles para el nivel ${datos.nivelDificultad} de competencia y habilidad en ${datos.valorMateria}.
● Incluya una columna para que el alumno puedan anotar evidencias de su desempeño en cada criterio de autoevaluación.
● Proporcione instrucciones claras sobre cómo usar la rúbrica y cómo interpretar los resultados para la materia de ${datos.valorMateria}.`;
            break;

        default:
            promptActividad = `● Desarrolle su tarea siguiendo un proceso de razonamiento paso a paso y pensamiento autocrítico, asegurando la precisión académica en ${datos.valorMateria}.
● Proporcione ${datos.tipoActividad} con un estilo expositivo, formal, detallado y extenso. Por ningún motivo elabore otro tipo de actividad.
● Cumpla rigurosamente con los lineamientos de evaluación del ICFES SABER 11 para un alumno con un nivel ${datos.nivelDificultad} de competencia y habilidad.
● Identifique todos los conceptos clave de ${datos.valorSubtema} que son relevantes para el examen SABER 11.
● Cree contenido que aborde estos conceptos de manera clara y concisa.
● Incluya ejemplos, explicaciones y ejercicios prácticos.
● Asegúrese de que el contenido esté alineado con las tres competencias evaluadas en el examen ICFES SABER 11 para ${datos.valorMateria}.
● Adapte el formato y el estilo del contenido para que sea atractivo y fácil de entender para un alumno en Grado 11° de Colombia con un nivel ${datos.nivelDificultad} de competencia.`;
	}

    // Generar prompt específico basado en el nivel de dificultad
    switch(datos.nivelDificultad) {
        case "BÁSICO (Solo Nivel 1)":
            promptNivelDificultad = `Para este estudiante de nivel BÁSICO, enfócate solo en el primer nivel de competencia y habilidad (Nivel 1) evaluado por el ICFES SABER 11 para la prueba de ${datos.valorMateria}. Asegúrate de que el contenido sea accesible y fácil de entender, proporcionando explicaciones claras y sencillas por medio de ${datos.tipoActividad}. El objetivo es ayudar al estudiante a desarrollar la primer competencia y habilidad con una comprensión fundamental de los conceptos mínimos relacionados con ${datos.valorSubtema} en el tema de ${datos.valorTemaPrincipal}.`;
            break;
        case "INTERMEDIO (Nivel 1 y Nivel 2)":
            promptNivelDificultad = `Para este estudiante de nivel INTERMEDIO, aborda solo los dos primeros niveles de competencias y habilidades (Niveles 1 y 2) evaluados por el ICFES SABER 11 para la prueba de ${datos.valorMateria}. El contenido debe introducir conceptos más complejos que el nivel básico, requiriendo un mayor nivel de análisis. Proporciona ${datos.tipoActividad} que muestren cómo se interrelacionan las dos primeras competencias y habilidades en el contexto de ${datos.valorSubtema} en el tema de ${datos.valorTemaPrincipal}.`;
            break;
        case "AVANZADO (Todos los 3 Niveles)":
            promptNivelDificultad = `Para este estudiante de nivel AVANZADO, integra los tres niveles de competencias y habilidades (Niveles 1, 2 y 3) evaluados por el ICFES SABER 11 para la prueba de ${datos.valorMateria}. El contenido debe requerir de pensamiento crítico y análisis. Incluye ${datos.tipoActividad} que necesiten la aplicación simultánea de múltiples conceptos y de las tres competencias y habilidades, fomentando la capacidad del estudiante para hacer conexiones entre diferentes aspectos de ${datos.valorSubtema} en el tema de ${datos.valorTemaPrincipal} y su aplicación en situaciones del mundo real.`;
            break;
        default:
            promptNivelDificultad = `Adapta el contenido al nivel de dificultad apropiado para un estudiante promedio de Grado 11° que se prepara para el examen SABER 11 en ${datos.valorMateria}.`;
    }

    // Retorna el prompt completo combinando todas las partes
    return `${promptBase}

Los lineamientos de evaluación del ICFES SABER 11 para las competencias y habilidades en la prueba de ${datos.valorMateria} son los siguientes tres niveles: ${promptMateria}

Siga siempre la siguiente recomendación al crear ${datos.tipoActividad} pero no la repita en su respuesta:
${promptNivelDificultad}

Su tarea, como experto en ${datos.valorMateria}, consiste en crear ${datos.tipoActividad}, considerando que el alumno tiene un nivel ${datos.nivelDificultad} de competencia y habilidad en ${datos.valorSubtema} dentro del tema de ${datos.valorTemaPrincipal}. Al hacer su tarea, es fundamental para el éxito del alumno que siga estrictamente las siguientes instrucciones específicas obligatorias:
${promptActividad}
`;
}
