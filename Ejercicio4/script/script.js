const fecha = new Date();

const diasSemana = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];
const meses = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre"
];

const $primerH1 = document.getElementsByTagName('h1')[0];
$primerH1.innerHTML = `${diasSemana[fecha.getDay()]} ${fecha.getDate()} de ${meses[fecha.getMonth()]} de ${fecha.getFullYear()}`
console.log($primerH1);

/*Funcion para la hora actualizada*/
function updateClock() {
    const now = new Date();
    /* Si es un numero < a 10 se agrega 0 al comienzo con padStart */
    const hours = now.getHours();
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');

    // Actualiza el contenido del elemento con la hora actual
    const timeElement = document.getElementById('time');

    // Si es medianoche, muestro 12 AM
    if (hours === 0) {
        timeElement.textContent = `12:${minutes}:${seconds} AM`;
        // Si es mediodía, muestro 12 PM
    } else if (hours === 12) {
        timeElement.textContent = `12:${minutes}:${seconds} PM`;
        // Si es por la tarde, convierte al formato 12 horas y muestra PM
    } else if (hours > 12) {
        timeElement.textContent = `${hours - 12}:${minutes}:${seconds} PM`;
        // De lo contrario, es por la mañana y muestra AM
    } else {
        timeElement.textContent = `${hours}:${minutes}:${seconds} AM`;
    }
}

setInterval(updateClock, 1000)

updateClock();