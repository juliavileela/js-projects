const user={
    nome:"julia",
    idade: 26,
    cores:["azul","amarelo","amarelo"],
    carro: {
        marca:"BMW",
        modelo:"X5",
        ano:"2025",
        cor:"preto",
        combustivel: ["gasolina","etanol","eletrico"]
    }
}

console.log(user.name)
console.log(user.cores[2])

//console para monstrar a marca,modelo e ultima combustivé do carro

console.log(user.carro.marca)
console.log(user.carro.modelo)
console.log(user.carro.combustivel[2])