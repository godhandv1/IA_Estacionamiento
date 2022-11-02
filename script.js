//especificar 
//número de pisos de estacionamiento, 
//número de cajones (como limite 12), 

//indicar boton de inicio y opción de finalización del agente inteligente artificial.

//opción de guardar autos(hasta llenar por completo los cajones del estacionamiento)
//cuando este al limite si se 
//le indicará que se desea estacionar otro auto, este deberá desplegar un mensaje que ya
//no hay cajones disponibles, de la misma manera cuando desee sacar el auto del 
//estacionamiento, este deberá permitirlo liberando dicho espacio (mensajes que se 
//pueden desplegar en el programa: auto guardado, cajon no disponible, cajon 
//disponible, ya no hay ningún cajon disponible, etc).

var numeroPisos;
var numeroCajones; //Maximo 12



function estacionamientoMedidas() {
    numeroPisos = document.querySelector('input[name="Numero_pisos"]');
    numeroCajones = document.querySelector('input[name="Numero_cajones"]');
    if (numeroCajones.value >= 0 && numeroPisos.value >= 0 && numeroCajones.value <= 12) {
        agenteInteligentes();
    } else {
        alert("numeroCajones es muy alto ")
    }

}

function agenteInteligentes(array) {
    var pregunta = confirm("¿Deseas Activar el Agente inteligente?")
    if (pregunta) {
        alert("Inicinado el Agente inteligente")
        guardarCoche();
    } else {
        alert("Quizás en otro momento...\n Gracias de todas formas")
    }

}

function guardarCoche(array) {
    const texto = document.getElementById("agregarCoche")
    const h1 = document.createElement('h1')
    h1.textContent = '¿Quiere apregar un auto?'
    texto.appendChild(h1)
    let btn = document.createElement("button");
    btn.innerHTML = "Agregar";
    var numero_piso = 0,
        numero_cajon = 0;
    var array = new Array(numeroPisos);
    for (let i = 0; i <= numeroPisos; i++) {
        array[i] = new Array(numeroCajones);
    }
    btn.onclick = function() {
        if (numero_cajon <= 12) {
            array[numero_piso][numero_cajon] = 'auto'
            numero_cajon++

        } else {
            numeroPisos++
            numero_cajon = 0;
        }
        console.log(array)

    }
    document.body.appendChild(btn);
}