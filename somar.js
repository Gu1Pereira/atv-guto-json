function somar(a,b){
    if((typeof a != 'number') || (typeof b != 'number')){
        return "Caractere inválido"
    }
    return a+b
}

module.exports = somar
