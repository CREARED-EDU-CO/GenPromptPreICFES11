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
 * junto con este programa. En caso contrario, consulta <http://www.gnu.org/licenses/>.
 */

// Espera a que el DOM esté completamente cargado antes de ejecutar el script
document.addEventListener('DOMContentLoaded', function() {
    // Objeto para almacenar referencias a elementos del DOM
    const elementos = {
        materia: document.getElementById('materia'),
        temaPrincipal: document.getElementById('temaPrincipal'),
        subtema: document.getElementById('subtema'),
        tipoActividad: document.getElementById('tipoActividad'),
        nivelDificultad: document.getElementById('nivelDificultad'),
        formulario: document.getElementById('formularioPrompt'),
        modal: document.getElementById('modalPrompt'),
        modalResultado: document.getElementById('modalResultado'),
        modalBotonCopiarArriba: document.getElementById('modalBotonCopiarArriba'),
        modalBotonCopiarAbajo: document.getElementById('modalBotonCopiarAbajo'),
        modalBotonCerrar: document.getElementById('modalBotonCerrar'),
        listaPromptsGuardados: document.getElementById('listaPromptsGuardados'),
        modalBotonEliminar: document.getElementById('modalBotonEliminar'),
		borrarTodosPrompts: document.getElementById('borrarTodosPrompts')
    };

    // Variables para manejar prompts guardados
    let promptsGuardados = JSON.parse(localStorage.getItem('promptsGuardados')) || [];
    let promptSeleccionadoIndex = -1;

    // Funciones auxiliares
    function poblarSelect(elementoSelect, opciones, textoDefecto) {
        elementoSelect.innerHTML = `<option value="">${textoDefecto}</option>`;
        opciones.forEach(opcion => {
            const elementoOpcion = document.createElement('option');
            elementoOpcion.value = opcion;
            elementoOpcion.textContent = opcion;
            elementoSelect.appendChild(elementoOpcion);
        });
    }

    function mostrarError(mensaje) {
        const contenedorModal = document.createElement('div');
        contenedorModal.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.5);
            display: flex;
            justify-content: center;
            align-items: flex-start;
            padding-top: 442px;
            z-index: 1000;
        `;

        const divError = document.createElement('div');
        divError.textContent = mensaje;
        divError.style.cssText = `
            background-color: #ffffff;
            color: #ff0000;
            padding: 20px;
            border-radius: 5px;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
            max-width: 80%;
            text-align: center;
        `;

        contenedorModal.appendChild(divError);
        document.body.appendChild(contenedorModal);

        contenedorModal.addEventListener('click', function(evento) {
            if (evento.target === contenedorModal) {
                contenedorModal.remove();
            }
        });

        setTimeout(() => {
            contenedorModal.remove();
        }, 3000);
    }

    function copiarAlPortapapeles(texto) {
        const areaTexto = document.createElement('textarea');
        areaTexto.value = texto;
        document.body.appendChild(areaTexto);
        areaTexto.select();

        try {
            document.execCommand('copy');
            actualizarBotonesCopiar(true);
        } catch (err) {
            console.error('Error al copiar: ', err);
        }

        document.body.removeChild(areaTexto);

        setTimeout(() => actualizarBotonesCopiar(false), 5000);
    }

    function actualizarBotonesCopiar(copiado) {
        const texto = copiado ? '¡PROMPT COPIADO! Ahora pégalo en ChatGPT' : 'COPIAR PROMPT GENERADO';
        [elementos.modalBotonCopiarArriba, elementos.modalBotonCopiarAbajo].forEach(boton => {
            boton.textContent = texto;
            boton.classList.toggle('copiado', copiado);
        });
    }

    function guardarPrompt(prompt, materia, temaPrincipal, subtema, tipoActividad) {
        promptsGuardados.push({ prompt, materia, temaPrincipal, subtema, tipoActividad });
        localStorage.setItem('promptsGuardados', JSON.stringify(promptsGuardados));
        actualizarListaPromptsGuardados();
    }

    function eliminarPrompt(index) {
        promptsGuardados.splice(index, 1);
        localStorage.setItem('promptsGuardados', JSON.stringify(promptsGuardados));
        actualizarListaPromptsGuardados();
    }

    function actualizarListaPromptsGuardados() {
        elementos.listaPromptsGuardados.innerHTML = '';
        promptsGuardados.forEach((promptData, index) => {
            const li = document.createElement('li');
            li.textContent = `${index + 1}. ${promptData.materia}: ${promptData.temaPrincipal} - ${promptData.subtema}. Actividad de ${promptData.tipoActividad}`;
            li.addEventListener('click', () => mostrarPromptGuardado(index));
            elementos.listaPromptsGuardados.appendChild(li);
        });
    }

    function mostrarPromptGuardado(index) {
        elementos.modalResultado.textContent = promptsGuardados[index].prompt;
        promptSeleccionadoIndex = index;
        elementos.modal.style.display = 'block';
    }
	
    function borrarTodosLosPrompts() {
        promptsGuardados = [];
        localStorage.removeItem('promptsGuardados');
        actualizarListaPromptsGuardados();
    }	

	function mostrarConfirmacion(mensaje, onConfirm) {
		const contenedorModal = document.createElement('div');
		contenedorModal.style.cssText = `
			position: fixed;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			background-color: rgba(0, 0, 0, 0.5);
			display: flex;
			justify-content: center;
			align-items: flex-start;
			padding-top: 452px;
			z-index: 1000;
		`;

		const divConfirmacion = document.createElement('div');
		divConfirmacion.style.cssText = `
			background-color: #ffffff;
			padding: 20px;
			border-radius: 5px;
			box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
			max-width: 80%;
			text-align: center;
		`;

		const textoMensaje = document.createElement('p');
		textoMensaje.textContent = mensaje;
		textoMensaje.style.marginBottom = '20px';

		const botonConfirmar = document.createElement('button');
		botonConfirmar.textContent = 'Confirmar';
		botonConfirmar.style.cssText = `
			background-color: #4CAF50;
			color: white;
			padding: 10px 20px;
			border: none;
			border-radius: 5px;
			cursor: pointer;
			margin-right: 10px;
		`;

		const botonCancelar = document.createElement('button');
		botonCancelar.textContent = 'Cancelar';
		botonCancelar.style.cssText = `
			background-color: #f44336;
			color: white;
			padding: 10px 20px;
			border: none;
			border-radius: 5px;
			cursor: pointer;
		`;

		divConfirmacion.appendChild(textoMensaje);
		divConfirmacion.appendChild(botonConfirmar);
		divConfirmacion.appendChild(botonCancelar);
		contenedorModal.appendChild(divConfirmacion);
		document.body.appendChild(contenedorModal);

		botonConfirmar.addEventListener('click', () => {
			onConfirm();
			contenedorModal.remove();
		});

		botonCancelar.addEventListener('click', () => {
			contenedorModal.remove();
		});

		contenedorModal.addEventListener('click', function(evento) {
			if (evento.target === contenedorModal) {
				contenedorModal.remove();
			}
		});
	}


    // Event listeners
    elementos.materia.addEventListener('change', function() {
        const materiaSeleccionada = this.value;
        poblarSelect(elementos.temaPrincipal, Object.keys(temas[materiaSeleccionada] || {}), 'Selecciona un tema principal');
        poblarSelect(elementos.subtema, [], 'Primero selecciona un tema principal');
    });

    elementos.temaPrincipal.addEventListener('change', function() {
        const materiaSeleccionada = elementos.materia.value;
        const temaSeleccionado = this.value;
        poblarSelect(elementos.subtema, temas[materiaSeleccionada]?.[temaSeleccionado] || [], 'Selecciona un subtema');
    });

    elementos.formulario.addEventListener('submit', function(e) {
        e.preventDefault();
        const datosFormulario = {
            valorMateria: elementos.materia.value,
            valorTemaPrincipal: elementos.temaPrincipal.value,
            valorSubtema: elementos.subtema.value,
            tipoActividad: elementos.tipoActividad.value,
            nivelDificultad: elementos.nivelDificultad.value,
        };
        
        if (Object.values(datosFormulario).every(Boolean)) {
            const prompt = generarPrompt(datosFormulario);
            guardarPrompt(
                prompt, 
                datosFormulario.valorMateria, 
                datosFormulario.valorTemaPrincipal, 
                datosFormulario.valorSubtema, 
                datosFormulario.tipoActividad
            );
            elementos.modalResultado.textContent = prompt;
            elementos.modal.style.display = 'block';
        } else {
            mostrarError('Por favor, completa todos los campos.');
        }
    });

    elementos.modalBotonCopiarArriba.addEventListener('click', () => copiarAlPortapapeles(elementos.modalResultado.textContent));
    elementos.modalBotonCopiarAbajo.addEventListener('click', () => copiarAlPortapapeles(elementos.modalResultado.textContent));

    elementos.modalBotonCerrar.onclick = () => elementos.modal.style.display = 'none';

    window.onclick = (evento) => {
        if (evento.target == elementos.modal) {
            elementos.modal.style.display = 'none';
        }
    };

    elementos.modalBotonEliminar.addEventListener('click', () => {
        if (promptSeleccionadoIndex !== -1) {
            eliminarPrompt(promptSeleccionadoIndex);
            elementos.modal.style.display = 'none';
            promptSeleccionadoIndex = -1;
        }
    });
	
	elementos.borrarTodosPrompts.addEventListener('click', function() {
		mostrarConfirmacion('¿Estás seguro de que quieres borrar todos los prompts guardados?', borrarTodosLosPrompts);
	});
	

    // Inicializar la lista de prompts guardados
    actualizarListaPromptsGuardados();
});
