class Persona {
    constructor(nombre, edad, dni, sexo, peso, altura, anioNacimiento) {
        this.nombre = nombre;
        this.edad = edad;
        this.dni = dni;
        this.sexo = sexo; // H para hombre, M para mujer
        this.peso = peso; // en kg
        this.altura = altura; // en metros
        this.anioNacimiento = anioNacimiento;
    }

    // Getters
    getNombre() {
        return this.nombre;
    }

    getEdad() {
        return this.edad;
    }

    getDNI() {
        return this.dni;
    }

    getSexo() {
        return this.sexo;
    }

    getPeso() {
        return this.peso;
    }

    getAltura() {
        return this.altura;
    }

    getAnioNacimiento() {
        return this.anioNacimiento;
    }

    // Setters
    setNombre(nombre) {
        this.nombre = nombre;
    }

    setEdad(edad) {
        this.edad = edad;
    }

    setDNI(dni) {
        this.dni = dni;
    }

    setSexo(sexo) {
        if (sexo === "H" || sexo === "M") {
            this.sexo = sexo;
        } else {
            console.error("Sexo inválido. Usa 'H' para hombre o 'M' para mujer.");
        }
    }

    setPeso(peso) {
        this.peso = peso;
    }

    setAltura(altura) {
        this.altura = altura;
    }

    setAnioNacimiento(anioNacimiento) {
        this.anioNacimiento = anioNacimiento;
    }

    // Método para mostrar la generación
    mostrarGeneracion() {
        const generaciones = [
            {
                nombre: "Generación Z",
                rango: [1994, 2010],
                rasgo: "Irreverencia",
            },
            {
                nombre: "Generación Y (Millennials)",
                rango: [1981, 1993],
                rasgo: "Frustración",
            },
            {
                nombre: "Generación X",
                rango: [1969, 1980],
                rasgo: "Obsesión por el éxito",
            },
            {
                nombre: "Baby Boom",
                rango: [1949, 1968],
                rasgo: "Ambición",
            },
            {
                nombre: "Silent Generation",
                rango: [1930, 1948],
                rasgo: "Austeridad",
            },
        ];

        const generacion = generaciones.find(
            (gen) =>
                this.anioNacimiento >= gen.rango[0] &&
                this.anioNacimiento <= gen.rango[1]
        );

        if (generacion) {
            console.log(
                `${this.nombre} pertenece a la ${generacion.nombre} y su rasgo característico es ${generacion.rasgo}.`
            );
        } else {
            console.log("No se ha podido determinar la generación.");
        }
    }
}

// Ejemplo de uso
const persona1 = new Persona("Juan", 25, "12345678A", "H", 70, 1.75, 1998);
persona1.mostrarGeneracion(); // Salida: Juan pertenece a la Generación Z y su rasgo característico es Irreverencia.


/* Funcion es mayor de edad */

const esMayor = (edad) => edad > 18 ? `${this.nombre} es mayor de edad` : `${this.nombre} no es mayor de edad`;

const mostrarDatos = () => {
    `${this.nombre}, ${this.edad}, ${this.dni}, ${this.sexo}, ${this.peso}, ${this.altura}, ${this.anioNacimiento}.`
}


/* Validar form */

(() => {
    'use strict'

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')

    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
        form.addEventListener('submit', event => {
            if (!form.checkValidity()) {
                event.preventDefault()
                event.stopPropagation()
            }

            form.classList.add('was-validated')
        }, false)
    })
})()

/* Selectores formularios */
const d = document;
let genero;
const $nombre = d.getElementById('nombre').value,
    $edad = d.getElementById('edad').value,
    $dni = d.getElementById('dni').value,
    $fechanac = d.getElementById('fechanac').value,
    $peso = d.getElementById('peso').value,
    $altura = d.getElementById('altura').value,
    $form = d.querySelector('form'),
    $radios = document.getElementsByName('sexo'),
    $whiteSpace = d.querySelector('person');


// Función para crear el mensaje con los botones
function mostrarMensajeConBotones() {
    // Crea un contenedor para el mensaje y los botones
    const messageContainer = document.getElementById('person');

    // Crea el elemento de mensaje
    const mensaje = document.createElement('div');
    mensaje.classList.add('alert', 'alert-success', 'mt-3');
    mensaje.textContent = 'Persona creada con éxito';

    // Crea los tres botones
    const boton1 = document.createElement('button');
    boton1.classList.add('btn', 'btn-primary');
    boton1.textContent = 'Botón 1';

    const boton2 = document.createElement('button');
    boton2.classList.add('btn', 'btn-secondary');
    boton2.textContent = 'Botón 2';

    const boton3 = document.createElement('button');
    boton3.classList.add('btn', 'btn-danger');
    boton3.textContent = 'Botón 3';

    // Agrega los botones al contenedor del mensaje
    const botonesContainer = document.createElement('div');
    botonesContainer.classList.add('d-flex', 'justify-content-around');
    botonesContainer.appendChild(boton1);
    botonesContainer.appendChild(boton2);
    botonesContainer.appendChild(boton3);

    // Agrega el mensaje y los botones al contenedor principal
    messageContainer.appendChild(mensaje);
    messageContainer.appendChild(botonesContainer);
}




const obtenerDatos = (e) => {
    e.preventDefault();
    // for (let radio of radios) {
    //     if (radio.checked) {
    //         genero = radio.value;
    //         break;
    //     }
    // }
    // Llamamos a la función para mostrar el mensaje y los botones
    mostrarMensajeConBotones();
}

$form.addEventListener('submit', obtenerDatos);


