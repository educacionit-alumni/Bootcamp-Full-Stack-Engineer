/* -------------------------------------------- */
/*                  Variables                   */
/* -------------------------------------------- */
let numero1
let operacion
let numero2
let resultado

/* -------------------------------------------- */
/*                  Funciones                   */
/* -------------------------------------------- */
const calcReset = () => {
    numero1 = ''
    operacion = ''
    numero2 = ''
    resultado = 0
}

const imprimirDisplay = resultado => {
    document.getElementById('display').innerText = resultado.toString().slice(0,13)
}


const procesarTecla = tecla => {
    if((tecla >= 0 && tecla <= 9) || tecla == '.') {
        if(!operacion) {
            numero1 += tecla
            numero1 = numero1.slice(0,13)
            resultado = 0
            imprimirDisplay(numero1);
        }
        else {
            numero2 += tecla
            numero2 = numero2.slice(0,13)
            imprimirDisplay(numero2);
        }
    }
    else if(tecla == '=') {
        switch(operacion) {
            case '+' : resultado = Number(numero1) + Number(numero2); break
            case '-' : resultado = Number(numero1) - Number(numero2); break
            case 'x' : resultado = Number(numero1) * Number(numero2); break
            case '/' : resultado = Number(numero1) / Number(numero2); break
            default: resultado = 'bad operation'
        }
        numero1 = ''
        numero2 = ''
        operacion = ''
        imprimirDisplay(resultado);
    }
    else {
        operacion = tecla
        if(!numero1) numero1 = resultado + ''
        numero2 = ''
    }
}

const start = () => {

    calcReset()
    imprimirDisplay(resultado);

    // listener de display
    document.getElementById('display').onclick = () => {
        calcReset()
        imprimirDisplay(resultado);
    }

    // listeners de teclas
    const teclas = document.querySelectorAll('.tecla')
    teclas.forEach( tecla => {
        tecla.onclick = () => {
            procesarTecla(tecla.innerText)
        }
    })
}

/* -------------------------------------------- */
/*                    Inicio                    */
/* -------------------------------------------- */
window.onload = start
