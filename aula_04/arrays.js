let variavelGlobal = 15

function novasVariaveis(){
    let variavelLocal = 100
    variavelGlobal = variavelGlobal + 100
    return (variavelLocal, variavelGlobal)
}

let resultado = novasVariaveis()
document.write(resultado.variavelGlobal)
document.write(resultado.variavelLocal)

//Array: é um conjunto de dados aglomerados que são armazenados numa mesma variavel
//A analogia mais proxima é a da lista em python
//Array é declarado usando "[]"

let numeros = [10, 15, 20, 25, 30, 35, 40, 45, 50]


//exibir a posição do indice
for(let i in numeros){
    alert(i)
}

//Para exibir valores do array
for(let valor of numeros){
    alert(valor)
}


//forEach: é a primeira função que usamos para manipular um conjunto(array)
//Dentro dele posso tanto usar uma função quanto usar uma arrowFunction, então após "=>" descreve qual o script que quero que seja executado
numeros.forEach(item=>document.write(`${item} <br>`))


//Inserindo um elemento ao final da lista
numeros.push(55)
document.write(`${numeros} <br>`)


//Inserindo valor no inicio da fila
numeros.unshift(5)
document.write(`${numeros} <br>`)


//Excluindo o ultimo elemento da lista
numeros.pop()
document.write(`${numeros} <br>`)


//Excluindo o primeiro elemento da lista
numeros.shift()
document.write(`${numeros} <br>`)


//MAP:função callback(devolve outro array) com mais uma execução de script
//Na função pego cada um dos elementos e multiplico por 2
let numerosDobrados = numeros.map(n => n * 2)


//Filter: é uma função de manipulação de array, que percorre a lista e encontra uma condição
let numerosdiv3 = numeros.filter(function(numero){
    return numero % 3 === 0
})
document.write(numerosdiv3)


//find: ele percorre uma lista, e no caso de achar um elemento desejado ele para imediatamente. Se achou, parou
let primeiroPar = numeros.find(function(numero){
    return numero % 2 === 0 
})
document.write(`${primeiroPar} <br>`)