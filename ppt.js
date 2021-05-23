var tijera = 1;
var piedra = 2;
var papel = 3;

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
    do
    {
        maquina = Math.random();
        jugador = prompt("1 para tijera, 2 par piedra o 3 para papel");
        validarTurnos(maquina, jugador);
    }while(sum1 <= 3 || sum2 >= 3)

    if(sum1 < sum2)
    {
        console.log("Le ganaste a la maquina")
    } else{
        console.log("Perdiste ante la maquina")
    }
    console.log("Son tus rondas ganadas" + sum1);
    console.log("Son tus rondas ganadas" + sum2);
}
