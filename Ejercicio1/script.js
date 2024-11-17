/* Funcion para generar el numero aleatorio */

const randomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
}
const d = document,
    $data = d.getElementById('data'),
    $input = d.getElementById('numero');

const numeroRandom = randomNumber(0, 100);

d.addEventListener('DOMContentLoaded', function () {
    $data.addEventListener('click', (e) => {
        e.preventDefault();
        console.log(numeroRandom);
        const inputValue = $input.value;
        console.log("El numero es:", inputValue);
        if (inputValue == numeroRandom) alert("Acertaste!!");
        else if (inputValue < numeroRandom) alert("Pista: el numero es mayor, segui intentando!!");
        else alert("Pista: el numero es menor, segui intentando!!")

        $input.value = "";
    })
})