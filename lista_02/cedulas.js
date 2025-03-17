const calcularCedulas = (valor) => {
    const cedulas = {
        "R$200": 0, "R$100": 0, "R$50": 0, "R$20": 0, 
        "R$10": 0, "R$5": 0, "R$1": 0
    };

    [200, 100, 50, 20, 10, 5, 1].forEach(denominacao => {
        cedulas[`R$${denominacao}`] = Math.floor(valor / denominacao);
        valor %= denominacao;
    });

    return cedulas;
};

document.write(calcularCedulas(576)); 