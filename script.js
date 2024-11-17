class Persona {
    constructor(nombre, edad, dni, sexo, peso, altura, anioNacimiento) {
        this.nombre = nombre;
        this.edad = edad;
        this.dni = dni;
        this.sexo = sexo;
        this.peso = peso;
        this.altura = altura;
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
                rango: [1994, 2024],
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
            return `${this.nombre} pertenece a la ${generacion.nombre} y su rasgo característico es ${generacion.rasgo}.`

        }
    }
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

const $form = document.querySelector('form');
let persona;
const obtenerDatos = (e) => {
    e.preventDefault();
    const d = document;
    const $nombre = d.getElementById('nombre').value,
        $edad = d.getElementById('edad').value,
        $dni = d.getElementById('dni').value,
        $fechanac = d.getElementById('fechanac').value,
        $peso = d.getElementById('peso').value,
        $altura = d.getElementById('altura').value,

        $radios = document.getElementsByName('sexo');


    let sexo;
    for (let radio of $radios) {
        if (radio.checked) {
            sexo = radio.value;
            break;
        }
    }

    // Crea la instancia de Persona
    persona = new Persona($nombre, parseInt($edad), $dni, sexo, parseFloat($peso), parseFloat($altura), parseInt($fechanac));
    mostrarMensajeConBotones();
}
// Función para crear el mensaje con los botones
function mostrarMensajeConBotones() {
    // Creo un contenedor para el mensaje y los botones
    const messageContainer = document.getElementById('person');
    messageContainer.innerHTML = "";
    // Creo el elemento de mensaje
    const mensaje = document.createElement('div');
    mensaje.classList.add('alert', 'alert-success', 'mt-4');
    mensaje.textContent = 'Persona creada con éxito';

    // Creo los tres botones
    const boton1 = document.createElement('button');
    boton1.classList.add('btn', 'btn-primary');
    boton1.textContent = 'Mostrar Generacion';
    boton1.addEventListener('click', () => {
        const mensaje = persona.mostrarGeneracion();
        if (mensaje) {
            alert(mensaje);
        } else {
            alert("No se pudo determinar la generación.");
        }
    });

    const boton2 = document.createElement('button');
    boton2.classList.add('btn', 'btn-secondary');
    boton2.textContent = 'Es mayor';
    boton2.addEventListener('click', () => {
        const esMayor = persona.edad > 18;
        alert(`${persona.getNombre()} ${esMayor ? 'es mayor de edad' : 'no es mayor de edad'}.`);
    });
    const boton3 = document.createElement('button');
    boton3.classList.add('btn', 'btn-danger');
    boton3.textContent = 'Mostrar informacion';
    boton3.addEventListener('click', () => {
        alert(`Nombre: ${persona.getNombre()}\nEdad: ${persona.getEdad()}\nDNI: ${persona.getDNI()}\nSexo: ${persona.getSexo()}\nPeso: ${persona.getPeso()}\nAltura: ${persona.getAltura()}\nAño de Nacimiento: ${persona.getAnioNacimiento()}`);
    });
    // Agregp los botones al contenedor del mensaje
    const botonesContainer = document.createElement('div');
    botonesContainer.classList.add('d-flex', 'justify-content-around');
    botonesContainer.appendChild(boton1);
    botonesContainer.appendChild(boton2);
    botonesContainer.appendChild(boton3);

    // Agrego el mensaje y los botones al contenedor principal
    messageContainer.appendChild(mensaje);
    messageContainer.appendChild(botonesContainer);
}


$form.addEventListener('submit', obtenerDatos);


