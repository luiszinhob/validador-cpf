/** @jest-environment jsdom */

const { validarCPF } = require("./script")

test ('valida cpf',function(){
        var valido=validarCPF("03198776040")
        expect(valido).toBe(true)
})

test ('valida cpf',function(){
    var invalido=validarCPF("000.000.000-00")
    expect(invalido).toBe(false)
})