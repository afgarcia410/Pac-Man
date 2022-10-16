var mynamespace = mynamespace || {};

var tablero = [
  ["X", 0, 1],
  [0, 1, 0],
  [0, 0, 0],
  [0, 0, 0],
  [1, 0, 0],
];
let vacio = "";
var cogeArray = document.getElementById("campoArray");
var textoMov = document.getElementById("texto");
tablero.forEach(miFuncion);
cogeArray.innerHTML = vacio;

function miFuncion(valor, index, array) {
  vacio += valor + "<br>";
}

moverArriba = function () {
  //Añadir splice()
  var arriba = document.getElementById("boton1");
  if (arriba.onclick) {
    var valor = (textoMov.innerHTML = "arriba");
    console.log(valor);
  }
};
moverAbajo = function () {
  var arriba = document.getElementById("boton2");
  if (arriba.onclick) {
    var valor = (textoMov.innerHTML = "abajo");
    console.log(valor);
  }
};
moverDerecha = function () {
  var arriba = document.getElementById("boton3");
  if (arriba.onclick) {
    var valor = (textoMov.innerHTML = "derecha");
    console.log(valor);
  }
};
moverIzquierda = function () {
  var arriba = document.getElementById("boton4");
  if (arriba.onclick) {
    var valor = (textoMov.innerHTML = "izquierda");
    console.log(valor);
  }
};
