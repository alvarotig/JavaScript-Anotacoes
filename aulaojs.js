let v = 20;
let s = 'Stringzinha'
console.log("eu",v,s)
console.log(s[0])

// --------------------------------------------------------------------------------------------------------------------

let a = 10
let b = 6
let x = 1.5

console.log(a-b)
console.log(a+b)
console.log(a*x)
console.log(b/x)

// -------------------------------------------------------------------------------------------------------------------- 

let nome = "Alvaro"
let sobrenome = "Tardin"
let nomeCompleto = nome + " " + sobrenome

console.log(nomeCompleto)

// -------------------------------------------------------------------------------------------------------------------- 

// Utilizando arrays

let array = ["Eu", "Voce", 2]
console.log(array)

// Método MAP, que itera sobre a lista

array.map((item) => {
    console.log(item)
})

// -------------------------------------------------------------------------------------------------------------------- 

// Método includes é um retorno booleano para encontrar algo em lista

let include = array.includes("Tu")
console.log(include)

// -------------------------------------------------------------------------------------------------------------------- 

let alunos = ["Alvaro", "Gustavo", "Alan"]
let reprovados = ["Gustavo"]

while (1)
{
    if (alunos.length < 10) 
    {
        alunos.push("Aluno(a) novo(a)")
    } else
    {
        console.log("A sala de alunos está cheia!")
        break;
    }
}

alunos.map((item) =>{ // faz um novo, mantem o array original
    if (reprovados.includes(item))
    {
        console.log(item, "| Esse aluno foi reprovado!")
    } else
    {
        console.log(item)
    }
})

// -------------------------------------------------------------------------------------------------------------------- 

const data = [
    {nam : "Alvaro", age : "19", team : "Backend", salary : 0},
    {nam : "Ren", age : "19", team : "Backend", salary : 0},
    {nam : "Ped", age : "21", team : "Frontend", salary : 2000}
]

const user = data.find((user) => { // DEVOLVE O PRIMEIRO ENCONTRADO
    return user.age > 20
})

console.log(user)

// -------------------------------------------------------------------------------------------------------------------- 

const users = data.filter((user) => {
    return user.age > 18 && user.team == "Backend"
})

console.log(users)

// -------------------------------------------------------------------------------------------------------------------- 

const indexUser = data.findIndex((user) => {
    return user.nam == "Alvaro"
})

data[indexUser].salary = 10000

console.log(data)

// --------------------------------------------------------------------------------------------------------------------

console.log(data.reverse())

// --------------------------------------------------------------------------------------------------------------------

const userName = data.some((user) => {
    return user.nam == "Ren"
})

console.log(userName)

const userSalary = data.every((user) => {
    return user.salary > 0
})

console.log(userSalary)

// --------------------------------------------------------------------------------------------------------------------

const userss = data.reduce((total, user) => {
    return total += user.age
},0)

console.log(userss)

// --------------------------------------------------------------------------------------------------------------------

const person = {
    name: "Alice",
    idade: "30"
}

const {name, idade} = person

const fruits = ["Banana", "Maça"]

const {FirstFruit, SecondFruit} = fruits

// --------------------------------------------------------------------------------------------------------------------

const defaults = { color : "red", size: "small"}
const products = {...defaults, price: 20}

console.log(products)

// --------------------------------------------------------------------------------------------------------------------

const sum = (...products) => {
    let total = 0
    products.forEach(price => total += price)
    return total
}

console.log(sum())

// --------------------------------------------------------------------------------------------------------------------

// Promise é um objeto que representa o resultado eventual de uma operação. Fica pendente e o codigo acontece paralelamente a resposta que a Promise "recebera".
// Async vem de assincrono e marca uma função como "pronta" para esperar e retornar uma Promise.
// Await permite que você "espere" por uma Promise dentro de uma função async.