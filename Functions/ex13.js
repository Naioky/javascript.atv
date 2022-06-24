// Seu código vem aqui
function gerarDezenas(){
    var number = []
    for (i=0; i < 6; i++)
    {
       number [i] = Math.round(Math.random()*60)
    }
    return number
}