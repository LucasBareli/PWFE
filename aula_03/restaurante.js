function calcularTotal() {
    let precoPrato = parseFloat(document.getElementById('prato').value);
    let quantidade = parseInt(document.getElementById('quantidade').value); 

    if (precoPrato === 0) {
        document.getElementById('resultado').textContent = 'Informe um prato'; 
    } else if (quantidade < 1) {
        document.getElementById('resultado').textContent = 'Informe uma quantidade válida'; 
    } else {
        let total = precoPrato * quantidade;
        document.getElementById('resultado').textContent = "Total a pagar é R$" + total.toFixed(2); 
    }
}
