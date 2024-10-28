let menuVisible = false;
//Función que oculta o muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    //oculto el menu una vez que selecciono una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}
// Variable que indica si la animación ya se ha ejecutado
let animacionEjecutada = false;

// Función que aplica las animaciones de las habilidades
function efectoHabilidades() {
    if (animacionEjecutada) return; // Salir si ya se ejecutó la animación

    const skills = document.getElementById("skills");
    const distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;

    // Verifica si el elemento está en la vista y la animación no se ha ejecutado
    if (distancia_skills >= 300) {
        const habilidades = document.getElementsByClassName("progreso");

        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add("htmlcss");
        habilidades[2].classList.add("Cplus");
        habilidades[3].classList.add("Csharp");
        habilidades[4].classList.add("java");
        habilidades[5].classList.add("comunicacion");
        habilidades[6].classList.add("trabajo");
        habilidades[7].classList.add("creatividad");
        habilidades[8].classList.add("flexibilidad");
        habilidades[9].classList.add("adaptacion");

        animacionEjecutada = true; // Marca la animación como ejecutada
    }
}

// Ejecuta la animación al cargar la página y también al hacer scroll si aún no se ejecutó
window.addEventListener('DOMContentLoaded', efectoHabilidades);
window.addEventListener('scroll', efectoHabilidades);



function mostrarMenu() {
    const menu = document.getElementById('menu');
    menu.classList.toggle('active'); /* Alterna la clase active */
}