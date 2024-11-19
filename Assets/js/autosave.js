// Variables
const editorContent = document.querySelector(".note-content"); // Área de contenido del editor
const loader = document.querySelector(".loader"); // Animación de guardado
const collaborateButton = document.getElementById("collaborate-button"); // Botón de colaboración

// Función para guardar el contenido en el localStorage
function guardarEnLocalStorage() {
    if (!editorContent) return; // Asegura que el editor exista

    const content = editorContent.innerHTML;

    // Guardar el contenido en localStorage
    try {
        localStorage.setItem("editorContent", content);

        // Mostrar la animación de guardado
        mostrarAnimacionGuardado();
    } catch (error) {
        console.error("Error al guardar en localStorage", error);
    }
}

// Función para mostrar la animación de guardado
function mostrarAnimacionGuardado() {
    if (!loader) return; // Asegura que el loader exista

    loader.style.display = "block"; // Mostrar la animación
    setTimeout(() => {
        loader.style.display = "none"; // Ocultar la animación después de 2 segundos
    }, 2000);
}

// Cargar el contenido guardado en el editor al iniciar
function cargarContenidoDesdeLocalStorage() {
    if (!editorContent) return; // Asegura que el editor exista

    const savedContent = localStorage.getItem("editorContent");
    if (savedContent) {
        editorContent.innerHTML = savedContent;
    }
}

// Detectar cambios en el editor y activar el autoguardado
if (editorContent) {
    editorContent.addEventListener("input", () => {
        guardarEnLocalStorage();
    });
}

// Acción para el botón "Colaborar"
if (collaborateButton) {
    collaborateButton.addEventListener("click", (event) => {
        event.preventDefault(); // Evita que el enlace recargue la página
        console.log("Botón de colaboración presionado.");
        // Aquí puedes agregar la lógica que necesites para la acción de colaboración
    });
}

// Inicializar el editor con el contenido guardado
cargarContenidoDesdeLocalStorage();
