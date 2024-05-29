function somar(a,b){
    a = parseFloat(a)
    b = parseFloat(b)
    if((isFinite(a) == false) || (isFinite(b) == false)){
        return "Caractere inválido"
    }
    return a+b
}

module.exports = somar


// outra forma de resolver, porem, não é melhor que isFinite

// function somar(a, b) {
//     // Tenta converter os argumentos para números, se forem strings
//     if (typeof a === 'string') {
//         a = Number(a);
//     }
//     if (typeof b === 'string') {
//         b = Number(b);
//     }

//     // Verifica se a conversão resultou em números válidos
//     if (isNaN(a) || isNaN(b)) {
//         return "Caractere inválido";
//     }
    
//     return a + b;
// }

// module.exports = somar;

/*
- Usamos (isNaN) para verificar se 'a' ou 'b' se tornaram NaN (Not a Number) após a tentativa de conversão.
- Se qualquer um deles for NaN, retornamos a mensagem "Caractere inválido".

- Se ambos os argumentos são números válidos, retornamos a soma de 'a' e 'b'.

*/ 