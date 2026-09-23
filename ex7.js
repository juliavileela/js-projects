//Crie um algoritimo que calcule o valor total de uma locação, se a quantidade de dias for maior que 10 aplicar um desconto de 50r$ no valor total


const dias = 12
const valorDia = 113.42

let calculo = dias * valorDia

if(dias > 10){
    calculo = calculo - 50
}

console.log(`O valor total é ${calculo}`)