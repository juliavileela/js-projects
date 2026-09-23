//crie um algoritimo que calcule o valor total de uma locação
// Se a quantidade de dias for maior que 10 
// Aplicar um desconto de 15% no valor total 

const dias = 4
const valorDia = 135.33 
const acrescimo = 0.20

let calculo = dias * valorDia 

if(dias > 10){
    const desconto = calculo * 0.15
}
if(dias < 5){
    const acrescimo = calculo * 0.20
    calculo = calculo + acrescimo

}
console.log(`O valor total é ${calculo.toFixed(2)}`)