const somar = require("./somar")

//caso 1 soma de dois números inteiros
test('somar 3 e 5 é igual a 8', ()=>{
    expect(somar(3,5)).toBe(8)
})
// caso 2 soma de dois números negativos
test('somar -3 e -5 é igual a -8',()=>{
    expect(somar(-3,-5)).toBe(-8)
})
// caso 3 soma de um número positivo e um número negativo
test('somar 7 e -2 é igual a 5', ()=>{
    expect(somar(7,-2)).toBe(5)
})
// caso 4 soma de zero com outro número
test('somar 0 e 9 é igual a 9',()=>{
    expect(somar(0,9)).toBe(9)
})
// caso 5 soma de dois números decimais
test('somar 2.5 e 3.1 é igual a 5.6',()=>{
    expect(somar(2.5,3.1)).toBe(5.6)
})
// caso 6 soma de um número inteiro e um número decimal
test('somar 4 e 2.5 é igual a 6.5',()=>{
    expect(somar(4,2.5)).toBe(6.5)
})
// caso 7 verificação de entrada invalida
test("soma de 'A' e 3 é igual a Caractere inválido",()=>{
    expect(somar("A",3)).toBe("Caractere inválido")
})
// caso 8 soma de grandes número
test('soma 999999999 e 999999999',()=>{
    expect(somar(999999999,999999999)).toBe(1999999998)
})
// caso 9 soma de dois numeros inteiros 
test('soma de "1" e "2" igual a 3',()=>{
    expect(somar("1","2")).toBe(3)
})