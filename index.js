var Leonardo = document.getElementById('Leonardo')
var Samantha = document.getElementById('Samantha')
var Bruna = document.getElementById('Bruna')
var setaEsquerda = document.getElementById('seta-esquerda')
var setaDireita = document.getElementById('seta-direita')

function rolarParaDireita(){
    Bruna.style = 'display: none'
    Samantha.style = 'display: flex; padding-left: 0px; magin-left: 0px;'
    Leonardo.style = 'margin-right: 0px; margin-left: 10px'
    setaDireita.style = 'display: none'
    setaEsquerda.style = 'display: flex; margin-top:80px; margin-left:100px;'
}

function rolarParaEsquerda(){
    Samantha.style = 'display: none'
    Bruna.style = 'display: flex'
    setaEsquerda.style = 'display: none'
    setaDireita.style = 'display: flex; margin-top:55px'
}
