/*********************************************
 * Objetivo: Arquivo responsável para criação de funções para realizar cálculo do imc
 * Data: 13/09/2024
 * Autor: Hugo Lopes
 * Versão: 1.0
 *********************************************/

function definicaodevalores (imc){

let myimc = imc
let resultado

if (myimc < 18.5 ){
    resultado = 'Você está abaixo do peso'

}if (myimc >= 18.5 && myimc <= 24.9 ){
    resultado = 'O seu peso está normal'

}if (myimc >= 25 && myimc <= 29.9){
    resultado = 'Você está acima do peso (sobrepeso)'

}if (myimc >= 30 && myimc <= 34.9 ) {
    resultado = 'Obesidade 1'

}if (myimc >= 35 && myimc <= 39.9 ){
    resultado = 'Obesidade 2'

}if (myimc > 40){
    resultado = 'Obesidade 3'
    }

return resultado
}



function validarDados (peso, altura){
let P = peso
let A = altura
let resultado = true

if ( P == null || A == null){
    console.log ('É obrigatório a entrada de todos os dados')
    resultado =false

}if (isNaN(P) || isNaN (A)){
    console.log ('É permitida apenas a entrada de números')
    resultado =false

}if ( P <=0 || A <=0){
   console.log ('Só é permitida a entrada de valores maiores que zero (0)')
    resultado = false


    }
return resultado
} 


function calcularIMC (peso, altura){
let imc 

    if(validarDados(peso, altura)){
         imc = peso / (altura * altura)
    }else{
        return false
    }
    return imc.toFixed(2) 
}





console.log (calcularIMC('l', 1.76))

