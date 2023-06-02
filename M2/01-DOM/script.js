// La fc cambiarClase recibe el evento 'click'
function cambiarClase(event){ // cada vez que un eventListener ejecuta una fc CB, envía a la fc un evento único, que identifica quién, dónde, cómo y cuándo se produjo. El evento es un objeto con toda la info en sus props.
            
// event.target me dice quién fue el elemento que disparó el evento, en este caso 'p'.
var divClickeado = event.target

// Alterna entre clase 1 y clase 2 al hacer click. Esto se llama toggle
if(divClickeado.className === 'clase1') divClickeado.className = 'clase2';
else divClickeado.className = 'clase1'
}

function onClick(){
//Qué hace esta función:
// 1- Crea un nuevo párrafo p
var p = document.createElement('p');

// 2- Le doy texto al párrafo
p.innerHTML = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et qui quis repellat. Iste beatae itaque quidem, sint cupiditate blanditiis ut laborum quas rerum qui ducimus provident odio, magnam, similique modi?';

// 3- Crea el div que va a contener el párrafo
var div = document.createElement('div');
// 3.1- Le da al div un nombre de clase para poder aplicar estilos (head)
div.className = 'clase1'
// 3.2- Agrega una eventListener para que al hacer click se ejecute la fc cambiarClase 
div.addEventListener('click', cambiarClase);

// 4- Agrega el párrafo al div
div.appendChild(p);

// 5- Trae el div 'contenedor' del body
var contenedor = document.querySelector('#contenedor');

// 6- Agrega el div del párrafo al contenedor
contenedor.appendChild(div);
}

var boton = document.querySelector('#boton');
boton.addEventListener("click", onClick) // IMPORTANTE: la fc onClick va así, no ejecutada () porque yo quiero que ejecute la fc cada vez que haya un evento, no que me traiga el resultado, como sería el caso si pongo onClick().
        