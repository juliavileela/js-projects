const alunos = [
    {
        nome: "Julia",
        idade: 26,
        notas: [7, 8, 9]
    },
    {
        nome: "João",
        idade: 20,
        notas: [5, 4, 3]
    },
    {
        nome: "Maria",
        idade: 22,
        notas: [8.3, 9.9, 6.1]
    },
    {
        nome: "Pedro",
        idade: 21,
        notas: [3.5, 6.8, 9.1]
    }
]
function calcularMedia(n1, n2, n3) {
    const media = (n1 + n2 + n3) / 3
    return media.toFixed(2)
}
//console.log(calcularMedia(alunos[2].notas[0], alunos[2].notas[1],alunos[2].notas[2]))
// laço de repetição para calcular a media de cada aluno
for (let i = 0; alunos.length > i; i++) {
    const aluno = alunos[i]
    const media = calcularMedia(aluno.notas[0], aluno.notas[1], aluno.notas[2])
    if (media >= 6) {
        console.log(`${aluno.nome} a média é ${media} - APROVADO`)
        continue

    }

    console.log(`${aluno.nome} a média é ${media} - REPROVADO`)
}
