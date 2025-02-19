//Funções: Bloco de codigo que pode ser reutilisavel,sendo chamada quantas vezes forem necessarias

function saudarAlunos(){
    alert("Hellow class")
}

function somar(a = 0, b = 0, c = 0){
    return a + b + c 
}

//Função anonima: quando temos poucas ou nenhuma chance de te-la e chamar mais de uma vez

const subtrair = function(n1,n2){
    return n1 - n2
}

//Arrow Function: fazer um codigo mais compacto para trazer o mesmo resultado
//Ele obrigatoriamente tem um unico retorno, e basicamente uma linha de codigo

const dividir = (a, b) => a/b

saudarAlunos()
somar(10,30)
document.write(`O resultado da some é ${somar}`)
subtrair(20,10)
dividir(10,20)