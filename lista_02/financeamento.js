const simularFinanciamento = (valor, numeroDeParcelas, taxaDeJuros) => {
    const prestacao = (valor * (1 + taxaDeJuros)) / numeroDeParcelas;
    return prestacao.toFixed(2);
};

console.log(simularFinanciamento(10000, 12, 0.02)); 