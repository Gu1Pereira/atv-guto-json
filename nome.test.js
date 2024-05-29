// require
const ValidarNome = require("./nome")

//criar caso de teste
test('Validação de nome com letras', ()=>{
    expect(ValidarNome("Guilherne")).toBe(true)
})
//caso de teste 11
test('Validação de letras com números',()=>{
    expect(ValidarNome("Gui10")).toBe(false)
})
