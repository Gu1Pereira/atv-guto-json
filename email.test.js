const ValidarEmail = require("./email")
 
test('Validação de e-mails com a utilização de @gmail.com',()=>{
    expect(ValidarEmail("foo.bar@gmail.com")).toBe(true)
})
 
test('Validação de e-mails com a adição de .br',()=>{
    expect(ValidarEmail("foo.bar@gmail.com.br")).toBe(true)
})
 
test('Validação de e-mails com o adicional de dois .br',()=>{
    expect(ValidarEmail("foo.bar@gmail.com.br.br")).toBe(false)
})
 
 
test('Validação de e-mails sem a colocação do domínio .com',()=>{
    expect(ValidarEmail("foo.bar@gmail")).toBe(false)
})
 
test(': Validação de e-mails sem a adição do ponto para conclusão do dominio',()=>{
    expect(ValidarEmail("foo.bar@gmailcom")).toBe(false)
})
 
test('Verificação do e-mail com a adição do ponto no lugar do @',()=>{
    expect(ValidarEmail("foo.bargmail.com")).toBe(false)
})
 
test('Verificação do e-mail sem a identificação inicial',()=>{
    expect(ValidarEmail("@gmail.com")).toBe(false)
})