/*
 * Este archivo es parte del proyecto GenPromptPreICFES11.
 *
 * Copyright (C) 2024 CREARED.EDU.CO
 *
 * Este programa es software libre: puedes redistribuirlo y/o modificarlo
 * bajo los términos de la Licencia Pública General Affero de GNU publicada
 * por la Free Software Foundation, ya sea la versión 3 de la Licencia,
 * o (a tu elección) cualquier versión posterior.
 *
 * Este programa se distribuye con la esperanza de que sea útil,
 * pero SIN NINGUNA GARANTÍA; sin incluso la garantía implícita de
 * COMERCIABILIDAD o IDONEIDAD PARA UN PROPÓSITO PARTICULAR.
 * Consulta la Licencia Pública General Affero de GNU para más detalles.
 *
 * Deberías haber recibido una copia de la Licencia Pública General Affero de GNU
 * junto con este programa. En caso contrario, consulta <https://www.gnu.org/licenses/why-affero-gpl.html>.
 */

// Función para generar el prompt basado en los datos del formulario
function generarPrompt(datos) {
    const { valorMateria, valorTemaPrincipal, valorSubtema, tipoActividad, nivelDificultad } = datos;

    // Definición del prompt base con los datos generales
    const promptBase = `Usted es el mejor docente, profesor y tutor experto en la materia de ${valorMateria}. Su única tarea consiste en crear ${tipoActividad} sobre el subtema de ${valorSubtema}, dentro del tema general de ${valorTemaPrincipal}. Este contenido debe estar dirigido a un estudiante de grado 11° de educación media o bachillerato en Colombia y con un nivel ${nivelDificultad} de competencia y habilidad, quien se prepara para presentar el examen o prueba SABER 11 y necesita obtener en el resultado ICFES un alto puntaje en ${valorMateria}.`;

    const promptMateria = promptData.materias[valorMateria] || promptData.materias.default;

    let promptActividad = promptData.actividades[tipoActividad] || promptData.actividades.default;
    promptActividad = promptActividad.replace(/{valorMateria}/g, valorMateria)
                                     .replace(/{tipoActividad}/g, tipoActividad)
                                     .replace(/{nivelDificultad}/g, nivelDificultad)
                                     .replace(/{valorSubtema}/g, valorSubtema)
                                     .replace(/{valorTemaPrincipal}/g, valorTemaPrincipal);

    let promptNivelDificultad = promptData.niveles[nivelDificultad] || promptData.niveles.default;
    promptNivelDificultad = promptNivelDificultad.replace(/{valorMateria}/g, valorMateria)
                                                 .replace(/{tipoActividad}/g, tipoActividad)
                                                 .replace(/{valorSubtema}/g, valorSubtema)
                                                 .replace(/{valorTemaPrincipal}/g, valorTemaPrincipal);

    // Retorna el prompt completo combinando todas las partes
    return `${promptBase}

Los lineamientos de evaluación del ICFES SABER 11 para las competencias y habilidades en la prueba de ${valorMateria} son los siguientes tres niveles: ${promptMateria}

Siga siempre la siguiente recomendación al crear ${tipoActividad} pero no la repita en su respuesta:
${promptNivelDificultad}

Su tarea, como experto en ${valorMateria}, consiste en crear ${tipoActividad}, considerando que el alumno tiene un nivel ${nivelDificultad} de competencia y habilidad en ${valorSubtema} dentro del tema de ${valorTemaPrincipal}. Al hacer su tarea, es fundamental para el éxito del alumno que siga estrictamente las siguientes instrucciones específicas obligatorias:
${promptActividad}
`;
}
