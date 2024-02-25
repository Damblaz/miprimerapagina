//alert("Hola este es mi Javascript");

//seleccionar elementos

document.addEventListener("DOMContentLoaded", function() {
    // Tu código aquí
    let contenidoTitulo = "Nombre";
    let titulo = document.querySelector("#Titulo");
   
    titulo.innerHTML = contenidoTitulo;

//condicionales

let textoTitulo = titulo.innerText;
console.log(textoTitulo)

//paso 24

if(textoTitulo == "Nombre"){
    titulo.innerText = "Jap Verano"
}

// 24

let textoAcerca = "About me";
let Acerca = document.querySelector(".acercademi");
 
Acerca.innerHTML = textoAcerca;

if (textoAcerca == "About me"){

    Acerca.innerText = "Acerca de mi"

}


//  Funciones


let nombre = "Pac";
let ciudad = "gotham"
let gusto = "fooood"

let parrafo = document.querySelector("#Trabajos .parrafo2");


function cambiarTexto (nombre,ciudad,gusto){

    let contenido = ` Me llamo ${nombre}, nací en ${ciudad} y vivo en Caballito. Me gusta ${gusto} y salir a pasear en días de sol. Me encantaría aprender a programar para poder ayudar a las personas a mostrar lo que hacen. ` ;

    return contenido ;

}

parrafo.innerText = cambiarTexto(nombre,ciudad,gusto)



//Crea una función que modifique el texto del elemento “Acerca de mí” definiendo previamente en la función el texto que quiero utilizar. 

let nombre1 = "damian";
let gusto1 = "ron";
let clima = "nieve";


let parrafo1 = document.querySelector("#Acerca .parrafo3")


function cambiarTextoDeAcerca (nombre1,gusto1,clima) {

    let contenido1 = ` Me llamo ${nombre1}, nací en brasil y vivo en Caballito. Me gusta el ${gusto1} y salir a pasear en días de  ${clima}. Me encantaría aprender a programar para poder ayudar a las personas a mostrar lo que hacen. ` ;

    return contenido1

}

parrafo1.innerText = cambiarTextoDeAcerca(nombre1,gusto1,clima)




let menu_responsive = document.querySelector(".checkbtn");

menu_responsive.onclick = function(){

    navbar = document.querySelector(".navbar");
    navbar.classList.toggle("active");
}









});

const form = document.getElementById("form");
const nombre = document.getElementById("nombre");
const parrafo = document.getElementById("alertas");

function validarFormulario() {
  let warnings = "";
  let valido = true;
  parrafo.innerHTML = "";

  if (nombre.value.length < 4) {
    warnings += `El nombre debe contener más de 4 caracteres`;
    valido = false;
  }

  if (!valido) {
    parrafo.innerHTML = warnings;
  } else {
    parrafo.innerHTML = "Enviado";
  }
  return valido;
}

form.addEventListener("submit", (e) => {
  if (validarFormulario()) {
    // Si la validación es exitosa, puedes enviar el formulario
    form.submit();
  } else {
    e.preventDefault(); // Evita que el formulario se envíe automáticamente
  }
});








