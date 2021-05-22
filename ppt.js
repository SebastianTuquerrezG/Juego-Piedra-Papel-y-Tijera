var tijera = 1;
var piedra = 2;
var papel = 3;
var rand = Math.random();

function jugar()
{
    
}

function validarTurnos(opcionM, opcionJ)
{
    var turns = [opcionM, opcionJ];
    switch(turns)
    {
        case [0] == [1]:
            console.log("Empate")
            break;
        case [0] == 1 && [1] == 2: 
            console.log("Ganaste");
        break;
        case [0] ==  1  && [1] == 3:
            console.log("Perdiste");
        break;
        case [0] == 2 && [1] == 1:
            console.log("Perdiste");
        break;
        case [0] == 2 && [1] == 3:
            console.log("Ganaste");
        break;
        case [0] == 3 && [1] == 1:
            console.log("Ganaste");
        break;
        case [0] == 3 && [1] == 2:
            console.log("Perdiste");
        break;
        default: 
            console.log("Escoge bien");
        break;
    } 
}
function contarGanadas()
{
    var maquina;
    var jugador;
    validarTurnos(maquina, jugador);
}
