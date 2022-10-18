var mynamespace = mynamespace || {};
var pacman={
x:0,
y:0
};
var tablero = [
  ["X", 0, 1,0,0,1,0,0],
  [0, 1, 0,0,0,0,0,0],
  [0, 0, 1,0,0,0,1,0],
  [0, 0, 1,1,1,0,1,0],
  [1, 0, 0,0,0,0,0,0],
];
let vacio = "";
var cogeArray = document.getElementById("campoArray");
var textoMov = document.getElementById("texto");
var botonR=document.getElementById("reinicio");
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
    pacman.y=pacman.y+1;

   // var valor = (textoMov.innerHTML = "abajo");
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
reiniciar=function(){
  if (botonR.onclick) {
    location.reload();
  }
}