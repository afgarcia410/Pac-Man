var mynamespace=mynamespace|| {}
mynamespace={
    Game:class{
        constructor(){
            this.tablero=tablero;
        }
    }
}
var tablero=[[0,0,1],
             [0,1,0],
             [0,0,0],
             [0,0,0],
             [1,0,0]];
var cogeArray=document.getElementById("campoArray");
for (let i = 0; i < tablero.length; i++) {
        const element = tablero[i]; 
        console.log(element);
        cogeArray.innerHTML=tablero+"</br>";
}

