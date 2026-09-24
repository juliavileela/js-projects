const users = [
    {
        nome: "Julia",
        idade: 26,
        email: "Julia@gmail.com",
        senha: "teste123"
    },
    {
        nome: "João",
        idade: 17,
        email: "joao@gmail.com",
    }
]
const produtos = [
    {
        nome: "Nescau",
    preco: 2.20,
        restrito: false
    },
    {
        nome: "Café",
    preco: 15.00,
        restrito: false
    },
    {
        nome: "São Braz",
        preco: 10.00,
        restrito: true
    },
    {
        nome: "Derby",
        preco: 12.00,
        restrito: true
    }

]
function login(email, senha) {
    if (email === "" || senha === "") {
        console.log("Email e senha são obrigatorios!")
        return

    }

    // find para encontrar o user pelo email 
    const userData = users.find(user => user.email === email)

    if (userData === undefined) {
        console.log("Email e senha inválidos!")
        return
    }
    if (senha !== userData.senha) {
        console.log("Email ou senha são inválidos!")
        return
    }

    return userData
}

function listarProdutos(idade) {
    if (idade < 18) {
        //filter para filtrar os produtos restritos 
        const produtoPermitidos = produtos.filter(prooduto => produtos.restrito == false)
        return produtoPermitidos
    }
    return produtos
}

async function acessarSistema(email, senha) {
    const userData =  await Promise.resolve(login (email, senha))

    if(userData === undefined){
        return
    }

    const produtos = listarProdutos(userData.idade)
    console.log(produtos)

}

acessarSistema("Julia@gmail.com", "teste13")