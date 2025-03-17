const calcularJurosCompostos = (capitalInicial, taxaDeJuros, tempo) => {
    return capitalInicial * Math.pow((1 + taxaDeJuros), tempo);
};

document.write(calcularJurosCompostos(1000, 0.05, 12)); 
