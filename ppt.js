var tijera = 1;
var piedra = 2;
var papel = 3;
var rand = Math.random();

function validarTurnos(opcionM, opcionJ)
{
    var turns = [opcionM, opcionJ];
    var sum1;
    var sum2;
    
    switch(turns)
    {
        case [0] == [1]:
            console.log("Empate");
            break;
        case [0] == 1 && [1] == 2: 
            console.log("Ganaste");
            sum1 = sum1++;
        break;
        case [0] ==  1  && [1] == 3:
            console.log("Perdiste");
            sum2 = sum2++;
        break;
        case [0] == 2 && [1] == 1:
            console.log("Perdiste");
            
            sum2 = sum2++;
        break;
        case [0] == 2 && [1] == 3:
            console.log("Ganaste");
            sum1 = sum1++;
        break;
        case [0] == 3 && [1] == 1:
            console.log("Ganaste");
            sum1 = sum1++;
        break;
        case [0] == 3 && [1] == 2:
            console.log("Perdiste");
            sum2 = sum2++;
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
