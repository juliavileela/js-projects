const user = {
    nome:"Julia",
    email:"juliavilelapaiva@gmail.com",
    senha:"123456"

}
const email = "juliavilelapaiva@gmail.com"
const senha = "123457"
if(email !== user.email ||senha !== user.senha){
   console.log("Email ou senha inválidos!")
   return

}
console.log(`Bem vindo ${user.name}!`)