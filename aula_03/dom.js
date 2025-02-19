let h1 = window.document.getElementsByTagName('h1')[0]
h1.style.color="blue"

let body = window.document.body
body.style.background = "black"

function mudarCor(){
    let div = document.getElementById("teste")

    if(div.style.backgroundColor == 'blueviolet'){
        div.style.backgroundColor = 'blue'
    }else{
        div.style.backgroundColor = 'blueviolet'
    }
}

let box = document.querySelector(".box")
box.style.backgroundColor = "green"
box.style.width = "800px"