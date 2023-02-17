function contar()
{
var start = document.getElementById('start')
var fim = document.getElementById('fim')
var pas = document.getElementById('pas')
var res = document.getElementById('res')

var s = Number(start.value)
var f = Number(fim.value)
var p = Number(pas.value)
var soma = s

while(s < f)
{
    s = s + p
    soma += ` 👉${s} `
    res.innerHTML = `Contando: \n ${soma}🚩`
    
}


}