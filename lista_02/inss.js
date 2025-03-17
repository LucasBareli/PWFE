const calcularINSS = (salario) => {
    if (salario <= 1100) return salario * 0.075;
    if (salario <= 2203.48) return salario * 0.09;
    if (salario <= 3305.22) return salario * 0.12;
    if (salario <= 6433.57) return salario * 0.14;
    return 6433.57 * 0.14;
};

document.write(calcularINSS(3000));