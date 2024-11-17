// Función para agregar una tarea a la lista
function agregarTarea(tarea) {
    const $ul = document.getElementsByClassName("list-group")[0];
    if ($ul) {
        const $nuevoli = document.createElement("li");
        $nuevoli.classList.add("list-group-item", "d-flex", "justify-content-between", "align-items-center");
        $nuevoli.innerText = tarea;

        // Creo botón de "Delete"
        const $deleteButton = document.createElement("button");
        $deleteButton.classList.add("btn-delete", "btn", "btn-danger", "ms-auto");
        $deleteButton.innerText = "Delete";
        $nuevoli.appendChild($deleteButton);

        // Agregar el <li> a la lista
        $ul.appendChild($nuevoli);
    } else {
        console.error("No se encontró ningún elemento con la clase 'list-group'");
    }
}

// Función para capturar el texto y limpiar el input
function obtenerTexto(e) {
    e.preventDefault();
    const input = document.querySelector('#tarea');
    const tarea = input.value;

    if (tarea.trim() !== "") {
        agregarTarea(tarea);
        input.value = "";

        const modal = bootstrap.Modal.getInstance(document.querySelector('#abrirForm'));
        modal.hide();
    } else {
        alert("Por favor, ingrese una descripción para la tarea.");
    }
}

// Función para manejar el evento de borrado
function borrarTarea(e) {
    if (e.target.classList.contains("btn-delete")) {
        const $li = e.target.closest("li"); // Encuentra el <li> que contiene el botón
        $li.remove(); // Elimina el <li> de la lista
    }
}

const formulario = document.querySelector('form');
formulario.addEventListener('submit', obtenerTexto);

// Escuchar eventos de clic en el contenedor de la lista para borrar tareas
const $ul = document.getElementsByClassName("list-group")[0];
$ul.addEventListener('click', borrarTarea);
