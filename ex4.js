// Crie um algoritimo que calcule a area da parede e o valor do pintor e a quantidade de tinta necessária 

const altura = 3 
const largura = 5 
const valorPintor = 15
const rendimentoTinta = 12

const area = altura * largura
const valor = area * valorPintor
const baldes = area/ rendimentoTinta 

console.log (`A area da parede é ${area} o valor do pintor é ${valor.toFixed(2)} e a quantidade de baldes necessarias é ${Math.ceil(baldes)}`)